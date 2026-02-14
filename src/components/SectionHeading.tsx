interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-earth-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-earth-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
