import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";
import { useGameContext } from "../../types/useGameContext";
import { useEffect } from "react";
import { GameFinish } from "../GameFinish/GameFinish";
import axios from "axios";
import { useParams } from "react-router";

export const MainGameLoop = () => {
  const {
    checkAnswer,
    setCheckAnswer,
    gameFinished,
    setGameFinished,
    finishedTime,
  } = useGameContext();
  const { foundPokemon, requestError, pokemonName, rightAnswer } = checkAnswer;
  const { cityName } = useParams();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://where-is-waldo-dcr7.onrender.com/pokemon/${cityName}`
        );
        if (response.status === 200)
          setCheckAnswer({
            ...checkAnswer,
            foundPokemon: response.data[0].allPokemons,
          });
      } catch (err) {
        setCheckAnswer({
          ...checkAnswer,
          requestError: `${(err as Error).message}`,
        });
      }
    };
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const calculateRemainingPokemons = () => {
      const poekmons = foundPokemon.filter((pokemon) => pokemon.found === true);
      if (poekmons.length === 3) setGameFinished(true);
    };
    calculateRemainingPokemons();
  }, [foundPokemon, setGameFinished]);

  return (
    <>
      <Selector />
      <FeedbackMessage
        rightAnswer={rightAnswer}
        requestError={requestError}
        pokemonName={pokemonName}
      />
      <GameFinish gameFinished={gameFinished} playerTime={finishedTime} />
    </>
  );
};
