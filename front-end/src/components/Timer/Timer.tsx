import { useEffect, useState } from "react";
import { formatTimer } from "../../utils/formatTime";
import { useGameContext } from "../../types/useGameContext";

export const Timer = () => {
  const [time, setTime] = useState(0);
  const { gameFinished, setFinishedTime } = useGameContext();
  const [running, setRunning] = useState(true);

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
    <div className="justify-self-end">
      <p className="text-lg text-gray-700">{formatTimer(time)}</p>
    </div>
  );
};
