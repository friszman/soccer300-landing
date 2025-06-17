import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src="/soccer300-logo.png"
        alt="Soccer300 Logo"
        className="w-44 h-auto mb-6"
      />
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
        Only 300 Teams. Are You In?
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-8">
        Built by a fan for true soccer fans, Soccer300 keeps it simple: 300 fantasy teams,
        all playing for glory. No overcrowded pools, no endless lineups — just pure competition and
        in-depth discussion about the beautiful game. Free to join, real enough to matter.
      </p>
      <form className="w-full max-w-sm">
        <input
          type="email"
          placeholder="enter your email to join!"
          className="w-full p-3 border rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-800 text-white font-semibold py-3 rounded-md hover:bg-green-900 transition"
        >
          Join Now
        </button>
      </form>
    </section>
  );
};

export default HeroSection;