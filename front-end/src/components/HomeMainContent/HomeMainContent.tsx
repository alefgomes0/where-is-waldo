export const HomeMainContent = () => {
  return (
    <main className="h-[calc(100dvh-75px)] grid items-center bg-gradient-to-b from-neutral-300 to-neutral-400 px-16">
      <div className="w-fit h-fit grid grid-rows-[auto_1fr] gap-6 auto-cols-fit">
        <h3 className="text-3xl font-semibold opacity-[85%] col-start-1 col-end-3">
          Choose a map
        </h3>


        <div className="flex flex-col row-start-2 row-end-3 col-start-1 col-end-2 gap-2">
          <h4 className="text-lg">Pallet Town</h4>
          <img
            src="/images/pokemon-bg.png"
            alt="an amalgamation ok pokemons"
            width={200}
            height={250}
          />
          <button className="w-min h-min px-16 py-4 rounded bg-blue-500 text-blue-50 text-lg font-semibold">
            Start
          </button>
        </div>
        <div className="flex flex-col row-start-2 row-end-3 col-start-2 col-end-3 gap-2">
          <h4 className="text-lg">fsdfsadsa</h4>
          <img
            
            src="/images/pokemon-bg2.png"
            alt="an amalgamation ok pokemons"
            width={400}
            height={250}
          />
          <button className="w-min h-min px-16 py-4 rounded bg-blue-500 text-blue-50 text-lg font-semibold">
            Start
          </button>
        </div>
      </div>
    </main>
  );
};
