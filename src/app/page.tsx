import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionValues from "@/components/MissionValues";
import AzureSecurity from "@/components/AzureSecurity";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionValues />
        <AzureSecurity />
        <Solutions />
        <Services />
        <Careers />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
