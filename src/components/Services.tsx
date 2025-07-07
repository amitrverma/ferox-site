import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const services = [
  {
    icon: "/assets/ecommerce.png",
    title: "Ecommerce",
    desc: "From image editing, content writing to SEO, we can manage your website so you can focus on growth.",
    whitepaper: "",
  },
  {
    icon: "/assets/finance.png",
    title: "Finance & Accounts",
    desc: "Improve procure to pay cycle, better control cash flow, real time reconciliation & dashboarding.",
    whitepaper: "",
  },
  {
    icon: "/assets/healthcare.png",
    title: "Healthcare",
    desc: "From triage and claim submission to settlements, we simplify and streamline your customer's journey for efficiency.",
    whitepaper: "/resources/Whitepaper%20for%20Healthcare.pdf", // No whitepaper
  },
  {
    icon: "/assets/insurance.png",
    title: "Insurance",
    desc: "P&C Deep experience in end-to-end life cycle management, from policy issuance to claims administration.",
    // No whitepaper key
  },
  {
    icon: "/assets/it.png",
    title: "IT Service Desk",
    desc: "Providing round-the-clock support for your business platforms, networks, and end users, every day of the year. Rely on us when you need assistance the most.",
    whitepaper: "",
  },
  {
    icon: "/assets/cloud.png",
    title: "Cloud Hosting",
    desc: "We assist businesses in transitioning from outdated and expensive on-premise solutions to the cloud, ensuring secure, safe, and efficient hosting services.",
    whitepaper: "",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen w-full bg-black text-white px-6 md:px-16 py-20 flex items-center"
    >
      <div className="grid md:grid-cols-2 w-full">
        {/* Left Headline Block */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-snug">
            Our services are <br />
            <span className="text-yellow-400 font-bold">
              backed by<br />experienced colleagues
            </span><br />
            from various domains,<br />
            guaranteeing robust<br /> operational delivery!
          </h2>
        </div>

        {/* Right Grid of Service Cards */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 text-lg leading-relaxed">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={150}
                  height={150}
                  className="shrink-0"
                />
                {service.whitepaper && service.whitepaper.trim() !== "" && (
                  <a
                    href={service.whitepaper}
                    download
                    className="mt-2 flex items-center gap-2 text-sm text-white hover:underline"
                  >
                    <FaDownload />
                    <span>Whitepaper</span>
                  </a>
                )}
              </div>
              <div>
                <h3 className="text-yellow-400 font-bold text-xl mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
