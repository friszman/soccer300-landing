import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="max-w-full px-4">
        <Image
          src="/stadium-bg.jpg"
          alt="Stadium Background"
          width={1316}
          height={768}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
