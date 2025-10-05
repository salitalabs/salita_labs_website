import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will this work with my ServiceTitan/Housecall Pro?",
    answer: "Yes. We integrate with your existing system—no platform switching. Your FSM stays exactly where it is.",
  },
  {
    question: "What if my customers don't like talking to AI?",
    answer: "They won't know the difference. Emergencies route straight to your on-call tech. Everything else gets handled professionally with escalation if needed. It sounds like your business, not a robot.",
  },
  {
    question: "How much of my time does this take?",
    answer: "Setup takes ~2 hours of interviews so we learn your business. After that, about 15 minutes per week reviewing performance. We handle everything else.",
  },
  {
    question: "My CSRs already handle follow-ups, why would I pay for something else?",
    answer: "They do, but not with precision timing at 9pm on Saturday. We systematize the cadence so nothing slips through—especially after-hours and weekends when most calls are missed.",
  },
  {
    question: "What if I want to stop?",
    answer: "60-day cancellation policy, easy. If it's not working, we shut it down and part ways professionally.",
  },
  {
    question: "I already have a website. Why would I need yours?",
    answer: "If your site's working, we can connect it to the phone system. If it's not converting visitors to calls, we'll build one that does—for less than one job pays you.",
  },
  {
    question: "Do I need to understand the technology?",
    answer: "Nope. You run your business. We support it. That's the deal.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Questions Contractors Actually Ask Us
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
