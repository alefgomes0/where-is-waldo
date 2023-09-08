import axios from "axios";
import { useGameContext } from "../../types/useGameContext";

type PokemonListProps = {
  x: number;
  y: number;
  pageYPosition: number;
  hideSelector: () => void;
};

export const PokemonList = ({
  x,
  y,
  pageYPosition,
  hideSelector,
}: PokemonListProps) => {
  const { checkAnswer, setCheckAnswer } = useGameContext();
  const checkSelectedPokemon = async (name: string) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/pokemon",
        data: {
          name: name,
          width: window.innerWidth / x,
          height: pageYPosition,
        },
      });
      response.data.message === "right"
        ? setCheckAnswer({
            requestError: "",
            rightAnswer: true,
            pokemonName: name,
            foundPokemon: checkAnswer.foundPokemon.concat(name),
          })
        : setCheckAnswer({
            requestError: "",
            rightAnswer: false,
            pokemonName: name,
            foundPokemon: [...checkAnswer.foundPokemon]
          });
    } catch (err) {
      console.error(err);
      setCheckAnswer({
        requestError: `${(err as Error).message}`,
        rightAnswer: false,
        pokemonName: "",
        foundPokemon: [...checkAnswer.foundPokemon]
      });
    }
  };

  const handleOnClick = (pokemonName: string) => {
    checkSelectedPokemon(pokemonName);
    hideSelector();
  };

  const topPosition = y + 300 >= window.innerHeight ? y - 285 + "px" : y + "px";

  const bottomPosition =
    y + 300 >= window.innerHeight ? y + "px" : y + 200 + "px";

  const rightPosition =
    x + 200 >= window.innerWidth + 20 ? x - 200 + "px" : x + 200 + "px";

  const leftPosition =
    x + 200 <= window.innerWidth + 20 ? x + 28 + "px" : x - 162 + "px";

  const dropDownStyle = {
    top: topPosition,
    bottom: bottomPosition,
    right: rightPosition,
    left: leftPosition,
  };

  return (
    <div
      className="grid grid-cols-1 grid-rows-3 fixed w-max h-72 bg-neutral-600 rounded"
      style={{ ...dropDownStyle }}
    >
      <button
        onClick={() => handleOnClick("Warturtle")}
        className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2"
      >
        <img
          src="/images/warturtle.png"
          alt="warturtle, the pokemon"
          className="w-12 h-12 rounded"
        />
        <h5 className="text-neutral-200">Warturtle</h5>
      </button>
      <button
        onClick={() => handleOnClick("Jolteon")}
        className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2"
      >
        <img
          src="/images/jolteon.png"
          alt="jolteon, the pokemon"
          className="w-12 h-12 rounded"
        />
        <h5 className="text-neutral-200">Jolteon</h5>
      </button>
      <button
        onClick={() => handleOnClick("Ivysaur")}
        className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2"
      >
        <img
          src="/images/ivysaur.png"
          alt="ivysaur, the pokemon"
          className="w-12 h-12 rounded"
        />
        <h5 className="text-neutral-200">Ivysaur</h5>
      </button>
    </div>
  );
};
