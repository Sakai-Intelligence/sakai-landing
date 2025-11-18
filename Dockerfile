FROM node:20-bullseye
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
RUN npm config set fetch-retry-maxtimeout 600000 \
  && npm config set fetch-timeout 600000 \
  && npm config set fund false \
  && npm config set audit false
COPY package*.json ./
COPY . .
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
EXPOSE 8080
ENTRYPOINT ["/entrypoint.sh"]
