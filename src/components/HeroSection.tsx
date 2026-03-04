import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero-glow overflow-hidden">
      {/* Decorative cyan elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 rounded-full bg-accent/8 blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Subtle lines */}
        <div className="absolute top-1/2 left-0 w-full h-px line-accent opacity-20" />
        <div className="absolute top-2/3 left-0 w-3/4 h-px line-accent opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-sm font-medium text-muted-foreground"
          >
            {t('AI Megoldások Vállalatoknak', 'AI Solutions for Enterprises')}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gradient-hero mb-6">
            {t(
              'Intelligens folyamatok, emberi léptékkel.',
              'Intelligent workflows on a human scale.'
            )}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t(
              'A mesterséges intelligencia nem a jövő, hanem a jelen versenyelőnye. Segítünk, hogy a technológia ne teher, hanem a leghatékonyabb munkatársad legyen.',
              "AI is not the future; it's today's competitive edge. We help ensure that technology isn't a burden, but your most efficient team member."
            )}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link to="/contact">
                {t('Ingyenes Konzultáció', 'Free Consultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
