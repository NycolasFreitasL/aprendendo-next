"use client";

import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="min-h-screen justify-center items-center flex flex-col bg-gray-700 gap-4">
      <h1 className="text-6xl">contador</h1>
      <p className="text-4xl">{contador}</p>
      <div className="flex grid-cols-2 gap-4">
        <div className=" bg-white text-black text-center w-20 rounded-md shadow-md">
          <button onClick={() => setContador(contador - 1)}>diminuir</button>
        </div>
        <div className="bg-white text-black text-center w-20 rounded-md shadow-md">
          <button onClick={() => setContador(0)}>Reset</button>
        </div>
        <div className=" bg-white text-black text-center w-20 rounded-md shadow-md">
          <button onClick={() => setContador(contador + 1)}>aumentar</button>
        </div>
      </div>
    </div>
  );
}
