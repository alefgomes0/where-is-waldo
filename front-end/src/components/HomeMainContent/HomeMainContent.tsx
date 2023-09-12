import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/useWindowSize";

export const HomeMainContent = () => {
  const windowSize = useWindowSize();

  let defineImage: string;
  if (windowSize < 750) defineImage = "-mb";
  else if (windowSize > 750 && windowSize < 1250) defineImage = "-eq";
  else defineImage = "";

  return (
    <main className="relative grid grid-rows-1 grid-cols-1 overflow-hidden">
      <div className="grid grid-cols-1 grid-rows-1 h-[cal(100dvh-75px)] w-screen lg:w-[auto]">
        <img
          src={`/images/lp-bg${defineImage}.png`}
          alt="a forest with trees, birds and clouds on the background"
          height="100%"
          width="100%"
        />
      </div>
      <Link
        className="absolute top-[25%] left-[20%]"
        to="map/pallet"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <div className="w-96 h-[450px] bg-transparent"></div>
      </Link>
      <Link
        className="absolute top-[25%] right-[20%]"
        to="map/viridian"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <div className="w-96 h-[450px] bg-transparent"></div>
      </Link>
    </main>
  );
};
