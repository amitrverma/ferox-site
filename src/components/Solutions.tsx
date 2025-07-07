'use client';

import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaDownload } from "react-icons/fa";

export default function Solutions() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loading = toast.loading('Sending request...');

    const res = await fetch('/api/form/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'demo', data: formData }),
    });

    toast.dismiss(loading);

    if (res.ok) {
      toast.success('Demo request sent!');
      setFormData({ name: '', email: '', company: '', message: '' });
      setShowModal(false);
    } else {
      toast.error('Failed to send. Try again.');
    }
  };

  const solutions = [
  {
    icon: "/assets/prompt.png",
    title: "FeroxPrompt",
    desc: "An AI-enhanced content writing solution designed for your website and marketing requirements, equipped with SEO capabilities and human assistance. Take your products live in hours.",
    highlights: "Achieve 50X faster market readiness | Cut costs by 50% | Ensure 100% brand consistency",
    whitepaper: "/whitepapers/feroxprompt.pdf",
  },
  {
    icon: "/assets/flo.png",
    title: "FeroxFlo",
    desc: "AI enabled workflow solution to track and monitor your work queues, analytics for improved customer journeys & enhanced productivity. Seamless integration to existing platforms lending further automation opportunities.",
    highlights: "50% Improved customer experience | 20% Increased efficiency | 15% Reduced costs",
    whitepaper: "", // No whitepaper
  },
  {
    icon: "/assets/momentum.png",
    title: "FeroxMomentum",
    desc: "Offering real-time monitoring and precise management tailored to your business requirements, along with intelligent analytics and reporting to aid in informed decision-making.",
    highlights: "1.5X Productive workforce | 2X Faster decisions | 15% Reduced costs",
    whitepaper: "",
  },
];

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
          <button
            onClick={() => setShowModal(true)}
            className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded font-semibold text-lg w-max"
          >
            Ask for Demo
          </button>
        </div>

        {/* Right Solution Cards */}
        <div className="space-y-12 text-lg leading-relaxed">
  {solutions.map((solution, idx) => (
    <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex flex-col items-center md:items-start">
        <Image
          src={solution.icon}
          alt={solution.title}
          width={150}
          height={150}
          className="w-[150px] h-[150px] object-contain"
        />
        {solution.whitepaper && solution.whitepaper.trim() !== "" && (
          <a
            href={solution.whitepaper}
            download
            className="mt-2 flex items-center gap-2 text-sm text-white hover:underline"
          >
            <FaDownload />
            <span> Whitepaper</span>
          </a>
        )}
      </div>
      <div>
        <h3 className="text-yellow-400 font-bold text-2xl mb-2">{solution.title}</h3>
        <p>{solution.desc}</p>
        <p className="text-yellow-400 mt-3 font-medium">{solution.highlights}</p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="bg-white text-black p-8 rounded-lg w-full max-w-lg space-y-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">Request a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border"
              />
              <textarea
                name="message"
                placeholder="What would you like to explore?"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded border"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
