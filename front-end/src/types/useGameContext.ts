import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export const useGameContext = () => {
  return useContext(GameContext);
};
