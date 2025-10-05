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
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-border" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg text-foreground font-medium max-w-3xl mx-auto">
          All powered by automation you never see or manage. You just wake up to more booked jobs and happier customers.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
