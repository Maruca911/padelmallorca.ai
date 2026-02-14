import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import { Calendar, Trophy, Users, Star, Zap, Medal, ArrowRight } from 'lucide-react';
import { events } from '../data/eventsData';

const eventTypes = [
  { icon: Trophy, title: 'Competitive Tournaments', desc: 'Federated and ranking events for serious padel players seeking official competition.' },
  { icon: Users, title: 'Amateur / Social', desc: 'Amateur padel tournaments Mallorca for recreational players looking for fun, competitive matches.' },
  { icon: Star, title: 'Mixed Doubles', desc: 'Padel mixed doubles tournaments bringing together players of all backgrounds and levels.' },
  { icon: Zap, title: 'Junior Events', desc: 'Padel junior tournaments Mallorca fostering the next generation of players in age-appropriate competition.' },
  { icon: Medal, title: 'Master Finals', desc: 'End-of-season padel master finals Mallorca with the best-ranked players competing for the title.' },
  { icon: Calendar, title: 'Seasonal Events', desc: 'Summer and winter padel events Mallorca timed around tourist seasons and local holidays.' },
];

const tournamentFaqs = [
  { question: 'How do I register for a padel tournament in Mallorca?', answer: 'Most tournaments accept registration through the hosting club or via the Federacion de Padel de las Islas Baleares. Tell us your level and dates through our matching form and we will guide you through the registration process for suitable events.' },
  { question: 'Do I need a federation license to compete?', answer: 'Federated tournaments require a valid padel federation license. Social and amateur events typically do not. The Balearic Padel Federation offers temporary licenses for visiting players. We can help you arrange this.' },
  { question: 'Can I enter a tournament as a solo player without a partner?', answer: 'Yes, many social and amateur events offer a partner-matching service. Americano-format tournaments rotate partners throughout the event, so you do not need to bring your own. Let us know if you need partner matching.' },
  { question: 'What are typical entry fees for tournaments?', answer: 'Social events: 15-30 EUR per pair. Amateur tournaments: 30-60 EUR per pair. Federated ranking events: 40-80 EUR per pair. Entry fees usually include balls, a small gift, and sometimes catering.' },
  { question: 'Are there tournaments suitable for beginners?', answer: 'Social mixed doubles and Americano events are perfect for beginners. These focus on fun and meeting people rather than competitive intensity. Several clubs run monthly beginner-friendly events throughout the year.' },
];

export default function TournamentsEvents() {
  return (
    <>
      <PageMeta
        title="Padel Tournaments Mallorca 2026: Upcoming Events & Competitions"
        description="Find upcoming padel tournaments in Mallorca 2026. Amateur events, junior championships, social mixed doubles, and competitive ranking tournaments across the island."
        canonicalPath="/tournaments-events"
      />
      <Hero
        title="Padel Tournaments Mallorca: Join Upcoming Events in 2026"
        subtitle="Find upcoming padel tournaments in Palma, amateur events, junior championships, and social mixed doubles across the island."
        ctaText="Find Events"
        imageUrl="https://images.pexels.com/photos/15612082/pexels-photo-15612082.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Upcoming Padel Events 2026"
            subtitle="From local amateur tournaments to island-wide championships"
          />
          <div className="space-y-4">
            {events.map((event, i) => (
              <ScrollReveal key={i}>
                <Link
                  to={`/tournaments-events/${event.slug}`}
                  className="group block bg-white rounded-2xl border border-sand-100 p-6 hover:shadow-md hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-forest-50 flex flex-col items-center justify-center">
                        <Calendar className="w-5 h-5 text-forest-500 mb-0.5" />
                        <span className="text-xs text-forest-700 font-semibold">{event.date.split(' ')[0]}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-lg text-earth-800 group-hover:text-forest-600 transition-colors">{event.name}</h3>
                        <span className="px-2 py-0.5 bg-earth-100 text-earth-600 text-xs rounded-full font-medium">
                          {event.type}
                        </span>
                      </div>
                      <p className="text-earth-500 text-sm mb-2">{event.desc}</p>
                      <p className="text-earth-500 text-xs">Categories: {event.categories}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-earth-400 group-hover:text-forest-500 group-hover:translate-x-1 transition-all flex-shrink-0 hidden md:block" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            title="Tournament Categories"
            subtitle="Whatever your level, there's a padel event for you in Mallorca"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type, i) => (
              <ScrollReveal key={i}>
                <div className="bg-sand-50 rounded-2xl p-6 border border-sand-100 h-full">
                  <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center mb-4">
                    <type.icon className="w-5 h-5 text-forest-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-earth-800 mb-2">{type.title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed">{type.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800">
        <div className="container-max max-w-3xl text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
            How to Join a Padel Tournament in Mallorca
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { step: '01', title: 'Tell Us Your Level', desc: 'Beginner, intermediate, advanced, or pro — we find events that match.' },
              { step: '02', title: 'Get Event Options', desc: 'We send you 3 upcoming tournaments or events that fit your dates and preferences.' },
              { step: '03', title: 'Register and Play', desc: 'We connect you with organizers so you can sign up and compete.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <span className="text-forest-400 font-heading font-bold text-sm">{s.step}</span>
                <h3 className="font-heading font-bold text-lg text-white mt-1 mb-2">{s.title}</h3>
                <p className="text-sand-200 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Tournament Registration Questions" />
          <FaqAccordion items={tournamentFaqs} id="tournament-faq" />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Get Matched with Events"
            subtitle="Tell us your level, dates, and preferences"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="tournaments" />
          </div>
        </div>
      </section>
    </>
  );
}
