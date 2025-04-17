import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-screen-xl px-4">
        <Image
          src="/stadium-bg.jpg"
          alt="Stadium Background"
          width={1920}
          height={1080}
          className="w-full h-auto mx-auto"
          priority
        />
      </div>
    </div>
  );
}
