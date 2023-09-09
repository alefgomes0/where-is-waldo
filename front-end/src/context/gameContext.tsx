import { createContext, useState } from "react";
import { checkAnswer } from "../types/checkAnswer";
import { PokemonProps } from "../types/pokemon";
import { PositionProps } from "../types/positionProps";

type GameContextProviderProps = {
  children: React.ReactNode;
};

type GameContextValues = {
  checkAnswer: {
    requestError: string;
    rightAnswer: boolean;
    pokemonName: string;
    foundPokemon: PokemonProps[];
  };
  setCheckAnswer: React.Dispatch<React.SetStateAction<checkAnswer>>;
  gameFinished: boolean;
  setGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  finishedTime: number;
  setFinishedTime: React.Dispatch<React.SetStateAction<number>>;
  rightAnswerPosition: PositionProps[];
  setRightAnswerPosition: React.Dispatch<React.SetStateAction<PositionProps[]>>;
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
  const [rightAnswerPosition, setRightAnswerPosition] = useState<
  PositionProps[]
>([]);

  return (
    <GameContext.Provider
      value={{
        checkAnswer,
        setCheckAnswer,
        gameFinished,
        setGameFinished,
        finishedTime,
        setFinishedTime,
        rightAnswerPosition,
        setRightAnswerPosition
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
