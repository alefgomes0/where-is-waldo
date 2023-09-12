import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/useWindowSize";

export const HomeMainContent = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);

  return (
    <main className="relative grid grid-rows-1 grid-cols-1">
      <div className="grid grid-cols-1 grid-rows-1 w-screen lg:w-[auto]">
        {windowSize > 768 ? (
          <img
            src="/images/lp-bg.png"
            alt="a forest with trees, birds and clouds on the background"
            height="calc(100dvh-75px)"
            width="100%"
          />
        ) : (
          <img
            src="/images/lp-bg-mb.png"
            alt="a forest with trees, birds and clouds on the background"
            width="100%"
            height="calc(100dvh-75px)"
          />
        )}
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
