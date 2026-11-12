import { GAME_STATUS } from "../../constants/gameStatus";
import { gameData } from "../../mocks/gameData";

const MAX_RECENT_COMPLETIONS = 5;

export default function RecentCompletions() {
  const games = gameData;
  const completedGames = games
    .filter((games) => games.status === GAME_STATUS.COMPLETED)
    .sort((a, b) => {
      if (!a.dateFinished) return -1;
      if (!b.dateFinished) return 1;
      return (
        new Date(b.dateFinished).getTime() - new Date(a.dateFinished).getTime()
      );
    });
  const displayedRecentCompletions = completedGames.slice(
    0,
    MAX_RECENT_COMPLETIONS,
  );

  return (
    <section
      aria-labelledby="recent-completions-heading"
      className="home-section"
    >
      {/* label + view all */}
      <div className="flex justify-between">
        <h2
          id="recent-completions-heading"
          className="text-text-primary font-semibold"
        >
          Recent Completions
        </h2>
        {/* todo replace with Link from react-router library */}
        <a href="#" className="text-accent">
          View All &gt;
        </a>
      </div>

      {/* recent completed games */}
      <ul className="flex overflow-x-auto">
        {displayedRecentCompletions.map((game) => (
          <li
            key={game.id}
            className="flex flex-col gap-1 items-start w-[30%] shrink-0"
          >
            {/* game art */}
            <img
              src={game.coverPath}
              alt={`${game.title} cover art`}
              className="object-cover h-30"
              loading="lazy"
            />

            {/* title */}
            <p className="text-text-primary text-xs font-bold line-clamp-2 min-w-0">
              {game.title}
            </p>

            {/* platform */}
            <span className="w-fit bg-background rounded px-2 text-text-primary line-clamp-1 text-xs">
              {game.platform}
            </span>

            {/* finished date */}
            {game.dateFinished && (
              <p className="text-text-primary text-xs">
                {Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(game.dateFinished))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
