import type { LucideIcon } from 'lucide-react';
import { MapPin, Sun, Warehouse, Star, Layers, Shield, Users, Dumbbell, UtensilsCrossed, Clock, CreditCard, Wifi } from 'lucide-react';

export interface ClubAmenity {
  icon: LucideIcon;
  label: string;
}

export interface ClubData {
  slug: string;
  name: string;
  location: string;
  courts: string;
  courtCount: number;
  features: string;
  highlight: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  courtDetails: {
    indoor: number;
    outdoor: number;
    surface: string;
    wallType: string;
    lighting: string;
  };
  amenities: ClubAmenity[];
  pricing: {
    offPeak: string;
    peak: string;
    notes: string;
  };
  openingHours: {
    weekdays: string;
    weekends: string;
    holidays: string;
  };
  bestFor: string[];
  faqs: { question: string; answer: string }[];
}

export const clubs: ClubData[] = [
  {
    slug: 'rafa-nadal-academy',
    name: 'Rafa Nadal Academy',
    location: 'Manacor',
    courts: '7 padel courts',
    courtCount: 7,
    features: 'Outdoor & indoor, tournaments, world-class facilities',
    highlight: 'Home of international padel events and training camps',
    heroImage: 'https://images.pexels.com/photos/8224758/pexels-photo-8224758.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Rafa Nadal Academy Padel Courts Manacor | Book Courts & Lessons',
    metaDescription: 'Play padel at the Rafa Nadal Academy in Manacor, Mallorca. 7 world-class courts, professional coaching, tournament hosting, and training camps at an iconic venue.',
    intro: [
      'The Rafa Nadal Academy in Manacor is one of the most prestigious sports facilities in the Mediterranean. Founded by tennis legend Rafael Nadal, the academy has expanded its offerings to include world-class padel facilities that attract players from around the globe.',
      'With 7 professionally maintained courts, a team of certified coaches, and the infrastructure of a global sports academy, this is the top destination for serious padel players visiting Mallorca. The academy regularly hosts national and international padel tournaments and offers structured training programs for all levels.',
      'Beyond padel, the academy campus includes a fitness center, sports medicine clinic, restaurant, and accommodation options, making it a true all-in-one destination for a padel-focused holiday in Mallorca.',
    ],
    courtDetails: {
      indoor: 2,
      outdoor: 5,
      surface: 'Premium artificial grass with silica sand infill',
      wallType: 'Tempered glass walls (competition standard)',
      lighting: 'LED floodlights for evening play',
    },
    amenities: [
      { icon: Dumbbell, label: 'Full fitness center' },
      { icon: UtensilsCrossed, label: 'On-site restaurant' },
      { icon: Users, label: 'Pro coaching team' },
      { icon: Star, label: 'Sports medicine clinic' },
      { icon: Shield, label: 'Equipment pro shop' },
      { icon: Wifi, label: 'Free WiFi throughout' },
    ],
    pricing: {
      offPeak: '15 EUR/hour',
      peak: '22 EUR/hour',
      notes: 'Court hire is per court (up to 4 players). Equipment rental available for 8 EUR. Coaching sessions booked separately.',
    },
    openingHours: {
      weekdays: '07:00 - 22:00',
      weekends: '08:00 - 21:00',
      holidays: '09:00 - 20:00',
    },
    bestFor: ['Tournament players', 'Training camps', 'Serious competitors', 'Padel holiday packages'],
    faqs: [
      { question: 'Do I need to be a member to play at Rafa Nadal Academy?', answer: 'No, the academy welcomes non-members for court bookings and coaching sessions. However, members receive priority booking and discounted rates. Visitor packages are available for short-stay guests.' },
      { question: 'Can I combine padel with tennis at the academy?', answer: 'Yes, the academy offers both padel and tennis facilities. Many visitors book mixed packages that include sessions in both sports. The coaching team can arrange a combined program tailored to your interests.' },
      { question: 'Is accommodation available at the academy?', answer: 'The academy partners with nearby hotels and has its own residence options for camp participants. For court-only bookings, there are excellent hotels within a 5-minute drive in Manacor town.' },
      { question: 'How do I get to the academy from Palma?', answer: 'The academy is located approximately 50 minutes east of Palma by car. There is ample free parking on-site. Shuttle services can be arranged through the academy for camp participants.' },
    ],
  },
  {
    slug: 'udyr-sport',
    name: 'UDYR SPORT',
    location: 'Palma',
    courts: '11 padel courts',
    courtCount: 11,
    features: 'Pool, restaurant, outdoor courts, coaching programs',
    highlight: 'One of the largest padel facilities in Palma de Mallorca',
    heroImage: 'https://images.pexels.com/photos/6572968/pexels-photo-6572968.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'UDYR SPORT Padel Palma | 11 Courts, Pool & Restaurant',
    metaDescription: 'Play padel at UDYR SPORT in Palma, Mallorca. 11 courts, swimming pool, restaurant, and coaching programs. One of the largest padel centers in the Balearic Islands.',
    intro: [
      'UDYR SPORT is a premier multi-sport complex in Palma de Mallorca featuring 11 padel courts, making it one of the largest padel facilities in the Balearic Islands. Located conveniently in the city, it combines serious sporting infrastructure with resort-style amenities.',
      'The club attracts a diverse mix of local players and visitors thanks to its comprehensive coaching programs, social play sessions, and welcoming atmosphere. Whether you are a beginner looking for your first lesson or an experienced player seeking competitive matches, UDYR SPORT delivers.',
      'After your game, enjoy the swimming pool, relax on the terrace, or grab a meal at the on-site restaurant. The club is a social hub for Palma\'s growing padel community.',
    ],
    courtDetails: {
      indoor: 3,
      outdoor: 8,
      surface: 'Artificial grass with sand infill',
      wallType: 'Mixed glass and mesh walls',
      lighting: 'Full LED lighting on all courts',
    },
    amenities: [
      { icon: Sun, label: 'Swimming pool' },
      { icon: UtensilsCrossed, label: 'Restaurant & bar' },
      { icon: Users, label: 'Coaching programs' },
      { icon: Dumbbell, label: 'Fitness area' },
      { icon: Shield, label: 'Equipment rental' },
      { icon: Clock, label: 'Flexible booking hours' },
    ],
    pricing: {
      offPeak: '10 EUR/hour',
      peak: '16 EUR/hour',
      notes: 'Member discounts available. Monthly unlimited packages from 89 EUR. Equipment rental included for first-time visitors.',
    },
    openingHours: {
      weekdays: '07:00 - 23:00',
      weekends: '08:00 - 22:00',
      holidays: '09:00 - 21:00',
    },
    bestFor: ['Social players', 'Families with pool access', 'Beginners and intermediates', 'After-work padel'],
    faqs: [
      { question: 'Does UDYR SPORT offer padel lessons for beginners?', answer: 'Yes, the club runs beginner group classes several times a week and offers private lessons with qualified coaches. Group lessons are an affordable way to learn in a social setting.' },
      { question: 'Can I use the pool if I only book a padel court?', answer: 'Pool access is typically included with court bookings during the summer months. Check with reception when you arrive as seasonal policies may vary.' },
      { question: 'Is there parking available?', answer: 'Yes, UDYR SPORT has a large free parking area directly adjacent to the facility. During peak hours on weekends, it can fill up, so arriving 10-15 minutes early is recommended.' },
      { question: 'How far is UDYR SPORT from Palma city center?', answer: 'The club is approximately 10 minutes by car from the center of Palma. It is well connected by public transport, with a bus stop within walking distance.' },
    ],
  },
  {
    slug: 'smash-padel-group',
    name: 'Smash Padel Group',
    location: 'Playa de Muro',
    courts: '10 panoramic courts',
    courtCount: 10,
    features: 'Scenic courts, all levels, group sessions',
    highlight: 'Best padel club for beginners with panoramic sea views',
    heroImage: 'https://images.pexels.com/photos/12890936/pexels-photo-12890936.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Smash Padel Group Playa de Muro | Panoramic Courts & Sea Views',
    metaDescription: 'Play padel at Smash Padel Group in Playa de Muro, Mallorca. 10 panoramic courts with sea views, beginner-friendly coaching, and group sessions in north Mallorca.',
    intro: [
      'Smash Padel Group offers one of the most scenic padel experiences in Mallorca. Located in Playa de Muro on the island\'s stunning north coast, the club features 10 panoramic courts with views that extend across the bay toward the Tramuntana mountains.',
      'This club is particularly popular with tourists and holiday-makers staying in the Alcudia and Playa de Muro area. The friendly atmosphere and patient coaching staff make it the go-to destination for beginners who want to try padel for the first time in a relaxed setting.',
      'Group sessions run throughout the day, making it easy to drop in and join a game. The club also organizes social tournaments and Americano events during peak season, perfect for meeting fellow players.',
    ],
    courtDetails: {
      indoor: 0,
      outdoor: 10,
      surface: 'Artificial grass with sand infill',
      wallType: 'Glass back walls with mesh sides',
      lighting: 'LED floodlights for evening sessions',
    },
    amenities: [
      { icon: Sun, label: 'Panoramic sea views' },
      { icon: Users, label: 'Group sessions daily' },
      { icon: Shield, label: 'Equipment rental' },
      { icon: UtensilsCrossed, label: 'Nearby beach bars' },
      { icon: MapPin, label: 'Close to Playa de Muro beach' },
      { icon: Star, label: 'Beginner-friendly coaching' },
    ],
    pricing: {
      offPeak: '10 EUR/hour',
      peak: '15 EUR/hour',
      notes: 'Group lessons from 20 EUR per person. Equipment rental 5 EUR. Discounts for multi-day bookings during holiday stays.',
    },
    openingHours: {
      weekdays: '08:00 - 21:00',
      weekends: '08:00 - 21:00',
      holidays: '09:00 - 20:00',
    },
    bestFor: ['First-time players', 'Tourists in north Mallorca', 'Social padel with views', 'Holiday drop-in sessions'],
    faqs: [
      { question: 'Is Smash Padel Group beginner-friendly?', answer: 'Absolutely. The club specializes in welcoming new players. Coaches are patient and experienced at teaching the basics. Group intro sessions run multiple times per day during summer.' },
      { question: 'Can I book a court without a lesson?', answer: 'Yes, courts are available for free play as well as coached sessions. You can book a court online or by phone and bring your own partner or group.' },
      { question: 'How close is the club to the beach?', answer: 'The club is within a few minutes walk of Playa de Muro beach. Many visitors combine a morning padel session with an afternoon at the beach.' },
      { question: 'Do they organize social events?', answer: 'Yes, during summer months the club runs weekly Americano tournaments and social mixer events. These are open to all levels and are a great way to meet other players.' },
    ],
  },
  {
    slug: 'palma-padel',
    name: 'Palma Padel',
    location: 'Son Rapinya',
    courts: '16 padel courts',
    courtCount: 16,
    features: 'Physio, pro shop, indoor & outdoor, clinics',
    highlight: 'Mallorca\'s largest padel facility with full-service amenities',
    heroImage: 'https://images.pexels.com/photos/6572964/pexels-photo-6572964.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Palma Padel Son Rapinya | 16 Courts, Largest in Mallorca',
    metaDescription: 'Palma Padel is the largest padel facility in Mallorca with 16 courts, indoor and outdoor play, physiotherapy, pro shop, and advanced coaching clinics in Son Rapinya.',
    intro: [
      'Palma Padel is the largest dedicated padel facility on the island of Mallorca, boasting 16 courts spread across indoor and outdoor areas. Located in the Son Rapinya district just west of Palma city center, the club is the beating heart of Mallorca\'s competitive padel scene.',
      'The facility caters to every level from complete beginners to federated competitors. With a full-service pro shop, on-site physiotherapy, video analysis rooms, and a team of certified coaches, Palma Padel provides a professional padel experience that rivals mainland Spanish clubs.',
      'The club hosts regular clinics, leagues, and tournaments throughout the year. Its central location and excellent facilities make it the most popular padel venue for Palma residents and a must-visit for any padel enthusiast traveling to Mallorca.',
    ],
    courtDetails: {
      indoor: 4,
      outdoor: 12,
      surface: 'Premium artificial grass (FIP certified on competition courts)',
      wallType: 'Full tempered glass walls on all courts',
      lighting: 'Professional LED lighting system',
    },
    amenities: [
      { icon: Shield, label: 'Full pro shop' },
      { icon: Star, label: 'Physiotherapy clinic' },
      { icon: Layers, label: 'Video analysis room' },
      { icon: Users, label: 'League & tournament hosting' },
      { icon: Dumbbell, label: 'Warm-up and fitness area' },
      { icon: CreditCard, label: 'Online booking system' },
    ],
    pricing: {
      offPeak: '12 EUR/hour',
      peak: '18 EUR/hour',
      notes: 'Indoor courts carry a 4 EUR surcharge. Monthly memberships from 69 EUR with priority booking and discounts on coaching.',
    },
    openingHours: {
      weekdays: '06:30 - 23:00',
      weekends: '07:00 - 22:00',
      holidays: '08:00 - 21:00',
    },
    bestFor: ['Competitive players', 'Indoor play in any weather', 'League participation', 'Coaching with video analysis'],
    faqs: [
      { question: 'Is Palma Padel the biggest padel club in Mallorca?', answer: 'Yes, with 16 courts it is the largest dedicated padel facility on the island. The combination of indoor and outdoor courts means you can always find a slot regardless of weather or time of day.' },
      { question: 'Do they host leagues and tournaments?', answer: 'Palma Padel runs internal leagues on a seasonal basis and hosts open tournaments throughout the year. Both federated and non-federated categories are available, so players of all levels can compete.' },
      { question: 'Can I get physiotherapy for a padel injury?', answer: 'Yes, the on-site physiotherapy clinic specializes in sports injuries and recovery. You can book a session independently or as part of an intensive training package.' },
      { question: 'Is it easy to reach by public transport?', answer: 'Son Rapinya is served by several bus routes from Palma center. The journey takes approximately 15 minutes. Paid parking is available on-site.' },
    ],
  },
  {
    slug: 'sporting-club-portals',
    name: 'Sporting Club Portals',
    location: 'Portals Nous',
    courts: '6 padel courts',
    courtCount: 6,
    features: 'Sea views, gym, restaurant, premium atmosphere',
    highlight: 'Padel courts with sea views near Palma Airport',
    heroImage: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Sporting Club Portals Padel | Sea View Courts Near Puerto Portals',
    metaDescription: 'Play padel with Mediterranean sea views at Sporting Club Portals in Portals Nous, Mallorca. 6 premium courts, gym, restaurant, and an upscale sporting club atmosphere.',
    intro: [
      'Sporting Club Portals is an exclusive sports and leisure club nestled in the upscale neighborhood of Portals Nous, just minutes from the glamorous Puerto Portals marina. The club offers 6 beautifully maintained padel courts with partial sea views and a premium atmosphere.',
      'This is the club of choice for those who appreciate a refined sporting experience. The manicured grounds, attentive service, and high-quality facilities create an environment that goes beyond just playing padel. After your match, enjoy lunch on the terrace overlooking the Mediterranean.',
      'The coaching team offers private and semi-private lessons with a focus on technique and strategy. The club also runs social padel events and inter-club competitions for its members and guests.',
    ],
    courtDetails: {
      indoor: 0,
      outdoor: 6,
      surface: 'Premium artificial grass',
      wallType: 'Full tempered glass',
      lighting: 'LED lighting for evening play',
    },
    amenities: [
      { icon: Sun, label: 'Partial sea views' },
      { icon: Dumbbell, label: 'Fully equipped gym' },
      { icon: UtensilsCrossed, label: 'Terrace restaurant' },
      { icon: Users, label: 'Private coaching' },
      { icon: Star, label: 'Premium club atmosphere' },
      { icon: Warehouse, label: 'Changing rooms & lockers' },
    ],
    pricing: {
      offPeak: '14 EUR/hour',
      peak: '20 EUR/hour',
      notes: 'Non-member surcharge of 5 EUR per session. Day passes available including gym and pool access for 30 EUR.',
    },
    openingHours: {
      weekdays: '07:00 - 22:00',
      weekends: '08:00 - 21:00',
      holidays: '09:00 - 20:00',
    },
    bestFor: ['Premium experience seekers', 'Couples and social players', 'Post-game dining with views', 'Visitors staying in southwest Mallorca'],
    faqs: [
      { question: 'Do I need to be a member to play?', answer: 'Non-members can book courts with a small surcharge. Day passes are available that include access to the gym, pool, and courts. For regular play, membership options provide better value.' },
      { question: 'How close is the club to Puerto Portals?', answer: 'The club is approximately 5 minutes by car from Puerto Portals marina. It is a popular choice for visitors staying in the Portals Nous, Bendinat, and Illetas areas.' },
      { question: 'Is the restaurant open to non-members?', answer: 'Yes, the terrace restaurant is open to court users and day-pass holders. It serves Mediterranean cuisine with fresh local ingredients.' },
      { question: 'Can I book a private lesson as a visitor?', answer: 'Absolutely. Private and semi-private lessons can be booked by non-members. Contact the club in advance to arrange a time with one of the coaching staff.' },
    ],
  },
  {
    slug: 'padelmon-palmanyola',
    name: 'Padelmon Palmanyola',
    location: 'Palmanyola',
    courts: '4 padel courts',
    courtCount: 4,
    features: 'Family-friendly, scenic mountain setting',
    highlight: 'Relaxed padel in the Mallorcan countryside',
    heroImage: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Padelmon Palmanyola | Countryside Padel in the Tramuntana Foothills',
    metaDescription: 'Play padel surrounded by nature at Padelmon Palmanyola in the Tramuntana foothills. 4 courts, family-friendly atmosphere, and stunning mountain views near Bunyola.',
    intro: [
      'Padelmon Palmanyola is a charming padel club set in the peaceful village of Palmanyola at the foothills of the Serra de Tramuntana mountains. With just 4 courts surrounded by lush greenery and mountain scenery, it offers the most tranquil padel setting on the island.',
      'The club has a distinctly family-friendly and community-oriented feel. Local families, couples, and visitors staying in the Tramuntana region come here for a relaxed game without the bustle of the larger Palma clubs. The pace is unhurried and the vibe is welcoming.',
      'Despite its small size, the club offers coaching for all ages and levels. The quiet setting and personal attention from staff make it an ideal spot for beginners who prefer a low-pressure learning environment.',
    ],
    courtDetails: {
      indoor: 0,
      outdoor: 4,
      surface: 'Artificial grass with sand infill',
      wallType: 'Glass and mesh combination',
      lighting: 'Floodlights for evening bookings',
    },
    amenities: [
      { icon: Sun, label: 'Mountain views' },
      { icon: Users, label: 'Family-friendly atmosphere' },
      { icon: Shield, label: 'Equipment available' },
      { icon: MapPin, label: 'Near Tramuntana hiking trails' },
      { icon: Star, label: 'Personal coaching attention' },
      { icon: Clock, label: 'Relaxed pace' },
    ],
    pricing: {
      offPeak: '8 EUR/hour',
      peak: '12 EUR/hour',
      notes: 'One of the most affordable padel venues in Mallorca. Family rates available. Equipment rental 4 EUR.',
    },
    openingHours: {
      weekdays: '08:00 - 21:00',
      weekends: '08:00 - 21:00',
      holidays: '09:00 - 20:00',
    },
    bestFor: ['Families with children', 'Nature lovers', 'Budget-conscious players', 'Visitors staying in Tramuntana area'],
    faqs: [
      { question: 'Is Padelmon suitable for children?', answer: 'Very much so. The club is known for its family-friendly environment. There is space for children to play safely, and coaches offer junior sessions tailored to different age groups.' },
      { question: 'How far is it from Palma?', answer: 'Palmanyola is approximately 20 minutes by car from Palma, heading toward Soller on the MA-11 road. The village is easy to reach and has free on-street parking near the club.' },
      { question: 'Can I combine padel with hiking?', answer: 'Absolutely. The club is located near several popular Tramuntana hiking routes. Many visitors combine a morning padel session with an afternoon hike in the mountains.' },
      { question: 'Is booking required?', answer: 'Booking in advance is recommended, especially on weekends. However, midweek slots are often available on short notice. You can book by phone or by visiting the club directly.' },
    ],
  },
  {
    slug: 'terreno-club',
    name: 'Terreno Club',
    location: 'Palma (El Terreno)',
    courts: '3 padel courts',
    courtCount: 3,
    features: 'Central location, social play, affordable',
    highlight: 'Cheap padel courts right in central Palma',
    heroImage: 'https://images.pexels.com/photos/3689177/pexels-photo-3689177.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    metaTitle: 'Terreno Club Padel Palma Centro | Affordable Courts in El Terreno',
    metaDescription: 'The most affordable padel courts in central Palma at Terreno Club in El Terreno. 3 courts, social play, and a friendly community atmosphere from just 8 EUR per hour.',
    intro: [
      'Terreno Club is a no-frills, community-focused padel club in the El Terreno neighborhood of central Palma. With just 3 courts and a lively local atmosphere, it offers the most affordable padel experience in the capital and is a favorite among Palma residents.',
      'The club thrives on its social scene. Regular players form a tight-knit community, and newcomers are warmly welcomed. Drop-in sessions, social mixer events, and informal weekend tournaments make this a great place to meet local padel players and find regular game partners.',
      'Its central location is a major draw. Situated within walking distance of the Paseo Maritimo waterfront and the Bellver Castle, Terreno Club is easily accessible for visitors staying in Palma\'s hotels and holiday apartments.',
    ],
    courtDetails: {
      indoor: 0,
      outdoor: 3,
      surface: 'Artificial grass',
      wallType: 'Mesh and glass combination',
      lighting: 'Standard floodlights',
    },
    amenities: [
      { icon: CreditCard, label: 'Budget-friendly pricing' },
      { icon: Users, label: 'Strong social community' },
      { icon: MapPin, label: 'Central Palma location' },
      { icon: Shield, label: 'Basic equipment rental' },
      { icon: Clock, label: 'Flexible drop-in play' },
      { icon: Star, label: 'Regular social events' },
    ],
    pricing: {
      offPeak: '8 EUR/hour',
      peak: '12 EUR/hour',
      notes: 'The cheapest padel courts in central Palma. No membership required. Equipment rental 3 EUR. Monthly pass available for 45 EUR.',
    },
    openingHours: {
      weekdays: '08:00 - 22:00',
      weekends: '08:00 - 21:00',
      holidays: '09:00 - 20:00',
    },
    bestFor: ['Budget players', 'Social padel seekers', 'Walking-distance access from central Palma', 'Drop-in games'],
    faqs: [
      { question: 'Is Terreno Club the cheapest padel option in Palma?', answer: 'Yes, at 8 EUR per hour off-peak it is the most affordable court hire in central Palma. The monthly pass at 45 EUR offers excellent value for regular players.' },
      { question: 'Can I just show up and play?', answer: 'The club is quite welcoming to drop-ins, especially during weekday off-peak hours. For weekends and evenings, booking a day ahead is recommended as the 3 courts fill up quickly.' },
      { question: 'Is the club easy to reach on foot from Palma center?', answer: 'Yes, El Terreno is a walkable neighborhood adjacent to Palma\'s central areas. From the Cathedral area, it is approximately a 15-20 minute walk or a short bus ride.' },
      { question: 'Do they offer any coaching?', answer: 'Basic coaching is available on a limited schedule. For more structured lessons, the club can recommend partner coaches who use their courts. Primarily this is a social play venue.' },
    ],
  },
];

export function getClubBySlug(slug: string): ClubData | undefined {
  return clubs.find((c) => c.slug === slug);
}
