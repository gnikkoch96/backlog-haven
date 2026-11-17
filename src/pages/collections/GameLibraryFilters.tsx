import { X } from "lucide-react";
import type { GameStatusFilter } from "../../types/filters";

type GameLibraryFiltersProps = {
  gameStatusFilters: GameStatusFilter;
  handleGameStatusFilterChanges: (
    newGameStatusFilters: GameStatusFilter,
  ) => void;
};

const selectDotColor = (gameStatus: string) => {
  switch (gameStatus) {
    case "Currently Playing":
      return "bg-playing";
      break;
    case "Completed":
      return "bg-completed";
      break;
    case "Abandoned":
      return "bg-abandoned";
      break;
    default:
      return "bg-backlog";
      break;
  }
};

export default function GameLibraryFilters({
  gameStatusFilters,
  handleGameStatusFilterChanges,
}: GameLibraryFiltersProps) {
  return (
    <section className="section-card">
      <div className="flex flex-col gap-2">
        {/* status label + clear status filters */}
        <div className="flex justify-between items-center">
          <h2 className="text-text-primary font-light">Game Status</h2>

          <button
            className={`bg-background rounded-lg px-2 border border-text-muted/30 text-sm text-red-400/70  items-center ${gameStatusFilters["Currently Playing"] || gameStatusFilters.Abandoned || gameStatusFilters.Backlog || gameStatusFilters.Completed ? "flex" : "hidden"}`}
            onClick={() => {
              handleGameStatusFilterChanges({
                "Currently Playing": false,
                Backlog: false,
                Completed: false,
                Abandoned: false,
              });
            }}
          >
            <X className="size-4" />
            Clear Status
          </button>
        </div>

        {/* status button filter */}
        <ul className="flex gap-2 truncate overflow-x-auto text-text-muted">
          {Object.entries(gameStatusFilters).map((gameStatusFilter) => {
            const [gameStatus, isGameStatusChecked] = gameStatusFilter;

            return (
              <li key={gameStatus} className="flex gap-1">
                <input
                  type="checkbox"
                  name="gameStatusFilter"
                  id={`${gameStatusFilter}Filter`}
                  checked={isGameStatusChecked}
                  onChange={(event) => {
                    handleGameStatusFilterChanges({
                      ...gameStatusFilters,
                      [gameStatus]: event.currentTarget.checked,
                    });
                  }}
                  className="sr-only"
                />
                <label
                  htmlFor={`${gameStatusFilter}Filter`}
                  className={`relative py-1 pl-5 pr-2 text-sm ${isGameStatusChecked ? "bg-accent/30 text-text-primary rounded" : "bg-none"}`}
                >
                  <span
                    className={`absolute size-1.5 left-2 top-1/2 -translate-y-1/2 shrink-0 rounded-full ${selectDotColor(gameStatus)}`}
                  />
                  {gameStatusFilter}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {/* filters */}
    </section>
  );
}
