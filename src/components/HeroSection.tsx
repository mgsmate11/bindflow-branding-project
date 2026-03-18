import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BindflowLogo from '@/components/BindflowLogo';
import teamImg from '@/assets/team-collab.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const HeroParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-accent/40"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particle-float ${4 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 4}s`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const { t } = useLang();

  const values = [
    { icon: Target, title: t('Precizitás', 'Precision'), desc: t('Minden megoldásunk mérhetően javítja a folyamataidat.', 'Every solution measurably improves your processes.') },
    { icon: Lightbulb, title: t('Innováció', 'Innovation'), desc: t('A legújabb AI technológiákat alkalmazzuk, gyakorlatias megközelítéssel.', 'We apply the latest AI technologies with a practical approach.') },
    { icon: Users, title: t('Partnerség', 'Partnership'), desc: t('Nem szállítók, hanem stratégiai partnerek vagyunk.', "We're not vendors, we're strategic partners.") },
  ];

  const stats = [
    { num: '50+', label: t('Sikeres projekt', 'Successful projects') },
    { num: '30%', label: t('Átlagos hatékonyságnövekedés', 'Average efficiency boost') },
    { num: '24/7', label: t('AI asszisztens üzemidő', 'AI assistant uptime') },
    { num: '98%', label: t('Ügyfél elégedettség', 'Client satisfaction') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-dark">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <HeroParticles />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-[15%] w-64 h-64 rounded-full bg-primary/5 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <BindflowLogo size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-sm font-medium text-primary-foreground/70"
            >
              {t('AI Megoldások Vállalatoknak', 'AI Solutions for Enterprises')}
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-gradient-animated">
                {t('Intelligens folyamatok,', 'Intelligent workflows,')}
              </span>
              <br />
              <span className="text-primary-foreground">
                {t('emberi léptékkel.', 'on a human scale.')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t(
                'A mesterséges intelligencia nem a jövő, hanem a jelen versenyelőnye. Segítünk, hogy a technológia ne teher, hanem a leghatékonyabb munkatársad legyen.',
                "AI is not the future; it's today's competitive edge. We help ensure that technology isn't a burden, but your most efficient team member."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-cta bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full shadow-lg" asChild>
                <Link to="/contact">
                  {t('Ingyenes Konzultáció', 'Free Consultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">
                  {t('Szolgáltatásaink', 'Our Services')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{stat.num}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
                {t('Rólunk', 'About Us')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t('Tudás és technológia, egy kézben.', 'Knowledge and technology, in one hand.')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  'A Bindflow csapata több éves tapasztalattal rendelkezik az AI tanácsadás, oktatás és automatizáció terén. Célunk, hogy a legmodernebb technológiákat emberi léptékkel, érthetően és hatékonyan adjuk át ügyfeleinknek.',
                  'The Bindflow team has years of experience in AI consulting, training, and automation. Our goal is to deliver cutting-edge technologies at a human scale—understandably and efficiently.'
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t(
                  'Nem hiszünk az egyforma megoldásokban. Minden projektünk egyedi, az ügyfél igényeire szabott, és mérhető eredményeket hoz.',
                  "We don't believe in one-size-fits-all. Every project is unique, tailored to client needs, and delivers measurable results."
                )}
              </p>
              <ul className="space-y-3">
                {[
                  t('Személyre szabott AI stratégia', 'Personalized AI strategy'),
                  t('Gyakorlatorientált megközelítés', 'Practice-oriented approach'),
                  t('Folyamatos támogatás és fejlesztés', 'Continuous support and development'),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={teamImg} alt={t('Bindflow csapat', 'Bindflow team')} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Értékeink', 'Our Values')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('Amiért a partnereink minket választanak', 'Why our partners choose us')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-border bg-card text-center group hover:border-accent/30 card-hover"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center p-12 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 relative z-10">
              {t('Készen állsz az AI-vezérelt jövőre?', 'Ready for an AI-driven future?')}
            </h2>
            <p className="text-muted-foreground mb-8 relative z-10">
              {t(
                'Foglalj egy ingyenes 30 perces konzultációt, és fedezd fel, hogyan hozhat az AI azonnal értéket a cégednek.',
                'Book a free 30-minute consultation and discover how AI can deliver immediate value to your business.'
              )}
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full" asChild>
              <Link to="/contact">
                {t('Kapcsolatfelvétel', 'Get in Touch')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
