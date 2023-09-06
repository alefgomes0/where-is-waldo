import { useEffect, useState } from "react";

type PositionProps = {
  x: number;
  y: number;
};

export const Selector = () => {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });
  const [showSelector, setShowSelector] = useState<boolean>(false);

  const topPosition =
    position.y + 300 >= window.innerHeight
      ? position.y - 285 + "px"
      : position.y + "px";

  const bottomPosition =
    position.y + 300 >= window.innerHeight
      ? position.y + "px"
      : position.y + 200 + "px";

  const rightPosition =
    position.x + 200 >= window.innerWidth + 20
      ? position.x - 200 + "px"
      : position.x + 200 + "px";

  const leftPosition =
    position.x + 200 <= window.innerWidth + 20
      ? position.x + 28 + "px"
      : position.x - 162 + "px";


  useEffect(() => {
    const changeCirclePosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
      setShowSelector(!showSelector);
    };

    window.addEventListener("click", changeCirclePosition);

    return () => window.removeEventListener("click", changeCirclePosition);
  }, [position, showSelector]);

  const circleStyle = {
    top: position.y - 25 + "px",
    bottom: position.y + 25 + "px",
    right: position.x + 25 + "px",
    left: position.x - 25 + "px",
  };

  const dropDownStyle = {
    top: topPosition,
    bottom: bottomPosition,
    right: rightPosition,
    left: leftPosition,
  };

  return (
    <div
      className={`${
        showSelector
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed border-2 border-red-500 border-dotted rounded-full w-[50px] h-[50px]"
        style={{
          ...circleStyle,
        }}
      ></div>
      <div
        className="grid grid-cols-1 grid-rows-3 fixed w-max h-72 bg-neutral-600 rounded"
        style={{ ...dropDownStyle }}
      >
        <button className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2">
          <img
            src="/images/warturtle.png"
            alt="warturtle, the pokemon"
            className="w-12 h-12 rounded"
          />
          <h5 className="text-neutral-200">Warturtle</h5>
        </button>
        <button className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2">
          <img
            src="/images/jolteon.png"
            alt="jolteon, the pokemon"
            className="w-12 h-12 rounded"
          />
          <h5 className="text-neutral-200">Jolteon</h5>
        </button>
        <button className="flex items-center w-full justify-self-center w-full h-full hover:bg-neutral-500 transition-colors gap-1 px-2">
          <img
            src="/images/ivysaur.png"
            alt="ivysaur, the pokemon"
            className="w-12 h-12 rounded"
          />
          <h5 className="text-neutral-200">Ivysaur</h5>
        </button>
      </div>
    </div>
  );
};
