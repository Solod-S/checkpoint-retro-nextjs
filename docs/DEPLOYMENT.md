# Deployment — Ubuntu VPS

## Target production shape

```text
Internet
   ↓
Cloudflare (optional)
   ↓
Nginx :80/:443
   ↓
Next.js / Node.js :3000 (PM2)
   ↓
PostgreSQL on localhost/private network
```

Additional production services when needed:
- S3/R2-compatible object storage for media;
- error tracking;
- automated PostgreSQL backups;
- uptime monitoring.

## Recommended server baseline
- Ubuntu LTS
- Node.js 22 LTS or project-pinned compatible version
- npm
- PostgreSQL
- Nginx
- PM2
- Git
- Certbot if TLS is terminated directly on the VPS

## Linux user
Do not run the application as `root`.
Use a dedicated deployment user, for example `deploy`, with only required permissions.

## Suggested filesystem

```text
/var/www/checkpoint-retro/
├── current -> releases/<release>
├── releases/
└── shared/
    ├── .env
    └── uploads/        # only if local media storage is temporarily used
```

For production media, object storage is preferred over release-local files.

## PostgreSQL
Install:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl enable --now postgresql
```

Create a dedicated DB role and database. The application DB role should not be a PostgreSQL superuser.

Keep PostgreSQL bound to localhost/private network unless remote access is explicitly required and firewalled.

## Environment
Production secrets live outside Git, for example:

```text
/var/www/checkpoint-retro/shared/.env
```

Do not print the file in AI-agent logs or paste it into prompts.

Typical production variables:

```env
NODE_ENV="production"
PORT="3000"
DATABASE_URL="postgresql://..."
SITE_URL="https://example.com"
AUTH_SECRET="..."
MEDIA_STORAGE_DRIVER="s3"
MEDIA_STORAGE_BUCKET="..."
MEDIA_STORAGE_ENDPOINT="..."
MEDIA_STORAGE_REGION="auto"
MEDIA_STORAGE_ACCESS_KEY="..."
MEDIA_STORAGE_SECRET_KEY="..."
```

## Release flow
1. fetch/checkout reviewed commit;
2. `npm ci`;
3. `npm run lint`;
4. `npm run typecheck`;
5. `npm test`;
6. `npm run build`;
7. back up DB before risky migrations;
8. `npm run db:deploy`;
9. switch/update release;
10. restart/reload PM2;
11. healthcheck;
12. smoke test public + admin routes;
13. monitor logs/errors.

## PM2
The starter includes `ecosystem.config.cjs`.

Typical first start:

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Run the command printed by `pm2 startup`, then `pm2 save` again.

Useful commands:

```bash
pm2 status
pm2 logs checkpoint-retro
pm2 restart checkpoint-retro
pm2 reload checkpoint-retro
```

## Nginx
An example config is included in `STARTER/deploy/nginx/checkpoint-retro.conf.example`.

Nginx proxies public traffic to `127.0.0.1:3000`.

Before enabling:
- replace domain;
- verify upstream port;
- test config with `sudo nginx -t`;
- reload only after a successful test.

## TLS
If the VPS terminates TLS directly, Certbot can manage certificates.
If Cloudflare terminates/proxies traffic, still use an appropriate origin certificate/TLS configuration.

## Database migrations
Production uses:

```bash
npm run db:deploy
```

Do not use development reset flows in production.

## Backups
At minimum:
- automated PostgreSQL dumps/base backups;
- retention policy;
- off-server copy;
- periodic restore test;
- object storage versioning/backups if media is external.

## Rollback
Keep several previous application releases.
Document migration compatibility before switching back to an older application version.

Application rollback and database rollback are separate concerns; do not assume every schema migration is safely reversible.
