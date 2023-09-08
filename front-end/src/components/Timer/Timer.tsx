import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const formatTimer = (time: number) => {
    const hours = Math.floor((time / 60 / 60) % 24).toString().padStart(2, '0');
    const minutes = Math.floor((time / 60) % 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  
    return `${hours}:${minutes}:${seconds}`;
  };
  

  return (
    <div className="justify-self-end">
      <p className="text-lg text-gray-700">{formatTimer(time)}</p>
    </div>
  );
};
