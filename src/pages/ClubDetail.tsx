import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { getClubBySlug } from '../data/clubsData';
import PageMeta from '../components/PageMeta';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';
import { Link } from 'react-router-dom';

export default function ClubDetail() {
  const { slug } = useParams<{ slug: string }>();
  const club = slug ? getClubBySlug(slug) : undefined;

  if (!club) return <Navigate to="/courts-clubs" replace />;

  return (
    <>
      <PageMeta
        title={club.metaTitle}
        description={club.metaDescription}
        canonicalPath={`/courts-clubs/${club.slug}`}
      />

      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${club.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/80" />
        <div className="relative container-max section-padding w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {club.courts}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {club.location}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              {club.name}
            </h1>
            <p className="text-lg md:text-xl text-sand-200 leading-relaxed max-w-2xl">
              {club.highlight}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <Breadcrumb
            items={[
              { label: 'Courts & Clubs', to: '/courts-clubs' },
              { label: club.name },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {club.intro.map((p, i) => (
                <p key={i} className="text-earth-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-forest-500" /> Opening Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-earth-500">Weekdays</dt>
                    <dd className="text-earth-800 font-medium">{club.openingHours.weekdays}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-earth-500">Weekends</dt>
                    <dd className="text-earth-800 font-medium">{club.openingHours.weekends}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-earth-500">Holidays</dt>
                    <dd className="text-earth-800 font-medium">{club.openingHours.holidays}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-forest-500" /> Pricing
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-earth-500">Off-Peak</dt>
                    <dd className="text-forest-600 font-semibold">{club.pricing.offPeak}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-earth-500">Peak</dt>
                    <dd className="text-forest-600 font-semibold">{club.pricing.peak}</dd>
                  </div>
                </dl>
                <p className="text-earth-500 text-xs mt-3">{club.pricing.notes}</p>
              </div>

              <Link
                to="/signup"
                className="block w-full text-center px-6 py-3.5 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors shadow-sm"
              >
                Get Matched with {club.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading title="Court Details" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'Indoor Courts', value: String(club.courtDetails.indoor) },
              { label: 'Outdoor Courts', value: String(club.courtDetails.outdoor) },
              { label: 'Surface', value: club.courtDetails.surface },
              { label: 'Wall Type', value: club.courtDetails.wallType },
              { label: 'Lighting', value: club.courtDetails.lighting },
            ].map((detail) => (
              <ScrollReveal key={detail.label}>
                <div className="bg-sand-50 rounded-2xl p-5 border border-sand-100 text-center">
                  <p className="text-earth-500 text-xs uppercase tracking-wide mb-1">{detail.label}</p>
                  <p className="text-earth-800 font-heading font-bold text-sm">{detail.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading title="Amenities & Facilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {club.amenities.map((amenity, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-sand-100">
                  <div className="w-10 h-10 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
                    <amenity.icon className="w-5 h-5 text-forest-500" />
                  </div>
                  <span className="text-earth-700 font-medium text-sm">{amenity.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
              Best For
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {club.bestFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-5 py-2.5 bg-earth-700 rounded-full text-sand-200 text-sm"
              >
                <ChevronRight className="w-3.5 h-3.5 text-mint-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title={`${club.name} FAQ`} />
          <FaqAccordion items={club.faqs} id={`club-${club.slug}`} />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title={`Get Matched with ${club.name}`}
            subtitle="Tell us your preferences and we'll arrange your visit"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="courts" />
          </div>
        </div>
      </section>
    </>
  );
}
