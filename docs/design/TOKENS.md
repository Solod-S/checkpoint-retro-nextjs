# Design Tokens

## Colors
```css
--color-bg: #071012;
--color-bg-deep: #04090a;
--color-surface: #0a1518;
--color-surface-2: #0d1c20;
--color-border: #536066;
--color-border-soft: #26363b;
--color-text: #f1efe6;
--color-text-muted: #a8b0ad;
--color-orange: #ff5a1f;
--color-lime: #b7ff3c;
--color-yellow: #f4df19;
--color-blue: #27b7ff;
--color-red: #ff3b25;
```

Компоненты используют semantic aliases, а не raw values.

## Semantic aliases
```css
--background-page
--background-panel
--background-elevated
--border-default
--border-muted
--text-primary
--text-secondary
--accent-action
--accent-active
--accent-warning
--accent-info
--accent-danger
```

## Spacing
4px rhythm:
```text
1=4  2=8  3=12  4=16  5=20  6=24
8=32  10=40  12=48  16=64  20=80
```

## Radius
```text
xs = 2px
sm = 4px
md = 8px
```

## Type scale
```text
xs 12
sm 14
base 16
lg 18
xl 22
2xl 28
3xl 36
4xl 48
display clamp(40px, 6vw, 80px)
```

## Layout
```text
content-max: 1440px
reading-max: 760px
sidebar: 260px
header-desktop: ~72px
```

## Motion
```text
fast: 120ms
normal: 180ms
slow: 280ms
ease: cubic-bezier(.2,.8,.2,1)
```

Не использовать случайные `z-index: 99999`.
