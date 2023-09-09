import { Header } from "../../components/Header/Header";
import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop";

export const Home = () => {
  return (
    <div>
      <Header />
      <main className="relative">
        <img
          src="/images/pokemon-bg.png"
          alt="an amalgamation of pokemons"
          className="w-full h-[1000px]"
        />
        <MainGameLoop />
      </main>
    </div>
  );
};
