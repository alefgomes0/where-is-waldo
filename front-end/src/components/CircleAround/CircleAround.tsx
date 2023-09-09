type CircleAroundProps = {
  x: number;
  y: number;
};

export const CircleAround = ({ x, y }: CircleAroundProps) => {
  const circleStyle = {
    top: y - 25 + "px",
    bottom: y + 25 + "px",
    right: x + 25 + "px",
    left: x - 25 + "px",
  };

  return (
    <div
      className="fixed border-4 border-black border-dashed rounded-full w-[50px] h-[50px]"
      style={{
        ...circleStyle,
      }}
    ></div>
  );
};
