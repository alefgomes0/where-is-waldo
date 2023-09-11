import { useEffect, useState } from "react";
import { formatTimer } from "../../utils/formatTime";
import { useGameContext } from "../../types/useGameContext";
import { useParams } from "react-router";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const { gameFinished, setFinishedTime } = useGameContext();
  const [running, setRunning] = useState(true);
  const { cityName } = useParams();
  const viridian = cityName === "viridian";

  useEffect(() => {
    if (gameFinished) {
      setFinishedTime(time);
      setRunning(false);
    }

    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running, setTime, gameFinished, setFinishedTime, time]);

  return (
    <div className="justify-self-end row-start-1 row-end-2 col-start-3 col-end-4">
      <p className={`text-lg ${viridian ? "text-gray-300" : "text-gray-700"} `}>
        {formatTimer(time)}
      </p>
    </div>
  );
};
