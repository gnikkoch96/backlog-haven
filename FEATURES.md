# Backlog Haven - Features and Scope

## Project vision

Backlog Haven is currently a personal gaming backlog application. Its immediate goal is to replace an existing Excel gaming tracker with a visually appealing, intuitive, and efficient place to organize games, track progress, and choose what to play. It is also a portfolio and learning project for frontend, backend, database, API, and testing skills. Development and hosting should remain free wherever reasonably possible.

Movies, TV shows, and anime may be supported later. Whether they belong in Backlog Haven or separate applications is undecided. Friends, family, and other users are also possible future audiences; the MVP is for personal use.

## Confirmed MVP scope

- Browse a personal game collection with cover artwork, organized by platform.
- Search, filter, and sort games; offer grid and list views where appropriate.
- Track Backlog, Playing, Completed, and Abandoned statuses.
- Record start and completion/end dates, ratings on a 1-10 scale including decimals, and personal notes.
- Keep a game's platform distinct from the system/device used to play it.
- Add, edit, and remove games. Adding a game must support both external game metadata search and manual entry.
- Persist data in PostgreSQL.
- Provide responsive mobile and desktop layouts.

The mobile-first UI direction and current page designs are documented in [UI_DESIGN.md](docs/UI_DESIGN.md). The implementation sequence and status are in [MILESTONES.md](docs/MILESTONES.md).

## Home dashboard

### Gaming Stats

- Show Completed games, Abandoned games, and Overall completion rate.
- Provide an All Time / Current Year toggle.
- All Time represents the selected statistic across the user's complete tracked collection and history.
- Current Year represents activity recorded during the current calendar year.
- Backlog is a current collection status, not a yearly statistic, so it is not included in the Home statistics summary.
- Detailed analytics, such as games played by handheld or device, are future considerations rather than MVP requirements.

The current UI has the three summary values and period toggle using local mock data. Connecting the values and toggle to real data remains future work.

### Currently Playing

- Display games currently being played.
- Browse games through a horizontal carousel with cover artwork.
- Show each game's title, platform, and genre.
- Provide a View All navigation action.
- Quick actions for adding notes or changing game status belong to future Game Management functionality and are not part of the current Home UI.

### Other Home features

- Dynamic time-based greeting.
- Recent Completions section.
- Bottom navigation.
- Floating Add Game button.

The greeting and Currently Playing foundation are implemented. Recent Completions, bottom navigation, and the floating Add Game action remain to be implemented.

## Planned feature with undecided timing

Data export/backup is planned, but whether it belongs in the MVP has not been decided.

## Future features - outside the MVP

These are postponed ideas, not commitments for a later release:

- Movies, TV shows, and anime, potentially in separate applications. Related ideas include poster-based watchlists, nostalgic TV programming blocks, and seasonal or holiday watchlists.
- Multiple playthroughs and replay history; rating change history; personal gaming journals.
- Social profiles, sharing, comments, and multi-user accounts or libraries.
- AI-assisted recommendations, advanced analytics, and Excel or Backloggd imports.
- Seasonal themes and ambient effects. Earlier concepts included rainy, autumn, winter, spring, and summer atmospheres, optional animation or audio, saved preferences, and controls to disable effects. The extent of theme coverage is undecided; accessibility and performance would need consideration.

### What Should I Play Next?

This feature is explicitly excluded from the MVP. If implemented later, a suggestion must be requested by pressing a button; the application should not display one automatically. Suggestions should favor games on a different platform, and potentially in a different genre, from games currently being played. AI is not required for an initial version. If the feature appears on Home, it should sit below Recent Completions.

## Open decisions

- Select the external game metadata API. RAWG and IGDB were earlier candidates; pricing, limits, and usage terms still need verification.
- Define the data model, including whether one game can belong to multiple platforms and how platform differs from the system/device used to play it.
- Decide whether authentication is needed for the first personal version.
- Decide when data export/backup belongs in the roadmap and, later, how Excel or Backloggd imports would work.
- Decide whether nongaming media will eventually share this application.

The current technology direction and unresolved hosting choices are tracked in [MILESTONES.md](docs/MILESTONES.md).
