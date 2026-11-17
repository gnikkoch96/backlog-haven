import Header from "./components/Header";
import "@fontsource-variable/inter";
import Home from "./pages/home/Home";
import { MobileNavigation } from "./components/Navigation";
import Collections from "./pages/collections/Collections";

function App() {
  return (
    <div className="bg-background min-h-dvh">
      <Header />

      <div className="px-3">
        {/* <Home /> */}
        <Collections/>
      </div>

      <MobileNavigation/>
    </div>
  );
}

export default App;
