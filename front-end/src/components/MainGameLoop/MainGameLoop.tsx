import { useState } from "react";
import { checkAnswer } from "../../types/checkAnswer";
import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";

export const MainGameLoop = () => {
  const [checkAnswer, setCheckAnswer] = useState<checkAnswer>({
    rightAnswer: false,
    pokemonName: "",
  });
  return (
    <>
      <Selector />
      <FeedbackMessage
        rightAnswer={checkAnswer.rightAnswer}
        pokemonName={checkAnswer.pokemonName}
      />
    </>
  );
};
