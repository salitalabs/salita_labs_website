const differentiators = [
  {
    text: "Big agencies want your ad budget",
    isAnswer: false,
  },
  {
    text: "Software companies want you to learn their platform",
    isAnswer: false,
  },
  {
    text: "We want to be your invisible operations team",
    isAnswer: true,
  },
];

const Credibility = () => {
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Built for Contractors, By Someone Who Gets Operations
        </h2>
        
        <div className="space-y-8 mb-16 text-lg leading-relaxed">
          <p className="text-center max-w-3xl mx-auto">
            I've spent years building zero-failure systems for enterprise teams at Google. 
            Now I'm bringing that same operational discipline to independent contractors—because you deserve 
            enterprise-grade support without enterprise complexity.
          </p>
          
          <p className="text-center max-w-3xl mx-auto font-medium">
            No VC investors. No sales quotas. No bait-and-switch. Just reliable systems that work while you sleep.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-center transition-all duration-300 ${
                item.isAnswer
                  ? "bg-secondary text-secondary-foreground shadow-card-hover scale-105"
                  : "bg-primary-foreground/10 backdrop-blur-sm"
              }`}
            >
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl font-bold">
          You stay focused on the trade. We handle the rest.
        </p>
      </div>
    </section>
  );
};

export default Credibility;
