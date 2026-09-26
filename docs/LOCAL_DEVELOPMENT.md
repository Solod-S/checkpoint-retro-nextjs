# Local Development

## Required software
- Git
- Node.js 22+
- npm
- PostgreSQL 16+

The application must run directly on the host OS.

## macOS — PostgreSQL with Homebrew
Install a supported PostgreSQL formula. Example:

```bash
brew install postgresql@17
brew services start postgresql@17
```

If that exact formula is unavailable, inspect available versions:

```bash
brew search postgresql@
```

Check:

```bash
psql --version
pg_isready
```

Create an application role and database:

```bash
createuser -P checkpoint_retro
createdb -O checkpoint_retro checkpoint_retro
```

`createuser -P` asks for a password interactively. Do not put the real password in Git or project documentation.

## Ubuntu / Debian local machine

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl enable --now postgresql
```

Create user and database:

```bash
sudo -u postgres createuser -P checkpoint_retro
sudo -u postgres createdb -O checkpoint_retro checkpoint_retro
```

## Environment file
Copy:

```bash
cp .env.example .env.local
```

Then edit `.env.local` manually and replace placeholders.

Example structure:

```env
DATABASE_URL="postgresql://checkpoint_retro:LOCAL_DB_PASSWORD@127.0.0.1:5432/checkpoint_retro?schema=public"
SITE_URL="http://localhost:3000"
AUTH_SECRET="LOCAL_AUTH_SECRET"
```

The AI agent may read `.env.example`, but must not read `.env.local` or print its values.

Generate an auth secret locally when auth is implemented, for example:

```bash
openssl rand -base64 32
```

## Install application

```bash
npm install
npm run db:generate
```

Before the first migration, review `prisma/schema.prisma` against `docs/DATABASE.md`.

Then:

```bash
npm run db:migrate -- --name init
npm run db:seed
npm run dev
```

Open:

```text
http://localhost:3000
```

## Database utilities

Check PostgreSQL:

```bash
pg_isready
```

Connect:

```bash
psql -h 127.0.0.1 -U checkpoint_retro -d checkpoint_retro
```

Prisma Studio:

```bash
npm run db:studio
```

## Never run casually

```text
prisma migrate reset
DROP DATABASE
DROP SCHEMA
TRUNCATE
```

Destructive DB operations require explicit human approval.
