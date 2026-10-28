import { Gamepad2 } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      {/* icon + title */}
      <div className="flex items-center gap-2">
        <Gamepad2 />
        <p>Backlog Haven</p>
      </div>

      {/* profile */}
      <div className="flex justify-center items-center border rounded-full size-9">
        <span className="font-bold">N</span>
      </div>
    </header>
  );
}
