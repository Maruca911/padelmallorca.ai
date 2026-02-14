import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import { Calendar, Sun, Snowflake, Home, Dumbbell, UserCheck, ArrowRight } from 'lucide-react';
import { camps } from '../data/campsData';

const features = [
  { icon: Calendar, title: 'Summer Camps', desc: 'Padel camps in summer Mallorca with outdoor courts, long days, and beachside relaxation between sessions.' },
  { icon: Snowflake, title: 'Winter Training', desc: 'Padel camps in winter Mallorca with mild weather, fewer crowds, and focused off-season improvement.' },
  { icon: Home, title: 'With Accommodation', desc: 'Padel camps with accommodation in Mallorca. Hotels, villas, or resort packages included.' },
  { icon: Dumbbell, title: 'Fitness Camps', desc: 'Padel fitness camps Mallorca combining on-court training with strength, agility, and conditioning.' },
  { icon: UserCheck, title: 'All Levels Welcome', desc: 'From beginner padel training camps to advanced competitive preparation. Levels are arranged by assessment.' },
  { icon: Sun, title: 'Near Beaches', desc: 'Padel camps near beaches Mallorca so you can unwind by the Mediterranean after a training session.' },
];

const campFaqs = [
  { question: 'Do padel camps in Mallorca accept all levels?', answer: 'Yes, most camps welcome beginners through advanced players. Groups are arranged by level after an initial assessment so everyone trains at the right intensity.' },
  { question: 'Can I book a private room in padel camps?', answer: 'Many camps offer private room upgrades. Accommodation-inclusive packages typically provide shared or private options. Let us know your preference when you submit your request.' },
  { question: 'Are there padel camps for women in Mallorca?', answer: 'Yes, several providers run women-only padel camps and clinics, including Padel Training Mallorca in Bendinat. These sessions focus on technique and tactics in a supportive environment.' },
  { question: 'Do camps cater to dietary requirements like vegetarian?', answer: 'Most camps with meal plans offer vegetarian, vegan, and other dietary options. Mention your requirements in the matching form and we will find the right fit.' },
  { question: 'What\'s included in a typical padel camp price?', answer: 'Most camps include coaching sessions (3-5 hours daily), court hire, equipment use, and sometimes accommodation and meals. Prices range from 300 EUR for a weekend to 1500+ EUR for a full-week all-inclusive package.' },
];

export default function CampsHolidays() {
  return (
    <>
      <PageMeta
        title="Padel Camps Mallorca: Training Holidays for All Levels 2026"
        description="Explore the best padel camps in Mallorca. Multi-day training holidays with accommodation, expert coaching, and Mediterranean sun. All levels from beginner to advanced."
        canonicalPath="/camps-holidays"
      />
      <Hero
        title="Padel Camps Mallorca: Training Holidays for All Levels"
        subtitle="Explore the best padel camps in Mallorca. Multi-day training retreats with accommodation, expert coaching, and the perfect Mediterranean setting."
        ctaText="Find a Camp"
        imageUrl="https://images.pexels.com/photos/34080002/pexels-photo-34080002.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Featured Padel Camps"
            subtitle="Training holidays from weekend getaways to week-long immersions"
          />
          <div className="space-y-4">
            {camps.map((camp, i) => (
              <ScrollReveal key={i}>
                <Link
                  to={`/camps-holidays/${camp.slug}`}
                  className="group block bg-white rounded-2xl border border-sand-100 p-6 hover:shadow-md hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-lg text-earth-800 group-hover:text-forest-600 transition-colors">{camp.name}</h3>
                        <span className="px-2 py-0.5 bg-forest-50 text-forest-700 text-xs rounded-full font-medium">
                          {camp.duration}
                        </span>
                      </div>
                      <p className="text-earth-500 text-sm mb-2">{camp.best}</p>
                      <p className="text-earth-500 text-xs">{camp.highlights} &mdash; {camp.location}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-earth-400 group-hover:text-forest-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
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
            title="Camp Features"
            subtitle="Find the perfect camp style for your padel holiday"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <ScrollReveal key={i}>
                <div className="bg-sand-50 rounded-2xl p-6 border border-sand-100 h-full">
                  <div className="w-11 h-11 rounded-xl bg-forest-50 flex items-center justify-center mb-4">
                    <feat.icon className="w-5 h-5 text-forest-500" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-earth-800 mb-2">{feat.title}</h3>
                  <p className="text-earth-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <SectionHeading
            title="Camp Pricing Overview"
            subtitle="What to expect at different budget levels"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-earth-700">
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tl-xl">Package</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Duration</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Price Range</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tr-xl">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Weekend Intensive</td>
                  <td className="px-5 py-3 text-earth-500">2-3 days</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">300-500 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Coaching, court hire, equipment</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Standard Camp</td>
                  <td className="px-5 py-3 text-earth-500">5 days</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">600-900 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Coaching, courts, lunches, video analysis</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">All-Inclusive</td>
                  <td className="px-5 py-3 text-earth-500">5-7 days</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">1,000-1,500 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Coaching, hotel, meals, transfers</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Premium / Academy</td>
                  <td className="px-5 py-3 text-earth-500">1-2 weeks</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">1,500-3,000 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Elite coaching, resort, spa, excursions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-earth-500 text-xs mt-4 text-center">Prices are per person. Group discounts typically available for 4+ players booking together.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Camp Questions Answered" />
          <FaqAccordion items={campFaqs} />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Get Matched with a Padel Camp"
            subtitle="Tell us your dates, level, and preferences for a personalized camp recommendation"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="camps" />
          </div>
        </div>
      </section>
    </>
  );
}
