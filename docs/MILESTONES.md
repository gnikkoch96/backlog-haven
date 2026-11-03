# Backlog Haven - Development Milestones

Work should proceed one milestone and one manageable task at a time. This sequence may change as designs and technical decisions become clearer; a milestone's status does not imply that all work in that area is implemented.

| Milestone | Focus | Current status |
| --- | --- | --- |
| M0 - Requirements and MVP Scope | Define the gaming-only MVP and record deferred features and open decisions. | **Substantially complete** |
| M1 - UI Design | Refine mobile Home, other MVP pages, and desktop layouts; test provisional design choices. | **In progress** - Home direction established; remaining pages and responsive refinements are pending |
| M2 - Frontend Foundation | Establish the frontend structure, navigation, shared UI patterns, and responsive foundations. | **In progress** - React/Vite app structure, Header, Home foundation, Tailwind tokens, and initial responsive layout are implemented |
| M3 - Database Design | Design the PostgreSQL schema and relationships, including platform and system/device. | **Not started** |
| M4 - Backend Foundation | Establish the API, database access, and basic backend structure. | **Not started** |
| M5 - Full-Stack Integration | Connect the frontend, backend, and database. | **Not started** |
| M6 - Game Management | Build the personal collection and game create, edit, remove, browse, and tracking flows. | **Not started** |
| M7 - Game Metadata Integration | Research and integrate the chosen external game metadata API while keeping manual entry available. | **Not started** |
| M8 - Data Migration | Optionally plan Excel or Backloggd import after core flows are stable. | **Optional/deferred; not started** |
| M9 - Testing and Deployment | Test core flows, accessibility, and responsive behavior; prepare and deploy the application. | **Not started** |

## Technology direction and setup status

The configured frontend stack is **React, TypeScript, Vite, and Tailwind CSS v4**. **Lucide React** is installed for icons, and **Inter** is configured through Fontsource. Initial color, status, and typography design tokens are established in `src/index.css`.

React Router, Node.js, Express, PostgreSQL, SQL using `pg`, Vitest, and React Testing Library remain planned tools rather than completed setup. PostgreSQL is part of the MVP requirement; its hosting provider is undecided.

The external game metadata API and hosting providers have not been selected. Earlier options included RAWG or IGDB for metadata, Netlify for the frontend, Render for the backend, and Supabase for PostgreSQL; these remain options to evaluate, not commitments. A subdomain of the existing portfolio, such as `tracker.nikkochandev.com`, is a possible address, with no additional paid domain planned. Free-tier availability and service terms should be verified before selection.

## Current Home progress

- **Implemented:** Header foundation with branding, search icon, and profile placeholder.
- **Implemented:** Dynamic time-based greeting and supporting subtitle.
- **Implemented:** Gaming Stats UI with Completed, Abandoned, and completion-rate values plus an All Time / Current Year toggle.
- **Implemented:** Currently Playing carousel using mock data, cover artwork, title, platform, genre, blurred background artwork, and navigation controls.
- **Pending:** Connect statistics and period filtering to backend data; the current values are local mock data.
- **Pending:** Recent Completions, bottom navigation, floating Add Game functionality, responsive refinements, and the remaining Home interactions.

The Home page is therefore in progress, not complete. Backend integration and real statistics have not yet been implemented.

## Development approach

The developer aims to strengthen independent software engineering skills and primarily implement features personally, including practicing SQL schema design and queries. AI should serve as a mentor, technical advisor, debugger, and code reviewer rather than automatically implementing entire features. Plan before coding, use wireframes for major UI work, favor understanding and incremental progress, avoid unnecessary complexity, and maintain meaningful Git commits.

See [FEATURES.md](../FEATURES.md) for scope and [UI_DESIGN.md](UI_DESIGN.md) for current design decisions.
