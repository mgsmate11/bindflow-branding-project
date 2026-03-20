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

      await fetch('https://bindflow.app.n8n.cloud/webhook-test/8d630918-610e-40ae-b087-1943f77a5898', {
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
        <div className="container
