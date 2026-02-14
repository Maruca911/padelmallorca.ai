import { ShieldCheck, Clock, Award } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'Vetted by Padel Experts' },
  { icon: Clock, label: '24-Hour Response' },
  { icon: Award, label: '100% Free Service' },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex items-center gap-2 px-4 py-2 bg-forest-50 border border-forest-200 rounded-full"
        >
          <badge.icon className="w-4 h-4 text-forest-600" />
          <span className="text-sm font-medium text-forest-700">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
