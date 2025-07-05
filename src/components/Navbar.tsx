"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#");

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo + Brand: Aligned to left */}
    <div className="flex items-center gap-2 text-xl font-bold text-black">
      <Image src="/assets/Ferox logo.png" alt="Ferox logo" width={50} height={50} />
      <h1>Ferox Tech Services</h1>
    </div>

    {/* Desktop Menu: Aligned to right */}
    <nav className="hidden md:flex gap-6 text-gray-700 ml-auto">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`hover:text-black transition-colors duration-200 ${
            activeSection === item.href
              ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 pb-1"
              : ""
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>

    {/* Mobile Toggle */}
    <button
      className="md:hidden text-gray-700"
      onClick={handleToggle}
      aria-label="Toggle Menu"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <nav className="md:hidden px-6 pb-4 bg-white shadow">
      <ul className="space-y-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`block hover:text-black ${
                activeSection === item.href
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )}
</header>

  );
}