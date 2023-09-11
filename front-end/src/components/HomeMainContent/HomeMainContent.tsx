import { Link } from "react-router-dom";

export const HomeMainContent = () => {
  return (
    <main className="relative grid grid-rows-1 grid-cols-1">
      <div
        className={`h-[calc(125dvh-125px)] bg-[url('/images/lp-bg.png')] bg-no-repeat md:bg-center bg-contain md:bg-cover`}
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
