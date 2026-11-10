import { useEffect, useState } from "react";
import Stats from "../../components/Stats";
import type { StatItem } from "../../types/stats";
import { gameData } from "../../mocks/gameData";

const toggleButtonBase = "px-3 py-1.5 text-sm rounded-lg font-medium";

export default function GameStats() {
  const [period, setPeriod] = useState<"all" | "year">("year");
  const [stats, setStats] = useState<StatItem[] | null>(null);

  useEffect(() => {
    // completed
    const completedGames = gameData.filter(
      (game) => game.status === "Completed",
    ).length;

    // abandoned
    const abandonedGames = gameData.filter(
      (game) => game.status === "Completed",
    ).length;

    // completion rate (completed/total)
    const totalGames = gameData.filter(
      (game) =>
        game.status === "Completed" ||
        game.status === "Abandoned" ||
        game.status === "Currently Playing",
    ).length;

    const completionRate = (completedGames / totalGames) * 100;

    setStats([
      { label: "Completed", value: completedGames },
      { label: "Abandoned", value: abandonedGames },
      { label: "Completion Rate", value: Number(completionRate.toFixed(2)) },
    ]);
  }, []);

  return (
    <section aria-labelledby="gaming-stats-heading" className="home-section">
      {/* header + toggle */}
      <div className="flex justify-between items-center text-text-primary">
        <h2 id="gaming-stats-heading" className="text-md font-semibold">
          Your Gaming Stats
        </h2>
        <div className="relative isolate grid grid-cols-2 border bg-card border-text-muted/30 rounded-lg">
          {/* blue background translation */}
          <div
            aria-hidden={true}
            className={`absolute bg-accent w-1/2 h-full -z-10 rounded-lg ${period === "year" ? "translate-x-0" : "translate-x-full"} transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
          />
          <button
            aria-pressed={period === "year"}
            type="button"
            onClick={() => setPeriod("year")}
            className={`${toggleButtonBase} ${period === "year" ? "text-text-primary" : "text-text-muted"}`}
          >
            {new Date().getFullYear()}
          </button>
          <button
            aria-pressed={period === "all"}
            type="button"
            onClick={() => setPeriod("all")}
            className={`${toggleButtonBase} ${period === "all" ? " text-text-primary" : " text-text-muted"}`}
          >
            All Time
          </button>
        </div>
      </div>

      <Stats stats={stats} />
    </section>
  );
}
