import { checkAnswer } from "../../types/checkAnswer";

export const FeedbackMessage = ({
  requestError,
  rightAnswer,
  pokemonName,
}: checkAnswer) => {
  return (
    <div className="fixed flex items-center justify-center w-full text-black text-center h-36 bg-black top-[25%] bg-transparent">
      {requestError ? (
        <div className="border-4 border-gray-400 bg-red-400 text-white px-32 py-2 rounded">
          <h3>
            Something went wrong... Try again later or check your connection
          </h3>
          <h4>{requestError}</h4>
        </div>
      ) : (
        <>
          {rightAnswer ? (
            <div className="border-4 border-green-400 bg-gray-50 px-32 py-2 rounded">
              <h3>You've found {pokemonName}!</h3>
            </div>
          ) : (
            <div className="border-4 border-red-400 bg-gray-50 px-32 py-2 rounded">
              <h3>That's not {pokemonName}...</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};
