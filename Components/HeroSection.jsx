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
      <h1 className={`text-4xl font-bold text-center mb-4 ${barlow.className}`}>
        Soccer300 is Coming Soon!
      </h1>

      {/* Description */}
      <p
        style={{
          paddingLeft: '20%',
          paddingRight: '20%',
          textAlign: 'center',
          fontSize: '1.25rem',
          fontWeight: 600,
          lineHeight: '1.7',
          marginBottom: '1.5rem',
          maxWidth: '100%',
        }}
      >
        Built by a fan for true soccer fans, Soccer300 keeps it simple: 300 fantasy teams, all playing for glory.
        No overcrowded pools, no endless lineups — just pure competition and in-depth discussion about the beautiful game.
        <strong style={{ fontWeight: '800' }}> Free to join, free to play</strong>, and real enough to matter.
      </p>

      {/* Mailchimp Signup Form */}
      <div className="w-full flex justify-center mb-6">
        <form
          action="https://soccer300.us7.list-manage.com/subscribe/post?u=1aeb9f8ba8310a00079012bba&amp;id=938c818f4f&amp;f_id=00b00ce0f0"
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row gap-3 items-center bg-white p-4 rounded-xl shadow-md w-full max-w-xl border border-black"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            required
            className="w-full sm:w-[15rem] px-4 py-3 text-[1.05rem] rounded-md text-black border border-black placeholder-gray-600"
          />
          <input
            type="text"
            name="FNAME"
            placeholder="Name"
            required
            className="w-full sm:w-[15rem] px-4 py-3 text-[1.05rem] rounded-md text-black border border-black placeholder-gray-600"
          />
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_1aeb9f8ba8310a00079012bba_938c818f4f" tabIndex="-1" value="" />
          </div>
          <button
            type="submit"
            className="px-5 py-3 text-[1.05rem] font-semibold rounded-md bg-[#225E4F] text-white hover:bg-[#1e4e43] transition"
          >
            Join Soccer300
          </button>
        </form>
      </div>

      {/* Countdown */}
      <p className="text-sm text-center">Launching in <strong>{daysLeft}</strong> days!</p>
    </div>
  );
}