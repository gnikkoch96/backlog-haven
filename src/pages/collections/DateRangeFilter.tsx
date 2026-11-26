import { X } from "lucide-react";
import SelectDropdown from "./SelectDropdown";
import { useState } from "react";

const dateFieldOptions = [
  { label: "Date Added", value: "Date Added" },
  { label: "Date Started", value: "Date Started" },
  { label: "Date Finished", value: "Date Finished" },
];

const quickPresetsOptions = [
  { label: "All Time", value: "All Time" },
  { label: "This Month", value: "This Month" },
  { label: "Last Month", value: "Last Month" },
  { label: "This Year", value: "This Year" },
  { label: "Last Year", value: "Last Year" },
];

// placeholder
const yearFilterOptions = [
  { label: "Select Year", value: "" },
  { label: "2026", value: "2026" },
  { label: "2025", value: "2025" },
  { label: "2024", value: "2024" },
];

const monthFilterOptions = [
  { label: "All Months", value: "" },
  { label: "Jan", value: "January" },
  { label: "Feb", value: "February" },
  { label: "Mar", value: "March" },
  { label: "Apr", value: "April" },
  { label: "May", value: "May" },
  { label: "Jun", value: "June" },
  { label: "Jul", value: "July" },
  { label: "Aug", value: "August" },
  { label: "Sept", value: "September" },
  { label: "Oct", value: "October" },
  { label: "Nov", value: "November" },
  { label: "Dec", value: "December" },
];

type DateRangeFilterProps = {
  handleDateRangeClose: () => void;
};

export default function DateRangeFilter({
  handleDateRangeClose,
}: DateRangeFilterProps) {
  const [selectedYearFilter, setSelectedYearFilter] = useState(
    yearFilterOptions.at(0),
  );
  const [selectedMonthFilter, setSelectedMonthFilter] = useState(
    monthFilterOptions.at(0),
  );
  const [selectedQuickPreset, setSelectedQuickPreset] =
    useState<string>("All Time");
  const [selectedDateField, setSelectedDateField] = useState(
    dateFieldOptions.at(0),
  );
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  const handleYearChange = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedYearFilter({ label, value });

    // reset everything but month
    setSelectedQuickPreset("");
    setSelectedStartDate("");
    setSelectedEndDate("");
  };

  const handleMonthChange = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedMonthFilter({ label, value });

    // reset everything but year
    setSelectedQuickPreset("");
    setSelectedStartDate("");
    setSelectedEndDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed flex flex-col gap-3 left-0 bottom-0 z-11 border border-accent/30 w-full h-130 bg-surface rounded-t-2xl text-text-primary p-5"
    >
      {/* date range label + close */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Date Range</h2>
        <button
          type="button"
          onClick={handleDateRangeClose}
          className="bg-background p-2 rounded-lg border border-text-muted/30"
        >
          <X className="size-3" />
        </button>
      </div>

      <hr className="border-text-muted/30 -mx-5" />

      <div className="flex flex-col gap-4">
        {/* date field */}
        <div className="flex flex-col gap-2 text-sm">
          <h3>Date Field</h3>
          <SelectDropdown
            ariaLabel="Date Field"
            defaultLabel="Date Type"
            options={dateFieldOptions}
            selectedOption={selectedDateField}
            onSelectedOption={setSelectedDateField}
            textAlign="between"
          />
        </div>

        {/* quick presets */}
        <div className="text-sm flex flex-col gap-2">
          <h3>Quick Presets</h3>
          <div className="flex flex-wrap gap-2">
            {quickPresetsOptions.map((option) => (
              <button
                type="button"
                key={option.label}
                onClick={() => {
                  setSelectedQuickPreset(option.label);

                  // reset other fields
                  setSelectedYearFilter(yearFilterOptions.at(0));
                  setSelectedMonthFilter(monthFilterOptions.at(0));
                  setSelectedStartDate("");
                  setSelectedEndDate("");
                }}
                className={`border border-text-muted/30  rounded-lg p-2 ${selectedQuickPreset === option.label ? "border-accent bg-accent/30" : "bg-background"}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm">Year & Month</h3>
          {/* year filter */}
          {/* todo make it based on actual user data where we get the actual years stored in the database based on the date field */}
          <div className="grid grid-cols-2 gap-2 ">
            <SelectDropdown
              ariaLabel="Year Filter"
              defaultLabel="Select Year"
              options={yearFilterOptions}
              selectedOption={selectedYearFilter}
              onSelectedOption={handleYearChange}
              textAlign="between"
            />
            {/* month filter */}
            <SelectDropdown
              ariaLabel="Month Filter"
              defaultLabel="All Months"
              options={monthFilterOptions}
              selectedOption={selectedMonthFilter}
              onSelectedOption={handleMonthChange}
              textAlign="between"
            />
          </div>
        </div>

        {/* custom range */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm">Custom Date Range</h3>
          {/* year filter */}
          {/* todo make it based on actual user data where we get the actual years stored in the database based on the date field */}
          <div className="grid grid-cols-2 gap-2 ">
            {/* start date */}
            <input
              type="date"
              name="Date Range Start"
              id="date-range-start"
              value={selectedStartDate}
              onChange={(e) => {
                setSelectedStartDate(e.currentTarget.value);

                // reset other fields
                setSelectedQuickPreset("");
                setSelectedYearFilter(undefined);
                setSelectedMonthFilter(undefined);
              }}
              className="border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary"
            />

            {/* end date */}
            <input
              type="date"
              name="Date Range End"
              id="date-range-end"
              value={selectedEndDate}
              onChange={(e) => {
                setSelectedEndDate(e.currentTarget.value);

                // reset other fields
                setSelectedQuickPreset("");
                setSelectedYearFilter(undefined);
                setSelectedMonthFilter(undefined);
              }}
              className="border border-text-muted/30 rounded py-2 px-3 text-xs bg-background focus-within:border-text-primary"
            />
          </div>
        </div>
      </div>

      <hr className="border-text-muted/30 mt-5 -mx-5" />

      {/* action buttons */}
      <div className="flex justify-between items-center text-sm">
        <button
          type="button"
          className="bg-background py-2 px-3 rounded text-text-muted"
          onClick={() => {
            setSelectedQuickPreset("All Time");
            setSelectedYearFilter(undefined);
            setSelectedMonthFilter(undefined);
            setSelectedStartDate("");
            setSelectedEndDate("");
          }}
        >
          Reset Date
        </button>
        <button type="submit" className="bg-accent py-2 px-3 rounded">
          Apply
        </button>
      </div>
    </form>
  );
}
