import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Service | Padel Mallorca"
        description="Terms of service for Padel Mallorca's free padel matching service. Service disclaimers, liability terms, and user obligations."
        canonicalPath="/terms"
      />

      <div className="pt-24 pb-16">
        <div className="container-max max-w-3xl px-4 sm:px-6">
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-earth-800 mb-2">
            Terms of Service
          </h1>
          <p className="text-earth-500 text-sm mb-10">
            Last updated: February 13, 2026
          </p>

          <div className="space-y-8 text-earth-600 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">1. Service Description</h2>
              <p>
                Padel Mallorca operates a free matching service that connects users with padel courts, coaches, camps, and tournaments in Mallorca, Spain. We are not a booking platform. We introduce users to vetted padel providers based on submitted preferences. Any booking, payment, or contractual agreement is made directly between the user and the padel provider.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">2. Acceptance of Terms</h2>
              <p>
                By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or submit any information through our forms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">3. Our Role</h2>
              <p className="mb-3">Padel Mallorca acts solely as an intermediary. We:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Curate and recommend padel providers based on your stated preferences</li>
                <li>Facilitate introductions between you and padel providers via email or WhatsApp</li>
                <li>Provide informational content about padel in Mallorca through our website and blog</li>
              </ul>
              <p className="mt-3">We do not:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Process payments or handle bookings on behalf of padel providers</li>
                <li>Guarantee the availability, quality, or safety of any padel provider's services</li>
                <li>Enter into any contractual relationship between you and a padel provider</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">4. No Guarantees</h2>
              <p>
                While we vet the padel providers in our network, we do not guarantee the quality, safety, availability, or suitability of their services. All descriptions, pricing, and availability information on our website are provided for informational purposes and may change without notice. You are responsible for verifying details directly with the padel provider before booking.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">5. User Obligations</h2>
              <p className="mb-3">By using our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Provide accurate and truthful information in all form submissions</li>
                <li>Not use our service for any unlawful or unauthorized purpose</li>
                <li>Not submit false, misleading, or spam information</li>
                <li>Respect the padel providers we connect you with and engage in good faith</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Padel Mallorca shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of our service or your interactions with padel providers. This includes, but is not limited to, damages arising from injuries during padel activities, financial losses from bookings or cancellations, dissatisfaction with a padel provider's services, or technical issues with our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">7. Intellectual Property</h2>
              <p>
                All content on padelmallorca.ai, including text, graphics, logos, and blog articles, is the intellectual property of Padel Mallorca or its content creators. You may not reproduce, distribute, or create derivative works from our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites and services. We are not responsible for the content, privacy practices, or terms of service of any third-party sites. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">9. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our service after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">10. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Spain. Any disputes arising from these terms or your use of our service shall be subject to the exclusive jurisdiction of the courts of the Balearic Islands, Spain.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-earth-800 mb-3">11. Contact</h2>
              <p>
                For questions about these terms, contact us at{' '}
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
