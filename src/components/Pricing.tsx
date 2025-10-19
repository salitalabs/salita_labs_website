import { Button } from "@/components/ui/button";

const Pricing = () => {
  const scrollToFinalCTA = () => {
    const ctaSection = document.getElementById("final-cta");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Answer Every Call. Grow Your Business.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most contractors start with us when they're bleeding calls—then expand once they see what's possible.
          </p>
        </div>

        <div className="bg-secondary/5 border-2 border-secondary rounded-xl p-8 mb-12 shadow-card-hover">
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Never Miss Another Call</h3>
              <p className="text-muted-foreground">Your 24/7 AI phone system that captures every lead</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">Setup: <span className="font-mono font-semibold">$1,250</span></div>
              <div className="text-2xl font-bold text-foreground">
                <span className="font-mono">$595–$895</span>
                <span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
            </div>
          </div>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-foreground">Answers and qualifies calls around the clock</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-foreground">Routes emergencies to your on-call tech</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-foreground">Syncs with ServiceTitan or Housecall Pro automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-foreground">Weekly performance reports included</span>
            </li>
          </ul>
          
          <p className="text-foreground font-medium">
            Expected return: <span className="text-secondary font-bold">6–8 recovered bookings per month</span>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Scale Your Operations</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-xl font-bold mb-2 text-card-foreground">Turn Quotes Into Cash</h4>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-mono font-semibold">$1,497</span> setup + <span className="font-mono font-semibold">$797</span>/mo
              </p>
              <p className="text-muted-foreground mb-3">
                Automated follow-ups on quotes and invoices until they close or pay.
              </p>
              <p className="text-foreground font-medium">
                Typical impact: <span className="text-secondary font-bold">$3K–$6K</span> in additional monthly revenue
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="text-xl font-bold mb-2 text-card-foreground">Build Your 5-Star Reputation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-mono font-semibold">$1,997</span> setup + <span className="font-mono font-semibold">$997</span>/mo
              </p>
              <p className="text-muted-foreground mb-3">
                Post-job surveys, review requests, seasonal reactivation campaigns.
              </p>
              <p className="text-foreground font-medium">
                Drives repeat business and steady review growth
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="text-xl font-bold mb-2 text-card-foreground">Digital Front Door</h4>
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-mono font-semibold">$995</span> one-time
            </p>
            <p className="text-muted-foreground">
              Conversion-optimized website with click-to-call and booking buttons. No monthly hosting fees.
            </p>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Bundle & Save</h3>
          <ul className="space-y-2 text-foreground">
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Any 2 solutions: <span className="font-bold">10% off monthly</span></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">→</span>
              <span>All 3 solutions: <span className="font-bold">15% off monthly</span></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-accent font-bold">→</span>
              <span>Annual prepay: <span className="font-bold">10% off</span></span>
            </li>
          </ul>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-8 border border-border">
          <p className="text-foreground font-medium">
            <span className="font-bold">Guarantee:</span> 60-day cancellation policy: If it's not working, we part ways. No hard feelings.
          </p>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToFinalCTA}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-button text-lg px-8 py-6 h-auto"
          >
            Book a 30-Minute Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
