import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-08-01T00:00:00');
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      setDaysLeft(days);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#225E4F] flex flex-col items-center justify-center text-white px-4 text-center">
      <img
        src="/soccer300-logo.jpg"
        alt="Soccer300 Logo"
        className="w-64 h-auto mb-6 rounded-2xl shadow-lg"
      />
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">Soccer300 is Coming Soon!</h1>
      <p className="text-lg sm:text-xl max-w-xl mb-6">
        Built by a fan for true soccer fans, Soccer300 keeps it simple: 300 fantasy teams, all playing for glory. No overcrowded pools, no endless lineups — just pure competition and in-depth discussion about the beautiful game. Free to join, free to play, and real enough to matter.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-black w-64 sm:w-auto bg-[#B9FFE3] border border-black"
        />
        <button className="bg-white text-[#225E4F] font-semibold px-4 py-2 rounded hover:bg-gray-100">
          Sign Me Up!
        </button>
      </div>
      <p className="text-sm">Launching in {daysLeft} days!</p>
    </div>
  );
}