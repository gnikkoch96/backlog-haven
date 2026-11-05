import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const currentPlays = [
  {
    id: 1,
    title: "God of War",
    platform: "PS5",
    system: "Rog Ally",
    genre: "Action RPG",
    status: "playing",
    start_date: "2026-10-12",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
  },
  {
    id: 2,
    title: "Naruto Uzumaki Chronicles",
    platform: "PS2",
    system: "Rog Ally",
    genre: "Action RPG",
    status: "playing",
    start_date: "2026-10-21",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co49yj.jpg",
  },
  {
    id: 3,
    title: "40 Winks",
    platform: "NS",
    system: "Rog Ally",
    genre: "Platformer",
    status: "playing",
    start_date: "2026-10-30",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1t9w.jpg",
  },
  {
    id: 4,
    title: "Frog Feast",
    platform: "PC",
    system: "Rog Ally",
    genre: "Platformer",
    status: "playing",
    start_date: "2026-11-04",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co9spw.jpg",
  },
];

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const AUTO_SCROLL_DELAY = 7000;
const PAUSE_SCROLL_TIMER = 10000;
const MAX_CURRENT_PLAYS = 10;

// accepts strings that are ISO format
const getElapsedDays = (startDate: string): string => {
  const elapsedDays = Math.floor(
    (Date.now() - new Date(startDate).getTime()) / MS_PER_DAY,
  );

  return elapsedDays === 0
    ? "today"
    : elapsedDays === 1
      ? "yesterday"
      : elapsedDays < 0
        ? "in the future? Nani!?"
        : `${elapsedDays} days ago`;
};

export default function CurrentPlays() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion:reduce)").matches,
  );
  const [isPageVisible, setIsPageVisible] = useState(!document.hidden);

  const carouselRef = useRef<HTMLUListElement>(null);
  const pauseTimerRef = useRef<number | null>(null);

  const displayedCurrentPlays = currentPlays.slice(0, MAX_CURRENT_PLAYS);

  const isFirstGame = activeIndex === 0;
  const isLastGame = activeIndex === displayedCurrentPlays.length - 1;

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slide = carousel.querySelector<HTMLElement>(
      `[data-index="${index}"]`,
    );

    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const pauseAutoScroll = () => {
    setIsAutoScrollPaused(true);

    if (pauseTimerRef.current !== null) {
      window.clearTimeout(pauseTimerRef.current);
    }

    pauseTimerRef.current = window.setTimeout(() => {
      setIsAutoScrollPaused(false);
      pauseTimerRef.current = null;
    }, PAUSE_SCROLL_TIMER);
  };

  // visibility listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // reduced-motion listener
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // intersection observer setup (for auto-scroll)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const centeredSlide = entries.find((entry) => entry.isIntersecting);

        if (!centeredSlide) return;

        const index = Number(centeredSlide.target.getAttribute("data-index"));

        setActiveIndex(index);
      },
      {
        root: carousel,
        rootMargin: "0px -40% 0px -40%",
        threshold: 0,
      },
    );

    const slides = carousel.querySelectorAll("li");
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  // auto-scroll
  useEffect(() => {
    // if any of these are true we don't auto scroll
    if (isAutoScrollPaused || prefersReducedMotion || !isPageVisible) return;

    const timer = window.setTimeout(() => {
      const nextIndex =
        activeIndex === displayedCurrentPlays.length - 1 ? 0 : activeIndex + 1;
      scrollToSlide(nextIndex);
    }, AUTO_SCROLL_DELAY);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isAutoScrollPaused, prefersReducedMotion, isPageVisible]);

  // handles pause timer cleanup during unmount (for auto-scroll)
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  return (
    <section aria-labelledby="current-plays-heading" className="home-section">
      {/* current playing text + view all */}
      <div className="flex justify-between">
        <h2
          id="current-plays-heading"
          className="text-text-primary font-semibold"
        >
          Currently Playing
        </h2>
        {/* todo replace with Link from react-router library */}
        <a href="#" className="text-accent">
          View All &gt;
        </a>
      </div>

      {/* image carousel */}
      <div
        className="relative isolate overflow-hidden rounded-xl  -mx-3 -mb-3"
        onFocus={pauseAutoScroll}
      >
        {/* blurred background */}
        <img
          src={displayedCurrentPlays[activeIndex].coverUrl}
          alt={``}
          className="absolute pointer-events-none blur-sm w-full h-full object-cover -z-10 opacity-70"
          aria-hidden="true"
        />

        {!isFirstGame && (
          <button
            type="button"
            aria-label="previous game"
            className={`absolute flex justify-center items-center top-[40%] left-[20%] text-text-primary bg-surface rounded-full z-10 border border-accent/30`}
            onClick={() => {
              scrollToSlide(activeIndex - 1);
              pauseAutoScroll();
            }}
          >
            <ChevronLeft />
          </button>
        )}

        {!isLastGame && (
          <button
            type="button"
            aria-label="next game"
            className={`absolute flex justify-center items-center top-[40%] right-[20%] text-text-primary bg-surface rounded-full z-10 border border-accent/30`}
            onClick={() => {
              scrollToSlide(activeIndex + 1);
              pauseAutoScroll();
            }}
          >
            <ChevronRight />
          </button>
        )}

        <ul
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-[15%] "
          onPointerDown={pauseAutoScroll}
          onWheel={pauseAutoScroll}
        >
          {/* Leading spacer: gives the first slide enough room to center */}
          <li aria-hidden="true" className="shrink-0 w-[15%]" />

          {/* content */}
          {displayedCurrentPlays.map((game, index) => (
            <li
              key={game.id}
              data-index={index}
              className={`flex justify-center items-center  border-text-muted shrink-0 w-[70%] snap-center overflow-hidden transition duration-300 ${activeIndex === index ? "scale-90 opacity-90" : "scale-70 opacity-50"}`}
            >
              <div className="flex flex-col items-center gap-2 justify-center">
                <img
                  src={game.coverUrl}
                  alt={`${game.title} cover art`}
                  className="w-40 shadow-xl"
                  loading="lazy"
                />

                {/* metadata */}
                <div className="flex flex-col gap-1 justify-center items-center">
                  {/* title */}
                  <p className="text-text-primary font-bold text-center line-clamp-2 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
                    {game.title}
                  </p>

                  {/* tags */}
                  <div className="flex gap-2">
                    <span className="bg-surface rounded px-2 text-text-primary line-clamp-1">
                      {game.platform}
                    </span>
                    <span className="bg-surface rounded px-2 text-text-primary line-clamp-1">
                      {game.system}
                    </span>
                  </div>

                  {/* date */}
                  <p className="text-text-primary/90">
                    Started {getElapsedDays(game.start_date)}
                  </p>
                </div>
              </div>
            </li>
          ))}

          {/* Trailing spacer: gives the last slide enough room to center */}
          <li aria-hidden="true" className="shrink-0 w-[15%]" />
        </ul>
      </div>
    </section>
  );
}
