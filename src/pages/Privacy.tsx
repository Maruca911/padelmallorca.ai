import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | Padel Mallorca"
        description="Learn how Padel Mallorca collects, stores, and protects your personal data. GDPR-compliant privacy policy covering data rights and cookie usage."
        canonicalPath="/privacy"
      />

      <div className="pt-24 pb-16">
        <div className="container-max max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-earth-800 mb-2">
            Privacy Policy
          </h1>
          <p className="text-earth-500 text-sm mb-10">
            Last updated: February 13, 2026
          </p>

          <div className="space-y-8 text-earth-600 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">1. Who We Are</h2>
              <p>
                Padel Mallorca ("we", "us", "our") operates the website padelmallorca.ai, a free padel matching service connecting users with padel courts, coaches, camps, and tournaments in Mallorca, Spain. For data protection inquiries, contact us at{' '}
                <a href="mailto:hello@padelmallorca.ai" className="text-forest-600 hover:text-forest-700 underline">
                  hello@padelmallorca.ai
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">2. What Data We Collect</h2>
              <p className="mb-3">We collect the following personal data when you voluntarily submit it through our forms:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-earth-800">Contact information:</strong> Name, email address, phone number (optional)</li>
                <li><strong className="text-earth-800">Padel preferences:</strong> Playing level, interests (courts, lessons, camps, tournaments), budget, preferred location</li>
                <li><strong className="text-earth-800">Newsletter subscription:</strong> Email address</li>
                <li><strong className="text-earth-800">FAQ contact form:</strong> Name, email address, and your question</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">3. How We Use Your Data</h2>
              <p className="mb-3">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To match you with relevant padel providers (courts, coaches, camps, events) based on your submitted preferences</li>
                <li>To communicate your preferences to vetted padel providers in Mallorca so they can contact you with relevant options</li>
                <li>To send you our newsletter if you have subscribed</li>
                <li>To respond to your questions submitted through the FAQ contact form</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">4. Legal Basis for Processing</h2>
              <p>
                We process your personal data based on your consent, which you provide by voluntarily submitting your information through our forms. You can withdraw your consent at any time by contacting us at hello@padelmallorca.ai.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">5. How We Store Your Data</h2>
              <p>
                Your personal data is stored securely using Supabase, a cloud database platform with servers located in the European Union. Data is encrypted in transit using TLS and at rest. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">6. Who We Share Your Data With</h2>
              <p className="mb-3">We share your data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-earth-800">Padel providers:</strong> When you submit a matching request, we share your preferences and contact details with up to 3 vetted padel providers in Mallorca so they can offer you relevant options</li>
                <li><strong className="text-earth-800">Supabase:</strong> Our database hosting provider, which processes data on our behalf within the EU</li>
              </ul>
              <p className="mt-3">We do not sell your personal data to third parties. We do not share your data with advertisers or marketing platforms.</p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">7. Cookies and Third-Party Embeds</h2>
              <p className="mb-3">
                Our website uses only essential cookies required for basic site functionality. We do not use tracking cookies, analytics cookies, or advertising cookies.
              </p>
              <p>
                We embed Google Maps on our Courts & Clubs page to show padel court locations. Google may set cookies and collect data through this embed according to{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:text-forest-700 underline">
                  Google's Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">8. Your Rights Under GDPR</h2>
              <p className="mb-3">As an EU resident, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-earth-800">Right of access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong className="text-earth-800">Right to rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-earth-800">Right to erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong className="text-earth-800">Right to restrict processing:</strong> Request that we limit how we use your data</li>
                <li><strong className="text-earth-800">Right to data portability:</strong> Request your data in a structured, commonly used format</li>
                <li><strong className="text-earth-800">Right to object:</strong> Object to the processing of your data for specific purposes</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{' '}
                <a href="mailto:hello@padelmallorca.ai" className="text-forest-600 hover:text-forest-700 underline">
                  hello@padelmallorca.ai
                </a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">9. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to fulfill the purposes described in this policy. Matching request data is retained for 12 months after your last interaction. Newsletter subscriptions remain active until you unsubscribe. You can request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">10. Children's Privacy</h2>
              <p>
                Our service is not directed to children under 16. We do not knowingly collect personal data from children under 16 without parental consent. If you believe we have collected data from a child under 16, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">12. Contact Us</h2>
              <p>
                For any questions about this privacy policy or your personal data, contact us at{' '}
                <a href="mailto:hello@padelmallorca.ai" className="text-forest-600 hover:text-forest-700 underline">
                  hello@padelmallorca.ai
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-sand-200">
            <Link
              to="/"
              className="text-forest-600 font-semibold hover:text-forest-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
