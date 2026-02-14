import type { LucideIcon } from 'lucide-react';
import { User, Users, Baby, Heart, Zap, Globe } from 'lucide-react';

export interface LessonTypeData {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  price: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  whatToExpect: string[];
  skillLevels: string[];
  typicalDuration: string;
  priceRange: string;
  priceBreakdown: { item: string; price: string }[];
  clubsOffering: { name: string; location: string; notes: string }[];
  faqs: { question: string; answer: string }[];
}

export const lessonTypes: LessonTypeData[] = [
  {
    slug: 'private-lessons',
    icon: User,
    title: 'Private Lessons',
    shortDesc: 'One-on-one coaching tailored to your level. Intensive padel lessons in Mallorca with full attention from an expert coach.',
    price: 'From 40-50 EUR/hour',
    metaTitle: 'Private Padel Lessons Mallorca | 1-on-1 Expert Coaching',
    metaDescription: 'Book private padel lessons in Mallorca with certified coaches. One-on-one sessions tailored to your level from 40 EUR/hour. Fast improvement guaranteed.',
    heroImage: 'https://images.pexels.com/photos/6572968/pexels-photo-6572968.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Private padel lessons offer the fastest path to improvement. With one-on-one attention from a certified coach, every minute of your session is focused on your specific needs, weaknesses, and goals. Whether you are a complete beginner learning the basics or an advanced player refining your strategy, private coaching delivers measurable results.',
      'In Mallorca, private padel lessons are available at clubs across the island. Coaches speak English, Spanish, and often German, making instruction accessible to international visitors. Sessions can be booked individually or as a multi-lesson package for better value.',
      'A typical private lesson includes warm-up drills, technique work on specific shots, tactical point play, and a summary with practice recommendations. Coaches adapt their approach in real-time based on your progress during each session.',
    ],
    whatToExpect: [
      'Pre-session assessment of your current level and goals',
      'Technique drills focused on your weakest areas',
      'Point play with tactical coaching in real time',
      'Video analysis at select clubs for advanced players',
      'Post-session summary and practice recommendations',
    ],
    skillLevels: ['Complete beginner', 'Intermediate seeking consistency', 'Advanced refining tactics', 'Competition preparation'],
    typicalDuration: '60 minutes',
    priceRange: '40-50 EUR per session',
    priceBreakdown: [
      { item: 'Single session (1 hour)', price: '40-50 EUR' },
      { item: '5-session package', price: '180-220 EUR' },
      { item: '10-session package', price: '340-420 EUR' },
      { item: 'Court hire (if not included)', price: '10-15 EUR' },
    ],
    clubsOffering: [
      { name: 'Rafa Nadal Academy', location: 'Manacor', notes: 'World-class methodology, video analysis available' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Largest coaching team on the island' },
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Flexible scheduling, beginner specialists' },
      { name: 'Smash Padel Group', location: 'Playa de Muro', notes: 'Scenic location, relaxed pace' },
    ],
    faqs: [
      { question: 'How quickly will I improve with private lessons?', answer: 'Most beginners notice significant improvement after just 2-3 private sessions. The focused attention means you correct habits early and build proper technique from the start. Intermediate players typically see tactical breakthroughs within 3-5 sessions.' },
      { question: 'Should I book private or group lessons?', answer: 'Private lessons are best if you want rapid improvement, have specific weaknesses to address, or prefer individual attention. Group lessons are better for social learning and are more cost-effective. Many players combine both formats.' },
      { question: 'Can couples take a private lesson together?', answer: 'Yes, semi-private lessons for 2 players are widely available and offer a middle ground between private and group formats. The cost is typically 30-35 EUR per person per hour.' },
      { question: 'Do I need my own equipment?', answer: 'No, all clubs offer racket and ball rental. For a private lesson, the coach will often have demo rackets available. Equipment rental typically costs 5-8 EUR per session.' },
    ],
  },
  {
    slug: 'group-lessons',
    icon: Users,
    title: 'Group Lessons',
    shortDesc: 'Join a group of 2-4 players for social, fun learning. Group padel lessons in Mallorca at clubs across the island.',
    price: 'From 30-40 EUR/hour per person',
    metaTitle: 'Group Padel Lessons Mallorca | Social Learning for All Levels',
    metaDescription: 'Join group padel lessons in Mallorca with 2-4 players. Social learning with expert coaches from 20 EUR per person. Available at clubs across the island.',
    heroImage: 'https://images.pexels.com/photos/15612080/pexels-photo-15612080.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Group padel lessons are the most popular coaching format in Mallorca, combining structured learning with a social atmosphere. Groups of 2-4 players are matched by level and learn together under the guidance of a certified coach.',
      'The group format is ideal for those who enjoy learning with others, want to practice match-like situations, and appreciate the cost savings compared to private coaching. Many lasting padel friendships start in group lesson settings.',
      'Clubs across Mallorca run scheduled group lessons at fixed times throughout the week. Drop-in group sessions are also available at many venues during tourist season, making it easy for visitors to join without advance planning.',
    ],
    whatToExpect: [
      'Warm-up and rallying exercises with the group',
      'Technique drills practiced in pairs',
      'Positional play and court movement practice',
      'Match play with coaching feedback',
      'Social time and next-session planning',
    ],
    skillLevels: ['Beginner groups', 'Intermediate groups', 'Advanced tactical groups', 'Mixed-level social sessions'],
    typicalDuration: '60-90 minutes',
    priceRange: '20-40 EUR per person',
    priceBreakdown: [
      { item: 'Drop-in group session', price: '20-30 EUR/person' },
      { item: 'Scheduled group (4 players)', price: '25-40 EUR/person' },
      { item: '5-class group pass', price: '90-150 EUR' },
      { item: 'Weekly group subscription', price: '80-120 EUR/month' },
    ],
    clubsOffering: [
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Multiple daily group slots' },
      { name: 'Smash Padel Group', location: 'Playa de Muro', notes: 'Drop-in tourist sessions' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Structured level-based groups' },
      { name: 'Rafa Nadal Academy', location: 'Manacor', notes: 'Professional group methodology' },
    ],
    faqs: [
      { question: 'What if I am a complete beginner?', answer: 'Beginner-only groups are available at most clubs. You will be matched with players of similar experience so the pace suits everyone. No prior padel experience is needed to join a beginner group.' },
      { question: 'How many people are in a group lesson?', answer: 'Typically 3-4 players plus the coach. This allows for proper match-format practice while still receiving individual attention. Some clubs cap groups at 6 for larger drills.' },
      { question: 'Can I join a group lesson as a solo traveler?', answer: 'Absolutely. Group lessons are one of the best ways to meet other players. Most clubs regularly have solo visitors joining scheduled groups, especially during the tourist season.' },
      { question: 'Are group lessons available in English?', answer: 'Yes, most coaching teams in Mallorca include English-speaking coaches. Many clubs specifically offer English-language group sessions for international visitors.' },
    ],
  },
  {
    slug: 'kids-junior-coaching',
    icon: Baby,
    title: 'Kids & Junior Coaching',
    shortDesc: 'Padel lessons for kids in Mallorca with age-appropriate training, games, and skill-building.',
    price: 'From 25 EUR/session',
    metaTitle: 'Kids Padel Lessons Mallorca | Junior Coaching Ages 6-16',
    metaDescription: 'Padel lessons for kids and juniors in Mallorca. Age-appropriate coaching, games, and skill development for ages 6-16 from 25 EUR per session.',
    heroImage: 'https://images.pexels.com/photos/8224758/pexels-photo-8224758.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Padel is one of the best sports for kids to pick up, and Mallorca\'s clubs offer excellent junior programs designed to make learning fun, active, and age-appropriate. Children as young as 6 can start with mini-padel using adapted courts and lighter rackets.',
      'Junior coaching in Mallorca focuses on fundamental movement skills, hand-eye coordination, and basic padel technique through games and structured play. As kids progress, sessions introduce tactical awareness, match play, and competitive opportunities.',
      'Many families visiting Mallorca on holiday use kids padel sessions as a way to keep children active and entertained while parents enjoy their own activities. Clubs offer drop-in junior sessions during summer months, and year-round programs for residents.',
    ],
    whatToExpect: [
      'Fun warm-up games to build coordination',
      'Age-appropriate racket and ball skills',
      'Mini-matches and team-based games',
      'Progressive skill challenges and rewards',
      'Social interaction with other young players',
    ],
    skillLevels: ['Mini padel (ages 6-8)', 'Junior beginner (ages 9-12)', 'Junior intermediate (ages 12-14)', 'Teen competitive (ages 14-16)'],
    typicalDuration: '45-60 minutes',
    priceRange: '25-35 EUR per session',
    priceBreakdown: [
      { item: 'Single junior session', price: '25-35 EUR' },
      { item: 'Junior week pass (5 sessions)', price: '100-140 EUR' },
      { item: 'Private junior lesson', price: '35-45 EUR' },
      { item: 'Summer camp day rate', price: '40-60 EUR' },
    ],
    clubsOffering: [
      { name: 'Rafa Nadal Academy', location: 'Manacor', notes: 'Structured junior academy program' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Year-round junior groups' },
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Holiday junior camps' },
      { name: 'Padelmon Palmanyola', location: 'Palmanyola', notes: 'Small groups, personal attention' },
    ],
    faqs: [
      { question: 'What age can children start padel?', answer: 'Children can start with mini-padel from age 6 using adapted equipment and smaller court areas. By age 8-9, most children can play on a full-size court with junior rackets. There is no upper age limit for junior programs.' },
      { question: 'Do kids need their own equipment?', answer: 'No, all clubs provide age-appropriate rackets and balls for junior sessions. If your child wants to practice outside of lessons, junior rackets can be purchased from club pro shops starting around 30 EUR.' },
      { question: 'Can siblings of different ages play together?', answer: 'It depends on the age gap. Children within 2-3 years of each other can often join the same group. For larger age gaps, separate sessions are recommended to ensure appropriate challenge levels for each child.' },
      { question: 'Are summer holiday junior programs available?', answer: 'Yes, multiple clubs run intensive junior summer programs during July and August. These typically run for a week at a time with morning or full-day options. Booking in advance is strongly recommended as places fill quickly.' },
    ],
  },
  {
    slug: 'family-sessions',
    icon: Heart,
    title: 'Family Sessions',
    shortDesc: 'Padel lessons for families in Mallorca. Learn together with mixed-age group sessions designed for fun.',
    price: 'From 60 EUR/family session',
    metaTitle: 'Family Padel Sessions Mallorca | Play Together as a Family',
    metaDescription: 'Family padel sessions in Mallorca for parents and children. Fun mixed-age group coaching designed for all levels from 60 EUR per family session.',
    heroImage: 'https://images.pexels.com/photos/6572964/pexels-photo-6572964.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Family padel sessions are a wonderful way to share a new sport together during your Mallorca holiday. These specially designed sessions accommodate players of different ages and abilities in the same group, with activities that keep everyone engaged and laughing.',
      'Coaches structure family sessions around cooperative games, team challenges, and adapted match play that ensures both adults and children are active and having fun. The focus is on enjoyment and bonding rather than technical perfection.',
      'Padel is uniquely suited to family play because the smaller court, enclosed walls, and slower ball speed make rallies more accessible than tennis. Even complete beginners can enjoy satisfying rallies within their first family session.',
    ],
    whatToExpect: [
      'Introductory warm-up games for all ages',
      'Basic technique tips adapted for each player',
      'Team-based challenges and cooperative drills',
      'Family doubles matches with coach support',
      'Photo opportunities and fun awards',
    ],
    skillLevels: ['All family members welcome', 'No prior experience needed', 'Mixed ages from 6 upward', 'Adapted for grandparent participation'],
    typicalDuration: '60-90 minutes',
    priceRange: '60-90 EUR per family (up to 4 players)',
    priceBreakdown: [
      { item: 'Family session (up to 4 players)', price: '60-90 EUR' },
      { item: 'Extended family (5-6 players)', price: '80-120 EUR' },
      { item: '3-session family package', price: '150-230 EUR' },
      { item: 'Family + private follow-up', price: '100-140 EUR' },
    ],
    clubsOffering: [
      { name: 'Smash Padel Group', location: 'Playa de Muro', notes: 'Beach-adjacent, very family-friendly' },
      { name: 'Padelmon Palmanyola', location: 'Palmanyola', notes: 'Quiet setting, kids play area' },
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Pool access after session' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Dedicated family time slots' },
    ],
    faqs: [
      { question: 'What ages can participate in family sessions?', answer: 'Children from age 6 can participate with adapted equipment. There is no upper age limit, and grandparents are welcome to join. The coach adapts activities so everyone from age 6 to 70+ can enjoy the session.' },
      { question: 'Do we all need to be the same level?', answer: 'Not at all. Family sessions are specifically designed for mixed abilities. The coach uses cooperative games and adapted rules so that beginners and more experienced players all contribute to the fun.' },
      { question: 'Can we book a family session on the day?', answer: 'Same-day availability depends on the club and season. During summer, booking 1-2 days ahead is recommended. Midweek sessions often have last-minute availability.' },
      { question: 'Is a family session a good first introduction to padel?', answer: 'It is one of the best introductions available. The relaxed, supportive environment and focus on fun make it ideal for families trying padel for the first time. Many families return for additional sessions after their first experience.' },
    ],
  },
  {
    slug: 'intensive-training',
    icon: Zap,
    title: 'Intensive Training',
    shortDesc: 'Multi-hour or multi-day intensive padel lessons in Mallorca for rapid improvement. Perfect for holiday players.',
    price: 'From 150 EUR/day',
    metaTitle: 'Intensive Padel Training Mallorca | Multi-Day Programs',
    metaDescription: 'Intensive padel training in Mallorca with 4-6 hours daily coaching. Rapid improvement programs from 150 EUR/day. Perfect for dedicated holiday players.',
    heroImage: 'https://images.pexels.com/photos/12890936/pexels-photo-12890936.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Intensive padel training programs pack maximum improvement into a concentrated period, making them perfect for players who want to level up during a Mallorca holiday. These programs typically involve 4-6 hours of daily coaching split between morning and afternoon sessions.',
      'The intensive format allows coaches to work through a comprehensive curriculum covering technique, tactics, fitness, and match play in a structured progression. Players see dramatic improvement because the repetition and consistency of daily practice accelerates learning.',
      'Programs range from single-day intensives to week-long courses. Most include video analysis, physical conditioning elements, and competitive match play alongside traditional coaching. They are available for players from intermediate level upward.',
    ],
    whatToExpect: [
      'Morning technical sessions (2-3 hours)',
      'Afternoon tactical and match play (2-3 hours)',
      'Video analysis and review sessions',
      'Physical conditioning and warm-up routines',
      'Daily progress tracking and goal setting',
    ],
    skillLevels: ['Intermediate players seeking a breakthrough', 'Advanced players preparing for competition', 'Dedicated beginners wanting accelerated progress', 'Players returning after a break'],
    typicalDuration: '4-6 hours per day, 1-5 days',
    priceRange: '150-250 EUR per day',
    priceBreakdown: [
      { item: 'Single-day intensive', price: '150-200 EUR' },
      { item: '3-day intensive package', price: '400-550 EUR' },
      { item: '5-day intensive course', price: '600-900 EUR' },
      { item: 'Video analysis add-on', price: '30-50 EUR' },
    ],
    clubsOffering: [
      { name: 'Rafa Nadal Academy', location: 'Manacor', notes: 'Most comprehensive intensive programs' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Video analysis included' },
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Flexible scheduling options' },
      { name: 'Smash Padel Group', location: 'Playa de Muro', notes: 'Combined with beach lifestyle' },
    ],
    faqs: [
      { question: 'What level do I need to be for intensive training?', answer: 'Most intensive programs accept players from intermediate level upward. Some clubs offer beginner intensives for players who have completed at least 3-4 regular lessons. Contact us and we will match you with the right program for your level.' },
      { question: 'Is intensive training physically demanding?', answer: 'Yes, 4-6 hours of daily padel is physically challenging. Programs include proper warm-ups, cool-downs, and rest breaks. Players should be in reasonable fitness. Coaches adapt intensity based on your fitness level and recovery needs.' },
      { question: 'Can I do a 1-day intensive or must I commit to a full week?', answer: 'Single-day intensives are available at most clubs. They are a great way to get a concentrated padel experience if your schedule does not allow for a multi-day commitment.' },
      { question: 'What should I bring to an intensive training day?', answer: 'Bring comfortable sportswear, court shoes (clean soles), a water bottle, sunscreen, and a hat for outdoor sessions. Clubs provide rackets and balls. Bring a change of clothes for afternoon sessions.' },
    ],
  },
  {
    slug: 'english-speaking-coaches',
    icon: Globe,
    title: 'English-Speaking Coaches',
    shortDesc: 'English-speaking padel coaches in Mallorca. Also available in German and Spanish for tourist-friendly instruction.',
    price: 'Same rates apply',
    metaTitle: 'English-Speaking Padel Coaches Mallorca | Multilingual Instruction',
    metaDescription: 'Find English-speaking padel coaches in Mallorca. Multilingual instruction in English, German, and Spanish. Tourist-friendly coaching at all major clubs.',
    heroImage: 'https://images.pexels.com/photos/15612080/pexels-photo-15612080.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    intro: [
      'Language should never be a barrier to learning padel. In Mallorca, the coaching community is highly international, with instructors fluent in English, German, Spanish, and often other European languages. This makes the island one of the most accessible padel learning destinations for tourists.',
      'English-speaking padel coaches are available at every major club on the island. Whether you book a private lesson, join a group, or enroll in a camp, you can request instruction in your preferred language. Coaches switch seamlessly between languages, often within the same group session.',
      'For German-speaking visitors, Mallorca is particularly well served. The island\'s large German-speaking resident community means many coaches are fluent in German and understand the specific communication preferences of German, Austrian, and Swiss players.',
    ],
    whatToExpect: [
      'Full instruction in your preferred language',
      'Technical terminology explained clearly',
      'Cultural understanding and patience with international visitors',
      'Written session notes in English on request',
      'WhatsApp communication before and after sessions',
    ],
    skillLevels: ['All levels welcome', 'Instruction adapted for non-Spanish speakers', 'Padel terminology taught alongside technique', 'Cultural context provided for padel etiquette'],
    typicalDuration: 'Same as standard lessons',
    priceRange: 'No additional charge for language preference',
    priceBreakdown: [
      { item: 'Private lesson (any language)', price: '40-50 EUR' },
      { item: 'Group lesson (English)', price: '20-30 EUR/person' },
      { item: 'Intensive (multilingual)', price: '150-250 EUR/day' },
      { item: 'Language surcharge', price: 'None' },
    ],
    clubsOffering: [
      { name: 'Rafa Nadal Academy', location: 'Manacor', notes: 'Spanish, English, German coaching' },
      { name: 'Smash Padel Group', location: 'Playa de Muro', notes: 'Spanish, English, German coaching' },
      { name: 'Palma Padel', location: 'Son Rapinya', notes: 'Spanish, English coaching' },
      { name: 'UDYR SPORT', location: 'Palma', notes: 'Spanish, English coaching' },
    ],
    faqs: [
      { question: 'Do all clubs have English-speaking coaches?', answer: 'All major clubs in Mallorca have at least one English-speaking coach. The larger clubs like Palma Padel, Rafa Nadal Academy, and UDYR SPORT have multiple English-speaking coaches available throughout the week.' },
      { question: 'Can I get lessons in German?', answer: 'Yes, German-speaking coaches are available at several clubs, particularly Rafa Nadal Academy and Smash Padel Group. Due to Mallorca\'s large German-speaking community, this is more readily available than in most Spanish destinations.' },
      { question: 'Will I learn padel terminology in Spanish too?', answer: 'Most coaches naturally teach the Spanish padel terms alongside English explanations. This is useful because many padel calls and on-court communications use Spanish terms universally, even in international play.' },
      { question: 'Do I need to specify language when booking?', answer: 'It is helpful to mention your language preference when booking, especially for group lessons, so the club can assign an appropriate coach. For private lessons, simply request your preferred language at the time of booking.' },
    ],
  },
];

export function getLessonTypeBySlug(slug: string): LessonTypeData | undefined {
  return lessonTypes.find((l) => l.slug === slug);
}
