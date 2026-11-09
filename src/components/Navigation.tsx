import { Home, PlayingCardsFan, RotateCcwClock } from "lucide-react";

const navItems = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Collections", href: "/collection", icon: PlayingCardsFan },
  { label: "History", href: "/history", icon: RotateCcwClock },
];

export function MobileNavigation() {
  return (
    <nav
      aria-label="mobile navigation"
      className="fixed bottom-0 inset-x-0 flex justify-around py-3 bg-surface border border-text-muted/30 z-10"
    >
      {navItems.map(({ label, href, icon: Icon }) => {
        return (
          // todo replace with react-router once we have it
          <a
            key={label}
            href={href}
            className="flex flex-col justify-center items-center text-text-muted"
          >
            <Icon className="size-5"/>
            <span className="text-xs">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
