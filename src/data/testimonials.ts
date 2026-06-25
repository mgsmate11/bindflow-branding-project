import type { Bilingual } from '@/data/articles';

// Ügyfél-vélemények a meglévő (ReferencesSection) case-study idézetekből.
// Single source of truth a főoldali testimonial-karuszelhez. Anonimizált cégtípus
// + a kapcsolódó mérőszám, hogy ne kelljen új engedély valós névhez.

export interface Testimonial {
  quote: Bilingual; // ügyfél-idézet (idézőjel nélkül, a UI teszi köré)
  author: Bilingual; // anonimizált cégtípus / szerep
  stat: string; // mérőszám, pl. '30%'
  statLabel: Bilingual; // a mérőszám jelentése
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      hu: '30% hatékonyságnövekedés egyetlen negyedév alatt.',
      en: '30% efficiency boost in a single quarter.',
    },
    author: { hu: 'Pénzügyi tanácsadó cég', en: 'Financial consultancy firm' },
    stat: '30%',
    statLabel: { hu: 'hatékonyságnövekedés', en: 'efficiency boost' },
  },
  {
    quote: {
      hu: 'Az ügyfélszolgálati chatbotunk átvette a kérdések 70%-át.',
      en: 'Our customer service chatbot now handles 70% of inquiries.',
    },
    author: { hu: 'E-commerce vállalkozás', en: 'E-commerce business' },
    stat: '15h',
    statLabel: { hu: 'megtakarított óra/hét', en: 'hours saved/week' },
  },
  {
    quote: {
      hu: 'A Bindflow segítségével teljesen digitalizáltuk a belső folyamatainkat.',
      en: "With Bindflow's help, we fully digitized our internal processes.",
    },
    author: { hu: 'Logisztikai cég', en: 'Logistics company' },
    stat: '95%',
    statLabel: { hu: 'ügyfél elégedettség', en: 'client satisfaction' },
  },
];
