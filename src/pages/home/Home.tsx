export default function Home() {
  const currentHour = new Date().getHours();
  const greetingMsg =
    currentHour < 12
      ? "Good morning, User"
      : currentHour < 17
        ? "Good afternoon, User"
        : "Good evening!, User";

  return (
    <main>
      {/* gretting message */}
      <div className="text-text-primary">
        <h1 className="text-2xl font-bold">{greetingMsg} </h1>
        <p className="text-text-muted">Here's your gaming overview.</p>
      </div>

      {/* gaming stats */}
      {/* currently playing */}
      {/* recent completion */}
    </main>
  );
}
