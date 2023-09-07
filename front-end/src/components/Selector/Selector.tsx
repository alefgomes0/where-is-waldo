import { useEffect, useState, useRef } from "react";
import { CircleAround } from "../CircleAround/CircleAround";
import { PokemonList } from "../PokemonList/PokemonList";
import { checkAnswer } from "../../types/checkAnswer";

type PositionProps = {
  x: number;
  y: number;
};

type SelectorProps = {
  setAnswer: React.Dispatch<React.SetStateAction<checkAnswer>>
}

export const Selector = ({ setAnswer }: SelectorProps) => {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });
  const [showSelector, setShowSelector] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const pageYPosition = useRef<number>(0);

  useEffect(() => {
    const changeCirclePosition = (e: MouseEvent) => {
      if (divRef.current?.contains(e.target as Node)) return;
      setPosition({ x: e.clientX, y: e.clientY });
      setShowSelector(!showSelector);
      pageYPosition.current = e.pageY;
    };

    window.addEventListener("click", changeCirclePosition);

    return () => window.removeEventListener("click", changeCirclePosition);
  }, [position, showSelector]);

  return (
    <div ref={divRef} className={`${showSelector ? "grid" : "hidden"}`}>
      <CircleAround x={position.x} y={position.y} />
      <PokemonList
        x={position.x}
        y={position.y}
        pageYPosition={pageYPosition.current}
        hideSelector={() => setShowSelector(!showSelector)}
        setAnswer={setAnswer}
      />
    </div>
  );
};
