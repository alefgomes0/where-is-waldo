import { Selector } from "../Selector/Selector";
import { FeedbackMessage } from "../FeedbackMessage/FeedbackMessage";
import { useGameContext } from "../../types/useGameContext";
import { useEffect } from "react";
import axios from "axios";

export const MainGameLoop = () => {
  const { checkAnswer, setCheckAnswer, setGameFinished } = useGameContext();
  const { foundPokemon, requestError, pokemonName, rightAnswer } = checkAnswer;

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pokemon");
        console.log(response.data[0].allPokemons);
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
  }, []);

  useEffect(() => {
    const calculateRemainingPokemons = () => {
      const remainingPokemons = foundPokemon.filter(
        (pokemon) => pokemon.found === true
      );
      if (remainingPokemons.length === 3) setGameFinished(true);
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
    </>
  );
};
