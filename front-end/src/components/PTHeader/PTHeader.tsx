import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/useWindowSize";
import { useGameContext } from "../../types/useGameContext";
import { Timer } from "../Timer/Timer";

export const PTHeader = () => {
  const { checkAnswer } = useGameContext();
  const { foundPokemon } = checkAnswer;
  const windowSize = useWindowSize();

  return (
    <header className="grid grid-rows-1 grid-cols-[100px_2fr_auto] md:grid-cols-[2fr_3fr_1fr] items-center h-[68px] px-1 md:px-8 py-8 md:py-2 shadow-[0_2px_2px_0_rgba(0,0,0,0.3)] ">
      <Link to="/" className="col start-1 col-end-2">
        <h1 className="text-2xl md:text-3xl font-semibold row-start-1 row-end-2 col-start-1 col-end-2 opacity-80 pr-6 md:pr-0">
          Where is...
        </h1>
      </Link>
      <div className="flex items-center gap-2 md:gap-6 justify-self-start md:justify-self-end row-start-1 row-end-2 col-start-2 col-end-3">
        {foundPokemon.map((pokemon) => {
          return (
            <div
              key={pokemon._id}
              className="flex flex-col md:flex-row items-center gap-0.5 md:gap-2"
            >
              <img
                src={`/images/${pokemon.name.toLowerCase()}.png`}
                alt={`${pokemon.name}, the pokemon`}
                width={`${windowSize > 768 ? 45 : 30}`}
                height={`${windowSize > 768 ? 45 : 30}`}
              />
              <h3
                className={`text-sm md:text-base ${
                  pokemon.found ? "line-through decoration-red-300" : ""
                }`}
              >
                {pokemon.name}
              </h3>
            </div>
          );
        })}
      </div>
      <Timer />
    </header>
  );
};
