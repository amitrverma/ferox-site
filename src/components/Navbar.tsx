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
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow">
  <div className="w-full px-6 py-4 flex items-center justify-between">

    
    {/* Left: Logo + Brand */}
    <div className="flex items-center gap-4 text-white">
      <Image
        src="/assets/Ferox logo.png"
        alt="Ferox logo"
        width={64}
        height={64}
        className="shrink-0"
      />
      <h1 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight">
        ferox tech services
      </h1>
    </div>

    {/* Right: Desktop Menu */}
    <nav className="hidden md:flex items-center gap-8 ml-auto text-white text-lg">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`hover:text-yellow-400 transition-colors duration-200 ${
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
      className="md:hidden text-white text-3xl ml-auto"
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