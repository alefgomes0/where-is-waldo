import { formatTimer } from "../../utils/formatTime";
import { useState } from "react";

type GameFinishProps = {
  gameFinished: boolean;
  playerTime: number;
};

export const GameFinish = ({ gameFinished, playerTime }: GameFinishProps) => {
  const [showForm, setShowForm] = useState(true);
  const [inputContent, setInputContent] = useState<string>("");

  return gameFinished && showForm ? (
    <div className="fixed top-0 left-50 w-full h-screen grid grid-rows-1 grid-cols-1">
      <div className="grid justify-self-center self-center w-min px-8 h-36 bg-gray-900 rounded text-emerald-50">
        <form
          method="POST"
          action="http://localhost:3000/time"
          className="justify-self-center self-center"
        >
          <label htmlFor="name">Enter your name</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputContent(e.target.value)
            }
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
  );
};
