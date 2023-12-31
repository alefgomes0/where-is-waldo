import { Link } from "react-router-dom";

type HeaderProps = {
  backgroundColor: string;
  textColor: string;
};

export const Header = ({ backgroundColor, textColor }: HeaderProps) => {
  return (
    <header
      className={`grid grid-rows-1 grid-cols-1 items-center px-2 md:px-16 h-[50px] ${backgroundColor} ${textColor}`}
    >
      <Link
        to="/"
        className="text-4xl justify-self-start row-start-1 row-end-2 col-start-1 col-end-2"
      >
        <h1>Where is...</h1>
      </Link>
      <nav className="flex items-center justify-self-end gap-6 row-start-1 row-end-2 col-start-1 col-end-2">
        <Link
          to="/leaderboard"
          className="hover:opacity-50 transition-opacity duration-300"
        >
          Leaderboard
        </Link>

        <Link
          to="/about"
          className="hover:opacity-50 transition-opacity duration-300"
        >
          About
        </Link>
      </nav>
    </header>
  );
};
