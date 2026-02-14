import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

const locationOptions = [
  'Palma de Mallorca',
  'Alcudia',
  'Cala d\'Or',
  'Magaluf',
  'Santa Ponsa',
  'Soller',
  'Port de Pollenca',
  'Manacor',
  'Other / Flexible',
];

const levelOptions = ['Beginner', 'Intermediate', 'Advanced', 'Pro'];
const budgetOptions = ['Budget-friendly', 'Mid-range', 'Premium', 'Flexible'];
const interestOptions = [
  { value: 'courts', label: 'Courts & Clubs' },
  { value: 'lessons', label: 'Lessons & Coaching' },
  { value: 'camps', label: 'Camps & Holidays' },
  { value: 'tournaments', label: 'Tournaments & Events' },
];

interface LeadFormProps {
  variant?: 'full' | 'compact';
  defaultInterest?: string;
}

export default function LeadForm({ variant = 'full', defaultInterest }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_contact: 'email',
    location_preference: '',
    level: 'Beginner',
    budget: 'Flexible',
    interest_type: defaultInterest ? [defaultInterest] : [] as string[],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('leads').insert({
      ...formData,
      locale: 'en',
    });
    setStatus(error ? 'error' : 'success');
  };

  const toggleInterest = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interest_type: prev.interest_type.includes(value)
        ? prev.interest_type.filter((v) => v !== value)
        : [...prev.interest_type, value],
    }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-4">
        <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-4" />
        <h3 className="font-heading font-bold text-2xl text-earth-800 mb-2">
          Request Received!
        </h3>
        <p className="text-earth-600 max-w-md mx-auto">
          We will curate 3 personalized padel options for you and get back within 24 hours via your preferred contact method.
        </p>
      </div>
    );
  }

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all text-sm';
  const labelClass = 'block text-sm font-semibold text-earth-700 mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid ${variant === 'full' ? 'md:grid-cols-2' : ''} gap-5`}>
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className={`grid ${variant === 'full' ? 'md:grid-cols-2' : ''} gap-5`}>
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+34 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Preferred Contact</label>
          <div className="flex gap-3 mt-1">
            {['email', 'whatsapp'].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setFormData({ ...formData, preferred_contact: method })}
                className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium capitalize transition-all ${
                  formData.preferred_contact === method
                    ? 'border-forest-500 bg-forest-50 text-forest-700'
                    : 'border-sand-300 text-earth-600 hover:border-forest-300'
                }`}
              >
                {method === 'whatsapp' ? 'WhatsApp' : 'Email'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`grid ${variant === 'full' ? 'md:grid-cols-3' : ''} gap-5`}>
        <div>
          <label className={labelClass}>Location</label>
          <select
            value={formData.location_preference}
            onChange={(e) => setFormData({ ...formData, location_preference: e.target.value })}
            className={inputClass}
          >
            <option value="">Select area...</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Level</label>
          <select
            value={formData.level}
            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            className={inputClass}
          >
            {levelOptions.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Budget</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className={inputClass}
          >
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>I'm interested in</label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleInterest(opt.value)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                formData.interest_type.includes(opt.value)
                  ? 'border-forest-500 bg-forest-50 text-forest-700'
                  : 'border-sand-300 text-earth-600 hover:border-forest-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {variant === 'full' && (
        <div>
          <label className={labelClass}>Anything else we should know?</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            placeholder="Special requirements, group size, dates..."
            className={inputClass}
          />
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-forest-500 text-white font-heading font-bold text-lg rounded-xl hover:bg-forest-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {status === 'loading' ? 'Submitting...' : 'Get Matched Free'}
      </button>
    </form>
  );
}
