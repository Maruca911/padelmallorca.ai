import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CONSENT_KEY = 'padel-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const dismiss = () => {
    localStorage.setItem(CONSENT_KEY, 'dismissed');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-max max-w-3xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-sand-200 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-earth-700 text-sm leading-relaxed">
              We use essential cookies for site functionality. Our Courts & Clubs page embeds Google Maps, which may set its own cookies.
              No tracking or advertising cookies are used. See our{' '}
              <a href="/privacy" className="text-forest-600 underline hover:text-forest-700">
                Privacy Policy
              </a>{' '}
              for details.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={accept}
              className="px-5 py-2.5 bg-forest-500 text-white text-sm font-semibold rounded-lg hover:bg-forest-600 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={dismiss}
              className="p-2 text-earth-400 hover:text-earth-600 transition-colors"
              aria-label="Dismiss cookie notice"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
