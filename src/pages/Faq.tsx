import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import Hero from '../components/Hero';
import PageMeta from '../components/PageMeta';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion, { type FaqItem } from '../components/FaqAccordion';
import ScrollReveal from '../components/ScrollReveal';
import { isBackendEnabled, supabase } from '../lib/supabase';
import StructuredData, { faqSchema } from '../components/StructuredData';

const BACKEND_DISABLED_NOTICE = 'Lead and newsletter submissions are temporarily unavailable while we complete backend setup. Please check back shortly.';

const generalFaqs: FaqItem[] = [
  { question: 'What is padel?', answer: 'Padel is a racket sport that combines elements of tennis and squash. It is played on an enclosed court about half the size of a tennis court, with walls that are part of the game. Padel is typically played in doubles, making it inherently social and fun for all ages.' },
  { question: 'Where did padel originate?', answer: 'Padel was invented in Mexico in 1969 by Enrique Corcuera, who built the first padel court at his home in Acapulco. The sport quickly spread to Spain and Argentina, and today it is one of the fastest-growing sports in the world.' },
  { question: 'Is padel an Olympic sport?', answer: 'Padel is not yet an Olympic sport, but it is rapidly growing in global popularity. The International Padel Federation is actively working toward Olympic inclusion, and the sport has been featured in the European Games.' },
  { question: 'Padel vs tennis: what is the difference?', answer: 'Padel is played on a smaller enclosed court with solid walls. The rackets are solid (no strings) and the balls are slightly softer. Padel is almost always played in doubles, and the serve is underhand. Many people find padel easier to pick up than tennis, and it tends to be more social and accessible.' },
  { question: 'Is padel the same as pickleball?', answer: 'No, they are different sports. Padel uses enclosed glass walls, solid rackets, and tennis-like balls. Pickleball uses a perforated plastic ball, a smaller court without walls, and a different scoring system. Both are growing rapidly, but padel has deeper roots in Europe and Latin America.' },
  { question: 'Is there pickleball in Mallorca?', answer: 'Pickleball in Mallorca is limited but growing. A few sports clubs have started offering pickleball alongside padel. However, padel remains far more popular and widely available on the island.' },
];

const rulesFaqs: FaqItem[] = [
  { question: 'What are the basic padel rules?', answer: 'Padel is played in doubles on an enclosed court. The serve is underhand and must bounce before being hit. Walls are in play after the ball bounces on the ground. Scoring follows the tennis format (15, 30, 40, game). The ball can only bounce once on the ground before being returned, but can be played off the walls.' },
  { question: 'What is a bandeja in padel?', answer: 'The bandeja is a key defensive overhead shot in padel. It is hit with a flat, slicing motion to control the ball and maintain your net position. Think of it as a controlled smash that keeps the rally going rather than trying to win the point outright.' },
  { question: 'What is a vibora in padel?', answer: 'The vibora is an aggressive overhead shot hit with heavy side spin. It is more attacking than the bandeja and aims to push opponents back or win the point. The spin makes the ball kick unpredictably off the glass walls.' },
  { question: 'What is a chiquita in padel?', answer: 'A chiquita is a soft, controlled shot played low over the net, typically aimed at the feet of the net player. It is a tactical shot used to create opportunities to move forward to the net.' },
  { question: 'What is a globo in padel?', answer: 'The globo (lob) is a high, deep shot played over the heads of the opponents at the net. It is used defensively to buy time or to push the net players back to the baseline.' },
  { question: 'What is a contrapared in padel?', answer: 'Contrapared refers to playing the ball after it bounces off the back wall. This is a fundamental padel skill where you let the ball come off the glass and then return it, turning defense into attack.' },
  { question: 'What are bajada and rulo in padel?', answer: 'The bajada is a powerful overhead shot played after the ball comes off the back glass at height. The rulo is a shot with topspin that makes the ball hug the side wall after bouncing, making it very difficult to return.' },
];

const courtsFaqs: FaqItem[] = [
  { question: 'What are the best padel courts in Mallorca?', answer: 'Top facilities include Palma Padel (16 courts), UDYR SPORT in Palma (11 courts), Smash Padel Group in Playa de Muro (10 panoramic courts), Sporting Club Portals (sea views), and Rafa Nadal Academy in Manacor. Each offers a unique experience from premium to budget-friendly.' },
  { question: 'Are padel courts in Palma de Mallorca mainly outdoor?', answer: 'Yes, most padel courts in Mallorca are outdoor, taking advantage of the Mediterranean climate with 300+ sunny days per year. However, indoor courts are available at Palma Padel, Rafa Nadal Academy, and a few other facilities for rainy days or peak summer heat.' },
  { question: 'How do I book padel courts in Mallorca?', answer: 'Most clubs offer online booking through their websites or apps. Alternatively, submit your preferences through our matching form and we will connect you with the best courts for your needs, handling the logistics for you.' },
  { question: 'How much does it cost to hire a padel court in Mallorca?', answer: 'Court hire typically ranges from 10 to 20 EUR per hour depending on the club, time of day, and whether it is indoor or outdoor. Off-peak hours and weekday mornings tend to be cheaper.' },
  { question: 'Are there padel courts near Palma Airport?', answer: 'Yes, Sporting Club Portals in Portals Nous is about 15 minutes from the airport. Palma Padel in Son Rapinya and UDYR SPORT in Palma are also within a 20-minute drive.' },
];

