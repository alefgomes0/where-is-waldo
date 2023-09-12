import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const Leaderboard = () => {
  const [active, setActive] = useState("pallet");

  return (
    <>
      <Header />
      <main className="h-[calc(100dvh-75px)] px-16">
        <h2 className="text-4xl mt-16">Leaderboard</h2>
        <nav className="flex gap-2 mt-4 mb-8">
          <Link
            to="pallet"
            onClick={() => setActive("pallet")}
            className={`border-2 border-gray-700 rounded-lg px-4 ${
              active === "pallet" ? "opacity-100" : "opacity-60"
            } transition-opacity`}
          >
            Pallet Town
          </Link>
          <Link
            to="viridian"
            onClick={() => setActive("viridian")}
            className={`border-2 border-gray-700 rounded-lg px-4 ${
              active === "viridian" ? "opacity-100" : "opacity-60"
            } transition-opacity`}
          >
            Viridian City
          </Link>
        </nav>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
