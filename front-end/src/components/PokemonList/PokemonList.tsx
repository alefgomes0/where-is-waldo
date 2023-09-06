import axios from "axios";

type PokemonListProps = {
  x: number;
  y: number;
  pageYPosition: number;
};

export const PokemonList = ({ x, y, pageYPosition }: PokemonListProps) => {
  const checkSelectedPokemon = async (name: string) => {
    try {
      await axios({
        method: "post",
        url: "http://localhost:3000/pokemon",
        data: {
          name: name,
          width: window.innerWidth / x,
          height: pageYPosition
        }
      })
    } catch (err) {
      console.error(err);
    }
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
        onClick={() => checkSelectedPokemon("Warturtle")}
        className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2"
      >
        <img
          src="/images/warturtle.png"
          alt="warturtle, the pokemon"
          className="w-12 h-12 rounded"
        />
        <h5 className="text-neutral-200">Warturtle</h5>
      </button>
      <button className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2">
        <img
          src="/images/jolteon.png"
          alt="jolteon, the pokemon"
          className="w-12 h-12 rounded"
        />
        <h5 className="text-neutral-200">Jolteon</h5>
      </button>
      <button className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2">
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
