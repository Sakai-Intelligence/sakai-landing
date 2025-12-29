FROM ruby:4-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock* ./
RUN bundle install

COPY . .

EXPOSE 3001

CMD ["bundle", "exec", "puma", "-p", "3001", "-b", "tcp://0.0.0.0"]
