import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LeadForm from './LeadForm';

export default function FormPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('popup_dismissed');
    if (dismissed) return;

    let scrollDistance = 0;
    const onScroll = () => {
      scrollDistance += Math.abs(window.scrollY - scrollDistance);
      if (window.scrollY > 600) {
        setShow(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    const timer = setTimeout(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
    }, 10000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem('popup_dismissed', '1');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 animate-slide-up">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-sand-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-earth-500" />
        </button>
        <h3 className="font-heading font-bold text-xl text-earth-800 mb-2">
          Find Your Perfect Padel Match
        </h3>
        <p className="text-earth-500 text-sm mb-6">
          Tell us what you're looking for and we'll send you 3 personalized options within 24 hours.
        </p>
        <LeadForm variant="compact" />
      </div>
    </div>
  );
}
