import { useState } from "react";
import { checkAnswer } from "../../types/checkAnswer";
import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";

export const MainGameLoop = () => {
  const [checkAnswer, setCheckAnswer] = useState<checkAnswer>({
    requestError: "",
    rightAnswer: false,
    pokemonName: "start",
  });
  return (
    <>
      <Selector
        setAnswer={setCheckAnswer}
      />
      <FeedbackMessage
        key={Math.random()}
        rightAnswer={checkAnswer.rightAnswer}
        pokemonName={checkAnswer.pokemonName}
        requestError={checkAnswer .requestError}
      />
    </>
  );
};
