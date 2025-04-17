export default function Home() {
  return (
    <div
      className="fixed inset-0 bg-white bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/stadium-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 px-6 py-4 rounded">
        <h1 className="text-white text-2xl sm:text-4xl font-bold text-center">
          Soccer300 is coming soon
        </h1>
      </div>
    </div>
  );
}
