import { Star } from "lucide-react";
import { useState } from "react";

// TODO: Filter statistics by selected period when backend data is available.
const stats = [
  { label: "Total Games", value: 120 },
  { label: "Completed", value: 45 },
  { label: "Playing", value: 3 },
  { label: "Backlog", value: 60 },
  { label: "Abandoned", value: 12 },
  { label: "Avg Rating", value: 8.2 }, // not sure if I want to keep this
];

function getValueTextColorByLabel(label: string): string {
  if (label === "Completed") {
    return "text-completed";
  } else if (label === "Playing") {
    return "text-playing";
  } else if (label === "Backlog") {
    return "text-backlog";
  } else if (label === "Abandoned") {
    return "text-abandoned";
  }
  return "text-white";
}

const toggleButtonBase = "px-3 py-1.5 text-sm rounded-lg font-medium";

export default function GameStats() {
  const [period, setPeriod] = useState<"all" | "year">("year");

  return (
    <section
      aria-labelledby="gaming-stats-heading"
      className="flex flex-col gap-3 border border-text-muted/30 rounded-xl bg-surface p-3"
    >
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

      {/* stats */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-text-muted/30 rounded-lg text-center py-1 bg-card"
          >
            <p
              className={`flex justify-center gap-1 ${getValueTextColorByLabel(stat.label)} text-lg font-bold`}
            >
              {stat.label === "Avg Rating" && (
                <Star className="fill-rating stroke-0" />
              )}{" "}
              {stat.value}
            </p>
            <p className="text-text-muted text-xs">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
