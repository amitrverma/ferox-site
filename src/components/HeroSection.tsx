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

<div className="relative z-10 h-full flex items-center justify-start px-6 md:px-16 text-left text-white bg-black/60">
  <div className="max-w-5xl">
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
      EMPOWERING <br />BUSINESSES WITH <br />TECH&nbsp;
      <span className="text-yellow-400">& AI</span> <br />DRIVEN SERVICES
    </h1>
    <p className="text-xl md:text-3xl text-gray-200 font-medium">
      From insight to impact – we help businesses move ahead
    </p>
  </div>
</div>

    </section>
  );
}
