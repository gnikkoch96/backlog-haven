import { useState } from "react";

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
    genre: "Simulation RPG",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co49yj.jpg",
  },
  {
    id: 3,
    title: "Celeste",
    platform: "Nintendo Switch",
    genre: "Platformer",
    status: "playing",
    coverUrl:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1trw.jpg",
  },
];

export default function CurrentPlays() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
      <div className="relative isolate overflow-hidden">
        {/* blurred background */}
        <img
          src={currentPlays[activeIndex].coverUrl}
          alt={`${currentPlays[activeIndex].title} cover art background image`}
          className="absolute scale-110 pointer-events-none blur-sm w-full -z-10"
          aria-hidden="true"
        />

        <ul className=" flex gap-3 overflow-x-auto snap-x snap-mandatory">
          {currentPlays.map((game) => (
            <li
              key={game.id}
              className="flex justify-center items-center border border-text-muted shrink-0 w-full snap-center overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={game.coverUrl}
                  alt={`${game.title} cover art`}
                  className="w-40 shadow-xl"
                />

                {/* metadata */}
                <div>
                  <p className="text-text-primary font-bold">{game.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
