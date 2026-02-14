import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import TrustBadges from '../components/TrustBadges';
import { ClipboardList, Search, Handshake } from 'lucide-react';

const steps = [
  { icon: ClipboardList, title: 'Submit Preferences', desc: 'Fill in the form below with your level, location, budget, and interests.' },
  { icon: Search, title: 'We Curate Options', desc: 'Our experts find 3 personalized padel options from vetted providers across Mallorca.' },
  { icon: Handshake, title: 'Connect and Play', desc: 'We introduce you via email or WhatsApp within 24 hours. You book and play.' },
];

export default function Signup() {
  return (
    <>
      <PageMeta
        title="Get Matched Free | Padel Courts, Lessons & Camps in Mallorca"
        description="Submit your padel preferences and receive 3 personalized, vetted options within 24 hours. Free matching service for courts, coaching, camps, and events in Mallorca."
        canonicalPath="/signup"
      />
      <Hero
        title="Get Matched with the Best Padel in Mallorca"
        subtitle="Tell us what you're looking for and receive 3 personalized, vetted padel options within 24 hours. Completely free."
        imageUrl="https://images.pexels.com/photos/35248403/pexels-photo-35248403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-forest-50 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-forest-500" />
                </div>
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-2">{step.title}</h3>
                <p className="text-earth-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <TrustBadges />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Your Padel Preferences"
            subtitle="The more you tell us, the better we can match you"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-sand-100">
            <LeadForm variant="full" />
          </div>
        </div>
      </section>
    </>
  );
}
