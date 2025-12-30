const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
  context.log('Contact form submission received');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
    return;
  }

  try {
    const { name, email, company, message } = req.body || {};

    // Validate required fields
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedCompany = company?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      context.res = {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        body: { error: 'Missing required fields: name, email, and message are required' },
      };
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      context.res = {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
        body: { error: 'Invalid email format' },
      };
      return;
    }

    // Create Zoho SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: parseInt(process.env.ZOHO_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASSWORD,
      },
    });

    const contactEmail = process.env.CONTACT_EMAIL;

    // Email content
    const mailOptions = {
      from: process.env.ZOHO_SMTP_USER,
      to: contactEmail,
      replyTo: trimmedEmail,
      subject: `Form submission`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${trimmedCompany || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This email was sent from the Sakai Intelligence contact form.
        </p>
      `,
      text: `
New Contact Form Submission

Name: ${trimmedName}
Email: ${trimmedEmail}
Company: ${trimmedCompany || 'N/A'}

Message:
${trimmedMessage}

---
This email was sent from the Sakai Intelligence contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    context.log(`Email sent successfully to ${contactEmail}`);

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: { success: true, message: 'Email sent successfully' },
    };
  } catch (error) {
    context.log.error('Error sending email:', error);

    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: { error: 'Failed to send email. Please try again later.' },
    };
  }
};

function escapeHtml(text) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return String(text).replace(/[&<>"']/g, (char) => htmlEntities[char]);
}
