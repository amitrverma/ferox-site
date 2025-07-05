// src/components/Solutions.tsx

import Image from "next/image";

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left Statement */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-snug">
            Our <span className="text-yellow-400">AI-enhanced<br />solutions</span> are designed<br /> to create substantial value<br /> for your business
          </h2>
          <button className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded font-semibold text-lg w-max">
            Ask for Demo
          </button>
        </div>

        {/* Right Solution Cards */}
        <div className="space-y-12 text-lg leading-relaxed">
          {/* FeroxPrompt */}
          <div className="flex gap-6 items-start">
            <Image src="/assets/prompt.png" alt="FeroxPrompt" width={80} height={80} />
            <div>
              <h3 className="text-blue-300 font-bold text-2xl mb-2">FeroxPrompt</h3>
              <p>
                An AI-enhanced content writing solution designed for your website and marketing requirements,
                equipped with SEO capabilities and human assistance. Take your products live in hours.
              </p>
              <p className="text-yellow-400 mt-3 font-medium">
                Achieve 50X faster market readiness | Cut costs by 50% | Ensure 100% brand consistency
              </p>
            </div>
          </div>

          {/* FeroxFlo */}
          <div className="flex gap-6 items-start">
            <Image src="/assets/flo.png" alt="FeroxFlo" width={100} height={100} />
            <div>
              <h3 className="text-blue-300 font-bold text-2xl mb-2">FeroxFlo</h3>
              <p>
                AI enabled workflow solution to track and monitor your work queues, analytics for improved
                customer journeys & enhanced productivity. Seamless integration to existing platforms lending further automation opportunities
              </p>
              <p className="text-yellow-400 mt-3 font-medium">
                50% Improved customer experience | 20% Increased efficiency | 15% Reduced costs
              </p>
            </div>
          </div>

          {/* FeroxMomentum */}
          <div className="flex gap-6 items-start">
            <Image src="/assets/momentum.png" alt="FeroxMomentum" width={100} height={100} />
            <div>
              <h3 className="text-blue-300 font-bold text-2xl mb-2">FeroxMomentum</h3>
              <p>
                Offering real-time monitoring and precise management tailored to your business requirements,
                along with intelligent analytics and reporting to aid in informed decision-making.
              </p>
              <p className="text-yellow-400 mt-3 font-medium">
                1.5X Productive workforce | 2X Faster decisions | 15% Reduced costs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
