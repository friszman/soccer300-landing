import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';

const nunito = localFont({ src: '../public/fonts/Nunito/Nunito-VariableFont_wght.ttf', display: 'swap' });
const barlow = localFont({ src: '../public/fonts/Barlow/Barlow-Bold.ttf', weight: '700', display: 'swap' });

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
    <div className={`min-h-screen bg-[#225E4F] flex flex-col items-center justify-center px-4 py-12 text-white ${nunito.className}`}>
      {/* Logo */}
      <img
        src="/soccer300-logo.jpg"
        alt="Soccer300 Logo"
        className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto mb-6 rounded-xl shadow-md"
      />

      {/* Heading */}
      <h1 className={`text-2xl sm:text-4xl font-bold text-center mb-4 ${barlow.className}`}>
        Soccer300 is Coming Soon!
      </h1>

     <p
  style={{
    paddingLeft: '15vw',
    paddingRight: '15vw',
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: '600',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    maxWidth: '100%',
  }}
>
  Built by a fan for true soccer fans, Soccer300 keeps it simple: 300 fantasy teams, all playing for glory.
  No overcrowded pools, no endless lineups — just pure competition and in-depth discussion about the beautiful game
  <strong style={{ fontWeight: '800' }}>. Free to join, free to play</strong>, and real enough to matter.
</p>

      {/* Email Input + Button */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 sm:gap-y-0 sm:gap-x-3 mb-6">
  <input
    type="email"
    placeholder="Enter your email"
    style={{ padding: '0.6rem', fontSize: '0.95rem', width: '16rem' }}
    className="rounded text-black border border-black bg-[#B9FFE3]"
  />
  <button
    style={{ padding: '0.6rem 1.2rem', fontSize: '0.95rem' }}
    className="bg-white text-[#225E4F] font-semibold rounded hover:bg-gray-100"
  >
    Notify Me
  </button>
</div>

      {/* Countdown */}
      <p className="text-sm text-center">Launching in <strong>{daysLeft}</strong> days!</p>
    </div>
  );
}