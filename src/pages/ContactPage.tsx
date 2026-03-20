import ContactSection from '@/components/ContactSection';
import useSEO from '@/hooks/useSEO';

const ContactPage = () => {
  useSEO({
    title: 'Kapcsolat – Ingyenes AI Konzultáció | Bindflow',
    description: 'Vedd fel a kapcsolatot a Bindflow csapatával! Ingyenes 30 perces konzultációt kérj, és tudd meg hogyan hozhat az AI azonnal értéket a cégednek.',
    canonical: 'https://bindflow.hu/contact',
  });
  return <ContactSection />;
};
export default ContactPage;
