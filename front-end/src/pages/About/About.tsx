import { Header } from "../../components/Header/Header";

export const About = () => {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 grid-rows-1 h-[calc(100dvh-75px)] bg-gradient-to-r from-sky-500 to-indigo-500 px-16">
        <div className="text-2xl text-neutral-300  mt-16">
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
        </div>
      </main>
    </>
  );
};
