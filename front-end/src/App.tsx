import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { GameContextProvider } from "./context/gameContext";

const App = () => {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
};

export default App;
