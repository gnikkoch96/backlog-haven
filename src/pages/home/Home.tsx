import GameStats from "./GameStats";

export default function Home() {
  const currentHour = new Date().getHours();
  const greetingMsg =
    currentHour < 12
      ? "Good morning, User"
      : currentHour < 17
        ? "Good afternoon, User"
        : "Good evening!, User";

  return (
    <main className="flex flex-col gap-3">
      {/* gretting message */}
      <div className="text-text-primary px-2">
        <h1 className="text-2xl font-bold">{greetingMsg} </h1>
        <p className="text-text-muted">Here's your gaming overview.</p>
      </div>

      {/* gaming stats */}
      <GameStats/>
      
      {/* currently playing */}
      {/* recent completion */}
    </main>
  );
}
