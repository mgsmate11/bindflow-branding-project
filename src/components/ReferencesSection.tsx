import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { TrendingUp, Quote, ArrowRight, BarChart3, Clock, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import dataVizImg from '@/assets/data-viz.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ReferencesSection = () => {
  const { t } = useLang();

  const caseStudies = [
    {
      icon: BarChart3,
      stat: '30%',
      statLabel: t('hatékonyságnövekedés', 'efficiency boost'),
      title: t('Pénzügyi tanácsadó cég', 'Financial consultancy firm'),
      quote: t(
        '"30% hatékonyságnövekedés egyetlen negyedév alatt."',
        '"30% efficiency boost in a single quarter."'
      ),
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
      quote: t(
        '"Az ügyfélszolgálati chatbotunk átvette a kérdések 70%-át."',
        '"Our customer service chatbot now handles 70% of inquiries."'
      ),
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
      quote: t(
        '"A Bindflow segítségével teljesen digitalizáltuk a belső folyamatainkat."',
        '"With Bindflow\'s help, we fully digitized our internal processes."'
      ),
      description: t(
        'No-code automatizációval összekötöttük a raktárkezelő, számlázó és CRM rendszereket. Az adatok immár valós időben szinkronizálódnak.',
        'With no-code automation, we connected warehouse management, invoicing, and CRM systems. Data now syncs in real-time.'
      ),
      tags: [t('No-code', 'No-code'), t('Integráció', 'Integration')],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="py-24 bg-hero-glow relative overflow-hidden">
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
                'Ügyfeleink átlagosan 30%-os hatékonyságnövekedést tapasztalnak az első negyedévben. Íme néhány esettanulmány.',
                'Our clients experience an average 30% efficiency boost in the first quarter. Here are some case studies.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="relative p-8 sm:p-10 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <cs.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-3xl font-extrabold text-primary">{cs.stat}</div>
                    <div className="text-xs text-muted-foreground">{cs.statLabel}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{cs.title}</div>
                  <blockquote className="text-xl font-semibold text-foreground mb-3 leading-snug">
                    {cs.quote}
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed mb-4">{cs.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag, ti) => (
                      <span key={ti} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('Mérjük, ami számít', 'We measure what matters')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(
                  'Minden projektünkhöz részletes KPI-kat definiálunk és transzparens riportokat készítünk, hogy az eredmények ne csak érezhetőek, hanem bizonyíthatóak is legyenek.',
                  "For every project, we define detailed KPIs and create transparent reports, so results aren't just felt—they're proven."
                )}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: '50+', l: t('Projekt', 'Projects') },
                  { n: '12+', l: t('Iparág', 'Industries') },
                  { n: '98%', l: t('Elégedettség', 'Satisfaction') },
                  { n: '3x', l: t('Átlagos ROI', 'Average ROI') },
                ].map((s, si) => (
                  <div key={si} className="p-4 rounded-xl border border-border bg-card text-center">
                    <div className="text-2xl font-extrabold text-primary">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img src={dataVizImg} alt={t('Dashboard', 'Dashboard')} className="w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
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
