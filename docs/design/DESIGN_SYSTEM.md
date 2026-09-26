# Design System

## Character
Checkpoint Retro сочетает:
- современную editorial grid;
- индустриальную темную UI-базу;
- эстетику игровых журналов / CRT / аркад;
- яркие сигнальные акценты;
- грубые display headings;
- компактную mono metadata.

Это не neon cyberpunk и не generic gamer UI.

## Visual hierarchy
1. крупный editorial headline;
2. hero image;
3. orange action;
4. lime active/current states;
5. thin cool borders;
6. metadata;
7. декоративные CRT details.

## Color roles
- near-black background;
- blue/green-black surfaces;
- cool gray borders;
- warm off-white text;
- orange CTA;
- lime active;
- yellow highlights;
- blue info/platform;
- red danger/platform accent.

## Typography
### Display
Рекомендация: `Russo One` или близкий кириллический block display.

### Body
Рекомендация: `IBM Plex Sans Condensed`.

### Mono
Рекомендация: `IBM Plex Mono`.

Не хранить font binaries в blueprint.

## Shapes
- маленькие radius;
- cards почти квадратные;
- тонкие borders;
- decorative corner brackets;
- крупная orange CTA;
- no glassmorphism.

## Effects
Допустимо:
- subtle scanlines;
- noise/grain;
- slight glow на active elements;
- 1–2px hover movement;
- thin accent lines.

Недопустимо:
- тяжелый blur;
- бесконечные CRT distortions;
- мешающий чтению glitch;
- excessive animation.

## Image treatment
- dominant;
- high contrast;
- cinematic/retro;
- fixed aspect-ratio per component;
- crop через object-fit.

## Components
- `RetroFrame`
- `CornerBrackets`
- `SectionHeading`
- `RetroButton`
- `PlatformBadge`
- `HeroStory`
- `ContentCard`
- `BreakingStrip`
- `ArticleMeta`
- `FilterTabs`
- `SearchField`
- `Pagination`
- `Timeline`
- `NewsletterBanner`
- `SocialLinks`
