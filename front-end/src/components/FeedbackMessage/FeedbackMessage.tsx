type FeedbackMessageProps = {
  requestError: string;
  rightAnswer: boolean;
  pokemonName: string;
};

export const FeedbackMessage = ({
  requestError,
  rightAnswer,
  pokemonName,
}: FeedbackMessageProps) => {
  return (
    <div className="fixed flex items-center justify-center w-full text-black text-center h-36 bg-black top-[25%] bg-transparent pointer-events-none">
      {requestError ? (
        <div className="border-4 border-gray-400 bg-red-400 text-white px-16 md:px-32 py-2 rounded ">
          <h3>
            Something went wrong... Try again later or check your connection
          </h3>
          <h4>{requestError}</h4>
        </div>
      ) : (
        <>
          {rightAnswer ? (
            <div
              key={Math.random()}
              className="opacity-0 border-8 border-green-400 bg-gray-50 px-16 md:px-32 py-2 rounded animate-[fade_3s_ease-in-out]"
            >
              <h3>You've found {pokemonName}!</h3>
            </div>
          ) : (
            <div
              key={Math.random()}
              className={`opacity-0 border-8 border-red-400 bg-gray-50 px-16 md:px-32 py-2 rounded ${
                pokemonName === "start" ? "" : "animate-[fade_3s_ease-in-out]"
              }`}
            >
              <h3>That's not {pokemonName}...</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};
