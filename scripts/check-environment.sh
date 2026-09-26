#!/usr/bin/env bash
set -u

check_cmd() {
  local cmd="$1"
  if command -v "$cmd" >/dev/null 2>&1; then
    printf "[ok] %-12s %s\n" "$cmd" "$(command -v "$cmd")"
  else
    printf "[missing] %s\n" "$cmd"
  fi
}

check_cmd git
check_cmd node
check_cmd npm
check_cmd psql
check_cmd pg_isready

if command -v node >/dev/null 2>&1; then node --version; fi
if command -v npm >/dev/null 2>&1; then npm --version; fi
if command -v psql >/dev/null 2>&1; then psql --version; fi
if command -v pg_isready >/dev/null 2>&1; then pg_isready || true; fi

if [ -f .env.local ]; then
  echo "[ok] .env.local exists (contents intentionally not read)"
else
  echo "[info] .env.local is missing; copy .env.example manually"
fi
