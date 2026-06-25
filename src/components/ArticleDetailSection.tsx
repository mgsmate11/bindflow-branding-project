import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Article } from '@/data/articles';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ArticleDetailSection = ({ article }: { article: Article }) => {
  const { t, lang } = useLang();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'hu' ? 'hu-HU' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <>
      {/* Header */}
      <section className="py-16 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.div {...fadeUp}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('Vissza a bloghoz', 'Back to blog')}
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag.en}
                  className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground/70"
                >
                  {t(tag.hu, tag.en)}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
              <span className="text-gradient-hero">{t(article.title.hu, article.title.en)}</span>
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-accent" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" />
                {t(`${article.readMinutes} perc olvasás`, `${article.readMinutes} min read`)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="space-y-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {t(paragraph.hu, paragraph.en)}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            {...fadeUp}
            className="text-center p-10 rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/5 to-transparent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-bold text-foreground mb-4 relative z-10">
              {t('Beszéljük át a te folyamataidat', "Let's talk about your processes")}
            </h2>
            <p className="text-muted-foreground mb-8 relative z-10">
              {t(
                'Foglalj egy ingyenes konzultációt, és megnézzük, hol hozhat az AI azonnal értéket a cégednek.',
                'Book a free consultation and we will explore where AI can add immediate value to your business.'
              )}
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full relative z-10"
              asChild
            >
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

export default ArticleDetailSection;
