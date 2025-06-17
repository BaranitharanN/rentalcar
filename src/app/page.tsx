// app/page.tsx

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-cover bg-center text-white" style={{ backgroundImage: "url('/car-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Anbu Cars</h1>
        <p className="text-xl md:text-2xl mb-8">Smart Rentals. Easy Bookings. Full Control.</p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/dashboard" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg font-semibold shadow-lg">
            Dashboard
          </a>
          <a href="/cars" className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white text-lg font-semibold shadow-lg">
            View Cars
          </a>
          <a href="/booking" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-xl text-white text-lg font-semibold shadow-lg">
            Book Now
          </a>
        </div>
      </div>
    </main>
  );
}
