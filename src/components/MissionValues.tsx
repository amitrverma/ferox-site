// src/components/MissionValues.tsx

export default function MissionValues() {
  return (
    <section
      id="about"
      className="h-screen w-full bg-black text-white px-6 md:px-20 py-16 flex items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {/* Left Column: Vision + Mission */}
        <div className="space-y-12">
          {/* Vision */}
          <div>
            <h2 className="text-3xl font-bold text-green-500 mb-2">VISION</h2>
            <p className="text-green-400 font-medium mb-4">
              “From insight to impact – we help businesses move ahead”
            </p>
            <p className="mb-2">
              We combine strategic insight with hands-on execution leveraging deep industry expertise and operational precision to empower businesses through <span className="text-yellow-500">data</span> and <span className="text-yellow-500">AI</span>.
            </p>
            <p className="italic text-gray-300">
              For us, advanced technology isn’t a distant possibility. It’s the engine driving real-world impact today
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl font-bold text-blue-300 mb-2">MISSION</h2>
            <p className="text-white">
              “Our mission is to drive your business forward by providing agile, scalable, and customized solutions and services that enhance efficiency, productivity, and cost savings, ensuring seamless integration and exceptional customer experience”
            </p>
          </div>
        </div>

        {/* Right Column: Values */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">VALUES</h2>
          <p className="mb-4 text-white">
            Our values are the foundation of our identity and behavior. Our vision and mission derive our values:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-white">
            <li><span className="text-yellow-400 font-semibold">Fearless:</span> Encourages experimentation and calculated risk-taking.</li>
            <li><span className="text-yellow-400 font-semibold">Excellence:</span> Strive for outstanding performance and quality in everything you do.</li>
            <li><span className="text-yellow-400 font-semibold">Resilience:</span> Foster a growth mindset and ability to bounce back from challenges and setbacks.</li>
            <li><span className="text-yellow-400 font-semibold">Openness:</span> Promote transparency, honesty, and open communication across the organization.</li>
            <li><span className="text-yellow-400 font-semibold">X-factor:</span> Encourage innovation, creativity, and thinking outside the box to stay ahead of the curve.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
