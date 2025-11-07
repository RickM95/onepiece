import { useEffect, useState } from "react";
import useFetchOnePiece from "../hooks/useFetchOnePiece";

export default function Cards({ onCardClick }) {
  let moises = useFetchOnePiece();
  const [boton, setBoton] = useState("Fruits");
  useEffect(() => {
    useFetchOnePiece(boton);
  }, [boton]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {moises.map((char) => (
        <div
          key={char.id}
          className="bg-white p-4 rounded shadow cursor-pointer hover:scale-105 transition"
          onClick={() =>
            onCardClick(
              <div className="text-center">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-32 h-32  mb-2"
                />
                <h2 className="text-xl font-bold">{char.name}</h2>
                <p className="text-gray-700">Bounty: {char.bounty}</p>
                <p className="text-gray-700">Job: {char.job}</p>
                <p className="text-gray-700">
                  Status: {char.isAlive ? "Alive" : "Dead"}
                </p>
              </div>
            )
          }
        >
          <img src={char.image} alt={char.name} className="w-24 h-24 mb-2" />
          <h2 className="text-center font-bold">{char.name}</h2>
        </div>
      ))}
    </div>
  );
}
