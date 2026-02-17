"use client";

import { useState } from "react";

export default function Saudacao() {
  const [nome, setnome] = useState("");

  return (
    <div className="bg-gray-700 min-h-screen justify-center items-center flex flex-col gap-4">
      <div className="flex gap-4">
          <p className=" text-4xl mr-2">
            nome:
            <input className="ml-2 p-2 rounded-md shadow-md text-black bg-gray-300"
              value={nome}
              type="text"
              onChange={(e) => setnome(e.target.value)}
            />
          </p>
          <button className="text-4xl  bg-white text-black rounded shadow-md w-40" onClick={() => setnome("")}>
            Limpar
          </button>
      </div>

      <div className="block text-6xl bg-white text-black rounded shadow-md min-w-40">{nome !== "" && <p>Olá, {nome}!</p>}</div>
    </div>
  );
}
