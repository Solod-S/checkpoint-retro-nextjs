# Deployment

## Recommended production shape
- Next.js application
- PostgreSQL
- S3/R2-compatible object storage
- reverse proxy / managed platform
- TLS
- backups
- error tracking

## Environment classes
- local
- staging
- production

Production DB не используется для local development.

## Release flow
1. install frozen dependencies;
2. lint;
3. typecheck;
4. tests;
5. build;
6. database migration;
7. deploy;
8. healthcheck;
9. smoke test;
10. monitor errors.

## DB migrations
Production:
- только reviewed migration;
- backup перед рискованными schema changes;
- не использовать reset.

## Backups
- automated PostgreSQL backups;
- restore test;
- object storage backup/versioning;
- documented retention.

## Rollback
Документировать rollback application version и migration compatibility.
