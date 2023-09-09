import { PositionProps } from "../../types/positionProps";

type MarkerProps = {
  rightAnswerPosition: PositionProps[];
};

export const Marker = ({ rightAnswerPosition }: MarkerProps) => {
  console.log(rightAnswerPosition)
  return rightAnswerPosition.map((position) => {
    return (
      <div
        key={`${position.x}-${position.y}`}
        style={{
          top: position.y - 25 + "px",
          bottom: position.y + 25 + "px",
          right: position.x + 25 + "px",
          left: position.x - 25 + "px",
        }}
        className="fixed border-4 border-red-600 border-dashed rounded-full w-[50px] h-[50px]"
      ></div>
    );
  });
};
