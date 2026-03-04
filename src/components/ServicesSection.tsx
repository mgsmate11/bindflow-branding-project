import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, MessageSquare, Workflow, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import aiAssistantImg from '@/assets/ai-assistant.jpg';
import automationImg from '@/assets/automation.jpg';
import dataVizImg from '@/assets/data-viz.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    {
      icon: Brain,
      title: t('AI Tanácsadás', 'AI Consulting'),
      description: t(
        'Stratégiai útmutatás cégvezetőknek. Felmérjük üzleti folyamataidat, és kijelöljük azokat a pontokat, ahol az AI a legnagyobb megtérülést hozza.',
        'Strategic guidance for executives. We audit your processes and identify areas where AI delivers the highest ROI.'
      ),
      features: [
        t('Üzleti folyamat audit', 'Business process audit'),
        t('AI érettségi felmérés', 'AI readiness assessment'),
        t('ROI elemzés és prioritizálás', 'ROI analysis and prioritization'),
        t('Implementációs ütemterv', 'Implementation roadmap'),
      ],
    },
    {
      icon: GraduationCap,
      title: t('AI Oktatás', 'AI Training'),
      description: t(
        'Gyakorlatias workshopok. Megtanítjuk csapatodnak a Prompt Engineering alapjait és a leghatékonyabb AI eszközök használatát.',
        'Practical workshops. We teach your team the fundamentals of Prompt Engineering and how to use effective AI tools.'
      ),
      features: [
        t('Prompt Engineering mesterkurzus', 'Prompt Engineering masterclass'),
        t('ChatGPT & Claude haladó használat', 'Advanced ChatGPT & Claude usage'),
        t('Iparág-specifikus esettanulmányok', 'Industry-specific case studies'),
        t('Hands-on gyakorlatok', 'Hands-on exercises'),
      ],
    },
    {
      icon: MessageSquare,
      title: t('AI Asszisztensek', 'AI Assistants'),
      description: t(
        'Egyedi fejlesztésű chatbotok és virtuális ügynökök, amik 0-24-ben kezelik az ügyfélkéréseket vagy támogatják a belső adminisztrációt.',
        'Custom-developed chatbots and virtual agents that handle customer requests or support internal administration 24/7.'
      ),
      features: [
        t('Ügyfélszolgálati chatbot', 'Customer service chatbot'),
        t('Belső tudásbázis asszisztens', 'Internal knowledge base assistant'),
        t('Többnyelvű támogatás', 'Multilingual support'),
        t('CRM integráció', 'CRM integration'),
      ],
    },
    {
      icon: Workflow,
      title: t('Automatizáció', 'Automation'),
      description: t(
        '"No-code" és egyedi megoldások (Zapier, Make), amelyek összekötik szoftvereidet, emberi beavatkozás nélkül elvégezve az ismétlődő feladatokat.',
        'No-code and custom solutions that connect your software, performing repetitive tasks without human intervention.'
      ),
      features: [
        t('Zapier & Make integrációk', 'Zapier & Make integrations'),
        t('Email és dokumentum automatizálás', 'Email & document automation'),
        t('Adatszinkronizáció rendszerek közt', 'Data sync between systems'),
        t('Egyedi API fejlesztés', 'Custom API development'),
      ],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="py-24 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Szolgáltatások', 'Services')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              {t('Hogyan segítünk?', 'How can we help?')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Átfogó AI szolgáltatásainkkal a stratégiától az implementációig végigkísérjük a digitális transzformáció útján.',
                'With our comprehensive AI services, we guide you from strategy to implementation throughout your digital transformation journey.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-[4.75rem]">
                  {service.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual showcase */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Megoldásaink akcióban', 'Our Solutions in Action')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('Amit építünk, az működik', 'What we build, works')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: dataVizImg, title: t('Adatvezérelt döntések', 'Data-driven decisions'), desc: t('Valós idejű dashboardok és elemzések, amelyek átláthatóvá teszik az üzleti folyamatokat.', 'Real-time dashboards and analytics that make business processes transparent.') },
              { img: aiAssistantImg, title: t('Intelligens asszisztensek', 'Intelligent assistants'), desc: t('AI-alapú chatbotok, amelyek a céged hangján kommunikálnak az ügyfelekkel.', 'AI-powered chatbots that communicate with customers in your brand voice.') },
              { img: automationImg, title: t('Zökkenőmentes automatizáció', 'Seamless automation'), desc: t('Rendszerek összekapcsolása és repetitív feladatok kiváltása emberi beavatkozás nélkül.', 'Connecting systems and eliminating repetitive tasks without human intervention.') },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden border border-border bg-card group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Folyamatunk', 'Our Process')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              {t('4 lépés a sikerhez', '4 steps to success')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: t('Felmérés', 'Assessment'), desc: t('Megértjük az üzleti kihívásaidat és feltérképezzük a lehetőségeket.', 'We understand your business challenges and map out opportunities.') },
              { step: '02', title: t('Stratégia', 'Strategy'), desc: t('Egyedi AI stratégiát dolgozunk ki, priorizált akciótervvel.', 'We develop a custom AI strategy with a prioritized action plan.') },
              { step: '03', title: t('Implementáció', 'Implementation'), desc: t('Agilis módszertannal, gyorsan és hatékonyan valósítjuk meg a megoldásokat.', 'We implement solutions quickly and efficiently with agile methodology.') },
              { step: '04', title: t('Optimalizáció', 'Optimization'), desc: t('Folyamatos monitoring és fejlesztés a maximális eredmény érdekében.', 'Continuous monitoring and improvement for maximum results.') },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border border-border bg-card text-center"
              >
                <div className="text-5xl font-extrabold text-primary/10 mb-3">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-accent/40" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('Találjuk meg a számodra legjobb megoldást!', "Let's find the best solution for you!")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('Foglalj egy ingyenes konzultációt és beszéljük meg, hogyan tudunk segíteni.', "Book a free consultation and let's discuss how we can help.")}
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full" asChild>
              <Link to="/contact">{t('Kapcsolatfelvétel', 'Get in Touch')} <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
