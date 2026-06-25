import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonials';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const TestimonialsSection = () => {
  const { t } = useLang();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
            {t('Vélemények', 'Testimonials')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {t('Amit ügyfeleink mondanak', 'What our clients say')}
          </h2>
        </motion.div>

        <motion.div {...fadeUp}>
          <Carousel opts={{ align: 'start', loop: true }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((item, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                  <div className="h-full p-1">
                    <Card className="h-full border-border bg-card card-hover">
                      <CardContent className="flex h-full flex-col p-8">
                        <Quote className="h-9 w-9 text-accent/30 mb-4" />
                        <blockquote className="text-lg font-semibold text-foreground leading-snug mb-6 flex-1">
                          {t(item.quote.hu, item.quote.en)}
                        </blockquote>
                        <div className="flex items-center justify-between gap-4 border-t border-border pt-5">
                          <span className="text-sm font-medium text-muted-foreground">
                            {t(item.author.hu, item.author.en)}
                          </span>
                          <span className="text-right">
                            <span className="block text-xl font-extrabold text-primary leading-none">
                              {item.stat}
                            </span>
                            <span className="block text-[11px] text-muted-foreground">
                              {t(item.statLabel.hu, item.statLabel.en)}
                            </span>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
