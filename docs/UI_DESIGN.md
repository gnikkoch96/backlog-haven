# Backlog Haven — UI Design

## Direction and status

**Confirmed:** Design mobile-first, with both mobile and desktop layouts. Aim for a modern, cozy gaming environment: a dark theme, subtle nighttime imagery, prominent cover artwork, clear navigation, and readable, accessible controls.

**Provisional:** The mobile Home mockup has been drafted and provisionally accepted. It is neither finalized nor implemented. Its look, usability, and section order will be evaluated during implementation. Collection, History, Game Details, Add Game, and desktop layouts still need refinement.

## Navigation

- Mobile bottom navigation: **Home**, **Collection**, and **History**.
- A floating **+** button on mobile gives quick access to Add Game.
- Desktop navigation has not been finalized.

## Mobile Home dashboard

The current mockup places these sections in the following order:

1. **Header:** Backlog Haven branding, user greeting, a short gaming overview description, and a profile/avatar placeholder.
2. **Gaming Statistics:** All Time / Year selector; Total Games, Completed, Playing, Backlog, Abandoned, and Average Rating. Statistics currently appear above Currently Playing, but this placement is provisional and should be tested after implementation. The meaning of year-filtered statistics must be defined before implementation.
3. **Currently Playing:** A manually controlled horizontal carousel with large covers, game titles, platforms, optional genre information, and **View All**. View All opens Collection with the Playing status filter applied. The carousel must not rotate automatically.
4. **Recent Completions:** A horizontal list or carousel showing up to five recently completed games, with covers, titles, platforms, completion dates, and **View All** linking to History.
5. **Quick Add:** The floating **+** opens Add Game, with external metadata search and manual entry.

## Other MVP pages and interactions

| Area | Current design direction |
| --- | --- |
| Collection | Browse all games regardless of status; search, filter, and sort; switch between grid and list views; filter by platform, status, and system/device; open Game Details. |
| History | Browse games that have been played; filter by year, status, platform, system/device, and rating; sort by relevant dates; show covers, titles, dates, statuses, and ratings. |
| Game Details | Show artwork and metadata, platform and system/device, status, start and end dates, rating, and personal notes; provide edit and remove actions. |
| Add Game | Accessible globally. A modal is the current proposed interaction, subject to refinement. Support external metadata search and manual entry. |

The interaction details and final layouts for these areas remain open. See [FEATURES.md](../FEATURES.md) for the MVP feature scope.
