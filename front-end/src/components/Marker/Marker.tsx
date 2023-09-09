import { useGameContext } from "../../types/useGameContext";

export const Marker = () => {
  const { rightAnswerPosition } = useGameContext();
  return rightAnswerPosition ? (
    rightAnswerPosition.map((position) => {
      return (
        <div
          key={`${position.x}-${position.y}`}
          style={{
            top: position.y - 25 + "px",
            bottom: position.y + 25 + "px",
            right: position.x + 25 + "px",
            left: position.x - 25 + "px",
          }}
          className="absolute border-4 border-red-600 border-dashed rounded-full w-[50px] h-[50px]"
        ></div>
      );
    })
  ) : (
    <></>
  );
};
