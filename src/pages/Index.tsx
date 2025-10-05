import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Credibility from "@/components/Credibility";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowWeWork />
      <Credibility />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
