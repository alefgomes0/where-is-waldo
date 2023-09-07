import { checkAnswer } from "../../types/checkAnswer";

export const FeedbackMessage = ({
  rightAnswer,
  pokemonName,
}: checkAnswer) => {
  return (
    <div className="opacity-0 fixed flex items-center justify-center w-full text-white text-center h-36 bg-black top-[25%]">
      {rightAnswer ? (
        <h3>You've found {pokemonName}!</h3>
      ) : (
        <h3>That's not {pokemonName}...</h3>
      )}
    </div>
  );
};
