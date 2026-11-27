import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  Gamepad,
  Monitor,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import type { GameStatusFilter } from "../../types/filters";
import { useState } from "react";
import SelectDropdown from "./SelectDropdown";
import DateRangeFilter from "./DateRangeFilter";
import {
  sortOptions,
  platformFilterOptions,
  deviceFilterOptions,
  ratingFilterOptions,
} from "./gameLibraryOptions";

type GameLibraryFiltersProps = {
  gameStatusFilters: GameStatusFilter;
  selectedSortOption: { label: string; value: string } | undefined;
  selectedPlatformFilter: { label: string; value: string } | undefined;
  selectedDeviceFilter: { label: string; value: string } | undefined;
  selectedRatingFilter: { label: string; value: string } | undefined;
  handleGameStatusFilterChanges: (
    newGameStatusFilters: GameStatusFilter,
  ) => void;

  handlePlatformFilterChange: ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => void;

  handleDeviceFilterChange: ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => void;

  handleRatingFilterChange: ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => void;

  handleSortChange: ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => void;
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
  selectedSortOption,
  selectedPlatformFilter,
  selectedDeviceFilter,
  selectedRatingFilter,
  handleGameStatusFilterChanges,
  handlePlatformFilterChange,
  handleDeviceFilterChange,
  handleRatingFilterChange,
  handleSortChange,
}: GameLibraryFiltersProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showDateRangeFilter, setShowDateRangeFilter] = useState(false);

  const handleDateRangeClose = () => {
    setShowDateRangeFilter(false);
  };

  return (
    <section className="section-card">
      <div className="flex flex-col gap-2">
        {/* status button filter */}
        <ul className="flex gap-2 truncate overflow-x-auto text-text-muted bg-background rounded border border-text-muted/30 p-1">
          {Object.entries(gameStatusFilters).map((gameStatusFilter) => {
            const [gameStatus, isGameStatusChecked] = gameStatusFilter;

            return (
              <li key={gameStatus} className="flex gap-1">
                <input
                  type="checkbox"
                  name="gameStatusFilter"
                  id={`${gameStatus}-Filter`}
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
                  htmlFor={`${gameStatus}-Filter`}
                  className={`relative py-1 pl-5 pr-2 text-sm ${isGameStatusChecked ? "bg-accent/30 text-text-primary rounded" : "bg-none"}`}
                >
                  <span
                    className={`absolute size-1.5 left-2 top-1/2 -translate-y-1/2 shrink-0 rounded-full ${selectDotColor(gameStatus)}`}
                  />
                  {gameStatus}
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
            onSelectedOption={handleSortChange}
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
              onSelectedOption={handlePlatformFilterChange}
            />

            {/* device filter dropdown */}
            <SelectDropdown
              ariaLabel="Device"
              defaultLabel="Device"
              icon={Gamepad}
              options={deviceFilterOptions}
              selectedOption={selectedDeviceFilter}
              onSelectedOption={handleDeviceFilterChange}
            />

            {/* rating filter option */}
            <SelectDropdown
              ariaLabel="Rating"
              defaultLabel="Rating"
              icon={Star}
              options={ratingFilterOptions}
              selectedOption={selectedRatingFilter}
              onSelectedOption={handleRatingFilterChange}
            />

            {/* date range button */}
            <button
              className="relative inline-flex justify-center items-center gap-2 border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary"
              onClick={() => setShowDateRangeFilter(true)}
            >
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

      {showDateRangeFilter && (
        <>
          <div
            aria-hidden="true"
            className="fixed top-0 left-0 bg-background/90 w-full h-full"
            onClick={handleDateRangeClose}
          />
          <DateRangeFilter handleDateRangeClose={handleDateRangeClose} />
        </>
      )}
    </section>
  );
}
