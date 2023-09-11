import { Link } from "react-router-dom";

export const HomeMainContent = () => {
  return (
    <main className="h-[calc(100dvh-75px)] grid items-center justify-items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-violet-50 px-16">
      <div className="w-fit h-fit grid grid-rows-[auto_1fr] gap-6 auto-cols-fit">
        <h3 className="text-3xl font-semibold opacity-[75%] col-start-1 col-end-3 row-start-1 row-end-2 justify-self-center">
          Choose a map
        </h3>

        <div className="flex flex-col row-start-2 row-end-3 col-start-1 col-end-2 gap-2">
          <h4 className="text-xl font-semibold opacity-70">Pallet Town</h4>
          <img
            src="/images/pokemon-bg.png"
            alt="an amalgamation ok pokemons"
            width={200}
            height={250}
          />
          <Link to="/pallet-town">
            <button className="w-min h-min px-16 py-4 rounded bg-blue-500 text-blue-50 text-lg font-semibold">
              Start
            </button>
          </Link>
        </div>

        <div className="flex flex-col row-start-2 row-end-3 col-start-2 col-end-3 gap-2">
          <h4 className="text-xl font-semibold opacity-70">fsdfsadsa</h4>
          <img
            src="/images/pokemon-bg2.png"
            alt="an amalgamation ok pokemons"
            width={400}
            height={250}
          />
          <Link to="/idk">
            <button className="w-min h-min px-16 py-4 rounded bg-blue-500 text-blue-50 text-lg font-semibold">
              Start
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};
