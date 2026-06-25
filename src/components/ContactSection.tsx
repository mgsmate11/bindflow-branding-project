import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import BindflowLogo from '@/components/BindflowLogo';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ContactSection = () => {
  const { t, lang } = useLang();
  const { toast } = useToast();

  // A séma a komponensen belül jön létre, így a hibaüzenetek kétnyelvűek.
  // (lang a dep, hogy nyelvváltáskor frissüljenek az üzenetek.)
  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('Kérjük, adja meg a nevét.', 'Please enter your name.')),
        email: z
          .string()
          .min(1, t('Az e-mail cím megadása kötelező.', 'Email address is required.'))
          .email(t('Érvénytelen e-mail cím.', 'Invalid email address.')),
        company: z.string().optional(),
        message: z
          .string()
          .min(10, t('Az üzenet legalább 10 karakter legyen.', 'The message must be at least 10 characters.')),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  type ContactForm = z.infer<typeof schema>;

  const form = useForm<ContactForm>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  const onSubmit = async (values: ContactForm) => {
    try {
      const response = await fetch('https://formspree.io/f/mkoqyggr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      await fetch('https://bindflow.app.n8n.cloud/webhook-test/8d630918-610e-40ae-b087-1943f77a5898', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        toast({
          title: t('Üzenet elküldve!', 'Message sent!'),
          description: t('Hamarosan felvesszük Önnel a kapcsolatot.', 'We will get back to you shortly.'),
        });
        form.reset();
      } else {
        toast({
          title: t('Hiba történt!', 'Something went wrong!'),
          description: t('Kérjük próbáld újra később.', 'Please try again later.'),
        });
      }
    } catch {
      toast({
        title: t('Hiba történt!', 'Something went wrong!'),
        description: t('Kérjük próbáld újra később.', 'Please try again later.'),
      });
    }
  };

  const contacts = [
    {
      name: 'Magos Máté',
      title: t('Ügyvezető igazgató', 'Managing Director'),
      info: [
        { icon: Mail, label: 'magos.mate@icloud.com', href: 'mailto:magos.mate@icloud.com' },
        { icon: Phone, label: '06 20 452 4280', href: 'tel:+36204524280' },
      ],
    },
    {
      name: 'Varga Bence',
      title: t('Ügyvezető igazgató', 'Managing Director'),
      info: [
        { icon: Mail, label: 'vargabence0514@gmail.com', href: 'mailto:vargabence0514@gmail.com' },
        { icon: Phone, label: '06 30 493 6507', href: 'tel:+36304936507' },
      ],
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="py-20 bg-hero-glow relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp}>
            <div className="flex justify-center mb-6">
              <BindflowLogo size="md" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('Lépjen kapcsolatba velünk', 'Get in Touch')}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t(
                'Készen állunk segíteni vállalkozása növekedésében.',
                'We are ready to help your business grow.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact form */}
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold mb-6">
                {t('Írjon nekünk', 'Send us a message')}
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">{t('Neve', 'Your name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('Neve', 'Your name')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">{t('E-mail cím', 'Email address')}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t('E-mail cím', 'Email address')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">
                          {t('Cég neve (opcionális)', 'Company name (optional)')}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('Cég neve (opcionális)', 'Company name (optional)')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">{t('Üzenete', 'Your message')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('Üzenete', 'Your message')} rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full gap-2" disabled={form.formState.isSubmitting}>
                    <Send className="h-4 w-4" />
                    {form.formState.isSubmitting ? t('Küldés…', 'Sending…') : t('Küldés', 'Send')}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact info */}
            <motion.div {...fadeUp} className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">
                {t('Elérhetőségeink', 'Our contacts')}
              </h2>

              {contacts.map((contact) => (
                <div key={contact.name} className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <p className="font-semibold text-lg">{contact.name}</p>
                  <p className="text-muted-foreground text-sm">{contact.title}</p>
                  {contact.info.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </a>
                  ))}
                </div>
              ))}

              {/* Extra info */}
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  {t('Magyarország', 'Hungary')}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  {t('H–P: 9:00 – 18:00', 'Mon–Fri: 9:00 AM – 6:00 PM')}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
