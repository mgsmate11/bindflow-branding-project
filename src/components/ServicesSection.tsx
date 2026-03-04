import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, MessageSquare, Workflow } from 'lucide-react';

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
    },
    {
      icon: GraduationCap,
      title: t('AI Oktatás', 'AI Training'),
      description: t(
        'Gyakorlatias workshopok. Megtanítjuk csapatodnak a Prompt Engineering alapjait és a leghatékonyabb AI eszközök használatát.',
        'Practical workshops. We teach your team the fundamentals of Prompt Engineering and how to use effective AI tools.'
      ),
    },
    {
      icon: MessageSquare,
      title: t('AI Asszisztensek', 'AI Assistants'),
      description: t(
        'Egyedi fejlesztésű chatbotok és virtuális ügynökök, amik 0-24-ben kezelik az ügyfélkéréseket vagy támogatják a belső adminisztrációt.',
        'Custom-developed chatbots and virtual agents that handle customer requests or support internal administration 24/7.'
      ),
    },
    {
      icon: Workflow,
      title: t('Automatizáció', 'Automation'),
      description: t(
        '"No-code" és egyedi megoldások (Zapier, Make), amelyek összekötik szoftvereidet, emberi beavatkozás nélkül elvégezve az ismétlődő feladatokat.',
        'No-code and custom solutions that connect your software, performing repetitive tasks without human intervention.'
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
            {t('Szolgáltatások', 'Services')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('Hogyan segítünk?', 'How can we help?')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/40 transition-all duration-300"
            >
              {/* Cyan accent line on top */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
