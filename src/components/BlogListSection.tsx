import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import { articles } from '@/data/articles';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const BlogListSection = () => {
  const { t, lang } = useLang();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === 'hu' ? 'hu-HU' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <>
      {/* Hero banner */}
      <section className="py-20 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Tudásbázis', 'Knowledge base')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              {t('Blog & gyakorlati útmutatók', 'Blog & practical guides')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Érthetően az AI-ról, automatizációról és chatbotokról — magyar vállalkozásoknak, hype nélkül.',
                'AI, automation and chatbots explained clearly — for Hungarian businesses, without the hype.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group flex flex-col p-7 rounded-2xl border border-border bg-card card-hover hover:border-accent/40"
              >
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
                <h2 className="text-xl font-bold text-foreground mb-3 leading-snug">
                  {t(article.title.hu, article.title.en)}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {t(article.excerpt.hu, article.excerpt.en)}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-accent" />
                    {formatDate(article.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {t(`${article.readMinutes} perc olvasás`, `${article.readMinutes} min read`)}
                  </span>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:gap-2.5"
                >
                  {t('Tovább olvasom', 'Read more')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListSection;
