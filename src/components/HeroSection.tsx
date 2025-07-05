// src/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        src="/assets/ferox.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white bg-black/60">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          EMPOWERING BUSINESSES WITH TECH &nbsp;
          <span className="text-brand-gold">& AI</span> DRIVEN SERVICES
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200">
          From insight to impact – we help businesses move ahead
        </p>
      </div>
    </section>
  );
}
