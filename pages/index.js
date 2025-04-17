import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/stadium-bg.jpg"
          alt="Stadium Background"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
