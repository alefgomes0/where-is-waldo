import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { GameContextProvider } from "./context/gameContext";
import { City } from "./components/City/City";
import { About } from "./pages/About/About";

const App = () => {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="map">
            <Route path=":cityName" element={<City />} />
          </Route>
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
};

export default App;
