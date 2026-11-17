import { LibraryBig, Search } from "lucide-react";
import { gameData } from "../../mocks/gameData";
import GameLibraryFilters from "./GameLibraryFilters";
import type { GameStatusFilter } from "../../types/filters";

type GameLibraryProps = {
  games: typeof gameData;
  gameStatusFilters: GameStatusFilter;
  handleGameStatusFilterChanges: (
    newGameStatusFilters: GameStatusFilter,
  ) => void;
};

export default function GameLibrary({
  games,
  gameStatusFilters,
  handleGameStatusFilterChanges,
}: GameLibraryProps) {
  return (
    <section className="section-card">
      <div className="flex justify-between">
        {/* title */}
        <span className="flex gap-1 items-center text-text-primary">
          <LibraryBig className="text-accent" />
          <h2 className="text-xl font-semibold">Game Library</h2>
          <span className="border border-text-muted/30 rounded-xl px-2 bg-background text-sm">
            {games.length}
          </span>
        </span>

        {/* search bar (filters in real time) */}
        <div className="relative">
          <Search className="absolute top-1/4 left-1 text-text-muted size-4" />
          <input
            type="text"
            name="game-search"
            id="game-search"
            placeholder="Search Games..."
            className="w-32 rounded-md bg-background border border-text-muted/30 text-text-primary text-xs py-2 pl-6 pr-2"
          />
        </div>
      </div>

      {/* filters */}
      <GameLibraryFilters
        gameStatusFilters={gameStatusFilters}
        handleGameStatusFilterChanges={handleGameStatusFilterChanges}
      />

      {/* results */}
    </section>
  );
}
