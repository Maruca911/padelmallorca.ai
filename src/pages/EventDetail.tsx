import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, Users, CreditCard } from 'lucide-react';
import { getEventBySlug } from '../data/eventsData';
import PageMeta from '../components/PageMeta';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) return <Navigate to="/tournaments-events" replace />;

  return (
    <>
      <PageMeta
        title={event.metaTitle}
        description={event.metaDescription}
        canonicalPath={`/tournaments-events/${event.slug}`}
      />

      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/80" />
        <div className="relative container-max section-padding w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {event.date}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {event.type}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              {event.name}
            </h1>
            <p className="text-lg md:text-xl text-sand-200 leading-relaxed max-w-2xl">
              {event.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <Breadcrumb
            items={[
              { label: 'Tournaments & Events', to: '/tournaments-events' },
              { label: event.name },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {event.intro.map((p, i) => (
                <p key={i} className="text-earth-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-4">Event Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-earth-500 flex items-center gap-1.5 mb-0.5">
                      <MapPin className="w-3.5 h-3.5" /> Venue
                    </dt>
                    <dd className="text-earth-800 font-medium">{event.details.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-earth-500 flex items-center gap-1.5 mb-0.5">
                      <Users className="w-3.5 h-3.5" /> Format
                    </dt>
                    <dd className="text-earth-800 font-medium">{event.details.format}</dd>
                  </div>
                  <div>
                    <dt className="text-earth-500 flex items-center gap-1.5 mb-0.5">
                      <CreditCard className="w-3.5 h-3.5" /> Entry Fee
                    </dt>
                    <dd className="text-earth-800 font-medium">{event.details.entryFee}</dd>
                  </div>
                  <div>
                    <dt className="text-earth-500 mb-0.5">Prizes</dt>
                    <dd className="text-earth-800 font-medium">{event.details.prizes}</dd>
                  </div>
                  <div>
                    <dt className="text-earth-500 mb-0.5">Registration Deadline</dt>
                    <dd className="text-forest-600 font-semibold">{event.details.registrationDeadline}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-3">Categories</h3>
                <p className="text-earth-600 text-sm">{event.categories}</p>
              </div>

              <Link
                to="/signup"
                className="block w-full text-center px-6 py-3.5 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors shadow-sm"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <SectionHeading title="Event Schedule" />
          <div className="space-y-3">
            {event.schedule.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-4 bg-sand-50 rounded-xl p-4 border border-sand-100">
                  <div className="w-32 flex-shrink-0">
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
        <div className="container-max">
          <SectionHeading title="What to Expect" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.whatToExpect.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-sand-100">
                  <CheckCircle className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span className="text-earth-700 text-sm leading-relaxed">{item}</span>
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
              Eligibility
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {event.eligibility.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-earth-700 rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-mint-300 flex-shrink-0 mt-0.5" />
                <span className="text-sand-200 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title={`${event.name} FAQ`} />
          <FaqAccordion items={event.faqs} id={`event-${event.slug}`} />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title="Register Your Interest"
            subtitle="Tell us about your level and we'll help you find the right events"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="tournaments" />
          </div>
        </div>
      </section>
    </>
  );
}
