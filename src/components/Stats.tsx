import { Star } from "lucide-react";
import type { StatItem } from "../types/stats";


type StatsProps = {
    stats: StatItem[] | null
};

function getValueTextColorByLabel(label: string): string {
  if (label === "Completed") {
    return "text-completed";
  } else if (label === "Abandoned") {
    return "text-abandoned";
  }
  return "text-white";
}

export default function Stats({stats} : StatsProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats && stats.map((stat) => (
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
  );
}
