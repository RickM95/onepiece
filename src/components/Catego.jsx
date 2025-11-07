import React from "react";

const categories = ["Fruits", "Characther", "boats", "crews"];

export default function Catego({ onSelectCategory }) {
  return (
    <div className="flex justify-center gap-3 mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className="bg-gray-200 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-full"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
