import { useState } from "react";
import { gameData } from "../../mocks/gameData";
import CollectionStats from "./CollectionStats";
import GameLibrary from "./GameLibrary";
import type { GameStatusFilter } from "../../types/filters";

const initialFilterOptions = {
  "Currently Playing": false,
  Completed: false,
  Backlog: false,
  Abandoned: false,
};

export default function Collections() {
  const [games, setGames] = useState(gameData);
  const [gameStatusFilters, setGameStatusFilters] =
    useState(initialFilterOptions);

  const handleGameStatusFiltersChange = (
    newGameStatusFilters: GameStatusFilter,
  ) => {
    setGameStatusFilters(newGameStatusFilters);
  };

  return (
    <main className="flex flex-col gap-3 pb-18">
      {/* option: banner */}

      {/* collection stats */}
      <CollectionStats games={games} gameStatusFilters={gameStatusFilters} />

      {/* game library */}
      <GameLibrary
        games={games}
        gameStatusFilters={gameStatusFilters}
        handleGameStatusFilterChanges={handleGameStatusFiltersChange}
      />
    </main>
  );
}
