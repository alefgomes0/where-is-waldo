import { useEffect, useState } from "react";

type PositionProps = {
  x: number;
  y: number;
};

export const CircleAroundClick = () => {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });

  useEffect(() => {
    const changeCirclePosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
      console.log(position);
    };

    window.addEventListener("click", changeCirclePosition);

    return () => window.removeEventListener("click", changeCirclePosition);
  });

  const circleStyle = {
    top: position.y - 25 + "px",
    bottom: position.y + 25 + "px",
    right: position.x + 25 + "px",
    left: position.x - 25 + "px",
  };

  return (
    <div
      className="fixed border-2 border-red-500 border-dotted rounded-full w-[50px] h-[50px]"
      style={{
        ...circleStyle,
      }}
    ></div>
  );
};
