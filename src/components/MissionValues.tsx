// src/components/MissionValues.tsx

export default function MissionValues() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-20 flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
        {/* Left Column: Vision + Mission */}
        <div className="space-y-16">
          {/* Vision */}
          <div>
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">VISION</h2>
            <p className="text-2xl text-yellow-400 font-semibold mb-6">
              “From insight to impact – we help businesses move ahead”
            </p>
            <p className="text-xl mb-4 leading-relaxed">
              We combine strategic insight with hands-on execution leveraging deep industry expertise and operational precision to empower businesses through <span className="text-yellow-400 font-bold">data</span> and <span className="text-yellow-400 font-bold">AI</span>.
            </p>
            <p className="italic text-lg text-gray-300">
              For us, advanced technology isn’t a distant possibility. It’s the engine driving real-world impact today.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-5xl font-bold text-yellow-400 mb-4">MISSION</h2>
            <p className="text-xl leading-relaxed">
              “Our mission is to drive your business forward by providing agile, scalable, and customized solutions and services that enhance efficiency, productivity, and cost savings, ensuring seamless integration and exceptional customer experience.”
            </p>
          </div>
        </div>

        {/* Right Column: Values */}
        <div>
          <h2 className="text-5xl font-bold text-yellow-400 mb-6">VALUES</h2>
          <p className="text-xl mb-6">
            Our values are the foundation of our identity and behavior. Our vision and mission derive our values:
          </p>
          <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
            <li><span className="text-yellow-400 font-bold">Fearless:</span> Encourages experimentation and calculated risk-taking.</li>
            <li><span className="text-yellow-400 font-bold">Excellence:</span> Strive for outstanding performance and quality in everything you do.</li>
            <li><span className="text-yellow-400 font-bold">Resilience:</span> Foster a growth mindset and ability to bounce back from challenges and setbacks.</li>
            <li><span className="text-yellow-400 font-bold">Openness:</span> Promote transparency, honesty, and open communication across the organization.</li>
            <li><span className="text-yellow-400 font-bold">X-factor:</span> Encourage innovation, creativity, and thinking outside the box to stay ahead of the curve.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
