import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import LeadForm from '../components/LeadForm';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import { MapPin, Sun, Warehouse, Star, Layers, Shield, ArrowRight } from 'lucide-react';
import { clubs } from '../data/clubsData';

const areas = [
  { name: 'Palma de Mallorca', icon: MapPin },
  { name: 'Alcudia', icon: MapPin },
  { name: 'Cala d\'Or', icon: MapPin },
  { name: 'Magaluf', icon: MapPin },
  { name: 'Santa Ponsa', icon: MapPin },
  { name: 'Soller', icon: MapPin },
  { name: 'Port de Pollenca', icon: MapPin },
  { name: 'Deia', icon: MapPin },
  { name: 'Valldemossa', icon: MapPin },
  { name: 'Manacor', icon: MapPin },
];

const courtTypes = [
  {
    icon: Sun,
    title: 'Outdoor Courts',
    desc: 'Most common in Mallorca thanks to 300+ sunny days. Glass-walled courts with natural lighting and fresh Mediterranean air. Available at nearly every club.',
  },
  {
    icon: Warehouse,
    title: 'Indoor / Covered Courts',
    desc: 'Protected from rain and summer heat. Available at Palma Padel, Rafa Nadal Academy, and select clubs. Consistent conditions ideal for coaching.',
  },
  {
    icon: Layers,
    title: 'Artificial Grass Surface',
    desc: 'The standard surface for padel worldwide. Sand-filled synthetic turf provides excellent grip, controlled ball bounce, and low joint impact.',
  },
  {
    icon: Shield,
    title: 'Glass vs. Mesh Walls',
    desc: 'Premium courts use tempered glass walls for faster rebounds. Some courts combine glass backs with metal mesh sides. Glass courts preferred for competitive play.',
  },
];

const courtFaqs = [
  { question: 'What surface type do padel courts in Mallorca use?', answer: 'Nearly all padel courts in Mallorca use artificial grass (synthetic turf) with a sand infill. This is the standard surface globally and provides excellent grip, consistent ball bounce, and lower impact on joints compared to hard surfaces.' },
  { question: 'What is the difference between indoor and outdoor padel courts?', answer: 'Outdoor courts use natural light and are weather-dependent, while indoor courts provide climate control and consistent conditions. Most Mallorca clubs are outdoor, but Palma Padel and Rafa Nadal Academy have indoor options for rainy days or extreme heat.' },
  { question: 'Can I rent padel equipment at the court?', answer: 'Yes, most clubs offer racket and ball rental. Expect to pay 5 to 10 EUR for racket hire. Balls are typically included with court booking or available for 3 to 5 EUR per can.' },
  { question: 'How far in advance should I book a court?', answer: 'During peak season (June through September), book 2 to 3 days ahead for popular time slots. In shoulder and low season, same-day booking is usually possible. Weekend mornings are the most popular slots year-round.' },
  { question: 'Are padel courts wheelchair accessible in Mallorca?', answer: 'Major facilities like Palma Padel, UDYR SPORT, and Rafa Nadal Academy have wheelchair-accessible entrances and facilities. Contact the specific club in advance to confirm court-level accessibility for wheelchair padel.' },
];

