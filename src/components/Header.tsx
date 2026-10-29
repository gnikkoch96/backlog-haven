import { Gamepad2, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="relative isolate px-2">
      {/* dark overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-20 bg-linear-to-b from-background/90 to-transparent -z-10"
      />

      <div className="flex justify-between items-center p-3">
        {/* icon + title */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="text-accent" />
          <p className="text-text-primary font-semibold">Backlog Haven</p>
        </div>

        {/* search icon + profile */}
        <div className="flex gap-2">
          <button>
            <Search className="text-text-primary" />
          </button>
          <div className="flex justify-center items-center rounded-full size-9 bg-blue-300">
            <span className="font-semibold">N</span>
          </div>
        </div>
      </div>
    </header>
  );
}