const lessonsFaqs: FaqItem[] = [
  { question: 'How much do padel lessons cost in Mallorca?', answer: 'Private padel lessons typically cost 40-50 EUR per hour. Group lessons range from 30-40 EUR per person. Kids sessions start from around 25 EUR. Intensive multi-hour or full-day programs are also available from 150 EUR.' },
  { question: 'Are there English-speaking padel coaches in Mallorca?', answer: 'Yes, many coaches in Mallorca speak English, especially at clubs catering to international visitors such as Rafa Nadal Academy, Smash Padel Group, and UDYR SPORT. German-speaking coaches are also available at several locations.' },
  { question: 'Can beginners take padel lessons in Mallorca?', answer: 'Padel is one of the most beginner-friendly racket sports. Almost every club on the island offers beginner padel lessons. You can learn the basics in one session and be enjoying rallies by the end of your first hour.' },
];

const campsFaqs: FaqItem[] = [
  { question: 'What are the best padel camps in Mallorca?', answer: 'Top options include Island Padel Camps (4-7 day all-inclusive), Rafa Nadal Academy camps, Kontra Camps (weekends+), Padel Training Mallorca (5-day technique camps), and Spain Padel Experiences (4-day luxury camps). Each caters to different budgets and goals.' },
  { question: 'Do padel camps in Mallorca accept all levels?', answer: 'Yes, most camps welcome all levels from complete beginners to advanced players. Groups are organized by skill level after an initial assessment so everyone trains at the appropriate intensity.' },
  { question: 'Are there padel camps with accommodation in Mallorca?', answer: 'Many camps include accommodation packages ranging from shared apartments to boutique hotels. Island Padel Camps and Spain Padel Experiences are known for their all-inclusive accommodation offerings.' },
];

const equipmentFaqs: FaqItem[] = [
  { question: 'Where can I buy padel rackets in Mallorca?', answer: 'Padel shops in Palma include specialist retailers and pro shops at major clubs. Palma Padel, UDYR SPORT, and Rafa Nadal Academy all have on-site shops with a wide range of rackets, shoes, and accessories.' },
  { question: 'Can I rent padel equipment in Mallorca?', answer: 'Yes, padel equipment rental is available at most clubs in Mallorca. Racket hire typically costs 3-5 EUR per session. Many coaching programs and camps include equipment in the price.' },
  { question: 'What padel racket should a beginner use?', answer: 'Beginners should look for a round-shaped racket with a soft EVA foam core, which offers a larger sweet spot and more control. Most club pro shops can advise you based on your playing style and budget.' },
];

const sections = [
  { title: 'General Padel Questions', items: generalFaqs },
  { title: 'Padel Rules and Terminology', items: rulesFaqs },
  { title: 'Courts and Clubs', items: courtsFaqs },
  { title: 'Lessons and Coaching', items: lessonsFaqs },
  { title: 'Camps and Holidays', items: campsFaqs },
  { title: 'Equipment and Shopping', items: equipmentFaqs },
];

export default function Faq() {
  const [form, setForm] = useState({ name: '', email: '', question: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'disabled'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isBackendEnabled || !supabase) {
      setStatus('disabled');
      return;
    }
    setStatus('loading');
    const { error } = await supabase.from('contact_messages').insert(form);
    setStatus(error ? 'error' : 'success');
    if (!error) setForm({ name: '', email: '', question: '' });
  };

  return (
    <>
      <PageMeta
        title="Padel Mallorca FAQ: Rules, Courts, Lessons, Equipment & More"
        description="Get answers to 30+ frequently asked questions about padel in Mallorca. Rules, terminology, court bookings, lesson prices, camp details, and equipment advice."
        canonicalPath="/faq"
      />
      <StructuredData data={faqSchema([...generalFaqs, ...rulesFaqs, ...courtsFaqs, ...lessonsFaqs, ...campsFaqs, ...equipmentFaqs])} />
      <Hero
        title="Padel Mallorca FAQ: Answers to Courts, Lessons, Camps, and More"
        subtitle="Everything you need to know about padel in Mallorca. Rules, terminology, booking, pricing, and expert tips."
        imageUrl="https://images.pexels.com/photos/8542744/pexels-photo-8542744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        compact
      />

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          {sections.map((section, i) => (
            <ScrollReveal key={i}>
              <div className="mb-12">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-earth-800 mb-5">
                  {section.title}
                </h2>
                <FaqAccordion items={section.items} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-forest-50">
        <div className="container-max max-w-xl">
          <SectionHeading
            title="Still Have Questions?"
            subtitle="Ask us anything about padel in Mallorca"
          />
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-forest-500 mx-auto mb-3" />
              <p className="font-heading font-bold text-lg text-earth-800">Question Received!</p>
              <p className="text-earth-500 text-sm mt-1">We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-100 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-earth-700 mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  disabled={!isBackendEnabled}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-500 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-earth-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  disabled={!isBackendEnabled}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-500 text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-earth-700 mb-1.5">Your Question</label>
                <textarea
                  required
                  disabled={!isBackendEnabled}
                  value={form.question}
                  onChange={(e) => setForm({ ...form, question: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-sand-300 bg-white text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-500 text-sm"
                  placeholder="What would you like to know about padel in Mallorca?"
                />
              </div>
              {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
              <button
                type="submit"
                disabled={!isBackendEnabled || status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-forest-500 text-white font-heading font-bold rounded-xl hover:bg-forest-600 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {status === 'loading' ? 'Sending...' : 'Ask Question'}
              </button>
              {(!isBackendEnabled || status === 'disabled') && (
                <p className="text-amber-700 text-sm">{BACKEND_DISABLED_NOTICE}</p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
