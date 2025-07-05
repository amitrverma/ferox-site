import Image from "next/image";

const services = [
  {
    icon: "/assets/ecommerce.png",
    title: "Ecommerce",
    desc: "From image editing, content writing to SEO, we can manage your website so you can focus on growth.",
  },
  {
    icon: "/assets/finance.png",
    title: "Finance & Accounts",
    desc: "Improve procure to pay cycle, better control cash flow, real time reconciliation & dashboarding.",
  },
  {
    icon: "/assets/healthcare.png",
    title: "Healthcare",
    desc: "From triage and claim submission to settlements, we simplify and streamline your customer's journey for efficiency.",
  },
  {
    icon: "/assets/insurance.png",
    title: "Insurance",
    desc: "P&C Deep experience in end-to-end life cycle management, from policy issuance to claims administration.",
  },
  {
    icon: "/assets/it.png",
    title: "IT Service Desk",
    desc: "Providing round-the-clock support for your business platforms, networks, and end users, every day of the year. Rely on us when you need assistance the most.",
  },
  {
    icon: "/assets/cloud.png",
    title: "Cloud Hosting",
    desc: "We assist businesses in transitioning from outdated and expensive on-premise solutions to the cloud, ensuring secure, safe, and efficient hosting services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-black text-white px-6 md:px-16 py-16 flex items-center"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full">
        {/* Left Headline Block */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-light leading-snug">
            Our services are <br />
            <span className="text-yellow-400 font-semibold">
              backed by<br />experienced colleagues
            </span><br />
            from various domains,<br />
            guaranteeing robust<br /> operational delivery!
          </h2>
        </div>

        {/* Right Grid of Service Cards */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <Image src={service.icon} alt={service.title} width={80} height={80} />
              <div>
                <h3 className="text-blue-300 font-semibold">{service.title}</h3>
                <p className="text-white">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
