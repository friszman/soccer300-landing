import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-screen-lg px-4 flex justify-center items-center">
        <Image
          src="/stadium-bg.jpg"
          alt="Stadium Background"
          width={1316}
          height={768}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
