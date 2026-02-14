import { Link } from 'react-router-dom';
import { Home, HelpCircle, CircleDot, BookOpen } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const quickLinks = [
  { to: '/', icon: Home, label: 'Homepage' },
  { to: '/courts-clubs', icon: CircleDot, label: 'Courts & Clubs' },
  { to: '/faq', icon: HelpCircle, label: 'FAQ' },
  { to: '/blog', icon: BookOpen, label: 'Blog' },
];

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Padel Mallorca"
        description="The page you are looking for does not exist or has been moved. Explore Padel Mallorca for courts, lessons, camps, and tournaments."
      />

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="mb-6">
            <span className="font-heading font-extrabold text-8xl md:text-9xl text-forest-100">
              404
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl md:text-3xl text-earth-800 mb-3">
            Page Not Found
          </h1>
          <p className="text-earth-500 mb-8 leading-relaxed">
            This page does not exist or has been moved. Use the links below to find what you are looking for.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-sand-200 text-earth-700 font-medium text-sm hover:border-forest-300 hover:text-forest-600 transition-all"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors"
          >
            Get Matched Free
          </Link>
        </div>
      </div>
    </>
  );
}
