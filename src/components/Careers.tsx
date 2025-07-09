'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const MAX_SIZE_MB = 2;
  const ALLOWED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error('Only PDF, DOC, or DOCX files are allowed.');
      e.target.value = '';
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      toast.error(`File must be under ${MAX_SIZE_MB} MB.`);
      e.target.value = '';
      return;
    }

    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      toast.error('Please attach your resume.');
      return;
    }

    const loadingToast = toast.loading('Submitting your application...');

    const body = new FormData();
    body.append('type', 'career');
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('message', formData.message);
    body.append('resume', resumeFile);

    const res = await fetch('/api/form/upload', {
      method: 'POST',
      body,
    });

    toast.dismiss(loadingToast);

    const result = await res.json();
    if (result.success) {
      toast.success('Application submitted!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setResumeFile(null);
    } else {
      toast.error('Submission failed. Please try again.');
    }
  };

  return (
    <section
      id="careers"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex flex-col items-center"
    >
      {/* Full-width Top Heading */}
      <div className="text-center mb-16 w-full">
        <h2 className="text-5xl font-bold leading-snug">
          Grow a rewarding career with 
          <span className="text-yellow-400"> ferox tech services</span>
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid md:grid-cols-2 gap-16 w-full">
        {/* Left: Career Areas */}
        <div className="space-y-6 text-lg leading-relaxed">
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl">Customer Services Expertise</h3>
            <p>
              We help you build a rewarding career in customer service, email, chat, and contact
              center operations. Work with industry experts and leaders in the field.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl">
              Finance & Accounts and Financial Services
            </h3>
            <p>
              We have deep domain expertise in Finance and Accounting operations. Kick-start your
              journey in F&A operations with a set of exciting opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl">Health Care & Insurance</h3>
            <p>
              Our leaders bring decades of experience managing complex insurance businesses,
              including healthcare processing for North America geographies.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl">Project Management</h3>
            <p>
              With over 40+ years of combined experience in project & program management services,
              we will help you build your skills and master project management.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl">Automation</h3>
            <p>
              We integrate automation in everything we do. Join us to become a brand ambassador of
              how technology can support human decision-making and enhance customer outcomes.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-8">
            We are <span className="text-yellow-400">hiring!</span>
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5 text-lg">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white text-black px-5 py-3 rounded"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-black px-5 py-3 rounded"
            ></textarea>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="text-white text-base"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded font-semibold text-lg hover:bg-yellow-300 transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
