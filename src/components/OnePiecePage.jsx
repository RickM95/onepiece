// src/components/OnePiecePage.jsx
import React from "react";

export default function OnePiecePage() {
  // Carousel images
  const images = [
    "/img/carousel/1.jpeg",
    "/img/carousel/2.jpeg",
    "/img/carousel/3.jpeg",
    "/img/carousel/4.png",
    "/img/carousel/5.png",
    "/img/carousel/6.jpeg",
    "/img/carousel/7.jpg",
    "/img/carousel/8.jpg",
    "/img/carousel/9.jpg",
    "/img/carousel/11.jpg",
    "/img/carousel/12.jpg",
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <header className="relative w-full h-72 overflow-hidden border-b-2">
        <img
          src="/img/header-bg.png"
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <img src="/img/logo.png" alt="Logo" className="h-16 w-auto" />
        </div>
      </header>

      {/* Main Content / Carousel */}
      <main className="w-full max-w-5xl mx-auto my-8">
        {images.map((img, i) => (
          <div key={i} className="mb-4">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-64 object-cover rounded shadow"
            />
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="w-full h-20 bg-gray-800 text-white flex items-center justify-center mt-8">
        <p>© 2025 OnePiece Fan Page</p>
      </footer>
    </div>
  );
}
