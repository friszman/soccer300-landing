import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for email integration
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/stadium-bg.jpg')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-xl">
        <Image src="/soccer300-logo.jpg" alt="Soccer300 Logo" width={200} height={200} className="mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-2">For the Fans, By a Fan</h1>
        <p className="mb-6">
          Soccer300 is fantasy football… with a twist. Built by a fan, for the fans, it’s your exclusive invite to a high-stakes, limited-entry competition fueled by pure soccer fandom. With a <strong>free-to-play</strong> option and only <strong>three hundred teams</strong> allowed, this is your chance to win bragging rights on an international stage. Sign up, show up, and prove you belong.
        </p>
        {submitted ? (
          <p className="text-green-400">Thanks! We’ll let you know when we go live.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="p-2 rounded text-black flex-1"
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 p-2 rounded">
              Notify Me
            </button>
          </form>
        )}
        <p className="text-sm text-gray-300 mt-4">Launching soon on Soccer300.com</p>
      </div>
    </div>
  );
}
