export interface CampData {
  slug: string;
  name: string;
  duration: string;
  highlights: string;
  location: string;
  best: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  included: string[];
  sampleSchedule: { time: string; activity: string }[];
  pricing: { tier: string; duration: string; price: string; includes: string }[];
  seasonalAvailability: string;
  accommodation: string;
  faqs: { question: string; answer: string }[];
}

export const camps: CampData[] = [
  {
    slug: 'island-padel-camps',
    name: 'Island Padel Camps',
    duration: '4-7 days',
    highlights: 'Professional coaching, accommodation included, all levels welcome',
    location: 'Various locations across Mallorca',
    best: 'Full immersion padel holidays with everything arranged',
    metaTitle: 'Island Padel Camps Mallorca | 4-7 Day All-Inclusive Training',
    metaDescription: 'Island Padel Camps in Mallorca offer 4-7 day all-inclusive padel holidays with professional coaching, accommodation, and Mediterranean experiences for all levels.',
    heroImage: 'https://images.pexels.com/photos/34080002/pexels-photo-34080002.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Island Padel Camps is one of the most established padel holiday providers in Mallorca, offering fully organized training holidays ranging from 4 to 7 days. Every detail is taken care of, from airport transfers and accommodation to daily coaching sessions and evening social activities.',
      'Camps are held at rotating venues across the island, taking advantage of Mallorca\'s diverse landscapes and club facilities. This variety means returning guests enjoy fresh settings and new courts each time they book.',
      'With groups capped at 12 participants and a coach-to-player ratio of 1:4, the quality of instruction is high. Players are assessed on arrival and grouped by level, ensuring everyone trains at the appropriate intensity and with compatible partners.',
    ],
    included: [
      '15-25 hours of coached padel over the camp duration',
      'Hotel or villa accommodation with breakfast',
      'Airport transfers and local transport',
      'Welcome dinner and farewell event',
      'All court hire and ball costs',
      'Social activities and optional excursions',
    ],
    sampleSchedule: [
      { time: '08:00', activity: 'Breakfast at accommodation' },
      { time: '09:30', activity: 'Morning coaching session (2.5 hours)' },
      { time: '12:00', activity: 'Free time / beach / pool' },
      { time: '14:00', activity: 'Lunch (own arrangement or group option)' },
      { time: '16:00', activity: 'Afternoon match play session (2 hours)' },
      { time: '18:30', activity: 'Cool-down and debrief' },
      { time: '20:00', activity: 'Group dinner or social activity' },
    ],
    pricing: [
      { tier: 'Standard', duration: '4 days', price: '650-800 EUR', includes: 'Shared room, coaching, courts' },
      { tier: 'Comfort', duration: '5 days', price: '900-1,100 EUR', includes: 'Private room, coaching, courts, breakfast' },
      { tier: 'All-Inclusive', duration: '7 days', price: '1,200-1,500 EUR', includes: 'Private room, all meals, coaching, excursion' },
    ],
    seasonalAvailability: 'Year-round, with peak camps running March through October. Winter camps available November through February with smaller groups and milder conditions.',
    accommodation: 'Camps typically use 3-4 star hotels or boutique villas near the training venue. Shared and private room options are available. All accommodations are selected for comfort, location, and atmosphere.',
    faqs: [
      { question: 'Are these camps suitable for solo travelers?', answer: 'Absolutely. A significant percentage of guests come alone and leave with new friends and padel partners. The social structure of the camp is designed to integrate solo travelers from day one.' },
      { question: 'What level is required?', answer: 'All levels from complete beginner to advanced are welcome. Players are assessed and grouped by level on the first day, so everyone trains at the right intensity.' },
      { question: 'Can I bring a non-playing partner?', answer: 'Yes, non-playing partner packages are available at reduced rates. These include accommodation, meals, and access to social activities and excursions without the padel coaching.' },
      { question: 'What happens if it rains?', answer: 'Island Padel Camps have contingency plans including indoor court bookings, theory sessions, and alternative activities. Mallorca averages 300+ sunny days per year, so rain cancellations are rare.' },
    ],
  },
  {
    slug: 'kontra-camps',
    name: 'Kontra Camps',
    duration: 'Weekend+',
    highlights: 'All levels, intensive training, social events',
    location: 'Mallorca',
    best: 'Short getaway with concentrated padel training',
    metaTitle: 'Kontra Camps Mallorca | Weekend Padel Training Getaways',
    metaDescription: 'Kontra Camps offer intensive weekend padel getaways in Mallorca. Concentrated training, social events, and all-level coaching from experienced professionals.',
    heroImage: 'https://images.pexels.com/photos/6572968/pexels-photo-6572968.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Kontra Camps specializes in concentrated padel training getaways, perfect for players who want a focused padel experience without committing to a full week. Their weekend and extended-weekend formats pack maximum coaching into a compact schedule.',
      'The Kontra approach emphasizes both technical improvement and tactical awareness. Sessions are designed around game-like scenarios, so players develop skills that transfer directly to competitive match play. Coaches use a structured methodology that builds session upon session.',
      'Beyond the coaching, Kontra Camps fosters a strong social element. Evening dinners, social tournaments, and group outings are woven into the schedule, creating a balanced experience that is as much about community as it is about padel.',
    ],
    included: [
      '8-12 hours of coaching over the weekend',
      'Level assessment and grouping',
      'All court hire and equipment use',
      'Welcome and farewell social events',
      'Tactical workshop and video review',
      'Post-camp improvement plan',
    ],
    sampleSchedule: [
      { time: '09:00', activity: 'Arrival and level assessment' },
      { time: '10:00', activity: 'Technical coaching session (2 hours)' },
      { time: '12:00', activity: 'Lunch break' },
      { time: '14:00', activity: 'Tactical workshop (1.5 hours)' },
      { time: '16:00', activity: 'Match play with coaching (1.5 hours)' },
      { time: '18:00', activity: 'Cool-down and video review' },
      { time: '20:00', activity: 'Social dinner' },
    ],
    pricing: [
      { tier: 'Training Only', duration: '2 days', price: '300-400 EUR', includes: 'Coaching, courts, social events' },
      { tier: 'With Accommodation', duration: '2-3 days', price: '450-600 EUR', includes: 'Hotel, coaching, courts, breakfast' },
      { tier: 'Extended Weekend', duration: '3-4 days', price: '550-750 EUR', includes: 'Hotel, coaching, courts, meals' },
    ],
    seasonalAvailability: 'Camps run approximately twice per month throughout the year. Summer months (June through September) offer the most frequent scheduling. Check availability for specific dates.',
    accommodation: 'Kontra Camps partners with selected hotels in the Palma area. Accommodation packages include comfortable 3-4 star hotels within easy reach of the training venue.',
    faqs: [
      { question: 'How intensive is a Kontra weekend camp?', answer: 'Expect 4-6 hours of padel per day spread across morning and afternoon sessions. The pace is challenging but manageable for players with reasonable fitness. Breaks and social time are built into the schedule.' },
      { question: 'Can I join if I have only played a few times?', answer: 'Yes, Kontra welcomes players of all levels. Beginners are placed in appropriate groups and receive instruction suited to their stage. The coaches are experienced at managing mixed-level camps.' },
      { question: 'Do I need to arrange my own accommodation?', answer: 'You can either book a training-only package and arrange your own stay, or choose an accommodation-inclusive package. Both options are available for all camp dates.' },
      { question: 'How far in advance should I book?', answer: 'Kontra Camps often sell out 3-4 weeks ahead, especially for summer dates. Booking at least one month in advance is recommended to secure your preferred dates.' },
    ],
  },
  {
    slug: 'padel-training-mallorca',
    name: 'Padel Training Mallorca',
    duration: '5 days',
    highlights: 'Technique focus, Bendinat area, small groups',
    location: 'Bendinat',
    best: 'Women\'s padel camps and focused technique work',
    metaTitle: 'Padel Training Mallorca Bendinat | Women\'s Camps & Technique Focus',
    metaDescription: 'Padel Training Mallorca offers 5-day technique-focused camps in Bendinat. Specializing in women\'s padel camps with small groups and expert coaching.',
    heroImage: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Padel Training Mallorca is a boutique camp provider based in the upscale Bendinat area, specializing in technique-focused 5-day programs with exceptionally small group sizes. Their particular strength is women\'s padel camps, an area where they have built a strong reputation.',
      'With a maximum of 8 participants per camp, the instruction is highly personalized. Coaches have the time and space to work on individual technique issues in depth, making these camps ideal for players who want focused improvement rather than a primarily social experience.',
      'The Bendinat location adds a touch of luxury. Nestled between Palma and the southwest coast, the area offers excellent restaurants, beautiful beaches, and a relaxed, upscale atmosphere that complements the training experience.',
    ],
    included: [
      '20 hours of coached padel over 5 days',
      'Detailed individual technique assessment',
      'Small groups of maximum 8 players',
      'Video analysis sessions',
      'Welcome lunch and farewell dinner',
      'Personalized improvement report',
    ],
    sampleSchedule: [
      { time: '08:30', activity: 'Breakfast (own arrangement)' },
      { time: '09:30', activity: 'Technique session: serve and return (2 hours)' },
      { time: '11:30', activity: 'Break and refreshments' },
      { time: '12:00', activity: 'Tactical drills and positioning (1.5 hours)' },
      { time: '13:30', activity: 'Lunch and rest' },
      { time: '16:00', activity: 'Match play with video recording (1.5 hours)' },
      { time: '17:30', activity: 'Video review and debrief' },
    ],
    pricing: [
      { tier: 'Training Only', duration: '5 days', price: '600-750 EUR', includes: 'All coaching, courts, video analysis' },
      { tier: 'With Hotel', duration: '5 days', price: '1,000-1,300 EUR', includes: 'Boutique hotel, coaching, breakfast' },
      { tier: 'Premium Package', duration: '5 days', price: '1,400-1,800 EUR', includes: 'Premium hotel, all meals, coaching, spa access' },
    ],
    seasonalAvailability: 'Camps run from February through November. Women\'s-only camps are scheduled approximately once per month. Mixed camps available on alternate weeks.',
    accommodation: 'Partner hotels in the Bendinat and Illetas area range from charming boutique properties to premium resorts. All are within 10 minutes of the training courts.',
    faqs: [
      { question: 'Are these camps only for women?', answer: 'No, Padel Training Mallorca runs both women-only and mixed camps. The women\'s camps have become their signature offering, but mixed-gender camps are equally well run and popular.' },
      { question: 'How small are the groups really?', answer: 'Maximum 8 players per camp, with a coach-to-player ratio of 1:4 or better. This means you get substantially more individual attention than at larger camp operations.' },
      { question: 'What level of technique focus should I expect?', answer: 'Very detailed. Coaches break down each shot technically and use video analysis to show you exactly what needs adjustment. This is not a social hit-around camp — it is serious about technical improvement.' },
      { question: 'Is the Bendinat area nice for a holiday?', answer: 'Bendinat is one of the most desirable neighborhoods in southwest Mallorca. Beautiful beaches, excellent restaurants, and a relaxed upscale atmosphere make it ideal for combining a padel camp with a quality holiday.' },
    ],
  },
  {
    slug: 'spain-padel-experiences',
    name: 'Spain Padel Experiences',
    duration: '4 days',
    highlights: 'Technique-intensive, cultural excursions, gourmet dining',
    location: 'Various',
    best: 'Combining padel with a luxury Mallorca holiday experience',
    metaTitle: 'Spain Padel Experiences Mallorca | Luxury Padel & Cultural Holiday',
    metaDescription: 'Spain Padel Experiences combines 4-day padel training with luxury dining, cultural excursions, and premium accommodation in Mallorca.',
    heroImage: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Spain Padel Experiences offers a unique concept: premium padel training combined with the best of Mallorcan culture, cuisine, and lifestyle. Their 4-day programs are designed for players who want serious coaching alongside a curated holiday experience.',
      'Morning coaching sessions are followed by afternoons that explore Mallorca\'s culinary scene, historic towns, and natural beauty. Wine tastings, olive oil farm visits, market tours, and sunset excursions are woven into the program alongside high-quality padel instruction.',
      'This format attracts couples, groups of friends, and solo travelers who want more than just a sports camp. It is the ideal choice for someone who loves padel but also wants to experience the best of what Mallorca has to offer beyond the court.',
    ],
    included: [
      '12-16 hours of coached padel over 4 days',
      'Cultural excursions and guided experiences',
      'Gourmet group dinners at selected restaurants',
      'Wine or olive oil tasting experience',
      'All court hire and equipment use',
      'Local transport between venues',
    ],
    sampleSchedule: [
      { time: '09:00', activity: 'Breakfast at hotel' },
      { time: '10:00', activity: 'Coaching session (2.5 hours)' },
      { time: '12:30', activity: 'Brunch and free time' },
      { time: '15:00', activity: 'Cultural excursion (winery, historic town, or market)' },
      { time: '18:00', activity: 'Return to hotel, freshen up' },
      { time: '20:00', activity: 'Gourmet group dinner' },
    ],
    pricing: [
      { tier: 'Experience Package', duration: '4 days', price: '900-1,100 EUR', includes: 'Coaching, excursions, dinners (no hotel)' },
      { tier: 'Full Package', duration: '4 days', price: '1,400-1,800 EUR', includes: '4-star hotel, all activities, meals' },
      { tier: 'Luxury Package', duration: '4 days', price: '2,000-2,800 EUR', includes: '5-star hotel, all meals, private excursions' },
    ],
    seasonalAvailability: 'Programs run from March through October when weather and cultural activities are at their best. Spring (April-May) and autumn (September-October) are considered the ideal months.',
    accommodation: 'Depending on the package, accommodation ranges from charming 4-star boutique hotels to luxury 5-star resorts in Palma, Deia, or the southwest coast.',
    faqs: [
      { question: 'Is this more of a holiday or a training camp?', answer: 'It is designed to be both in equal measure. Mornings are dedicated to serious padel coaching, while afternoons focus on cultural and culinary experiences. You will improve your padel game while also having a memorable Mallorca holiday.' },
      { question: 'Can non-playing partners join the excursions?', answer: 'Yes, non-playing partner packages are available that include all cultural activities, meals, and accommodation. They simply skip the morning padel sessions and join the group for afternoon and evening activities.' },
      { question: 'What kind of cultural experiences are included?', answer: 'Typical experiences include guided visits to historic towns like Valldemossa or Deia, wine tasting at Mallorcan bodegas, olive oil farm tours, artisan market visits, and sunset boat trips along the coast.' },
      { question: 'How many people are in each group?', answer: 'Groups are limited to 8-12 participants to maintain a personal feel during both padel sessions and cultural excursions. This ensures quality coaching and intimate group dining experiences.' },
    ],
  },
  {
    slug: 'rafa-nadal-academy-camps',
    name: 'Rafa Nadal Academy Camps',
    duration: '1-2 weeks',
    highlights: 'World-class facilities, professional methodology',
    location: 'Manacor',
    best: 'The ultimate training camp at a globally renowned academy',
    metaTitle: 'Rafa Nadal Academy Padel Camps | 1-2 Week Training in Manacor',
    metaDescription: 'Train padel at the Rafa Nadal Academy in Manacor, Mallorca. 1-2 week residential camps with world-class facilities, professional coaching methodology, and full board.',
    heroImage: 'https://images.pexels.com/photos/8224758/pexels-photo-8224758.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The Rafa Nadal Academy in Manacor offers the most comprehensive padel camp experience in Mallorca. Set within the globally renowned sports academy founded by Rafael Nadal, these 1-2 week residential programs deliver world-class coaching in world-class facilities.',
      'The academy\'s padel methodology follows the same principles of excellence that underpin all their sports programs. Structured training progressions, sports science support, nutritional guidance, and mental performance coaching are all integrated into the camp experience.',
      'Participants have access to the full academy campus including the fitness center, swimming pool, sports medicine clinic, and residence. This holistic approach to training sets the Rafa Nadal Academy apart from every other padel camp in the Mediterranean.',
    ],
    included: [
      '25-50 hours of coached padel depending on duration',
      'Full-board accommodation at the academy residence',
      'Fitness center and pool access',
      'Sports science assessment',
      'Nutritional guidance and athlete meals',
      'Mental performance workshop',
      'Certificate of completion',
    ],
    sampleSchedule: [
      { time: '07:30', activity: 'Breakfast at the residence' },
      { time: '09:00', activity: 'Morning coaching session (3 hours)' },
      { time: '12:00', activity: 'Physical conditioning (1 hour)' },
      { time: '13:00', activity: 'Lunch and rest period' },
      { time: '15:30', activity: 'Afternoon tactical and match play (2.5 hours)' },
      { time: '18:00', activity: 'Video analysis and review' },
      { time: '19:00', activity: 'Free time / pool / fitness' },
      { time: '20:30', activity: 'Dinner at the residence' },
    ],
    pricing: [
      { tier: '1-Week Camp', duration: '7 days', price: '1,500-2,000 EUR', includes: 'Full board, coaching, facilities' },
      { tier: '2-Week Camp', duration: '14 days', price: '2,500-3,500 EUR', includes: 'Full board, coaching, sports science' },
      { tier: 'Junior Camp', duration: '7 days', price: '1,200-1,600 EUR', includes: 'Full board, junior coaching, activities' },
    ],
    seasonalAvailability: 'Camps run year-round with dedicated scheduling periods. Peak summer camps (July-August) fill earliest. Off-season camps (November-February) offer smaller groups and better availability.',
    accommodation: 'On-campus residence with modern rooms, communal dining, and full access to all academy amenities. The residence is specifically designed for training camp participants with athlete-focused meal plans.',
    faqs: [
      { question: 'Is the Rafa Nadal Academy camp worth the higher price?', answer: 'For serious players seeking the highest quality training environment, yes. The combination of professional coaching methodology, sports science support, world-class facilities, and the motivational setting of a globally renowned academy is unmatched in Mallorca.' },
      { question: 'What level is required?', answer: 'The academy accepts players from intermediate level upward for adult camps. Junior camps welcome all levels from beginner. Players are grouped by ability on arrival.' },
      { question: 'Will I meet Rafa Nadal?', answer: 'Rafa Nadal occasionally visits the academy campus but is not involved in day-to-day padel coaching. The padel coaching team consists of dedicated professionals with their own expertise and certifications.' },
      { question: 'Can I arrange a shorter stay?', answer: 'The standard camp formats are 1 or 2 weeks. For shorter stays, the academy offers day programs and individual lesson bookings. Contact us to discuss options that fit your schedule.' },
    ],
  },
];

export function getCampBySlug(slug: string): CampData | undefined {
  return camps.find((c) => c.slug === slug);
}
