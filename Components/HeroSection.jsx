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
       {/* Email Input + CTA (Mailchimp Enabled) */}
<form
  action="https://soccer300.us7.list-manage.com/subscribe/post?u=1aeb9f8ba8310a00079012bba&amp;id=938c818f4f&amp;f_id=00b00ce0f0"
  method="post"
  target="_blank"
  className="flex flex-col gap-4 items-center justify-center mb-6 w-full max-w-xl bg-white p-6 rounded-xl shadow-md border border-black"
>
  <h2 className="text-xl font-bold text-[#225E4F] text-center">Join Soccer300</h2>

  <input
    type="email"
    name="EMAIL"
    required
    placeholder="Email Address"
    className="w-full px-4 py-3 text-[1.05rem] rounded-md text-black border border-black bg-[#B9FFE3] placeholder-gray-600"
  />

  <input
    type="text"
    name="FNAME"
    required
    placeholder="Username"
    className="w-full px-4 py-3 text-[1.05rem] rounded-md text-black border border-black bg-[#B9FFE3] placeholder-gray-600"
  />

  <div className="flex gap-2 w-full">
    <input
      type="text"
      name="BIRTHDAY[month]"
      placeholder="MM"
      pattern="[0-9]*"
      maxLength="2"
      className="w-1/2 px-4 py-3 text-[1.05rem] rounded-md text-black border border-black bg-[#B9FFE3] placeholder-gray-600"
    />
    <input
      type="text"
      name="BIRTHDAY[day]"
      placeholder="DD"
      pattern="[0-9]*"
      maxLength="2"
      className="w-1/2 px-4 py-3 text-[1.05rem] rounded-md text-black border border-black bg-[#B9FFE3] placeholder-gray-600"
    />
  </div>

  {/* Bot prevention */}
  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
    <input
      type="text"
      name="b_1aeb9f8ba8310a00079012bba_938c818f4f"
      tabIndex="-1"
      defaultValue=""
    />
  </div>

  <button
    type="submit"
    className="px-5 py-3 text-[1.05rem] font-semibold rounded-md bg-white text-[#225E4F] hover:bg-gray-100 transition"
  >
    Notify Me
  </button>
</form>
      </div>

      {/* Countdown */}
      <p className="text-sm text-center">Launching in <strong>{daysLeft}</strong> days!</p>
    </div>
  );
}