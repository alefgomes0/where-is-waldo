import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { GameContextProvider } from "./context/gameContext";
import { City } from "./components/City/City";
import { About } from "./pages/About/About";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { LeaderboardContent } from "./components/LeaderboardContent/LeaderboardContent";

const App = () => {
  return (
    <BrowserRouter>
      <GameContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="map">
            <Route path=":cityName" element={<City />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="leaderboard" element={<Leaderboard />}>
            <Route
              path="pallet"
              element={<LeaderboardContent map="pallet" />}
            />
            <Route
              path="viridian"
              element={<LeaderboardContent map="viridian" />}
            />
          </Route>
        </Routes>
      </GameContextProvider>
    </BrowserRouter>
  );
};

export default App;
