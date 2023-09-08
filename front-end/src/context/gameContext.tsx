import { createContext, useState } from "react";
import { checkAnswer } from "../types/checkAnswer";

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GameContextValues = {
  checkAnswer: {
    requestError: string;
    rightAnswer: boolean;
    pokemonName: string;
    foundPokemon: string[];
  };
  setCheckAnswer: React.Dispatch<React.SetStateAction<checkAnswer>>;
  gameFinished: boolean;
  setGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  finishedTime: number;
  setFinishedTime: React.Dispatch<React.SetStateAction<number>>;
};

export const GameContext = createContext({} as GameContextValues);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [checkAnswer, setCheckAnswer] = useState<checkAnswer>({
    requestError: "",
    rightAnswer: false,
    pokemonName: "start",
    foundPokemon: [],
  });

  const [gameFinished, setGameFinished] = useState(false);
  const [finishedTime, setFinishedTime] = useState(0);

  return (
    <GameContext.Provider
      value={{
        checkAnswer,
        setCheckAnswer,
        gameFinished,
        setGameFinished,
        finishedTime,
        setFinishedTime
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
