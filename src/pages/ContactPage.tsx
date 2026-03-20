import ContactSection from '@/components/ContactSection';
import useSEO from '@/hooks/useSEO';

const ContactPage = () => {
  useSEO({
    title: 'AI Megoldások & Automatizáció Magyarországon | Bindflow',
    description: 'Vedd fel a kapcsolatot a Bindflow csapatával! AI tanácsadás, chatbot és automatizáció magyar vállalkozásoknak.',
    canonical: 'https://bindflow.hu/contact',
  });
  return <ContactSection />;
};
export default ContactPage;
