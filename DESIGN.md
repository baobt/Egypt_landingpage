# Design System Strategy: The Gilded Bridge

## 1. Overview & Creative North Star
The trade corridor between Egypt and Vietnam is not merely a logistical route; it is a premium exchange of culture, flavor, and enterprise. Our Creative North Star for this design system is **"The Global Archivist."** 

This system moves away from the "busy" aesthetics of traditional trade portals. Instead, it adopts a high-end editorial approach—reminiscent of a luxury archival journal or a bespoke consulting firm. We break the "template" look through **intentional asymmetry**, where high-quality product imagery (Tahini, Spices) overlaps structural containers, and **tonal depth** replaces the clutter of lines and borders. The goal is to make the user feel they are entering a partnership, not just a transaction.

## 2. Colors & Surface Philosophy
This system is built on a foundation of "Rich Black" and "Deep Gold," but the sophistication lies in the transition between these tones.

### The "No-Line" Rule
Explicitly prohibit the use of 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
- **Background Color Shifts:** Placing a `surface_container_low` section against a `surface` background.
- **Tonal Transitions:** Using subtle shifts in the neutral scale to imply a change in content without the "boxiness" of traditional UI.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create depth:
- **Base Layer:** `surface` (#131313) for the main page background.
- **Mid Layer:** `surface_container_low` (#1c1b1b) for secondary sections or grouping related content.
- **Top Layer:** `surface_container_high` (#2a2a2a) for interactive cards or floating elements.

### The "Glass & Gradient" Rule
To elevate the gold accents from "yellow" to "premium metal," use a subtle linear gradient for main CTAs and highlights, transitioning from `primary` (#f2ca50) to `primary_container` (#d4af37). For floating navigation or overlays, apply **Glassmorphism**: use semi-transparent surface colors with a `backdrop-blur` of 12px-20px to allow the rich imagery to bleed through the UI subtly.

## 3. Typography: The Editorial Voice
Our typography pairing balances the ancient authority of Egypt and the modern dynamism of Vietnam.

- **Display & Headlines (Noto Serif):** Use `display-lg` and `display-md` to make bold, authoritative statements. The serif font provides a "historical" and "trustworthy" weight. Use `headline-sm` for section headers to maintain an editorial feel.
- **Body & Labels (Manrope):** Use `body-lg` for general reading. Manrope’s clean, geometric sans-serif nature provides the "international corporate" clarity required for business consulting and logistics details.
- **Hierarchy Tip:** Contrast a large `display-lg` headline in `on_surface` with a small, uppercase `label-md` in `primary` to create a signature high-fashion look.

## 4. Elevation & Depth
In this system, depth is organic, not artificial.

- **The Layering Principle:** Stack `surface_container_lowest` (#0e0e0e) cards on a `surface_container_low` (#1c1b1b) background to create a "recessed" look, or the inverse for a "lifted" look.
- **Ambient Shadows:** Standard shadows are banned. If a floating effect is required, use a shadow with a 40px-60px blur at 6% opacity, using a tinted version of the background color rather than pure black.
- **The "Ghost Border" Fallback:** If a container requires a boundary for accessibility (e.g., an input field), use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.

## 5. Components

### Buttons
- **Primary:** Gradient from `primary` to `primary_container`. Text in `on_primary`. Shape: `md` (0.375rem) roundedness for a sharp, professional look.
- **Secondary (The Ghost):** No fill. A "Ghost Border" using `primary` at 20% opacity. On hover, the fill becomes `primary` at 10% opacity.

### Cards & Product Showcases
- **Rules:** No dividers. Use `surface_container_highest` for the card body. 
- **Imagery:** Product images (Pasta, Spices) should be shot on dark backgrounds and use an asymmetrical "bleed" where the image exceeds the card boundary, creating a sense of scale.

### Input Fields
- **Styling:** Use `surface_container_lowest` for the field background. Labels should use `label-md` in `on_surface_variant`. 
- **States:** The focus state should not be a thick border, but a subtle glow using the `primary` color at a low opacity.

### Global Logistics Tracker (Custom Component)
- Use a minimalist horizontal line using `outline_variant` (10% opacity) with "Gilded nodes" (small `primary` circles) to represent the journey between Egypt and Vietnam.

## 6. Do's and Don'ts

### Do:
- **Use Intentional White Space:** Use the `20` (7rem) and `24` (8.5rem) spacing tokens between major sections to let the "premium" feel breathe.
- **Layer Imagery:** Allow high-quality photos of Middle Eastern spices to overlap with text blocks to break the grid.
- **Maintain High Contrast:** Ensure `primary` gold text always sits on `surface_container_lowest` or `surface_dim` for maximum legibility.

### Don't:
- **Don't use pure white:** All "white" text should be the `on_surface` (#e5e2e1) token to avoid a harsh, cheap digital look.
- **Don't use standard icons:** Use thin-stroke, custom-styled icons that match the `primary` gold color.
- **Don't use sharp corners:** While we want a corporate feel, use the `DEFAULT` (0.25rem) or `md` (0.375rem) roundedness to soften the interface and make it feel modern. 
- **Don't use Divider Lines:** If you feel the need to separate two pieces of content, use a background color shift or a `12` (4rem) spacing block instead.

---
