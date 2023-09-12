import { Link } from "react-router-dom";
import { useWindowSize } from "../../customHooks/useWindowSize";
import { MouseEventHandler } from "react";

export const HomeMainContent = () => {
  const windowSize = useWindowSize();

  let defineImage: string;
  if (windowSize < 750) defineImage = "-mb";
  else if (windowSize > 750 && windowSize < 1250) defineImage = "-eq";
  else defineImage = "";

  let defineLink: string;
  let defineLink2: string;
  if (defineImage === "-mb") {
    defineLink = "absolute top-[25%] right-[25%]";
    defineLink2 = "absolute top-[56%] left-[25%]";
  } else if (defineImage === "-eq") {
    defineLink = "absolute top-[15%] left-[35%]";
    defineLink2 = "absolute top-[55%] left-[35%]";
  } else {
    defineLink = "absolute top-[20%] left-[20%]";
    defineLink2 = "absolute top-[20%] left-[54%]";
  }

  let defineDiv = "";
  if (defineImage === "-mb") defineDiv = "w-[180px] h-[200px] bg-transparent";
  else if (defineImage === "-eq")
    defineDiv = "w-[360px] h-[350px] bg-transparent";
  if (defineImage === "") defineDiv = "w-96 h-[450px] bg-transparent";

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
        className={defineLink}
        to="map/pallet"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      >
        <div className={defineDiv}></div>
      </Link>
      <Link
        className={defineLink2}
        to="map/viridian"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          window.scrollTo({ top: 0, behavior: "instant" });
        }}
      >
        <div className={defineDiv}></div>
      </Link>
    </main>
  );
};
