import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-08-03T00:00:00');
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
    <div className="min-h-screen bg-[#E5E7EB] flex flex-col items-center justify-center px-4 py-10 text-center rounded-2xl">
      <img
        src="/soccer300-logo.jpg"
        alt="Soccer300 Logo"
        className="w-60 h-auto mb-8 rounded-xl shadow-md"
      />

      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-[#225E4F] font-serif">
        Soccer300 is Coming Soon!
      </h1>

      <p className="max-w-xl text-gray-700 text-md sm:text-lg mb-6 leading-relaxed">
        Built by a fan for true soccer fans, Soccer300 keeps it simple: 300 fantasy teams, all playing for glory. No overcrowded pools, no endless lineups — just pure competition and in-depth discussion about the beautiful game. Free to join, free to play, and real enough to matter.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border border-gray-400 text-black w-64"
        />
        <button
          className="px-6 py-2 rounded-md border border-gray-800 font-semibold hover:bg-[#f5f5f5] transition font-handwriting"
        >
          Sign Me Up!
        </button>
      </div>

      <p className="text-sm text-gray-600">Launching in {daysLeft} days!</p>
    </div>
  );
}