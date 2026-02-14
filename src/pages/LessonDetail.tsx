import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, MapPin } from 'lucide-react';
import { getLessonTypeBySlug } from '../data/lessonTypesData';
import PageMeta from '../components/PageMeta';
import Breadcrumb from '../components/Breadcrumb';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import FaqAccordion from '../components/FaqAccordion';
import LeadForm from '../components/LeadForm';

export default function LessonDetail() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLessonTypeBySlug(slug) : undefined;

  if (!lesson) return <Navigate to="/lessons-coaching" replace />;

  return (
    <>
      <PageMeta
        title={lesson.metaTitle}
        description={lesson.metaDescription}
        canonicalPath={`/lessons-coaching/${lesson.slug}`}
      />

      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${lesson.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/80" />
        <div className="relative container-max section-padding w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {lesson.price}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                {lesson.typicalDuration}
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
              {lesson.title} in Mallorca
            </h1>
            <p className="text-lg md:text-xl text-sand-200 leading-relaxed max-w-2xl">
              {lesson.shortDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <Breadcrumb
            items={[
              { label: 'Lessons & Coaching', to: '/lessons-coaching' },
              { label: lesson.title },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {lesson.intro.map((p, i) => (
                <p key={i} className="text-earth-600 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-sand-100 p-6 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-earth-800 mb-4">Pricing</h3>
                <dl className="space-y-3 text-sm">
                  {lesson.priceBreakdown.map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <dt className="text-earth-500">{item.item}</dt>
                      <dd className="text-forest-600 font-semibold">{item.price}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Link
                to="/signup"
                className="block w-full text-center px-6 py-3.5 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors shadow-sm"
              >
                Book {lesson.title}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading title="What to Expect" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.whatToExpect.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="flex items-start gap-3 bg-sand-50 rounded-xl p-5 border border-sand-100">
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
              Skill Levels
            </h2>
            <p className="text-sand-200">This format is suitable for the following players</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {lesson.skillLevels.map((level) => (
              <div
                key={level}
                className="px-5 py-2.5 bg-earth-700 rounded-full text-sand-200 text-sm"
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Where to Book"
            subtitle="Clubs offering this lesson format across Mallorca"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {lesson.clubsOffering.map((club, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-2xl p-6 border border-sand-100 hover:shadow-md hover:border-forest-200 transition-all duration-300">
                  <h3 className="font-heading font-bold text-lg text-earth-800 mb-1">{club.name}</h3>
                  <p className="text-earth-500 text-sm flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5" /> {club.location}
                  </p>
                  <p className="text-earth-500 text-sm">{club.notes}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-100">
        <div className="container-max max-w-3xl">
          <SectionHeading title={`${lesson.title} FAQ`} />
          <FaqAccordion items={lesson.faqs} id={`lesson-${lesson.slug}`} />
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-2xl">
          <SectionHeading
            title={`Book ${lesson.title}`}
            subtitle="Tell us your level and preferences for a personalized coaching match"
          />
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100">
            <LeadForm variant="full" defaultInterest="lessons" />
          </div>
        </div>
      </section>
    </>
  );
}
