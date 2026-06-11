import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { TrendingUp, Quote, ArrowRight, BarChart3, Clock, Smile, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import umbrollLogo from '@/assets/umbroll-logo.png';
import femszerLogo from '@/assets/femszer-logo.png';
import CountUp from '@/components/CountUp';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PartnerLogo = ({ name, color }: { name: string; color: string }) => (
  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
    <div className="text-center">
      <Building2 className="w-8 h-8 mx-auto mb-1 text-primary" />
      <span className="text-xs font-bold text-primary leading-none">{name}</span>
    </div>
  </div>
);

const ReferencesSection = () => {
  const { t } = useLang();

  const caseStudies = [
    {
      icon: BarChart3,
      stat: '30%',
      statLabel: t('hatékonyságnövekedés', 'efficiency boost'),
      title: t('Pénzügyi tanácsadó cég', 'Financial consultancy firm'),
      quote: t('"30% hatékonyságnövekedés egyetlen negyedév alatt."', '"30% efficiency boost in a single quarter."'),
      description: t(
        'Automatizáltuk az adatbevitelt és egy egyedi AI asszisztenst állítottunk hadrendbe. Eredmény: felszabadult munkaidő és elégedettebb ügyfelek.',
        'We automated data entry and deployed a custom AI assistant. Result: reclaimed hours and satisfied clients.'
      ),
      tags: [t('Automatizáció', 'Automation'), t('AI Asszisztens', 'AI Assistant')],
    },
    {
      icon: Clock,
      stat: '15h',
      statLabel: t('megtakarított óra/hét', 'hours saved/week'),
      title: t('E-commerce vállalkozás', 'E-commerce business'),
      quote: t('"Az ügyfélszolgálati chatbotunk átvette a kérdések 70%-át."', '"Our customer service chatbot now handles 70% of inquiries."'),
      description: t(
        'Egy egyedi fejlesztésű AI chatbot segítségével automatizáltuk az ügyfélkérések kezelését, csökkentve a válaszidőt és a terhelést.',
        'With a custom AI chatbot, we automated customer request handling, reducing response time and workload.'
      ),
      tags: [t('Chatbot', 'Chatbot'), t('Ügyfélszolgálat', 'Customer Service')],
    },
    {
      icon: Smile,
      stat: '95%',
      statLabel: t('ügyfél elégedettség', 'client satisfaction'),
      title: t('Logisztikai cég', 'Logistics company'),
      quote: t('"A Bindflow segítségével teljesen digitalizáltuk a belső folyamatainkat."', '"With Bindflow\'s help, we fully digitized our internal processes."'),
      description: t(
        'No-code automatizációval összekötöttük a raktárkezelő, számlázó és CRM rendszereket. Az adatok immár valós időben szinkronizálódnak.',
        'With no-code automation, we connected warehouse management, invoicing, and CRM systems. Data now syncs in real-time.'
      ),
      tags: [t('No-code', 'No-code'), t('Integráció', 'Integration')],
    },
  ];

  const partners = [
    {
      name: 'Umbroll',
      logo: umbrollLogo,
      url: 'https://umbroll.hu',
      description: t('Árnyékolástechnikai megoldások', 'Shading technology solutions'),
    },
    {
      name: 'Fémszer Kft',
      logo: femszerLogo,
      url: 'https://femszer.hu',
      description: t('Lemezmegmunkálás és acélszerkezetek', 'Sheet metal processing & steel structures'),
    },
    {
      name: 'Benetty Kft',
      logo: null,
      url: null,
      description: t('Üzleti megoldások', 'Business solutions'),
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="py-20 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Referenciák', 'References')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              {t('Eredmények, amik magukért beszélnek', 'Results that speak for themselves')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Ügyfeleink átlagosan 30%-os hatékonyságnövekedést tapasztalnak az első negyedévben.',
                'Our clients experience an average 30% efficiency boost in the first quarter.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {t('Partnereink', 'Our Partners')}
            </h2>
            <p className="text-muted-foreground">
              {t('Akikkel együtt dolgoztunk', 'Companies we have worked with')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="flex flex-col items-center p-8 rounded-2xl border border-border bg-card card-hover"
              >
                {partner.logo ? (
                  <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <PartnerLogo name={partner.name} color="bg-primary/10" />
                )}
                <h3 className="text-lg font-bold text-foreground mb-1">{partner.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{partner.description}</p>
                {partner.url && (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs text-primary hover:underline font-medium"
                  >
                    {partner.url.replace('https://', '')}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="relative p-8 sm:p-10 rounded-2xl border border-border bg-card overflow-hidden card-hover"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <cs.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-3xl font-extrabold text-primary"><CountUp value={cs.stat} /></div>
                    <div className="text-xs text-muted-foreground">{cs.statLabel}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{cs.title}</div>
                  <blockquote className="text-xl font-semibold text-foreground mb-3 leading-snug">{cs.quote}</blockquote>
                  <p className="text-muted-foreground leading-relaxed mb-4">{cs.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag, ti) => (
                      <span key={ti} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('Legyen a Te céged a következő sikertörténet!', 'Let your company be the next success story!')}
            </h2>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full" asChild>
              <Link to="/contact">{t('Kapcsolatfelvétel', 'Get in Touch')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReferencesSection;
