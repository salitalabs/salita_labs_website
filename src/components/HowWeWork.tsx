const steps = [
  {
    icon: "📞",
    title: "We Answer Your Phones",
    description: "24/7 coverage. Emergency triage. Every call captured. Your customers get immediate response, you get qualified leads in your CRM.",
  },
  {
    icon: "📅",
    title: "We Follow Up On Everything",
    description: "Quotes, appointments, invoices—we handle the reminders. No more leaving money on the table because you're too busy.",
  },
  {
    icon: "⭐",
    title: "We Build Your Reputation",
    description: "Automated review requests, customer surveys, seasonal renewals. Your customers keep coming back, your Google rating climbs.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          How Salita Labs Becomes Part of Your Team
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full border border-border">
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 border-2 border-secondary/30 rounded-xl p-8 text-center relative overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent animate-pulse" />
            
            <div className="relative z-10">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
                All powered by automation you never see or manage.
              </p>
              <p className="text-lg text-muted-foreground">
                You just wake up to more booked jobs and happier customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
