import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { PalletTown } from "./pages/PalletTown/PalletTown";
import { GameContextProvider } from "./context/gameContext";
import { ViridianCity } from "./pages/ViridianCity/ViridianCity";

const App = () => {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pallet-town" element={<PalletTown />} />
          <Route path="viridian-city" element={<ViridianCity />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
};

export default App;
