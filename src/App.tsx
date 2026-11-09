import Header from "./components/Header";
import "@fontsource-variable/inter";
import Home from "./pages/home/Home";
import { MobileNavigation } from "./components/Navigation";

function App() {
  return (
    <div className="bg-background min-h-dvh">
      <Header />

      <div className="px-3">
        <Home />
      </div>

      <MobileNavigation/>
    </div>
  );
}

export default App;
