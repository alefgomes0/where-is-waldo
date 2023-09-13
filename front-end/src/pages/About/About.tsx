import { Header } from "../../components/Header/Header";

export const About = () => {
  return (
    <>
      <Header backgroundColor="bg-gray-50" textColor="text-black" />
      <main className="grid grid-cols-1 grid-rows-1 h-[calc(100dvh-50px)] bg-gradient-to-r from-sky-500 to-indigo-500 px-16">
        <div className="flex flex-col gap-6 text-2xl text-neutral-700  mt-16">
          <h3>
            This is a project, based on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Where%27s_Wally%3F"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-4"
            >
              Where is Wally
            </a>{" "}
            puzzle books, made to the{" "}
            <a
              href="https://www.theodinproject.com/"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-4"
            >
              The Odin Project
            </a>{" "}
            webstack curriculum.
          </h3>
          <h3>
            The first map (Pallet Town) was made by{" "}
            <a
              href="https://www.reddit.com/user/LordLibidan/"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-4"
            >
              LordLibidan
            </a>{" "}
          </h3>
          <h3>
            The second map (Viridian City) was taken from{" "}
            <a
              href="https://www.reddit.com/user/LordLibidan/"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-4"
            >
              WallpaperDog
            </a>{" "}
          </h3>
          <h3>Pokemon is a trademark of Nintendo</h3>
          <h3>
            The project was made by{" "}
            <a
              href="http://alefg.com"
              rel="noreferrer"
              className="underline decoration-slate-700 underline-offset-4"
            >
              Alexandre Gomes
            </a>
          </h3>
        </div>
      </main>
    </>
  );
};
