import { LibraryBig, Search } from "lucide-react";
import { gameData } from "../../mocks/gameData";
import GameLibraryFilters from "./GameLibraryFilters";
import { useState } from "react";
import {
  sortOptions,
  platformFilterOptions,
  deviceFilterOptions,
  ratingFilterOptions,
} from "./gameLibraryOptions";

type GameLibraryProps = {
  games: typeof gameData;
};

const initialFilterOptions = {
  "Currently Playing": false,
  Completed: false,
  Backlog: false,
  Abandoned: false,
};

export default function GameLibrary({ games }: GameLibraryProps) {
  const [gameStatusFilters, setGameStatusFilters] =
    useState(initialFilterOptions);

  const [selectedSortOption, setSelectedSortOption] = useState(
    sortOptions.at(0),
  );
  const [selectedPlatformFilter, setSelectedPlatformFilter] = useState(
    platformFilterOptions.at(0),
  );
  const [selectedDeviceFilter, setSelectedDeviceFilter] = useState(
    deviceFilterOptions.at(0),
  );
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(
    ratingFilterOptions.at(0),
  );

  // status[0] - game status, status[1] - isChecked value
  const checkedStatuses = Object.entries(gameStatusFilters)
    .filter((status) => status[1] === true)
    .map((status) => status[0]);

  const filteredGames = games.filter((game) =>
    checkedStatuses.includes(game.status),
  );

  return (
    <section className="section-card">
      <div className="flex justify-between">
        {/* title */}
        <span className="flex gap-1 items-center text-text-primary">
          <LibraryBig className="text-accent" />
          <h2 className="text-xl font-semibold">Game Library</h2>
          <span className="border border-text-muted/30 rounded-xl px-2 bg-background text-sm">
            {checkedStatuses.length > 0 ? filteredGames.length : games.length}
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
        handleGameStatusFilterChanges={setGameStatusFilters}
        selectedSortOption={selectedSortOption}
        selectedDeviceFilter={selectedDeviceFilter}
        selectedPlatformFilter={selectedPlatformFilter}
        selectedRatingFilter={selectedRatingFilter}
        handleDeviceFilterChange={setSelectedDeviceFilter}
        handlePlatformFilterChange={setSelectedPlatformFilter}
        handleRatingFilterChange={setSelectedRatingFilter}
        handleSortChange={setSelectedSortOption}
      />

      {/* results */}
    </section>
  );
}
