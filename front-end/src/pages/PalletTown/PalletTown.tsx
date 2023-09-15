import { MapHeader } from "../../components/MapHeader/MapHeader";
import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop";
import { Marker } from "../../components/Marker/Marker";

export const PalletTown = () => {

  return (
    <div>
      <MapHeader />
      <main className="relative h-fit">
        <img
          src="/images/pokemon-bg.png"
          alt="an amalgamation of pokemons"
          className="w-full h-[1000px]"
        />
        <Marker />
      </main>
      <MainGameLoop />
    </div>
  );
};
