import { Link } from 'react-router-dom';
import {
  MapPin, Users, Award, BookOpen, ClipboardList, Search, Handshake,
  ArrowRight, CircleDot, GraduationCap, Mountain, Trophy
} from 'lucide-react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import TrustBadges from '../components/TrustBadges';
import LeadForm from '../components/LeadForm';
import ScrollReveal from '../components/ScrollReveal';
import StructuredData, { organizationSchema, websiteSchema } from '../components/StructuredData';

const whyUs = [
  {
    icon: Award,
    title: 'Tailored to Your Level',
    desc: 'From beginner padel lessons in Palma to advanced training camps, we match your exact skill level and goals.',
  },
  {
    icon: MapPin,
    title: 'Island-Wide Coverage',
    desc: 'Padel courts in Alcudia, Cala d\'Or, Soller, Magaluf, Santa Ponsa, and across Mallorca.',
  },
  {
    icon: Users,
    title: 'For Everyone',
    desc: 'Padel lessons for kids, families, seniors, and groups. Private or social, we have options for all.',
  },
  {
    icon: BookOpen,
    title: 'Expert Insight',
    desc: 'We explain padel rules, terminology, and help you navigate the Mallorcan padel scene like a local.',
  },
];

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Submit Your Preferences',
    desc: 'Tell us your level, location, budget, and what you\'re looking for — courts, coaching, camps, or tournaments.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Find Your Match',
    desc: 'Our experts curate 3 personalized options from vetted providers like Rafa Nadal Academy, Smash Padel Group, and more.',
  },
  {
    icon: Handshake,
    number: '03',
    title: 'Connect and Play',
    desc: 'We introduce you via email or WhatsApp. Book your padel experience and get on the court.',
  },
];

const quickLinks = [
  { to: '/courts-clubs', icon: CircleDot, title: 'Courts & Clubs', desc: 'Find indoor and outdoor padel courts across Mallorca' },
  { to: '/lessons-coaching', icon: GraduationCap, title: 'Lessons & Coaching', desc: 'Private and group lessons with expert coaches' },
  { to: '/camps-holidays', icon: Mountain, title: 'Camps & Holidays', desc: 'Multi-day training camps with accommodation' },
  { to: '/tournaments-events', icon: Trophy, title: 'Tournaments & Events', desc: 'Join amateur and competitive padel events' },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Padel Mallorca: Courts, Lessons, Camps & Tournaments | Free Matching"
        description="Find the best padel courts, lessons, camps, and tournaments in Mallorca. Free matching service connecting you with vetted padel providers in Palma and beyond."
        canonicalPath="/"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Hero
        title="Padel Mallorca: Find Courts, Lessons, Camps & Tournaments in Palma and Beyond"
        subtitle="Discover the best padel courts, clubs, coaches, and training camps across Mallorca. Our free matching service sends you 3 vetted options within 24 hours."
        ctaText="Get Matched Free"
        imageUrl="https://images.pexels.com/photos/36014317/pexels-photo-36014317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <TrustBadges />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Why Choose Padel Mallorca?"
            subtitle="Your free personal concierge for everything padel on the island"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-sand-100 hover:shadow-md hover:border-forest-200 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-forest-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-earth-800 mb-2">{item.title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-3">
              How It Works
            </h2>
            <p className="text-sand-200 text-lg">Three simple steps to your perfect padel experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-forest-500 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-forest-400 font-heading font-bold text-sm">{step.number}</span>
                  <h3 className="font-heading font-bold text-xl text-white mt-1 mb-3">{step.title}</h3>
                  <p className="text-sand-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Explore Padel in Mallorca"
            subtitle="Browse by category to find exactly what you need"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <ScrollReveal key={link.to}>
                <Link
                  to={link.to}
                  className="group block bg-white rounded-2xl p-6 shadow-sm border border-sand-100 hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-50 group-hover:bg-forest-100 flex items-center justify-center mb-4 transition-colors">
                    <link.icon className="w-6 h-6 text-forest-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-earth-800 mb-2 group-hover:text-forest-600 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-earth-500 text-sm mb-3">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Ready to Play Padel in Mallorca?"
              subtitle="Submit your preferences and receive 3 personalized options within 24 hours"
            />
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
              <LeadForm variant="full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
