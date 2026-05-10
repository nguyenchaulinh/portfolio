## Colors

Primary background is a deep, rich slate (`#0a0f1c`) rather than a noisy blue. Text is high-contrast off-white (`#fcfcfd`) with secondary text as a muted slate (`#a3b8cc`). The accent is a sophisticated, understated gold/sand (`#e5c185`).

- `surface`: `#0a0f1c` (Main background)
- `surface-elevated`: `#131b2f` (For subtle separation)
- `ink`: `#fcfcfd` (Primary text)
- `ink-soft`: `#a3b8cc` (Secondary text)
- `accent`: `#e5c185` (Primary interactive/emphasis)
- `accent-soft`: `rgba(229, 193, 133, 0.15)` (Subtle backgrounds for emphasis)

## Typography

Headings use **Outfit**, a clean geometric sans with enough character to stand out but not overused like Inter or Space Grotesk. Body uses **DM Sans**, which provides excellent readability at small sizes. Monospace accents use **Space Mono**.

## Elevation

Shadows are strictly minimal. We do not use heavy "comic-shadow" drops. Instead, we use a single, very soft ambient shadow `0 8px 30px rgba(0, 0, 0, 0.2)` only when absolutely necessary (e.g., sticky headers or modals). Layouts primarily rely on structural lines and whitespace for separation.

## Components

**Buttons**: Solid accent color or ghost buttons with a refined border. No multi-stop gradients on buttons.
**Cards**: Avoid heavy borders and nested structures. Use `surface-elevated` or subtle 1px borders `rgba(255,255,255,0.08)` to delineate content areas without boxing them in.

## Dos and Don'ts

- **DO** use whitespace generously to separate sections.
- **DO** use crisp, high-contrast typography.
- **DON'T** use `blur-3xl` gradient blobs behind content.
- **DON'T** use Hero Eyebrow Chips (the small pill labels above H1s).
- **DON'T** nest cards within cards.
