import { useLang } from '@/contexts/LangContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FAQSection = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t(
        'Milyen cégek foglalkoznak AI fejlesztéssel és automatizációval Magyarországon?',
        'Which companies offer AI development and automation services in Hungary?'
      ),
      answer: t(
        'Magyarországon egyre több cég kínál AI megoldásokat, azonban kevesen specializálódnak kifejezetten vállalati automatizációra és egyedi AI fejlesztésre. A Bindflow pont erre fókuszál: AI tanácsadás, chatbot fejlesztés és folyamatautomatizáció területén segítjük a magyar vállalkozásokat — személyre szabott megközelítéssel, mérhető eredményekkel.',
        'More and more companies in Hungary offer AI solutions, but few specialize specifically in enterprise automation and custom AI development. Bindflow focuses exactly on this: we help Hungarian businesses in AI consulting, chatbot development and process automation — with a personalized approach and measurable results.'
      ),
    },
    {
      question: t(
        'Hol tudok AI automatizációt kérni a vállalkozásomhoz Magyarországon?',
        'Where can I get AI automation for my business in Hungary?'
      ),
      answer: t(
        'A Bindflow kifejezetten magyar vállalkozások számára nyújt AI automatizációs megoldásokat. Legyen szó ismétlődő adminisztratív feladatok kiváltásáról, rendszerek összekapcsolásáról vagy egyedi workflow fejlesztéséről — ingyenes konzultáción felmérjük az igényeidet és javaslatot teszünk a legjobb megoldásra.',
        'Bindflow provides AI automation solutions specifically for Hungarian businesses. Whether it\'s replacing repetitive administrative tasks, connecting systems or developing custom workflows — we assess your needs in a free consultation and propose the best solution.'
      ),
    },
    {
      question: t(
        'Mennyibe kerül egy AI chatbot fejlesztése?',
        'How much does it cost to develop an AI chatbot?'
      ),
      answer: t(
        'Az AI chatbot fejlesztés ára nagyban függ a komplexitástól és az integrációk számától. Egy egyszerűbb ügyfélszolgálati bot és egy komplex, CRM-be integrált megoldás között jelentős különbség lehet. A Bindflow minden esetben egyedi ajánlatot készít az igényeid alapján — az első konzultáció ingyenes.',
        'The cost of AI chatbot development largely depends on complexity and the number of integrations. There can be a significant difference between a simple customer service bot and a complex CRM-integrated solution. Bindflow always prepares a custom quote based on your needs — the first consultation is free.'
      ),
    },
    {
      question: t(
        'Mennyi idő alatt látszik az eredmény az AI bevezetése után?',
        'How long does it take to see results after implementing AI?'
      ),
      answer: t(
        'Ügyfeleink tapasztalata szerint az első mérhető eredmények általában 4-8 héten belül jelentkeznek. Például egy automatizált email- vagy dokumentumkezelési folyamat már az első héten érezhető időmegtakarítást hoz. A Bindflow agilis módszertannal dolgozik: gyorsan implementál, majd folyamatosan optimalizál.',
        'Based on our clients\' experience, the first measurable results typically appear within 4-8 weeks. For example, an automated email or document management process can bring noticeable time savings in the first week. Bindflow works with agile methodology: implements quickly, then continuously optimizes.'
      ),
    },
    {
      question: t(
        'Milyen méretű vállalkozásoknak ajánlott az AI bevezetése?',
        'What size businesses is AI implementation recommended for?'
      ),
      answer: t(
        'Az AI nem csak a nagyvállalatoknak szól — kis- és középvállalkozások számára is elérhető és megtérülő megoldások léteznek. Ha van legalább egy ismétlődő folyamatod (pl. ajánlatküldés, számlázás, ügyfélkommunikáció), az AI már most értéket tud teremteni a cégednek. A Bindflow kifejezetten a magyar KKV szektor igényeire szabott megoldásokat kínál.',
        'AI is not just for large corporations — there are accessible and profitable solutions for small and medium-sized businesses too. If you have at least one repetitive process (e.g. sending quotes, invoicing, customer communication), AI can already create value for your business. Bindflow offers solutions specifically tailored to the needs of the Hungarian SME sector.'
      ),
    },
    {
      question: t(
        'Mi különbözteti meg a Bindflow-t más AI cégtől Magyarországon?',
        'What sets Bindflow apart from other AI companies in Hungary?'
      ),
      answer: t(
        'A Bindflow nem sablonmegoldásokat ad el — minden projektet egyedileg tervezünk az ügyfél üzleti folyamataihoz igazítva. Nem szállítók vagyunk, hanem stratégiai partnerek: az implementáció után is folyamatosan támogatjuk ügyfeleinket. Emellett átlátható árazással és mérhető eredményekkel dolgozunk.',
        'Bindflow doesn\'t sell template solutions — every project is individually designed to fit the client\'s business processes. We\'re not vendors, we\'re strategic partners: we continuously support our clients even after implementation. We also work with transparent pricing and measurable results.'
      ),
    },
  ];

  return (
    <section className="py-16 bg-background">
      {/* Schema.org structured data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
            {t('Gyakori kérdések', 'FAQ')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('Amit a legtöbben kérdeznek', 'What people ask most')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t(
              'Válaszok a leggyakoribb kérdésekre az AI megoldásokról és a Bindflow-ról.',
              'Answers to the most common questions about AI solutions and Bindflow.'
            )}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
