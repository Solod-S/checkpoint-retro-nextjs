# Performance

## Public bundle
Server Components by default. Client JS добавлять только для interactive islands.

## Images
- correct width/height;
- `sizes`;
- card-specific dimensions;
- no eager loading outside LCP.

## Queries
- pagination;
- select only fields used;
- indexes;
- avoid N+1;
- measure slow queries.

## Fonts
Использовать controlled font loading. Не подключать множество weights.

## Effects
Scanlines/noise должны быть CSS/SVG-lightweight и не вызывать expensive repaints.

## Targets
Цель — устойчивые хорошие Core Web Vitals на типичных editorial pages, а не synthetic score любой ценой.
