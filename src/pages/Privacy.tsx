import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              ← Back to Home
            </Button>
          </Link>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            📜 Salita Labs Privacy & Messaging Consent Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Effective Date:</strong> October 19, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
            <p className="text-foreground leading-relaxed">
              Salita Labs LLC ("Salita Labs," "we," "our," or "us") provides automation, AI receptionist, and customer-care services to business clients. We value your privacy and are committed to transparent communication about how we collect and use information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-foreground leading-relaxed mb-4">
              We collect limited personal information such as your name, phone number, and call details when you contact one of our clients or interact with our AI receptionist system.
            </p>
            <p className="text-foreground leading-relaxed">
              All information collected is used exclusively for business communication and service coordination on behalf of our clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Information</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Your information may be used to:
            </p>
            <ul className="list-disc pl-6 text-foreground leading-relaxed mb-4">
              <li>Respond to your inquiry or missed call</li>
              <li>Send appointment confirmations, reminders, or service updates</li>
              <li>Facilitate two-way customer support and scheduling</li>
              <li>Maintain accurate records of communication history</li>
            </ul>
            <p className="text-foreground leading-relaxed">
              We do not sell, share, or use your data for marketing or promotional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Messaging Consent (Opt-In)</h2>
            <p className="text-foreground leading-relaxed mb-4">
              By providing your phone number and interacting with our AI receptionist or automated phone system, you provide verbal consent to receive follow-up SMS messages regarding your inquiry or service request.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This verbal opt-in is recorded during the phone conversation and applies only to service-related or informational messages.
            </p>
            <p className="text-foreground leading-relaxed">
              You can opt out of SMS messages at any time by replying STOP, or request further assistance by replying HELP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
            <p className="text-foreground leading-relaxed">
              We retain only the information necessary to provide services or as required by law. All records are securely stored and periodically reviewed for deletion when no longer needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Security</h2>
            <p className="text-foreground leading-relaxed">
              Salita Labs implements reasonable technical and organizational measures to safeguard your data against unauthorized access, alteration, or misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-foreground leading-relaxed">
              You may request to review, correct, or delete your information at any time by contacting us at privacy@salitalabs.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For privacy or compliance inquiries, contact:
            </p>
            <div className="text-foreground leading-relaxed">
              <p>Salita Labs LLC</p>
              <p>971 US Highway 202N, Suite N</p>
              <p>Branchburg, NJ 08876</p>
              <p>Email: privacy@salitalabs.com</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Privacy;
