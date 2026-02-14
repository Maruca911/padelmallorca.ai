import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaTo?: string;
  imageUrl: string;
  compact?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaTo = '/signup', imageUrl, compact }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? 'min-h-[50vh]' : 'min-h-[85vh]'} flex items-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth-900/70 via-earth-900/50 to-earth-900/80" />

      <div className="relative container-max section-padding w-full">
        <div className={`max-w-3xl ${compact ? '' : 'pt-16'}`}>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-sand-200 leading-relaxed mb-8 max-w-2xl">
            {subtitle}
          </p>
          {ctaText && (
            <Link
              to={ctaTo}
              className="inline-flex items-center px-8 py-4 bg-forest-500 text-white font-heading font-bold text-lg rounded-xl hover:bg-forest-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
