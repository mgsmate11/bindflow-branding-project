import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import BindflowLogo from '@/components/BindflowLogo';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ContactSection = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mkoqyggr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: t('Üzenet elküldve!', 'Message sent!'),
          description: t('Hamarosan felvesszük Önnel a kapcsolatot.', 'We will get back to you shortly.'),
        });
        setFormData({ name: '', email: '', company: '', message: '' });
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('Kapcsolat', 'Contact')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
              {t('Készen állsz a Bindflow-élményre?', 'Ready for the Bindflow experience?')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Vedd fel velünk a kapcsolatot és kezdjük el közösen formálni a céged AI-jövőjét.',
                "Get in touch and let's start shaping your company's AI future together."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Left - Info */}
            <motion.div {...fadeUp} className="space-y-6">
              {contacts.map((person, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">{person.title}</p>
                  </div>
                  <div className="space-y-3">
                    {person.info.map((item, j) => (
                      <a
                        key={j}
                        href={item.href}
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Office info */}
              <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t('Iroda', 'Office')}</div>
                    <div className="text-xs text-muted-foreground">2600 Vác, Althann Mihály Frigyes u. 9.</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t('Elérhetőség', 'Availability')}</div>
                    <div className="text-xs text-muted-foreground">{t('H-P: 9:00 - 17:00', 'Mon-Fri: 9:00 AM - 5:00 PM')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t('Küldj üzenetet', 'Send a message')}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {t('Töltsd ki az alábbi űrlapot és 24 órán belül válaszolunk.', 'Fill in the form below and we will respond within 24 hours.')}
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder={t('Név', 'Name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent rounded-xl h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-accent rounded-xl h-12"
                    />
                  </div>
                  <Input
                    placeholder={t('Cégnév (opcionális)', 'Company name (optional)')}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background border-border focus:border-accent rounded-xl h-12"
                  />
                  <Textarea
                    placeholder={t('Üzenet', 'Message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-accent rounded-xl resize-none"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
                  >
                    {t('Küldés', 'Send')}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
              {t('GYIK', 'FAQ')}
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              {t('Gyakran ismételt kérdések', 'Frequently asked questions')}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: t('Mennyibe kerülnek a szolgáltatásaitok?', 'How much do your services cost?'),
                a: t('Minden projektet egyedileg árazunk az igények alapján. Az ingyenes konzultáción felmérjük a szükségleteidet és ajánlatot adunk.', 'Every project is individually priced based on needs. During the free consultation, we assess your requirements and provide a quote.'),
              },
              {
                q: t('Mennyi időbe telik egy projekt megvalósítása?', 'How long does project implementation take?'),
                a: t('Egy egyszerűbb automatizáció 1-2 hét, egy komplex AI asszisztens 4-8 hét. A stratégiai tanácsadás általában 2-4 hetet vesz igénybe.', 'A simpler automation takes 1-2 weeks, a complex AI assistant 4-8 weeks. Strategic consulting typically takes 2-4 weeks.'),
              },
              {
                q: t('Kell hozzá technikai előismeret?', 'Is technical knowledge required?'),
                a: t('Egyáltalán nem! A célunk éppen az, hogy a technológiát érthetővé és elérhetővé tegyük mindenki számára.', "Not at all! Our goal is precisely to make technology understandable and accessible to everyone."),
              },
              {
                q: t('Milyen iparágakban dolgoztok?', 'What industries do you work in?'),
                a: t('Pénzügy, e-commerce, logisztika, egészségügy, oktatás és sok más iparágban szereztünk tapasztalatot.', "We have experience in finance, e-commerce, logistics, healthcare, education, and many other industries."),
              },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card card-hover"
              >
                <h3 className="text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
