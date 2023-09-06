import { checkAnswer } from "../../types/checkAnswer";

export const FeedbackMessage = ({
  rightAnswer,
  pokemonName,
}: checkAnswer) => {
  return (
    <div className="opacity-0">
      {rightAnswer ? (
        <h3>You've found {pokemonName}!</h3>
      ) : (
        <h3>That's not {pokemonName}...</h3>
      )}
    </div>
  );
};
