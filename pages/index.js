import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/stadium-bg.jpg')", backgroundSize: "150%" }}
    >
      <div className="bg-black bg-opacity-70 w-full max-w-3xl p-6 mt-10 rounded-xl text-center backdrop-blur-sm text-white">
        <Image
          src="/soccer300-logo.jpg"
          alt="Soccer300 Logo"
          width={316}
          height={266}
          className="mx-auto mb-4 transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">For the Fans, By a Fan</h1>
        <h2 className="text-lg sm:text-xl mb-6 font-medium">
          Where strategy meets soccer. Only 300 teams. Free to play. Infinite bragging rights.
        </h2>
        <p className="mb-6 text-base sm:text-lg">
          Soccer300 is fantasy football… with a twist. Built by a fan, for the fans, it’s your exclusive invite to a high-stakes, limited-entry competition fueled by pure soccer fandom. With a <strong>free-to-play</strong> option and only <strong>three hundred teams</strong> allowed, this is your chance to win bragging rights on an international stage. Sign up, show up, and prove you belong.
        </p>
        {submitted ? (
          <p className="text-green-400 font-semibold">Thanks! We’ll let you know when we go live.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full sm:w-2/3 p-3 rounded border border-gray-300 bg-transparent placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Notify Me
            </button>
          </form>
        )}
        <p className="text-sm mt-6">Launching soon on Soccer300.com</p>
      </div>
    </div>
  );
}
