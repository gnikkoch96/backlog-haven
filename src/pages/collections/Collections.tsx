import { useState } from "react";
import { gameData } from "../../mocks/gameData";
import CollectionStats from "./CollectionStats";
import GameLibrary from "./GameLibrary";

export default function Collections() {
  const [games, setGames] = useState(gameData);

  return (
    <main className="flex flex-col gap-3 pb-18">
      {/* option: banner */}

      {/* collection stats */}
      <CollectionStats games={games} />

      {/* game library */}
      <GameLibrary games={games} />
    </main>
  );
}
