'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loadingToast = toast.loading('Sending your message...');

    const res = await fetch('/api/form/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact', data: formData })
    });

    toast.dismiss(loadingToast);
    const result = await res.json();

    if (result.success) {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center"
    >
      {/* Top Heading */}
      <div className="text-center mb-16 w-full">
        <h2 className="text-5xl font-bold">
          We <span className="text-yellow-400">love our customers</span> <span>😊</span>
        </h2>
        <p className="text-2xl mt-6 text-white/90 leading-relaxed">
          We will be happy to meet you in person or virtually. 
          Feel free to reach us on —
        </p>
      </div>

      {/* 2-Column Layout */}
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left: Region Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-lg w-full">
          {/* North America */}
          <div>
            <div className="bg-yellow-400 text-black font-bold py-2 text-xl mb-3">
              North America
            </div>
            <p className="font-semibold text-yellow-400">Call Us On:</p>
            <p className="font-bold text-white">+1-609-819-7762</p>
            <p className="font-bold text-white">+1-609-664-8687</p>
            <p className="mt-3 font-bold text-yellow-400">Ferox Consulting LLC</p>
            <p>
              <span className="font-semibold">Address:</span> <br />
              5213 Wessex PL,<br />
              Princeton NJ 0854000000
            </p>
          </div>

          {/* United Kingdom */}
          <div>
            <div className="bg-yellow-400 text-black font-bold py-2 text-xl mb-3">
              United Kingdom
            </div>

            <p className="mt-3 font-bold text-yellow-400">SheSparks</p>
            <p>
              <span className="font-semibold">Address:</span> United Kingdom
            </p>
            <p className="text-white underline">hello@she-sparks.co.uk</p>
            <p className="text-white underline">www.she-sparks.co.uk</p>
          </div>

          {/* Rest of the world */}
          <div>
            <div className="bg-yellow-400 text-black font-bold py-2 text-xl mb-3">
              Rest of the world
            </div>
            <p className="font-semibold text-yellow-400">Call Us On:</p>
            <p className="font-bold text-white">+91 9899985453</p>
            <p className="mt-3 font-bold text-yellow-400">Ferox Tech Services</p>
            <p>
              <span className="font-semibold">Address:</span> Pune, Maharashtra
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-8">
            Contact <span className="text-yellow-400">Us</span>
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5 text-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white text-black px-5 py-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white text-black px-5 py-3 rounded"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-black px-5 py-3 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-300 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
