import { useState, useEffect } from "react";
import axios from "axios";

export const PalletLeaderboard = () => {
  const [users, setUsers] = useState<object[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/leaderboard/pallet"
        );
        console.log(response.data);
        if (response.statusText === "OK") setUsers(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
