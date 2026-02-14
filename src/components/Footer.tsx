import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleDot, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('loading');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    if (error) {
      setSubStatus(error.code === '23505' ? 'success' : 'error');
    } else {
      setSubStatus('success');
    }
    setEmail('');
  };

  return (
    <footer className="bg-earth-800 text-sand-200">
      <div className="container-max section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <CircleDot className="w-7 h-7 text-mint-300" />
              <span className="font-heading font-bold text-lg text-white">Padel Mallorca</span>
            </Link>
            <p className="text-sand-200 text-sm leading-relaxed">
              Your free padel matching service in Mallorca. We connect you with the best courts, coaches, camps, and tournaments across the island.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/courts-clubs', label: 'Courts & Clubs' },
                { to: '/lessons-coaching', label: 'Lessons & Coaching' },
                { to: '/camps-holidays', label: 'Camps & Holidays' },
                { to: '/tournaments-events', label: 'Tournaments & Events' },
                { to: '/faq', label: 'FAQ' },
                { to: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-mint-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-mint-300" />
                <a href="mailto:hello@padelmallorca.ai" className="hover:text-mint-300 transition-colors">
                  hello@padelmallorca.ai
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-earth-700 hover:bg-earth-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-earth-700 hover:bg-earth-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sand-200 text-sm mb-3">
              Get padel tips, new court openings, and tournament updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-3 py-2 rounded-lg bg-earth-700 border border-earth-600 text-white placeholder:text-sand-400 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500"
              />
              <button
                type="submit"
                disabled={subStatus === 'loading'}
                className="px-3 py-2 bg-forest-500 text-white rounded-lg hover:bg-forest-600 transition-colors disabled:opacity-50"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            {subStatus === 'success' && (
              <p className="text-mint-300 text-xs mt-2">Subscribed successfully!</p>
            )}
            {subStatus === 'error' && (
              <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
            )}
          </div>
        </div>

        <div className="border-t border-earth-700 pt-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-sand-400">
            <p>&copy; {new Date().getFullYear()} Padel Mallorca. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-mint-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-mint-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
          <p className="text-center text-xs text-sand-400 border-t border-earth-700 pt-4">
            Contents on this website are AI generated. Information is provided for guidance only and should be verified with individual providers.
          </p>
        </div>
      </div>
    </footer>
  );
}
