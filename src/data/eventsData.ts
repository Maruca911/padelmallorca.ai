export interface EventData {
  slug: string;
  name: string;
  date: string;
  type: string;
  desc: string;
  categories: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  details: {
    venue: string;
    format: string;
    entryFee: string;
    prizes: string;
    registrationDeadline: string;
  };
  schedule: { time: string; activity: string }[];
  whatToExpect: string[];
  eligibility: string[];
  faqs: { question: string; answer: string }[];
}

export const events: EventData[] = [
  {
    slug: 'east-mallorca-padel-grand-final',
    name: 'East Mallorca Padel Grand Final',
    date: 'May 2026',
    type: 'Competitive',
    desc: 'The flagship amateur tournament series on the island. Open to registered players with ranking points.',
    categories: "Men's, Women's, Mixed Doubles",
    metaTitle: 'East Mallorca Padel Grand Final May 2026 | Register Now',
    metaDescription: 'The East Mallorca Padel Grand Final is the flagship amateur tournament in Mallorca. May 2026 with ranking points, multiple categories, and competitive play.',
    heroImage: 'https://images.pexels.com/photos/15612082/pexels-photo-15612082.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The East Mallorca Padel Grand Final is the culminating event of the island\'s amateur padel circuit. Held annually in May, it brings together the top-ranked players from the regular season for a weekend of competitive padel at one of Mallorca\'s premier facilities.',
      'This tournament awards official ranking points recognized by the Balearic Padel Federation, making it a key event for players looking to establish or improve their competitive standing. The atmosphere is electric, with spectators, sponsors, and a genuine tournament experience.',
      'Open to registered amateur players who have participated in the qualifying circuit, the Grand Final features multiple categories to ensure fair competition. The event is a celebration of the growing competitive padel scene in eastern Mallorca.',
    ],
    details: {
      venue: 'Rafa Nadal Academy and partner clubs in eastern Mallorca',
      format: 'Round-robin group stage followed by single-elimination knockout rounds',
      entryFee: '40-60 EUR per pair',
      prizes: 'Trophies, equipment prizes, and ranking points for top finishers',
      registrationDeadline: 'April 15, 2026',
    },
    schedule: [
      { time: 'Saturday 08:00', activity: 'Registration and check-in' },
      { time: 'Saturday 09:00', activity: 'Group stage matches begin' },
      { time: 'Saturday 13:00', activity: 'Lunch break and rest' },
      { time: 'Saturday 15:00', activity: 'Group stage continues' },
      { time: 'Saturday 19:00', activity: 'Day 1 wrap-up and social event' },
      { time: 'Sunday 09:00', activity: 'Quarter-finals and semi-finals' },
      { time: 'Sunday 14:00', activity: 'Finals across all categories' },
      { time: 'Sunday 17:00', activity: 'Awards ceremony' },
    ],
    whatToExpect: [
      'Professional-standard tournament organization',
      'Competitive matches with official umpires',
      'Spectator seating and refreshments',
      'Photography and social media coverage',
      'Networking with the Mallorca padel community',
    ],
    eligibility: [
      'Must have participated in at least 2 qualifying circuit events',
      'Valid Balearic Padel Federation registration required for federated categories',
      'Amateur categories open to all registered pairs',
      'Age categories: Open, Veterans (45+)',
    ],
    faqs: [
      { question: 'How do I qualify for the Grand Final?', answer: 'Players must participate in at least 2 qualifying events during the regular season (September through April). Qualifying events are held at clubs across eastern Mallorca. Contact us for the current season schedule.' },
      { question: 'Can visiting players participate?', answer: 'Yes, visiting players can enter the Open Amateur category. A temporary federation license can be arranged through the organizers. Register at least 2 weeks before the event to allow processing time.' },
      { question: 'What happens if it rains?', answer: 'The tournament has contingency plans including indoor courts at the Rafa Nadal Academy. Matches may be rescheduled within the weekend. In extreme cases, the tournament extends to Monday.' },
      { question: 'Is there seating for spectators?', answer: 'Yes, the Grand Final provides dedicated spectator seating, especially for the semi-finals and finals. Entry for spectators is free. A small food and drink area is set up for the event.' },
    ],
  },
  {
    slug: 'rafa-nadal-academy-ranking-events',
    name: 'Rafa Nadal Academy Ranking Events',
    date: 'Monthly',
    type: 'Federated',
    desc: 'Regular ranking tournaments at world-class facilities. Federated padel tournaments in Mallorca for serious competitors.',
    categories: 'All categories',
    metaTitle: 'Rafa Nadal Academy Padel Ranking Events | Monthly Tournaments',
    metaDescription: 'Monthly federated padel ranking events at the Rafa Nadal Academy in Manacor. Official tournament play with ranking points for serious competitors in Mallorca.',
    heroImage: 'https://images.pexels.com/photos/8224758/pexels-photo-8224758.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The Rafa Nadal Academy hosts monthly federated padel ranking events, providing Mallorca\'s competitive players with consistent tournament opportunities at a world-class venue. These events are sanctioned by the Balearic Padel Federation and award official ranking points.',
      'The regularity of these events makes them a cornerstone of the island\'s competitive padel calendar. Players use them to track their progress, maintain their ranking, and prepare for larger regional and national competitions.',
      'With access to the academy\'s 7 courts, professional umpiring, and tournament-grade facilities, these monthly events offer a genuine competitive experience. Categories span all levels from C-level amateur to A-level federated, ensuring every competitor faces appropriate opposition.',
    ],
    details: {
      venue: 'Rafa Nadal Academy, Manacor',
      format: 'Varies by category: round-robin or knockout depending on entries',
      entryFee: '30-50 EUR per pair',
      prizes: 'Ranking points, trophies for category winners',
      registrationDeadline: '7 days before each event',
    },
    schedule: [
      { time: '08:30', activity: 'Registration and warm-up' },
      { time: '09:00', activity: 'First round matches' },
      { time: '11:00', activity: 'Second round matches' },
      { time: '13:00', activity: 'Break (semi-finals drawn)' },
      { time: '14:30', activity: 'Semi-finals' },
      { time: '16:30', activity: 'Finals' },
      { time: '18:00', activity: 'Results and awards' },
    ],
    whatToExpect: [
      'Professionally organized single-day tournaments',
      'Official umpires on feature courts',
      'Electronic scoring and live results',
      'Access to academy warm-up facilities',
      'Post-tournament refreshments',
    ],
    eligibility: [
      'Federated categories require a valid federation license',
      'Amateur categories open to all registered pairs',
      'Multiple level categories ensure fair matchups',
      'Visiting players welcome with temporary license',
    ],
    faqs: [
      { question: 'How often are these ranking events held?', answer: 'Events are held once per month, typically on the last weekend. The exact date is published 4-6 weeks in advance on the academy calendar and the Balearic federation website.' },
      { question: 'Do I need a federation license?', answer: 'For federated categories with official ranking points, yes. For open amateur categories, no license is required. Temporary licenses can be arranged through the academy for visiting players.' },
      { question: 'Can I enter without a partner?', answer: 'The academy maintains a partner-matching board. Register your interest and level, and the organizers will help match you with a compatible partner if one is available.' },
      { question: 'How long does a typical tournament day last?', answer: 'Expect a full day from approximately 9:00 to 18:00. The exact schedule depends on the number of entries. Players are given estimated match times in advance so you can plan your day.' },
    ],
  },
  {
    slug: 'palma-padel-summer-open',
    name: 'Palma Padel Summer Open',
    date: 'July - August 2026',
    type: 'Open / Amateur',
    desc: "Padel summer tournaments Mallorca at one of the island's largest facilities. All levels welcome.",
    categories: 'Amateur, Intermediate, Advanced',
    metaTitle: 'Palma Padel Summer Open 2026 | Amateur Tournament July-August',
    metaDescription: 'The Palma Padel Summer Open runs July-August 2026 at Mallorca\'s largest padel facility. Amateur, intermediate, and advanced categories. All levels welcome.',
    heroImage: 'https://images.pexels.com/photos/6572964/pexels-photo-6572964.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The Palma Padel Summer Open is the biggest open-entry padel tournament of the summer season, held at Palma Padel\'s 16-court facility in Son Rapinya. Running across multiple weekends in July and August, it offers competitive play for all levels in a festive summer atmosphere.',
      'What makes this tournament special is its accessibility. With amateur, intermediate, and advanced categories, players of every level can experience genuine tournament competition. There is no federation license requirement, and the atmosphere is welcoming to first-time tournament players.',
      'The summer setting adds a special energy. Evening matches under floodlights, a bar and food area, music, and a party atmosphere on finals night make this as much a social event as a sporting one. It has become one of the most anticipated events in Palma\'s padel calendar.',
    ],
    details: {
      venue: 'Palma Padel, Son Rapinya (16 courts)',
      format: 'Group stages over multiple weekends leading to knockout finals',
      entryFee: '25-40 EUR per pair depending on category',
      prizes: 'Trophies, equipment prizes, and VIP memberships',
      registrationDeadline: 'June 30, 2026 for group stages',
    },
    schedule: [
      { time: 'Weekends July', activity: 'Group stage matches (Saturday/Sunday)' },
      { time: 'First week August', activity: 'Quarter-finals across all categories' },
      { time: 'Second week August', activity: 'Semi-finals' },
      { time: 'Finals Weekend', activity: 'All category finals with spectator event' },
      { time: 'Saturday evening', activity: 'Summer party and awards ceremony' },
    ],
    whatToExpect: [
      'Multiple weekends of competitive match play',
      'Social atmosphere with bar and food area',
      'Evening matches under floodlights',
      'Finals weekend with spectator event and party',
      'Prizes and recognition across all categories',
    ],
    eligibility: [
      'Open to all players regardless of federation status',
      'Self-declared level categories (amateur, intermediate, advanced)',
      'Pairs must register together',
      'Minimum age 16 (juniors play in separate events)',
    ],
    faqs: [
      { question: 'Is this tournament suitable for beginners?', answer: 'The amateur category is designed for recreational players with limited experience. If you have played padel socially and want to try your first tournament, this is an excellent starting point.' },
      { question: 'Can tourists enter the Summer Open?', answer: 'Yes, the tournament is open to everyone. Many visiting players enter the group stages during their holiday. You only need to be available for your scheduled match weekends.' },
      { question: 'How many matches will I play?', answer: 'In the group stage, expect 3-4 matches over one weekend. If you advance, each knockout round adds one more match on subsequent weekends. The entire tournament spans approximately 4-5 weekends.' },
      { question: 'What is the finals night party like?', answer: 'The finals weekend includes a summer party with live music, food, drinks, and awards. It is one of the social highlights of Palma\'s padel season and is open to all participants, their friends, and spectators.' },
    ],
  },
  {
    slug: 'mallorca-junior-padel-championship',
    name: 'Mallorca Junior Padel Championship',
    date: 'June 2026',
    type: 'Junior',
    desc: 'Padel junior tournaments in Mallorca for players under 18. Age categories from U12 to U18.',
    categories: 'U12, U14, U16, U18',
    metaTitle: 'Mallorca Junior Padel Championship June 2026 | U12-U18 Tournament',
    metaDescription: 'The Mallorca Junior Padel Championship in June 2026 features age categories from U12 to U18. A premier junior tournament fostering young padel talent.',
    heroImage: 'https://images.pexels.com/photos/12890936/pexels-photo-12890936.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The Mallorca Junior Padel Championship is the premier youth padel event on the island, bringing together young players aged 12 to 18 for a weekend of competitive play. Held in June, it serves as the showcase event for the island\'s growing junior padel community.',
      'With age categories spanning U12, U14, U16, and U18, the championship provides appropriate competition for every stage of junior development. Matches are played under the supervision of qualified umpires, and the tournament follows official federation rules adapted for junior play.',
      'For many young players, this is their first experience of formal tournament competition. The event is designed to be challenging but supportive, with an emphasis on sportsmanship, fair play, and enjoyment. Parents and families are encouraged to attend and support the young competitors.',
    ],
    details: {
      venue: 'Palma Padel and Rafa Nadal Academy (venue rotates annually)',
      format: 'Round-robin group stage followed by knockout rounds per age category',
      entryFee: '15-25 EUR per pair',
      prizes: 'Trophies, medals, and equipment prizes for all categories',
      registrationDeadline: 'May 31, 2026',
    },
    schedule: [
      { time: 'Saturday 08:00', activity: 'Registration and opening ceremony' },
      { time: 'Saturday 09:00', activity: 'U12 and U14 group matches' },
      { time: 'Saturday 12:00', activity: 'U16 and U18 group matches' },
      { time: 'Saturday 15:00', activity: 'Afternoon matches continue' },
      { time: 'Sunday 09:00', activity: 'Knockout rounds all categories' },
      { time: 'Sunday 13:00', activity: 'Semi-finals' },
      { time: 'Sunday 15:00', activity: 'Finals and awards ceremony' },
    ],
    whatToExpect: [
      'Age-appropriate competitive matches',
      'Qualified umpires and fair-play emphasis',
      'Parent and family spectator area',
      'Refreshments and food for participants',
      'Awards ceremony with prizes for all categories',
    ],
    eligibility: [
      'Players must be under 18 on the date of the event',
      'Age categories: U12, U14, U16, U18',
      'No federation license required',
      'Players must register as a pair',
      'Visiting junior players welcome',
    ],
    faqs: [
      { question: 'Can my child enter if they have never played a tournament?', answer: 'Yes, the championship welcomes first-time competitors. Many participants are playing their first tournament. The atmosphere is supportive, and organizers ensure young players feel comfortable and encouraged.' },
      { question: 'Do parents need to be present?', answer: 'For U12 and U14 categories, a parent or guardian must be present at the venue during match times. For U16 and U18, parental presence is encouraged but not mandatory. Signed consent forms are required for all minors.' },
      { question: 'How are age categories determined?', answer: 'Categories are based on the player\'s age on the date of the championship. A player who is 13 on tournament day plays in U14. Players may request to play up one category but not down.' },
      { question: 'Is there a minimum skill requirement?', answer: 'There is no minimum skill requirement. However, players should be able to serve, rally, and understand basic padel rules. The tournament is competitive, so very new beginners may find the experience challenging.' },
    ],
  },
  {
    slug: 'social-mixed-doubles-series',
    name: 'Social Mixed Doubles Series',
    date: 'Year-round',
    type: 'Social',
    desc: 'Padel mixed doubles tournaments Mallorca with a focus on fun, socializing, and friendly competition.',
    categories: 'Mixed Doubles, all levels',
    metaTitle: 'Social Mixed Doubles Padel Series Mallorca | Year-Round Events',
    metaDescription: 'Year-round social mixed doubles padel events in Mallorca. Fun, friendly competition for all levels with Americano format, food, and drinks.',
    heroImage: 'https://images.pexels.com/photos/6572968/pexels-photo-6572968.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'The Social Mixed Doubles Series is Mallorca\'s most popular recurring padel event, running year-round at various clubs across the island. Designed for fun and social connection rather than intense competition, these events are the perfect entry point for new players and a favorite of the local padel community.',
      'Events use the Americano format, where partners rotate throughout the evening so every player gets to team up with and play against a variety of opponents. This format eliminates the need to bring a partner and naturally creates a social, inclusive atmosphere.',
      'A typical evening includes 4-5 short matches followed by food, drinks, and socializing. Clubs often add a theme, seasonal twist, or special prize to keep things fresh. With events happening weekly at different venues, there is always an upcoming session to join.',
    ],
    details: {
      venue: 'Rotating venues across Mallorca (UDYR SPORT, Palma Padel, Smash Padel Group, and others)',
      format: 'Americano mixed doubles (rotating partners)',
      entryFee: '15-25 EUR per person (usually includes food and drink)',
      prizes: 'Fun prizes for top scorers, best sportsmanship, and random draws',
      registrationDeadline: '24-48 hours before each event',
    },
    schedule: [
      { time: '18:30', activity: 'Arrival and registration' },
      { time: '19:00', activity: 'Welcome and partner draw' },
      { time: '19:15', activity: 'Matches begin (4-5 rounds, 10 min each)' },
      { time: '20:45', activity: 'Final round' },
      { time: '21:00', activity: 'Scores, prizes, and socializing' },
      { time: '21:30', activity: 'Food and drinks' },
    ],
    whatToExpect: [
      'Relaxed, fun atmosphere with no pressure',
      'Rotating partners so you meet everyone',
      'Short, fast-paced matches',
      'Food and drinks included in most events',
      'Great way to meet local padel players',
    ],
    eligibility: [
      'Open to all levels from beginner upward',
      'No partner required (Americano format)',
      'No federation license needed',
      'Minimum age 16',
      'Tourists and visitors especially welcome',
    ],
    faqs: [
      { question: 'Do I need to bring a partner?', answer: 'No. The Americano format means partners are drawn randomly and rotate each round. You only need to register yourself. This makes the series ideal for solo players and visitors.' },
      { question: 'How good do I need to be?', answer: 'The series welcomes all levels. The Americano format naturally balances things out as stronger and weaker players are mixed. The emphasis is on fun and participation rather than winning.' },
      { question: 'How often do these events happen?', answer: 'Events run approximately weekly, rotating between different clubs. During summer, there may be 2-3 events per week at various venues. Check the calendar for upcoming dates and locations.' },
      { question: 'Is food and drink really included?', answer: 'Most events include basic refreshments (beer, soft drinks, and tapas-style food) in the entry fee. Some premium events at upscale venues may charge extra for food or offer upgraded catering options.' },
    ],
  },
];

export function getEventBySlug(slug: string): EventData | undefined {
  return events.find((e) => e.slug === slug);
}
