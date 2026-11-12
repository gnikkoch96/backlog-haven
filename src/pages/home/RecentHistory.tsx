import { Check, Minus, Star } from "lucide-react";
import { GAME_STATUS } from "../../constants/gameStatus";
import { gameData } from "../../mocks/gameData";

const MAX_RECENT_COMPLETIONS = 5;

export default function RecentCompletions() {
  const games = gameData;
  const recentGames = games
    .filter(
      (games) =>
        games.status === GAME_STATUS.COMPLETED ||
        games.status === GAME_STATUS.ABANDONED,
    )
    .sort((a, b) => {
      if (!a.dateFinished) return -1;
      if (!b.dateFinished) return 1;
      return (
        new Date(b.dateFinished).getTime() - new Date(a.dateFinished).getTime()
      );
    });

  const displayedRecentHistory = recentGames.slice(0, MAX_RECENT_COMPLETIONS);

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
          Recent History
        </h2>
        {/* todo replace with Link from react-router library */}
        <a href="#" className="text-accent">
          View All &gt;
        </a>
      </div>

      {/* recent completed games */}
      <ul className="flex overflow-x-auto">
        {displayedRecentHistory.map((game) => {
          const isCompleted = game.status === GAME_STATUS.COMPLETED;
          const StatusIcon = isCompleted ? Check : Minus;

          return (
            <li
              key={game.id}
              className="flex flex-col gap-1 items-start w-[30%] shrink-0"
            >
              {/* game art + status indicator */}
              <div className="relative">
                <img
                  src={game.coverPath}
                  alt={`${game.title} cover art`}
                  className="object-cover h-30"
                  loading="lazy"
                />

                <span
                  aria-label={game.status}
                  className={`absolute top-0 right-0 z-10 rounded-full size-4 flex justify-center items-center ${game.status === GAME_STATUS.COMPLETED ? "bg-completed" : "bg-abandoned"}`}
                >
                  <StatusIcon aria-hidden="true" className="size-3 stroke-5 text-background" />
                </span>
              </div>

              {/* title */}
              <p className="text-text-primary text-xs font-bold line-clamp-2 min-w-0">
                {game.title}
              </p>

              {/* device + rating */}
              <div className="flex gap-2">
                <span className="truncate bg-background rounded-xl px-2 text-text-primary line-clamp-1 text-xs border border-text-muted/30">
                  {game.device}
                </span>
                <span
                  className="flex shrink-0 gap-1 items-center text-text-muted text-xs"
                  aria-label={`Rating: ${game.rating} out of 10`}
                >
                  <Star
                    aria-hidden="true"
                    className="fill-rating stroke-0 size-4"
                  />
                  {game.rating}
                </span>
              </div>

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
          );
        })}
      </ul>
    </section>
  );
}
