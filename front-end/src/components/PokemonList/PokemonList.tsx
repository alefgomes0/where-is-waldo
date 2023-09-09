import axios from "axios";
import { useGameContext } from "../../types/useGameContext";
import { PokemonProps } from "../../types/pokemon";

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
  const { foundPokemon } = checkAnswer;

  const calculateGridRows = (foundPokemon: PokemonProps[]) => {
    const foundPokemons = foundPokemon.filter(
      (pokemon) => pokemon.found
    ).length;

    if (foundPokemons === 0) return 3;
    else if (foundPokemons === 1) return 2;
    else return 1;
  };

  const changeFoundStatus = (list: PokemonProps[], pokemonName: string) => {
    return list.map((pokemon) => {
      if (pokemon.name !== pokemonName) return pokemon;
      else return { ...pokemon, found: true };
    });
  };

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
            foundPokemon: changeFoundStatus(foundPokemon, name),
          })
        : setCheckAnswer({
            requestError: "",
            rightAnswer: false,
            pokemonName: name,
            foundPokemon: [...foundPokemon],
          });
    } catch (err) {
      console.error(err);
      setCheckAnswer({
        ...checkAnswer,
        requestError: `${(err as Error).message}`,
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
      className={`grid grid-cols-1 grid-rows-${calculateGridRows(
        foundPokemon
      )} fixed w-max h-72 bg-neutral-600 rounded`}
      style={{ ...dropDownStyle }}
    >
      {foundPokemon.map((pokemon) => {
        if (pokemon.found) return;
        return (
          <button
            key={pokemon._id}
            onClick={() => handleOnClick(pokemon.name)}
            className="flex items-center w-full justify-self-center w-full hover:bg-neutral-500 transition-colors gap-1 px-2"
          >
            <img
              src={`/images/${pokemon.name.toLowerCase()}.png`}
              alt={`${pokemon.name}, the pokemon`}
            />
            <h5 className="text-neutral-200">{pokemon.name}</h5>
          </button>
        );
      })}
    </div>
  );
};
