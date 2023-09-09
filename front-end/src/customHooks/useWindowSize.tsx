import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return windowSize;
};
