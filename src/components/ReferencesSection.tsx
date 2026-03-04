import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { TrendingUp, Quote } from 'lucide-react';

const ReferencesSection = () => {
  const { t } = useLang();

  return (
    <section id="references" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-48 opacity-10" viewBox="0 0 1200 200" fill="none">
          <path d="M0 150 Q300 50 600 120 T1200 80" stroke="hsl(0 100% 25%)" strokeWidth="2" />
          <path d="M0 180 Q400 80 800 140 T1200 100" stroke="hsl(188 90% 61%)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
            {t('Referenciák', 'References')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('Eredmények, amik magukért beszélnek', 'Results that speak for themselves')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-10 rounded-2xl border border-border bg-card">
            <Quote className="absolute top-6 left-6 w-8 h-8 text-accent/30" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">{t('hatékonyságnövekedés', 'efficiency boost')}</div>
              </div>
            </div>

            <blockquote className="text-xl font-semibold text-foreground mb-4 leading-snug">
              {t(
                '"30% hatékonyságnövekedés egyetlen negyedév alatt."',
                '"30% efficiency boost in a single quarter."'
              )}
            </blockquote>

            <p className="text-muted-foreground leading-relaxed">
              {t(
                'Egy pénzügyi tanácsadó cégnél automatizáltuk az adatbevitelt és egy egyedi AI asszisztenst állítottunk hadrendbe. Eredmény: felszabadult munkaidő és elégedettebb ügyfelek.',
                'For a financial consultancy firm, we automated data entry and deployed a custom AI assistant. Result: reclaimed hours and satisfied clients.'
              )}
            </p>

            {/* Accent glow */}
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection;
