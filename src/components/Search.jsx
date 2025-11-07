import React, { useState } from "react";

export default function Search({ busqueda }) {
  const [buscaText, setBuscaText] = useState("");

  const enviar = (e) => {
    e.preventDefault();
    if (buscaText !== "") busqueda(buscaText);
  };

  return (
    <form onSubmit={enviar} className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Buscar personaje, barco o tripulacion..."
        value={buscaText}
        onChange={(e) => setBuscaText(e.target.value)}
        className="border rounded-l-lg p-2 w-60 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
      >
        Buscar
      </button>
    </form>
  );
}
