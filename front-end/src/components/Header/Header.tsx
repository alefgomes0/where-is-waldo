import { useGameContext } from "../../types/useGameContext";
import { Timer } from "../Timer/Timer";

export const Header = () => {
  const { checkAnswer } = useGameContext();
  const { foundPokemon } = checkAnswer;


  return (
    <header className="grid grid-rows-1 grid-cols-[2fr_3fr_1fr] items-center px-8 pt-4 shadow-[0_2px_2px_0_rgba(0,0,0,0.3)] ">
      <h1 className="text-3xl font-semibold">Where is...</h1>
      <div className="flex items-center gap-6 justify-self-end">
        <div className="flex items-center gap-2">
          <img src="/images/warturtle.png" alt="war turtle, the pokemon" />
          <h3 className={`${foundPokemon.includes("Warturtle") ? "line-through decoration-red-300" : ""}`}>Warturtle</h3>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/jolteon.png" alt="jolteon, the pokemon" />
          <h3 className={`${foundPokemon.includes("Jolteon") ? "line-through decoration-red-300" : ""}`}>Jolteon</h3>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/ivysaur.png" alt="ivysaur, the pokemon" />
          <h3 className={`${foundPokemon.includes("Ivysaur") ? "line-through decoration-red-300" : ""}`}>Ivysaur</h3>
        </div>
      </div>
      <Timer />
    </header>
  );
};
