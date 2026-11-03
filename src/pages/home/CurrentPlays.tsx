import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const currentPlays = [
  {
    id: 1,
    title: "God of War",
    platform: "PS5",
    genre: "Action RPG",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg",
  },
  {
    id: 2,
    title: "Naruto Uzumaki Chronicles",
    platform: "PS2",
    genre: "Action RPG",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co49yj.jpg",
  },
  {
    id: 3,
    title: "40 Winks",
    platform: "NS",
    genre: "Platformer",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1t9w.jpg",
  },
  {
    id: 4,
    title: "Frog Feast",
    platform: "PC",
    genre: "Platformer",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co9spw.jpg",
  },
];

export default function CurrentPlays() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLUListElement>(null);

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

  const isFirstGame = activeIndex === 0;
  const isLastGame = activeIndex === currentPlays.length - 1;

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

  return (
    <section className="home-section">
      {/* current playing text + view all */}
      <div className="flex justify-between">
        <h2 className="text-text-primary">Currently Playing</h2>
        {/* todo replace with Link from react-router library */}
        <a href="#" className="text-accent">
          View All &gt;
        </a>
      </div>

      {/* image carousel */}
      <div className="relative isolate overflow-hidden rounded-xl  -mx-3 -mb-3">
        {/* blurred background */}
        <img
          src={currentPlays[activeIndex].coverUrl}
          alt={`${currentPlays[activeIndex].title} cover art background image`}
          className="absolute pointer-events-none blur-sm w-full h-full object-cover -z-10 opacity-70"
          aria-hidden="true"
        />

        {!isFirstGame && (
          <button
            className={`absolute flex justify-center items-center top-[40%] left-[20%] text-text-primary bg-surface rounded-full z-10 border border-accent/30`}
            onClick={() => {
              scrollToSlide(activeIndex - 1);
            }}
          >
            <ChevronLeft />
          </button>
        )}

        {!isLastGame && (
          <button
            className={`absolute flex justify-center items-center top-[40%] right-[20%] text-text-primary bg-surface rounded-full z-10 border border-accent/30`}
            onClick={() => scrollToSlide(activeIndex + 1)}
          >
            <ChevronRight />
          </button>
        )}

        <ul
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-[15%] "
        >
          {/* Leading spacer: gives the first slide enough room to center */}
          <li aria-hidden="true" className="shrink-0 w-[15%]" />

          {currentPlays.map((game, index) => (
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
                />

                {/* metadata */}
                <div className="flex flex-col gap-1 justify-center items-center">
                  {/* title */}
                  <p className="text-text-primary font-bold text-center">
                    {game.title}
                  </p>

                  {/* tags */}
                  <div className="flex gap-2">
                    <span className="bg-surface rounded px-2 text-text-primary">
                      {game.platform}
                    </span>
                    <span className="bg-surface rounded px-2 text-text-primary">
                      {game.genre}
                    </span>
                  </div>
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
