import { useEffect } from "react";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { Footer } from "../../components/Footer/Footer";
import { HomeMainContent } from "../../components/HomeMainContent/HomeMainContent";
import { useGameContext } from "../../types/useGameContext";

export const Home = () => {
  const {
    setCheckAnswer,
    setGameFinished,
    setFinishedTime,
    setRightAnswerPosition,
  } = useGameContext();

  useEffect(() => {
    setCheckAnswer({
      requestError: "",
      rightAnswer: false,
      pokemonName: "start",
      foundPokemon: [],
    });
    setGameFinished(false);
    setFinishedTime(0);
    setRightAnswerPosition([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeHeader />
      <HomeMainContent />
      <Footer textColor="text-emerald-50" backgroundColor="bg-emerald-600"/>
    </>
  );
};
