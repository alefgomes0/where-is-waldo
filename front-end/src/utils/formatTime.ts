export const formatTimer = (time: number) => {
  const hours = Math.floor((time / 60 / 60) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
