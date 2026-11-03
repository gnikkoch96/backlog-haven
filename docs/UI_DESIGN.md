# Backlog Haven - UI Design

## Direction and status

Design mobile-first, with both mobile and desktop layouts. The visual direction is a dark navy gaming aesthetic with electric blue accents, soft gradients, atmospheric backgrounds, prominent cover artwork, clear navigation, and readable, accessible controls. Typography uses Inter.

The design tokens used by the implementation are defined in `src/index.css` and should be reused for colors, typography, backgrounds, and status styling. The Home page foundation is implemented, while Collection, History, Game Details, Add Game, and desktop layouts still need refinement.

## Navigation

- Mobile bottom navigation: Home, Collection, and History (planned; not yet implemented).
- A floating + button on mobile gives quick access to Add Game (planned; not yet implemented).
- Desktop navigation has not been finalized.

## Home page layout

The mobile-first Home layout places these sections in the following order:

1. **Header:** Backlog Haven branding, a search icon, and a profile placeholder.
2. **Greeting:** A dynamic time-based greeting and supporting subtitle.
3. **Gaming Stats:** An All Time / Current Year toggle, Completed and Abandoned statistics, and Overall completion rate as the progress metric. Backlog remains a current collection status rather than a yearly statistic.
4. **Currently Playing:** A horizontal carousel with cover artwork, game title, platform, genre, blurred artwork background treatment, and View All. Position indicators may be used where implemented.
5. **Recent Completions:** A planned section for recently completed games.
6. **Bottom navigation:** A planned mobile navigation area.
7. **Quick Add:** A planned floating + action for Add Game.

The current implementation includes the Header, greeting, Gaming Stats UI, and a mock-data Currently Playing carousel. Recent Completions, bottom navigation, and Add Game are not yet implemented.

## Gaming Stats design

- Keep the summary focused on Completed games, Abandoned games, and Overall completion rate.
- The All Time period covers the complete tracked collection and history.
- The Current Year period covers activity recorded during the current calendar year.
- Detailed device or handheld analytics are future considerations, not MVP Home requirements.

## Currently Playing design

- Use horizontal game browsing with cover artwork.
- Use blurred artwork from the active game as the carousel background treatment.
- Display the game title, platform, and genre.
- Provide a View All action.
- Use carousel pagination or position indicators where implemented; navigation controls may also be used for larger layouts.
- Preserve the mobile-first behavior and allow responsive refinements for wider screens without assuming a specific breakpoint implementation.

## Other MVP pages and interactions

| Area | Current design direction |
| --- | --- |
| Collection | Browse all games regardless of status; search, filter, and sort; switch between grid and list views; filter by platform, status, and system/device; open Game Details. |
| History | Browse games that have been played; filter by year, status, platform, system/device, and rating; sort by relevant dates; show covers, titles, dates, statuses, and ratings. |
| Game Details | Show artwork and metadata, platform and system/device, status, start and end dates, rating, and personal notes; provide edit and remove actions. |
| Add Game | Accessible globally. A modal is the current proposed interaction, subject to refinement. Support external metadata search and manual entry. |

The interaction details and final layouts for these areas remain open. See [FEATURES.md](../FEATURES.md) for the MVP feature scope.
