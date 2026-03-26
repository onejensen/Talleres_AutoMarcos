# Design System Document

## 1. Overview & Creative North Star: "The Precision Engineer"

This design system is built to transform a traditional automotive service into a high-end, editorial-grade digital experience. We are moving away from the "greasy garage" cliché and toward a "Precision Lab" aesthetic. 

**The Creative North Star: "The Precision Engineer"**
The system celebrates the mechanical beauty of high-performance engineering. We achieve this through a "Tech-Noir" atmosphere: deep monochromatic canvases, surgically sharp typography, and high-energy pulses of red. The layout breaks the traditional rigid grid by using intentional asymmetry and overlapping elements—mimicking the layered complexity of a modern engine—to create a sense of speed and forward momentum.

---

## 2. Colors: Tonal Depth & Kinetic Energy

Our palette is rooted in the dark, heavy tones of a luxury garage, punctuated by a high-octane red.

### Primary Palette
- **Primary (`#e01d1d`):** This is our "Active State" color. Use it for critical CTAs and high-impact highlights.
- **Secondary (`#06c85d`):** Reserved exclusively for trust-based interactions (WhatsApp, success states, and safety guarantees).
- **Surface/Background (`#131313`):** The foundation. Everything sits on this deep charcoal to ensure maximum contrast.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To define boundaries, use **Tonal Shifts**. Transition from `surface` to `surface-container-low` or `surface-container-high` to delineate content blocks. This creates a more sophisticated, architectural feel than a "boxed-in" template.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of carbon-fiber sheets:
- **Base Level:** `surface` (#131313)
- **Primary Containers:** `surface-container` (#201f1f) for main cards.
- **Elevated Items:** `surface-container-highest` (#353534) for items requiring immediate focus.

### The "Glass & Gradient" Rule
To add "soul," use subtle linear gradients on Primary CTAs—transitioning from `primary` to `primary_container` at a 135-degree angle. For floating navigation or overlays, implement **Glassmorphism**: use `surface` at 70% opacity with a `20px` backdrop-blur to allow the background textures to bleed through.

---

## 3. Typography: Editorial Authority

We use a mix of **Space Grotesk** (Display/Headlines) for its technical, wide-set proportions and **Inter** (Body/Labels) for its Swiss-style clarity.

- **Display-LG (3.5rem):** Used for "Hero" headlines. Use tight letter-spacing (-0.02em) and uppercase transform to convey power.
- **Headline-MD (1.75rem):** Used for service titles. These should feel like headers in a premium automotive magazine.
- **Body-LG (1rem):** Our workhorse. High line-height (1.6) is required to maintain readability against dark backgrounds.
- **Label-SM (0.6875rem):** Used for technical specs or "Overlines" (the small text above headlines). Always use `tracking-widest` (all-caps) for these.

---

## 4. Elevation & Depth: The Layering Principle

Forget drop shadows that look like "glows." We use **Ambient Occlusion** to define depth.

- **Tonal Layering:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` section creates an "inset" look, suggesting precision machining.
- **Ambient Shadows:** If an element must float (like a modal), use a shadow tinted with the `on-surface` color at 6% opacity with a blur of `40px`. It should feel like a soft shadow cast by a studio light, not a computer-generated effect.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` at 15% opacity. It should be barely perceptible—a "whisper" of a line.
- **Precision Accents:** Use 2px vertical "racing stripes" of `primary` red on the left edge of active containers to guide the eye without adding bulk.

---

## 5. Components

### Buttons
- **Primary:** High-energy red (`primary_container`) with white text. Sharp corners (`rounded-sm`: 0.125rem) to maintain the "garage" edge. No rounded pills.
- **Secondary:** Outlined with a "Ghost Border." On hover, fill with a 5% white overlay.
- **Tertiary:** Text-only with a red underline that expands from the center on hover.

### Cards & Lists
- **Forbid Dividers:** Use `1.5rem` (Spacing-6) of vertical white space to separate list items.
- **Service Cards:** Use `surface-container-low`. On hover, shift the background to `surface-container-high` and slightly offset the icon.
- **Precision Indicators:** For stats (e.g., "5000+ Clients"), use `Display-SM` typography in white, with a small `primary` red square (4px x 4px) next to it as a "bullet."

### Input Fields
- **Styling:** Use `surface-container-lowest` as the fill. 
- **Focus State:** No thick glow. Instead, change the "Ghost Border" from 15% to 80% opacity and change the label color to `primary`.

### Navigation
- **Asymmetric Header:** Logo on the far left, navigation links clustered on the right, but separated by a single vertical "Precision Line" (Ghost Border) from the "Contact" CTA.

---

## 6. Do’s and Don'ts

### Do:
- **Use Intentional Asymmetry:** Let images bleed off the edge of the screen or overlap container boundaries to create a "custom-built" feel.
- **Embrace the Dark:** Keep 90% of the UI in the `surface` range. Use white/red sparingly to draw the eye to high-value actions.
- **Use High-Quality Textures:** Suggest a very subtle "noise" or "grain" overlay (3% opacity) on the background to mimic the texture of matte engine parts.

### Don’t:
- **Don’t use Rounded Corners:** Avoid `rounded-lg` or `rounded-full`. This system is about "Sharp, Clean, and Precise." Stick to `none` or `sm`.
- **Don’t use Standard Grids:** Avoid perfectly centered, symmetrical rows. Stagger your service descriptions to create visual rhythm.
- **Don’t use Pure Black:** Never use `#000000`. Use our `surface` (#131313) to ensure gradients and shadows remain visible.
- **Don't use Dividers:** Avoid horizontal lines between sections. Let the change in background tone do the heavy lifting.