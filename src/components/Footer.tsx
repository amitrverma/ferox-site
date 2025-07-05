// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Ferox Tech Services. All rights reserved.</p>
    </footer>
  );
}