import { Link } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <header className="h-[50px] grid grid-rows-1 grid-cols-2 items-center px-16 bg-gradient-to-b from-neutral-100 to-neutral-200">
      <Link to="/">
        <h1 className="text-3xl opacity-90">Find the Pokemon</h1>
      </Link>
      <div className="flex items-center justify-self-end gap-6">
        <Link to="leaderboard">
          <h3 className="text-xl opacity-80">Leaderboard</h3>
        </Link>
        <Link to="about">
          <h3 className="text-xl opacity-80">About</h3>
        </Link>
      </div>
    </header>
  );
};
