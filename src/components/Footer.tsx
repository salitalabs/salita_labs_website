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
            <a href="https://www.invoca.com/reports/the-invoca-call-conversion-benchmarks-report-for-the-home-services-industry-2025?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Home Services Call Conversion Benchmarks Report 2025</a>
            {" • "}
            <a href="https://www.servicetitan.com/press/residential-industry-report-2025?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">New ServiceTitan Research: 63% of Residential Services Businesses Are Growing</a>
            {" • "}
            <a href="https://hbr.org/2018/02/study-replying-to-customer-reviews-results-in-better-ratings?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Harvard Business Review</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
