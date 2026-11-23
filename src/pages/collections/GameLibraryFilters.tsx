import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  Gamepad,
  Monitor,
  SlidersHorizontal,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import type { GameStatusFilter } from "../../types/filters";
import { useState } from "react";

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

const sortOptions = [
  { label: "Date Added - Newest", value: "date-add-desc" },
  { label: "Date Added - Oldest", value: "date-add-asc" },
  { label: "Title - A-Z", value: "title-asc" },
  { label: "Title - Z-A", value: "title-desc" },
  { label: "Date Started - Newest", value: "date-start-desc" },
  { label: "Date Started - Oldest", value: "date-start-asc" },
  { label: "Date Finished - Newest", value: "date-finish-desc" },
  { label: "Date Finished - Oldest", value: "date-finish-asc" },
  { label: "Rating - Highest", value: "rating-desc" },
  { label: "Rating - Lowest", value: "rating-asc" },
];

const platformFilterOptions = [
  { label: "All Platforms", value: "" },
  { label: "NS", value: "Nintendo Switch" },
  { label: "PC", value: "PC" },
  { label: "PS2", value: "PlayStation 2" },
  { label: "PS3", value: "PlayStation 3" },
  { label: "PS4", value: "PlayStation 4" },
  { label: "PS5", value: "PlayStation 5" },
];

const deviceFilterOptions = [
  { label: "All Systems / Devices", value: "" },
  { label: "PC", value: "PC" },
  { label: "Nintendo Switch", value: "NS" },
  { label: "PS2", value: "PlayStation 2" },
  { label: "PS3", value: "PlayStation 3" },
  { label: "PS4", value: "PlayStation 4" },
  { label: "PS5", value: "PS5" },
  { label: "Rog Ally", value: "Rog Ally" },
  { label: "Steam Deck", value: "Steam Deck" },
  { label: "XBXX", value: "Xbox Series X" },
];

const ratingFilterOptions = [
  { label: "All Ratings", value: "" },
  { label: "10", value: "10" },
  { label: "9", value: "9" },
  { label: "8", value: "8" },
  { label: "7", value: "7" },
  { label: "6", value: "6" },
  { label: "5", value: "5" },
  { label: "4", value: "4" },
  { label: "3", value: "3" },
  { label: "2", value: "2" },
  { label: "1", value: "1" },
];

type SelectDropdownProps = {
  icon: LucideIcon;
  ariaLabel: string;
  defaultLabel: string;
  options: { label: string; value: string }[];
  selectedOption: { label: string; value: string } | undefined;
  setSelectedOption: (option: { label: string; value: string }) => void;
};

function SelectDropdown({
  icon: Icon,
  ariaLabel,
  defaultLabel,
  options,
  selectedOption,
  setSelectedOption,
}: SelectDropdownProps) {
  return (
    <label className="relative inline-flex justify-center items-center gap-2 border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary">
      <Icon aria-hidden="true" className="size-4 text-text-primary" />
      <span className="text-text-primary">
        {selectedOption?.value == "" || !selectedOption
          ? defaultLabel
          : selectedOption?.label}
      </span>
      <ChevronDown aria-hidden="true" className="size-4 text-text-primary" />

      <select
        aria-label={ariaLabel}
        className="absolute inset-0 w-full opacity-0 text-text-primary bg-background"
        onChange={(event) => {
          const selectedOption = event.target.selectedOptions[0];
          setSelectedOption({
            label: selectedOption.label,
            value: selectedOption.value,
          });
        }}
      >
        {options &&
          options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </label>
  );
}

export default function GameLibraryFilters({
  gameStatusFilters,
  handleGameStatusFilterChanges,
}: GameLibraryFiltersProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
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

  return (
    <section className="section-card">
      <div className="flex flex-col gap-2">
        {/* status label + clear status filters */}
        {/* <div className="flex justify-between items-center">
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
        </div> */}

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

      {/* other filters */}
      <div className="flex flex-col gap-2">
        {/* filter button */}
        <div className="flex justify-between items-center">
          <button
            className="flex items-center rounded gap-2 py-2 px-3 text-xs bg-background text-text-primary border border-text-muted/30"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          >
            <SlidersHorizontal className="size-4" /> Filters
          </button>

          {/* sorting dropdown */}
          <SelectDropdown
            icon={ArrowUpDown}
            ariaLabel="Sort Options"
            defaultLabel="Sort Options"
            options={sortOptions}
            selectedOption={selectedSortOption}
            setSelectedOption={setSelectedSortOption}
          />
        </div>

        {/* more filters */}
        {showAdvancedFilters && (
          <div className="grid grid-cols-2 gap-2">
            {/* platform filter dropdown */}
            <SelectDropdown
              ariaLabel="Platform"
              defaultLabel="Platform"
              icon={Monitor}
              options={platformFilterOptions}
              selectedOption={selectedPlatformFilter}
              setSelectedOption={setSelectedPlatformFilter}
            />

            {/* device filter dropdown */}
            <SelectDropdown
              ariaLabel="Device"
              defaultLabel="Device"
              icon={Gamepad}
              options={deviceFilterOptions}
              selectedOption={selectedDeviceFilter}
              setSelectedOption={setSelectedDeviceFilter}
            />

            {/* rating filter option */}
            <SelectDropdown
              ariaLabel="Rating"
              defaultLabel="Rating"
              icon={Star}
              options={ratingFilterOptions}
              selectedOption={selectedRatingFilter}
              setSelectedOption={setSelectedRatingFilter}
            />

            {/* date range button */}
            <button className="relative inline-flex justify-center items-center gap-2 border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary">
              <Calendar
                aria-hidden="true"
                className="size-4 text-text-primary"
              />
              <span className="text-text-primary"> Date Range</span>
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-text-primary"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
