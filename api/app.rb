# frozen_string_literal: true

require 'sinatra'
require 'sinatra/contrib'
require 'rack/cors'
require 'mail'
require 'json'

# Configure permitted hosts for Rack::Protection::HostAuthorization
configure :development do
  set :host_authorization, { permitted_hosts: [] }
end

configure :production do
  set :host_authorization, { permitted_hosts: ENV.fetch('PERMITTED_HOSTS', '').split(',').map(&:strip).reject(&:empty?) }
end

# CORS configuration
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:post, :options]
  end
end

# Mail configuration for Zoho SMTP
Mail.defaults do
  delivery_method :smtp, {
    address: ENV.fetch('ZOHO_SMTP_HOST', 'smtp.zoho.eu'),
    port: ENV.fetch('ZOHO_SMTP_PORT', 465).to_i,
    user_name: ENV['ZOHO_SMTP_USER'],
    password: ENV['ZOHO_SMTP_PASSWORD'],
    authentication: :login,
    ssl: true
  }
end

set :bind, '0.0.0.0'
set :port, 3001

# Health check
get '/api/health' do
  json success: true, status: 'ok'
end

# Handle preflight
options '/api/email' do
  204
end

# Send email endpoint
post '/api/email' do
  content_type :json

  begin
    data = JSON.parse(request.body.read)

    name = data['name']&.strip
    email = data['email']&.strip
    company = data['company']&.strip
    message = data['message']&.strip

    # Validate required fields
    if [name, email, message].any? { it.nil? || it.empty? }
      halt 400, json(error: 'Missing required fields: name, email, and message are required')
    end

    # Basic email validation
    unless email =~ /\A[^\s@]+@[^\s@]+\.[^\s@]+\z/
      halt 400, json(error: 'Invalid email format')
    end

    contact_email = ENV.fetch('CONTACT_EMAIL')

    mail = Mail.new do
      from ENV['ZOHO_SMTP_USER']
      to contact_email
      reply_to email
      subject "Form submission"

      html_part do
        content_type 'text/html; charset=UTF-8'
        body <<~HTML
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">#{escape_html(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:#{escape_html(email)}">#{escape_html(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
              <td style="padding: 10px; border: 1px solid #ddd;">#{company && !company.empty? ? escape_html(company) : 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">#{escape_html(message)}</td>
            </tr>
          </table>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Sakai Intelligence contact form.
          </p>
        HTML
      end

      text_part do
        body <<~TEXT
          New Contact Form Submission

          Name: #{name}
          Email: #{email}
          Company: #{company && !company.empty? ? company : 'N/A'}

          Message:
          #{message}

          ---
          This email was sent from the Sakai Intelligence contact form.
        TEXT
      end
    end

    mail.deliver!

    puts "Email sent successfully to #{contact_email}"
    json success: true, message: 'Email sent successfully'

  rescue JSON::ParserError
    halt 400, json(error: 'Invalid JSON')
  rescue StandardError => e
    puts "Error sending email: #{e.message}"
    puts e.backtrace.join("\n")
    halt 500, json(error: 'Failed to send email. Please try again later.')
  end
end

def escape_html(text)
  text.to_s
    .gsub('&', '&amp;')
    .gsub('<', '&lt;')
    .gsub('>', '&gt;')
    .gsub('"', '&quot;')
    .gsub("'", '&#39;')
end
