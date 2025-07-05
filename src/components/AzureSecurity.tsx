// src/components/AzureSecurity.tsx

import Image from "next/image";

export default function AzureSecurity() {
  return (
    <section
      id="security"
      className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-20 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-20 w-full">
        {/* Left Statement */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-tight max-w-xl space-y-2">
            We maintain <span className="text-yellow-400">rigorous standards</span><br />
            for data and IT security.<br />
            <span className="text-yellow-400">We purely operate on the cloud</span>
          </h2>
        </div>

        {/* Right Content Blocks */}
        <div className="flex flex-col gap-12 text-lg leading-relaxed">
          {/* ISO 27001 Block */}
          <div className="flex gap-6 items-start">
            <Image
              src="/assets/iso.png"
              alt="ISO 27001 Certified"
              width={80}
              height={80}
              className="shrink-0 mt-1"
            />
            <div>
              <p className="text-yellow-400 font-bold mb-3 text-xl">
                ISO 27001 is an international standard that provides guidance for establishing and maintaining an information security management system (ISMS).
              </p>
              <p>
                It’s a globally recognized framework that helps organizations protect their sensitive data and other information.
              </p>
            </div>
          </div>

          {/* Azure Block */}
          <div className="flex gap-6 items-start">
            <Image
              src="/assets/azure.png"
              alt="Azure Logo"
              width={80}
              height={80}
              className="shrink-0 mt-1"
            />
            <div>
              <h3 className="text-yellow-400 font-bold text-2xl mb-3">What Azure can be used for</h3>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Application development</li>
                <li>Data storage: disk, blob, file, or queue</li>
                <li>Analytics: ML & real-time insights</li>
                <li>Networking with Active Directory</li>
                <li>AI: Speech, vision, decision-making</li>
                <li>IoT: Device connectivity for data</li>
              </ul>
              <h3 className="text-yellow-400 font-bold text-2xl mb-3">Benefits of Azure</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Scalability & global reach</li>
                <li>Flexibility with open-source</li>
                <li>Security & multi-factor auth</li>
                <li>Compliance with regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
