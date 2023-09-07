import { MainGameLoop } from "../../components/MainGameLoop/MainGameLoop"

export const Home = () => {
  return (
    <main>
      <img
        src="/images/pokemon-bg.png"
        alt="an amalgamation of pokemons"
        className="w-full h-[1000px]"
      />
      <MainGameLoop />
    </main>
  )
}