import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Secret = () => {
  const { baseUrl } = useContext(AuthContext);
  const token = localStorage.getItem("bistro");

  const [we, setWe] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/we`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => setWe(res.data));
  }, []);
  console.log(we);

  return (
    <div className="overflow-auto">
      <div className="mt-[150px]">
        <div className="grid grid-cols-4 gap-5">
          {we.map((w, idx) => (
            <p key={idx}>{w.Name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secret;
