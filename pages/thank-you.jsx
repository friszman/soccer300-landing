import React from 'react';
import localFont from 'next/font/local';

const nunito = localFont({ src: '../public/fonts/Nunito/Nunito-VariableFont_wght.ttf', display: 'swap' });
const barlow = localFont({ src: '../public/fonts/Barlow/Barlow-Bold.ttf', weight: '700', display: 'swap' });

export default function ThankYou() {
  return (
    <div className={`min-h-screen bg-[#225E4F] flex flex-col items-center justify-center px-4 py-12 text-white ${nunito.className}`}>
      <img
        src="/soccer300-logo.jpg"
        alt="Soccer300 Logo"
        className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto mb-6 rounded-xl shadow-md"
      />

      <h1 className={`text-4xl font-bold text-center mb-4 ${barlow.className}`}>
        Thanks for Signing Up!
      </h1>

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
        You're officially on the list! We'll be in touch before <strong style={{ fontWeight: '800' }}>August 1</strong> — just in time for kickoff. <br /><br />
        Soccer300 is a fan-driven competition built for true soccer enthusiasts.
      </p>
    </div>
  );
}