# Campus Lunch - Project Brief

## Project Overview
**Campus Lunch** is a lightweight, mobile-responsive web application that allows students, faculty, and campus visitors to view daily cafeteria lunch menus, meal details, dietary indicators, and pricing.

---

## Phase 1 Specifications

### 1. Scope
- Display Monday's three lunch meal options.
- Present each meal with:
  - **Meal Name** (English and Korean)
  - **Description** (Ingredients, preparation, and side dishes)
  - **Price in KRW** (Formatted clearly, e.g., ₩5,500)
  - **Vegetarian Label** (Clear dietary badge for quick identification)
- No interactive filter controls in this initial release.

### 2. Design Guidelines
- **Color Palette**: Minimalist aesthetic with a clean white background (`#ffffff`), crisp black text (`#111111`), and subtle gray card borders (`#e5e7eb`).
- **Cards**: Thin gray borders, generous padding, and clear visual hierarchy.
- **Mobile First**: Fully responsive layout designed for easy reading on smartphones as well as desktop screens.

### 3. Technical Requirements
- Native web standards: HTML5, CSS3, vanilla JavaScript.
- Direct execution: Must function seamlessly when opened directly in a browser via the `file:///` protocol (e.g., double-clicking `index.html`).
- Extensible data layer: Menu items stored in `menu-data.json` with an embedded fallback in `app.js` to ensure zero CORS blocking when opened directly.
