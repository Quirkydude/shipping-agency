# UI/UX Improvement Plan — Advanced Security Shipping & Logistics

## Current State
5 pages (Home, About, Services, Contact, Tracking) composed from 8 section components + 2 layout components. All styling is inline with fixed pixel values — zero responsive design, zero CSS media queries, zero animations.

## Phase 1: CSS Foundation (globals.css)
- Add CSS custom properties for breakpoints
- Add utility `.container` class (max-width: 1200px, centered)
- Add responsive grid classes (`.grid-2`, `.grid-3`, `.grid-4`) that collapse on breakpoints
- Add responsive typography using `clamp()`
- Add `:focus-visible` outlines for accessibility
- Add smooth transition defaults

## Phase 2: Header Mobile Menu (Header.tsx)
- Implement slide-in drawer navigation when hamburger is clicked
- Full-height overlay backdrop
- Nav links stacked vertically
- Close button + tap-outside-to-close
- Smooth slide animation

## Phase 3: Section Component Responsiveness
- **Hero.tsx** — viewport-relative height, fluid heading size, CTA stacking
- **About.tsx** — stack image above content on mobile, auto height
- **Stats.tsx** — 3→1 column responsive, count-up animation
- **Services.tsx** — 3→2→1 column responsive, card hover lift
- **Features.tsx** — stack content above image on mobile, auto height
- **Quote.tsx** — full-width inputs on mobile
- **Team.tsx** — 4→2→1 column responsive, hover overlay
- **Testimonials.tsx** — 3→1 column responsive, reduced avatar size

## Phase 4: Page-Level Responsiveness
- Consistent hero banner behavior across all pages
- Contact page: stack info + form vertically on mobile
- Tracking page: full-width search, responsive result card

## Phase 5: Polish & Micro-interactions
- Hover effects (card lift, button scale, image zoom)
- CSS transitions on all interactive elements
- Loading states / skeleton placeholders
- Accessibility: aria-labels, roles, focus trap on mobile menu

## Phase 6: Verification
- `npx tsc --noEmit` passes
- `npm run build` succeeds
