const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Salita Labs</h3>
            <p className="text-muted-foreground">Operations Partner for Home Service Contractors</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-right">
            Our approach is backed by industry research:
            <br />
            <a href="#" className="hover:text-foreground transition-colors">Invoca 2024 Home Services Study</a>
            {" • "}
            <a href="#" className="hover:text-foreground transition-colors">Harvard Business Review - Customer Reviews & Firm Performance</a>
            {" • "}
            <a href="#" className="hover:text-foreground transition-colors">ServiceTitan 2023 Industry Benchmarks</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
