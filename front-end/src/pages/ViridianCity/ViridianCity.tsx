import { PTHeader } from "../../components/Header/PTHeader";
import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop";
import { Marker } from "../../components/Marker/Marker";


export const ViridianCity = () => {
  return (
      <div>
        <PTHeader />
        <main className="relative h-fit">
          <img
            src="/images/pokemon-bg2.png"
            alt="an amalgamation of pokemons"
            className="w-full h-[1000px]"
          />
          <Marker />
        </main>
        <MainGameLoop />
      </div>
  )
}