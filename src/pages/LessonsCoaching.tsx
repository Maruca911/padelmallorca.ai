import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { lessonTypes } from '../data/lessonTypesData';

const coaches = [
  {
    name: 'Rafa Nadal Academy Coaches',
    specialty: 'All levels, world-class methodology',
    languages: 'Spanish, English, German',
    location: 'Manacor',
  },
  {
    name: 'UDYR SPORT Coaching Team',
    specialty: 'Beginner to intermediate focus',
    languages: 'Spanish, English',
    location: 'Palma',
  },
  {
    name: 'Smash Padel Group Instructors',
    specialty: 'Scenic group training, panoramic courts',
    languages: 'Spanish, English, German',
    location: 'Playa de Muro',
  },
  {
    name: 'Palma Padel Academy',
    specialty: 'Advanced technique and competition prep',
    languages: 'Spanish, English',
    location: 'Son Rapinya',
  },
];

export default function LessonsCoaching() {
  return (
    <>
      <PageMeta
        title="Padel Lessons Mallorca: Private, Group & Beginner Coaching"
        description="Book padel lessons in Mallorca with expert coaches. Private, group, kids, and intensive training sessions from 25 EUR. English-speaking instructors available."
        canonicalPath="/lessons-coaching"
      />
      <Hero
        title="Padel Lessons Mallorca: Private, Group, and Beginner Coaching"
        subtitle="Connect with expert padel coaches in Mallorca for private lessons, group sessions, kids coaching, and intensive training programs."
        ctaText="Find a Coach"
        imageUrl="https://images.pexels.com/photos/15612080/pexels-photo-15612080.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Padel Lesson Types"
            subtitle="From private sessions to family fun, we match you with the right coaching format"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonTypes.map((type, i) => (
              <ScrollReveal key={i}>
                <Link
                  to={`/lessons-coaching/${type.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-sand-100 hover:shadow-md hover:border-forest-200 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-forest-50 group-hover:bg-forest-100 flex items-center justify-center mb-4 transition-colors">
                    <type.icon className="w-5 h-5 text-forest-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-earth-800 group-hover:text-forest-600 transition-colors mb-2">{type.title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed flex-1 mb-3">{type.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-forest-600 font-semibold text-sm">{type.price}</p>
                    <ArrowRight className="w-4 h-4 text-earth-400 group-hover:text-forest-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
              Featured Coaching Programs
            </h2>
            <p className="text-sand-200">Expert padel coaching from Mallorca's top clubs and academies</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, i) => (
              <ScrollReveal key={i}>
                <div className="bg-earth-700 rounded-2xl p-6 border border-earth-600">
                  <h3 className="font-heading font-bold text-white mb-2">{coach.name}</h3>
                  <p className="text-sand-200 text-sm mb-3">{coach.specialty}</p>
                  <div className="space-y-1 text-xs text-sand-200">
                    <p><span className="text-mint-300">Languages:</span> {coach.languages}</p>
                    <p><span className="text-mint-300">Location:</span> {coach.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <SectionHeading title="Lesson Pricing Guide" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-earth-700">
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tl-xl">Type</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Duration</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Price Range</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tr-xl">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Private Lesson</td>
                  <td className="px-5 py-3 text-earth-500">1 hour</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">40-50 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Fast improvement</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Group Lesson</td>
                  <td className="px-5 py-3 text-earth-500">1-1.5 hours</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">30-40 EUR/person</td>
                  <td className="px-5 py-3 text-earth-500">Social learning</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Kids Session</td>
                  <td className="px-5 py-3 text-earth-500">45 min - 1 hour</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">25-35 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Ages 6-16</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Intensive Day</td>
                  <td className="px-5 py-3 text-earth-500">4-6 hours</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">150-250 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Holiday players</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Find Your Perfect Coach"
            subtitle="Tell us about your level and goals, and we'll match you with the right instructor"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="lessons" />
          </div>
        </div>
      </section>
    </>
  );
}
