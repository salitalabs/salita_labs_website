import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById("how-we-work");
    processSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            We Handle Your Phones, Follow-Ups & Reviews
          </span>
          <br />
          <span className="text-foreground">So You Can Focus on the Work</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          You're great at fixing HVAC systems. We're great at making sure every call gets answered, 
          every quote gets followed up, and every customer comes back.
        </p>
        
        <p className="text-lg md:text-xl text-foreground font-medium mb-12 max-w-2xl mx-auto">
          Think of us as your operations team—without the payroll, training, or office space.
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToProcess}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-button text-lg px-8 py-6 h-auto"
        >
          See How We Work With Contractors Like You
        </Button>
      </div>
    </section>
  );
};

export default Hero;
