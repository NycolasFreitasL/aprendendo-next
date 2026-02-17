"use client";

import { useState } from "react";

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<string[]>([]);

  const [texto, setTexto] = useState("");

  function Adicionar() {
    setTarefas([...tarefas, texto]);
  }

  function excluir(tarefa: string) {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((item) => item !== tarefa),
    );
  }

  return (
    <div className="justify-center items-center flex flex-col gap-4 bg-gray-700 min-h-screen">
      <h1 className="text-4xl gap-4">Tarefas</h1>
      <input className="bg-white text-black rounded p-2 text-2xl"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        type="text"
      />

      <button className="bg-green-500 text-amber-50 rounded text-2xl w-20" onClick={() => Adicionar()}> clica </button>

      {tarefas.map((tarefa, index) => (
        <p className="text-2xl" key={index}>
          {tarefa}
          <button className="bg-red-500 text-white rounded px-2 ml-2" onClick={() => excluir(tarefa)}>excluir</button>
        </p>
      ))}
    </div>
  );
}
