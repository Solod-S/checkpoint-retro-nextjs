# Media

## Storage abstraction
`MediaStorage` скрывает local filesystem и S3/R2-compatible storage.

## Image pipeline
При upload:
1. validate MIME/size;
2. decode image;
3. extract dimensions;
4. normalize file name/storage key;
5. сохранить original;
6. при необходимости derivatives;
7. записать metadata в DB.

## Editorial metadata
- alt per locale;
- caption per locale;
- credit;
- source URL;
- licensing note при необходимости.

## Usage
Перед удалением asset показать, где он используется.

## Public delivery
- responsive sizes;
- AVIF/WebP там, где поддерживается;
- LCP priority только для реального hero;
- cards не грузят original-size files.
