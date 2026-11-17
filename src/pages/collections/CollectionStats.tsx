import Stats from "../../components/Stats";
import { GAME_STATUS } from "../../constants/gameStatus";
import { gameData } from "../../mocks/gameData";
import type { GameStatusFilter } from "../../types/filters";
import type { StatItem } from "../../types/stats";

type CollectionStatsProps = {
  games: typeof gameData
}


export default function CollectionStats({games} : CollectionStatsProps) {

  // total games
  const totalGames = games.length;

  // currently playing
  const currentGames = games.filter(
    (game) => game.status === GAME_STATUS.CURRENTLY_PLAYING,
  ).length;

  // completed
  const completedGames = games.filter(
    (game) => game.status === GAME_STATUS.COMPLETED,
  ).length;

  // backlog
  const backlogGames = games.filter(
    (game) => game.status === GAME_STATUS.BACKLOG,
  ).length;

  // abandoned
  const abandonedGames = games.filter(
    (game) => game.status === GAME_STATUS.ABANDONED,
  ).length;

  // avg rating
  const ratedGames = games.filter((game) => game.rating !== null).length;

  const avgRating = Number(
    (
      games.reduce((acc, curr) => {
        if (curr.rating == null) return acc;
        return acc + curr.rating;
      }, 0) / ratedGames
    ).toFixed(2),
  );

  const stats: StatItem[] = [
    { label: "Total", value: totalGames },
    { label: "Currently Playing", value: currentGames },
    { label: "Completed", value: completedGames },
    { label: "Backlog", value: backlogGames },
    { label: "Abandoned", value: abandonedGames },
    { label: "Avg. Rating", value: avgRating },
  ];

  return (
    <section className="section-card">
      {/* todo add an image in the background */}
      <h2 className="text-text-primary text-xl font-semibold">My Collection</h2>
      <Stats stats={stats} />
    </section>
  );
}
