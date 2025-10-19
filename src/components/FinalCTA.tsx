import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleBookCall = () => {
    window.open("https://calendar.app.google/MKT2UYkeq2pxfJCC9", "_blank");
  };

  return (
    <section id="final-cta" className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,currentColor,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          You Didn't Start Your Business to Chase Voicemails
        </h2>
        
        <p className="text-xl mb-12 leading-relaxed text-primary-foreground/90">
          No sales pitch. No demo deck. Just a straight conversation about getting back to the work that matters.
        </p>
        
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-primary-foreground/20">
          <p className="text-lg font-semibold mb-6">In 30 minutes, we'll cover:</p>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">→</span>
              <span className="text-primary-foreground/90">Where you're losing calls and revenue right now</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">→</span>
              <span className="text-primary-foreground/90">Whether automation makes sense for your shop</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl font-bold">→</span>
              <span className="text-primary-foreground/90">What working together actually looks like</span>
            </li>
          </ul>
        </div>
        
        <p className="text-lg mb-8 font-medium">
          Here's the deal: If it's a fit, we'll move forward. If not, you'll still walk away with clarity on where the gaps are.
        </p>
        
        <Button 
          size="lg" 
          onClick={handleBookCall}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-button text-lg px-12 py-6 h-auto mb-8"
        >
          Book a Call
        </Button>
        
        <p className="text-sm text-primary-foreground/70">
          Currently serving HVAC, Plumbing & Electrical contractors across NJ, NY, and CT
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
