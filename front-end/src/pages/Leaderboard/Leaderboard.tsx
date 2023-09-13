import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const Leaderboard = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <Header backgroundColor="bg-gray-300" textColor="text-neutral-900"/>
      <main className="h-[calc(100dvh-75px)] px-16 bg-gray-50">
        <h2 className="text-4xl pt-16">Leaderboard</h2>
        <nav className="flex gap-2 mt-4 mb-8 text-neutral-700">
          <Link
            to="pallet"
            onClick={() => setActive("pallet")}
            className={`border-2 border-gray-700 rounded-lg px-4 ${
              active === "pallet" ? "opacity-100 bg-blue-300" : "opacity-60"
            } transition-opacity transition-colors`}
          >
            Pallet Town
          </Link>
          <Link
            to="viridian"
            onClick={() => setActive("viridian")}
            className={`border-2 border-gray-700 rounded-lg px-4 ${
              active === "viridian" ? "opacity-100 bg-blue-300" : "opacity-60"
            } transition-opacity transition-colors`}
          >
            Viridian City
          </Link>
        </nav>
        <Outlet />
      </main>
      <Footer backgroundColor="bg-gray-400" textColor="text-neutral-900"/>
    </>
  );
};
