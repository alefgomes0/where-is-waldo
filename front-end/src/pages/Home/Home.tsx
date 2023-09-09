import { Header } from "../../components/Header/Header";
import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop";
import { Marker } from "../../components/Marker/Marker";

export const Home = () => {
  return (
    <div>
      <Header />
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
