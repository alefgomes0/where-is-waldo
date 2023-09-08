import { useGameContext } from "../../types/useGameContext";

export const Header = () => {
  const { checkAnswer } = useGameContext();
  const { foundPokemon } = checkAnswer;

  return (
    <header className="grid grid-rows-1 grid-cols-[2fr_3fr_1fr] items-center px-8 pt-4 shadow-[0_2px_2px_0_rgba(0,0,0,0.3)] ">
      <h1 className="text-4xl font-semibold">Where's...</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/images/warturtle.png" alt="war turtle, the pokemon" />
          <h3>Warturtle</h3>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/jolteon.png" alt="jolteon, the pokemon" />
          <h3>Jolteon</h3>
        </div>
        <div className="flex items-center gap-2">
          <img src="/images/ivysaur.png" alt="ivysaur, the pokemon" />
          <h3>Ivysaur</h3>
        </div>
      </div>
    </header>
  );
};
