import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="flex justify-center items-center w-full px-4">
        <Image
          src="/stadium-bg.jpg"
          alt="Stadium Background"
          layout="intrinsic"
          width={1316}
          height={768}
          className="mx-auto"
          priority
        />
      </div>
    </div>
  );
}