export default function CourtsClubs() {
  return (
    <>
      <PageMeta
        title="Best Padel Courts and Clubs in Mallorca | Palma, Alcudia, Soller"
        description="Find the best padel courts in Mallorca. Indoor and outdoor courts, sea views, and budget-friendly options at clubs in Palma, Alcudia, Manacor, and more."
        canonicalPath="/courts-clubs"
      />
      <Hero
        title="Best Padel Courts and Clubs in Mallorca"
        subtitle="Find where to play padel in Mallorca. Indoor and outdoor courts, sea views, budget-friendly options, and premium clubs across the island."
        ctaText="Match Me with Courts"
        imageUrl="https://images.pexels.com/photos/32897040/pexels-photo-32897040.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Top Padel Clubs in Mallorca"
            subtitle="Vetted facilities across the island, from Palma to Manacor"
          />

          <div className="space-y-4">
            {clubs.map((club, i) => (
              <ScrollReveal key={i}>
                <Link
                  to={`/courts-clubs/${club.slug}`}
                  className="group block bg-white rounded-2xl border border-sand-100 p-6 hover:shadow-md hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-lg text-earth-800 group-hover:text-forest-600 transition-colors">{club.name}</h3>
                        <span className="px-2 py-0.5 bg-earth-100 text-earth-600 text-xs rounded-full font-medium">
                          {club.location}
                        </span>
                      </div>
                      <p className="text-earth-500 text-sm mb-2">{club.highlight}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-earth-500">
                        <span className="flex items-center gap-1">
                          <Warehouse className="w-3.5 h-3.5" /> {club.courts}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" /> {club.features}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-earth-400 group-hover:text-forest-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
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
              Padel Courts Across Mallorca
            </h2>
            <p className="text-sand-200">We cover every major area on the island</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <div
                key={area.name}
                className="flex items-center gap-2 px-4 py-2 bg-earth-700 rounded-full text-sand-200 text-sm"
              >
                <area.icon className="w-3.5 h-3.5 text-mint-300" />
                {area.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            title="Court Types & Specifications"
            subtitle="Understanding the different court setups across Mallorca"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courtTypes.map((type, i) => (
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

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <SectionHeading
            title="Court Pricing Guide"
            subtitle="Typical hourly rates across Mallorca clubs"
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-earth-700">
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tl-xl">Club</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Courts</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Off-Peak</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Peak</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tr-xl">Indoor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Palma Padel</td>
                  <td className="px-5 py-3 text-earth-500">16</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">12 EUR</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">18 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Yes</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">UDYR SPORT</td>
                  <td className="px-5 py-3 text-earth-500">11</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">10 EUR</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">16 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Partial</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Smash Padel Group</td>
                  <td className="px-5 py-3 text-earth-500">10</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">10 EUR</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">15 EUR</td>
                  <td className="px-5 py-3 text-earth-500">No</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Rafa Nadal Academy</td>
                  <td className="px-5 py-3 text-earth-500">7</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">15 EUR</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">22 EUR</td>
                  <td className="px-5 py-3 text-earth-500">Yes</td>
                </tr>
                <tr className="hover:bg-sand-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-earth-800">Terreno Club</td>
                  <td className="px-5 py-3 text-earth-500">3</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">8 EUR</td>
                  <td className="px-5 py-3 text-forest-600 font-semibold">12 EUR</td>
                  <td className="px-5 py-3 text-earth-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-earth-500 text-xs mt-4 text-center">Prices are per hour for the full court (4 players). Rates may vary seasonally.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title="Court Booking Questions" />
          <FaqAccordion items={courtFaqs} id="court-faq" />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <ScrollReveal>
            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-3">
                <Sun className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-heading font-bold text-lg text-earth-800">Guru Tips</h3>
              </div>
              <div className="space-y-3 text-earth-600 text-sm leading-relaxed ml-9">
                <p>
                  <strong>Are padel courts in Palma de Mallorca mainly outdoor?</strong> Yes, the Mediterranean climate means most courts are open-air, but indoor options exist at Palma Padel and Rafa Nadal Academy for rainy days or summer heat.
                </p>
                <p>
                  <strong>How do I book padel courts in Mallorca?</strong> Most clubs accept online booking through their apps. Or simply tell us your preferences and we'll handle the matching for you.
                </p>
                <p>
                  <strong>What's the average cost?</strong> Court hire typically ranges from 10 to 20 EUR per hour depending on location and time of day.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-md mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d198052.1!2d2.8!3d39.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spadel+courts+mallorca!5e0!3m2!1sen!2ses!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Padel courts in Mallorca map"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Get Matched with the Best Courts"
            subtitle="Tell us your preferences and we'll find the perfect padel courts for you"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="courts" />
          </div>
        </div>
      </section>
    </>
  );
}
