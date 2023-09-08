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
};

export const GameContext = createContext({} as GameContextValues);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [checkAnswer, setCheckAnswer] = useState<checkAnswer>({
    requestError: "",
    rightAnswer: false,
    pokemonName: "start",
    foundPokemon: [],
  });

  return (
    <GameContext.Provider
      value={{
        checkAnswer,
        setCheckAnswer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
