import { useState } from "react";
import { checkAnswer } from "../../types/checkAnswer";
import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";

export const MainGameLoop = () => {
  const [checkAnswer, setCheckAnswer] = useState<checkAnswer>({
    requestError: "",
    rightAnswer: false,
    pokemonName: "",
  });
  return (
    <>
      <Selector
        setAnswer={setCheckAnswer}
      />
      <FeedbackMessage
        rightAnswer={checkAnswer.rightAnswer}
        pokemonName={checkAnswer.pokemonName}
        requestError={checkAnswer .requestError}
      />
    </>
  );
};
