'use client';

import Image from 'next/image';

export default function AzureSecurity() {
  return (
    <section
      id="security"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="w-full text-center mb-16">
        <h2 className="text-5xl font-bold leading-snug">
          We maintain <span className="text-yellow-400">rigorous standards </span>
          for data and IT security.<br />
          <span className="text-yellow-400">We purely operate on the cloud</span>
        </h2>
      </div>

      {/* Full-width 2-column Grid */}
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* ISO 27001 Block */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/assets/iso.png"
            alt="ISO 27001 Certified"
            width={150}
            height={150}
            className="object-contain"
          />
          <h3 className="text-yellow-400 font-bold text-xl">
            ISO 27001 is an international standard that provides guidance for establishing and maintaining an information security management system (ISMS).
          </h3>
          <p>
            It’s a globally recognized framework that helps organizations protect their sensitive data and other information.
          </p>
        </div>

        {/* Azure Block */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/assets/azure.png"
            alt="Azure Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <h3 className="text-yellow-400 font-bold text-xl">What Azure can be used for</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Application development</li>
            <li>Data storage: disk, blob, file, or queue</li>
            <li>Analytics: ML & real-time insights</li>
            <li>Networking with Active Directory</li>
            <li>AI: Speech, vision, decision-making</li>
            <li>IoT: Device connectivity for data</li>
          </ul>

          <h3 className="text-yellow-400 font-bold text-xl">Benefits of Azure</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Scalability & global reach</li>
            <li>Flexibility with open-source</li>
            <li>Security & multi-factor auth</li>
            <li>Compliance with regulations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
