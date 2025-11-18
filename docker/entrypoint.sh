#!/usr/bin/env bash
set -e

if [ ! -d node_modules ] || [ ! -f node_modules/.installed ]; then
  echo "Installing node_modules inside container volume..."
  if [ -f package-lock.json ]; then
    npm ci
  else
    npm install
  fi
  mkdir -p node_modules && touch node_modules/.installed
fi

exec npm run dev -- --host 0.0.0.0 --port 8080
