# Security

## Secrets
- `.env` не коммитится.
- AI agent не читает `.env`.
- в документации только placeholders.
- server-only secrets не попадают в client bundle.

## Admin
- защищать все `/admin` routes;
- role authorization проверять на сервере;
- скрытие кнопки не считается authorization;
- rate limit для login и чувствительных mutation routes.

## Content
Rich text проходит schema validation и safe rendering.
Не доверять raw HTML от editor/client.

## Upload
Проверять MIME, extension, size, image dimensions и filename normalization.

## Database
- parameterized queries;
- migrations через version control;
- production DB user без лишних прав;
- backup policy.

## Headers
Рассмотреть CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

## Dependencies
Перед добавлением dependency проверить поддержку, license и необходимость.

## AI coding
Запрещено:
- вставлять ключи из shell output;
- коммитить `.env.local`;
- копировать prod data в tests;
- отключать проверки, чтобы build стал зеленым.
