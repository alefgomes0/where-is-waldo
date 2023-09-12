import { VHeader } from "../../components/VHeader/VHeader";
import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop";
import { Marker } from "../../components/Marker/Marker";
import { useWindowSize } from "../../customHooks/useWindowSize";

export const ViridianCity = () => {
  useWindowSize();

  return (
    <div>
      <VHeader />
      <main className="relative h-fit">
        <img
          src="/images/pokemon-bg2.png"
          alt="an amalgamation of pokemons"
          className="h-screen md:aspect-[14/9] sm:h-[1000px]"
        />
        <Marker />
      </main>
      <MainGameLoop />
    </div>
  );
};
