# Frontend Development Rules for Portfolio Revamp

## 1. Technical Stack
- **Framework**: React 18+ (Vite)
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS (TailwindCSS should only be used if explicitly requested later). Use CSS Modules for component-level styling to avoid global conflicts.
- **Animations**: Framer Motion for all transitions and interactions.
- **Data Flow**: Use a central `src/config/portfolio.json` for all content. Components should be data-driven.

## 2. Design System
- **Aesthetic**: Minimalist & Premium. High use of whitespace, refined typography (Inter or Outfit), and subtle shadows/gradients.
- **Color Palette**: 
    - *Primary*: Deep Charcoal (#1A1A1A)
    - *Secondary*: Soft Off-White (#F9F9F9)
    - *Accent*: Slate Blue (#4A90E2) or Emerald (#2ECC71) for highlights.
- **Typography**: 
    - Headings: Bold, clean, letter-spacing -0.02em.
    - Body: Readable, line-height 1.6, weight 400.

## 3. Component Architecture
- **Modularity**: Components must be small, reusable, and single-purpose.
- **Prop-driven**: Components should receive data via props, sourced from the `config.json`.
- **Directory Structure**:
    - `src/components/`: UI components (Button, Card, Section).
    - `src/features/`: Feature-specific logic (Timeline, ProjectGrid).
    - `src/layout/`: Global layout (Navbar, Footer).
    - `src/styles/`: Global variables and utility classes.

## 4. UI/UX Rules
- **Animations**: 
    - Use `AnimatePresence` for exit animations.
    - Staggered reveals for lists (projects, timeline).
    - Hover effects should be subtle (e.g., scale 1.02, slight shadow increase).
- **Personalization**: Always leave space for photos and personal anecdotes. Use placeholders if specific photos aren't provided yet.
- **Responsiveness**: Mobile-first approach. Ensure the layout gracefully degrades on smaller screens.

## 5. Deployment
- **Platform**: GitHub Pages.
- **Base Path**: Ensure `vite.config.js` has the correct `base` property for the repo name.
- **Assets**: All images/videos should be stored in `public/assets/`.

## 6. Code Style
- **Naming**: PascalCase for components, camelCase for variables/functions.
- **Documentation**: Comment complex logic and maintain `docs/about.md` with every major change.
