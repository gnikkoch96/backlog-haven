import Header from "./components/Header";
import "@fontsource-variable/inter";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="bg-background min-h-dvh">
      <Header />

      <div className="px-3">
        <Home />
      </div>
    </div>
  );
}

export default App;
