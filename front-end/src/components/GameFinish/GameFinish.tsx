import { useParams } from "react-router";
import { formatTimer } from "../../utils/formatTime";
import { useState } from "react";
import { useGameContext } from "../../types/useGameContext";
import axios from "axios";

type GameFinishProps = {
  gameFinished: boolean;
  playerTime: number;
};

export const GameFinish = ({ gameFinished, playerTime }: GameFinishProps) => {
  const [showForm, setShowForm] = useState(true);
  const [inputContent, setInputContent] = useState("");
  const [error, setError] = useState("");
  const { cityName } = useParams();
  const { finishedTime } = useGameContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("https://where-is-waldo-dcr7.onrender.com/leaderboard", {
        name: inputContent,
        time: finishedTime,
        formattedTime: formatTimer(finishedTime),
        map: cityName,
      });
      setShowForm(false);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      {gameFinished && showForm ? (
        <div className="fixed top-0 left-50 w-full h-screen grid grid-rows-1 grid-cols-1">
          <div
            className={`opacity-0 grid justify-self-center self-center w-min px-8 h-min py-4 border-4 border-gray-700 bg-gray-900 rounded-lg animate-[in_2s_ease-in-out] text-emerald-50 ${
              gameFinished ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 delay-300`}
          >
            <form
              method=""
              action=""
              className="justify-self-center self-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="name">Enter your name</label>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputContent(e.target.value)
                }
                required
                maxLength={15}
                value={inputContent}
                name="name"
                className="text-neutral-800 mb-2 mt-1 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.2)_inset] border-0 outline-0 focus:ring-2 ring-blue-500"
              />
              <p className="mb-2 font-semibold">
                Your time was: {formatTimer(playerTime)}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="w-min px-8 py-1 bg-emerald-500 text-emerald-50 rounded font-semibold shadow-[0_3px_3px_0_rgba(0,0,0,0.4)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.4)_inset]"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="w-min px-8 py-1 bg-red-500 text-red-50 rounded font-semibold shadow-[0_3px_3px_0_rgba(0,0,0,0.4)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.4)_inset]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
      {error ? (
        <div className="fixed flex items-center justify-center w-full text-black text-center h-36 bg-black top-[25%] bg-transparent pointer-events-none">
          <div className="border-4 border-gray-400 bg-red-400 text-white px-32 py-2 rounded ">
            <h3>
              Something went wrong... Try again later or check your connection
            </h3>
            <h4>{error}</h4>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
