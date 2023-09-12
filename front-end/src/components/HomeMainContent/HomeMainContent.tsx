import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/useWindowSize";

export const HomeMainContent = () => {
  useWindowSize();

  return (
    <main className="relative grid grid-rows-1 grid-cols-1">
      <div
        className={`h-[150dvh] aspect-[3.6/6.7] sm:aspect-auto md:h-[calc(125dvh-125px)] bg-[url('/images/lp-bg-mb.png')] md:bg-[url('/images/lp-bg-eq.png')] lg:bg-[url('/images/lp-bg.png')] bg-cover md:bg-center md:bg-cover bg-no-repeat`}
      ></div>
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
