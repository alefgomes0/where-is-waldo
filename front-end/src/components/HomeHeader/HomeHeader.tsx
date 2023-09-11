import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <header className="h-[35px] grid grid-rows-1 grid-cols-1 items-center px-16 bg-blue-100 text-gray-900">
      <div className="flex items-center justify-self-end gap-6 row-start-1 row-end-2 col-start-1 col-end-2">
        <Link to="leaderboard">
          <h3 className="text-xl opacity-70">Leaderboard</h3>
        </Link>
        <Link to="about">
          <h3 className="text-xl opacity-70">About</h3>
        </Link>
      </div>
    </header>
  );
};
