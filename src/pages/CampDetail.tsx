import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Calendar } from 'lucide-react';
import { getCampBySlug } from '../data/campsData';
import PageMeta from '../components/PageMeta';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function CampDetail() {
  const { slug } = useParams<{ slug: string }>();
  const camp = slug ? getCampBySlug(slug) : undefined;

  if (!camp) return <Navigate to="/camps-holidays" replace />;

  return (
    <>
      <PageMeta
        title={camp.metaTitle}
        description={camp.metaDescription}
        canonicalPath={`/camps-holidays/${camp.slug}`}
      />

      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${camp.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/80" />
        <div className="relative container-max section-padding w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {camp.duration}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {camp.location}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              {camp.name}
            </h1>
            <p className="text-lg md:text-xl text-sand-200 leading-relaxed max-w-2xl">
              {camp.best}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <Breadcrumb
            items={[
              { label: 'Camps & Holidays', to: '/camps-holidays' },
              { label: camp.name },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {camp.intro.map((p, i) => (
                <p key={i} className="text-earth-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-4">What's Included</h3>
                <ul className="space-y-2">
                  {camp.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-earth-600">
                      <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="block w-full text-center px-6 py-3.5 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors shadow-sm"
              >
                Get Matched with {camp.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <SectionHeading title="Sample Daily Schedule" />
          <div className="space-y-3">
            {camp.sampleSchedule.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-4 bg-sand-50 rounded-xl p-4 border border-sand-100">
                  <div className="w-16 flex-shrink-0">
                    <span className="text-forest-600 font-heading font-bold text-sm">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-earth-400 flex-shrink-0" />
                    <span className="text-earth-700 text-sm">{item.activity}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <SectionHeading title="Pricing Packages" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest-50 text-earth-700">
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tl-xl">Package</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Duration</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold">Price</th>
                  <th className="text-left px-5 py-3 font-heading font-semibold rounded-tr-xl">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {camp.pricing.map((tier, i) => (
                  <tr key={i} className="hover:bg-sand-50 transition-colors">
                    <td className="px-5 py-3 font-medium text-earth-800">{tier.tier}</td>
                    <td className="px-5 py-3 text-earth-500">{tier.duration}</td>
                    <td className="px-5 py-3 text-forest-600 font-semibold">{tier.price}</td>
                    <td className="px-5 py-3 text-earth-500">{tier.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-earth-500 text-xs mt-4 text-center">Prices are per person. Group discounts typically available.</p>
        </div>
      </section>

      <section className="section-padding bg-earth-800">
        <div className="container-max max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Seasonal Availability</h3>
              <p className="text-sand-200 text-sm leading-relaxed">{camp.seasonalAvailability}</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Accommodation</h3>
              <p className="text-sand-200 text-sm leading-relaxed">{camp.accommodation}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title={`${camp.name} FAQ`} />
          <FaqAccordion items={camp.faqs} id={`camp-${camp.slug}`} />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title={`Book ${camp.name}`}
            subtitle="Tell us your dates and preferences for a personalized camp recommendation"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="camps" />
          </div>
        </div>
      </section>
    </>
  );
}
