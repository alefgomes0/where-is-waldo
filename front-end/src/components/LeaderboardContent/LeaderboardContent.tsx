import { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

type UserProps = {
  _id: string;
  name: string;
  time: number;
  formattedTime: string;
  date: Date;
};

type LeaderboardProps = {
  map: string;
};

export const LeaderboardContent = ({ map }: LeaderboardProps) => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/leaderboard/${map}`
        );
        console.log(response.data);
        if (response.statusText === "OK") setUsers(response.data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchData();
  }, [map]);

  return (
    <>
      {error ? (
        <h3 className="text-2xl">Something went wrong... {error}</h3>
      ) : (
        <table className="table-auto w-[600px]">
          <thead>
            <tr className="text-center h-[50px] grid grid-rows-1 grid-cols-4 items-center bg-neutral-500 text-lg opacity-90 rounded">
              <th>Position</th>
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr
                  key={user._id}
                  className="h-[35px] text-sm justify-items-center items-center grid grid-rows-1 grid-cols-4 odd:bg-red-500 odd:text-red-50 even:bg-neutral-300 rounded"
                >
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.formattedTime}</td>
                  <td>
                    {DateTime.fromISO(
                      user.date.toLocaleString()
                    ).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
