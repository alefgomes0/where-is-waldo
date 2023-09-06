import { useEffect, useState } from "react";
import { CircleAround } from "../CircleAround/CircleAround";
import { PokemonList } from "../PokemonList/PokemonList";
import axios from "axios";

type PositionProps = {
  x: number;
  y: number;
};

export const Selector = () => {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });
  const [showSelector, setShowSelector] = useState<boolean>(false);

  useEffect(() => {
    const changeCirclePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setShowSelector(!showSelector);
      console.log(position.x, position.y);
      console.log(e.pageX, e.pageY);
      console.log(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("click", changeCirclePosition);

    return () => window.removeEventListener("click", changeCirclePosition);
  }, [position, showSelector]);

  return (
    <div
      className={`${
        showSelector
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <CircleAround x={position.x} y={position.y} />
      <PokemonList x={position.x} y={position.y} />
    </div>
  );
};
