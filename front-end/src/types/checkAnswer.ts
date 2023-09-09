import { PokemonProps } from "./pokemon";

export type checkAnswer = {
  requestError: string;
  rightAnswer: boolean;
  pokemonName: string;
  foundPokemon: PokemonProps[];
};