import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";
import { useGameContext } from "../../types/useGameContext";
import { useEffect } from "react";

export const MainGameLoop = () => {
  const { checkAnswer, setGameFinished } = useGameContext();
  const { foundPokemon, requestError, pokemonName, rightAnswer } = checkAnswer;


  useEffect(() => {
    if (foundPokemon.length === 3) setGameFinished(true);
  }, [foundPokemon, setGameFinished]);

  return (
    <>
      <Selector />
      <FeedbackMessage
        rightAnswer={rightAnswer}
        requestError={requestError}
        pokemonName={pokemonName}
      />
    </>
  );
};
