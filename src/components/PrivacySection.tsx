import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface Section {
  heading: { hu: string; en: string };
  paragraphs: { hu: string; en: string }[];
  bullets?: { hu: string; en: string }[];
}

const PrivacySection = () => {
  const { t } = useLang();

  const lastUpdated = '2026-06-11';

  const sections: Section[] = [
    {
      heading: { hu: '1. Az adatkezelő', en: '1. The data controller' },
      paragraphs: [
        {
          hu: 'Az adatkezelő a Bindflow (a továbbiakban: „Szolgáltató"), amely AI tanácsadással, automatizációval és chatbot-fejlesztéssel foglalkozik Magyarországon. Kapcsolat: magos.mate@icloud.com.',
          en: 'The data controller is Bindflow (the "Provider"), which offers AI consulting, automation and chatbot development in Hungary. Contact: magos.mate@icloud.com.',
        },
      ],
    },
    {
      heading: { hu: '2. Milyen adatokat kezelünk', en: '2. What data we process' },
      paragraphs: [
        {
          hu: 'Kizárólag azokat az adatokat kezeljük, amelyeket Ön a kapcsolati űrlapon önként megad. Ezek a következők:',
          en: 'We only process the data you voluntarily provide via the contact form. These are:',
        },
      ],
      bullets: [
        { hu: 'név', en: 'name' },
        { hu: 'e-mail cím', en: 'email address' },
        { hu: 'cégnév (opcionális)', en: 'company name (optional)' },
        { hu: 'az üzenet szövege', en: 'the message text' },
      ],
    },
    {
      heading: { hu: '3. Az adatkezelés célja és jogalapja', en: '3. Purpose and legal basis' },
      paragraphs: [
        {
          hu: 'Az adatokat kizárólag azért kezeljük, hogy felvegyük Önnel a kapcsolatot és megválaszoljuk megkeresését. Az adatkezelés jogalapja az Ön kapcsolatfelvételi kérésének teljesítése (GDPR 6. cikk (1) b) és/vagy a Szolgáltató jogos érdeke a megkeresések megválaszolásában (GDPR 6. cikk (1) f).',
          en: 'We process the data solely to contact you and respond to your inquiry. The legal basis is performance of your contact request (GDPR Art. 6(1)(b)) and/or the Provider\'s legitimate interest in answering inquiries (GDPR Art. 6(1)(f)).',
        },
      ],
    },
    {
      heading: { hu: '4. Adatfeldolgozók', en: '4. Data processors' },
      paragraphs: [
        {
          hu: 'A kapcsolati űrlap működéséhez külső szolgáltatókat veszünk igénybe, amelyek az adatait a nevünkben, technikai célból dolgozzák fel:',
          en: 'To operate the contact form we use external service providers that process your data on our behalf for technical purposes:',
        },
      ],
      bullets: [
        {
          hu: 'Formspree – az űrlapüzenetek e-mailben történő továbbítása (formspree.io).',
          en: 'Formspree – forwarding form messages by email (formspree.io).',
        },
        {
          hu: 'n8n – az üzenetek automatizált feldolgozása munkafolyamatban (n8n.io).',
          en: 'n8n – automated processing of messages in a workflow (n8n.io).',
        },
      ],
    },
    {
      heading: { hu: '5. Sütik és böngészőben tárolt adatok', en: '5. Cookies and browser storage' },
      paragraphs: [
        {
          hu: 'A weboldal nem használ harmadik féltől származó analitikai vagy marketing sütiket, és nem végez nyomkövetést. A böngészőjében kizárólag funkcionális beállításokat tárolunk (a választott nyelvet és a világos/sötét témát), hogy a következő látogatáskor megőrizzük a beállításait. Ezek az adatok nem hagyják el a böngészőjét, és nem alkalmasak az Ön azonosítására.',
          en: 'The website uses no third-party analytics or marketing cookies and performs no tracking. In your browser we only store functional settings (the selected language and the light/dark theme) so we can preserve your preferences on your next visit. This data never leaves your browser and cannot identify you.',
        },
      ],
    },
    {
      heading: { hu: '6. Megőrzési idő', en: '6. Retention period' },
      paragraphs: [
        {
          hu: 'A kapcsolati megkeresés során megadott adatokat csak addig őrizzük, amíg az a megkeresés megválaszolásához és az esetleges üzleti kapcsolat kialakításához szükséges, ezt követően töröljük azokat, kivéve ha jogszabály hosszabb megőrzést ír elő.',
          en: 'We retain the data provided in your inquiry only as long as necessary to answer it and to establish any business relationship, after which we delete it, unless law requires longer retention.',
        },
      ],
    },
    {
      heading: { hu: '7. Az Ön jogai', en: '7. Your rights' },
      paragraphs: [
        {
          hu: 'A GDPR alapján Ön bármikor kérheti a személyes adataihoz való hozzáférést, azok helyesbítését, törlését vagy kezelésük korlátozását, továbbá tiltakozhat az adatkezelés ellen és élhet az adathordozhatósághoz való jogával (GDPR 15–22. cikk). Kérését a magos.mate@icloud.com címen jelezheti.',
          en: 'Under the GDPR you may at any time request access to, rectification, erasure or restriction of your personal data, and you may object to processing and exercise your right to data portability (GDPR Art. 15–22). You can submit your request at magos.mate@icloud.com.',
        },
      ],
    },
    {
      heading: { hu: '8. Jogorvoslat', en: '8. Right to complain' },
      paragraphs: [
        {
          hu: 'Ha úgy érzi, hogy adatkezelésünk sérti a jogait, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, naih.hu), vagy bírósághoz fordulhat.',
          en: 'If you believe our data processing infringes your rights, you may lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH, naih.hu) or seek a judicial remedy.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.div {...fadeUp}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              {t('Adatkezelési tájékoztató', 'Privacy Policy')}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t('Utolsó frissítés: ', 'Last updated: ')}
              {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Notice */}
          <motion.div
            {...fadeUp}
            className="flex gap-3 p-4 mb-10 rounded-xl border border-accent/30 bg-accent/5 text-sm text-muted-foreground"
          >
            <Info className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <p>
              {t(
                'Ez a tájékoztató jogi sablon, amely a weboldal tényleges adatkezelését tükrözi. Élesítés előtt javasolt jogi szakértővel ellenőriztetni és a cég hivatalos adataival kiegészíteni.',
                'This policy is a legal template reflecting the website\'s actual data processing. Before going live, we recommend having it reviewed by a legal expert and completed with the company\'s official details.'
              )}
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div key={i} {...fadeUp}>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {t(section.heading.hu, section.heading.en)}
                </h2>
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-base text-foreground/80 leading-relaxed mb-3">
                    {t(p.hu, p.en)}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 space-y-1.5 text-base text-foreground/80">
                    {section.bullets.map((b, bi) => (
                      <li key={bi}>{t(b.hu, b.en)}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacySection;
