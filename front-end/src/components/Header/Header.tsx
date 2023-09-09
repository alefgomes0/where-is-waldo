import { useGameContext } from "../../types/useGameContext";
import { Timer } from "../Timer/Timer";

export const Header = () => {
  const { checkAnswer } = useGameContext();
  const { foundPokemon } = checkAnswer;

  return (
    <header className="grid grid-rows-1 grid-cols-[2fr_3fr_1fr] items-center px-8 pt-4 shadow-[0_2px_2px_0_rgba(0,0,0,0.3)] ">
      <h1 className="text-3xl font-semibold">Where is...</h1>
      <div className="flex items-center gap-6 justify-self-end">
        {foundPokemon.map((pokemon) => {
          return (
            <div key={pokemon._id} className="flex items-center gap-2">
              <img
                src={`/images/${pokemon.name.toLowerCase()}.png`}
                alt={`${pokemon.name}, the pokemon`}
              />
              <h3
                className={`${
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
