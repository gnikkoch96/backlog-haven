const recentCompletions = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "NS",
    system: "ROG Ally",
    genre: "Action Adventure",
    status: "completed",
    start_date: "2026-08-10",
    finish_date: "2026-09-22",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
  },
  {
    id: 2,
    title: "GTA V",
    platform: "NS",
    system: "ROG Ally",
    genre: "Metroidvania",
    status: "completed",
    start_date: "2026-09-15",
    finish_date: "2026-10-02",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.jpg",
  },
  {
    id: 3,
    title: "Horizon Zero Dawn",
    platform: "PS5",
    system: "PlayStation 5",
    genre: "JRPG",
    status: "completed",
    start_date: "2026-09-01",
    finish_date: "2026-10-18",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2una.jpg",
  },
  {
    id: 4,
    title: "Tyranny",
    platform: "PC",
    system: "ROG Ally",
    genre: "Platformer",
    status: "completed",
    start_date: "2026-10-05",
    finish_date: "2026-10-26",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1n5f.jpg",
  },
  {
    id: 5,
    title: "God of War Ragnarok",
    platform: "PS5",
    system: "PlayStation 5",
    genre: "Survival Horror",
    status: "completed",
    start_date: "2026-10-12",
    finish_date: "2026-11-03",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co5s5v.jpg",
  },
];

const MAX_RECENT_COMPLETIONS = 5;

export default function RecentCompletions() {
  const displayedRecentCompletions = recentCompletions.slice(
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
          <li key={game.id} className="flex flex-col gap-1 items-start w-[30%] shrink-0">
            {/* game art */}
            <img
              src={game.coverUrl}
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
            <p className="text-text-primary text-xs">
              {Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(game.finish_date))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
