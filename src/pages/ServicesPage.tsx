import ServicesSection from '@/components/ServicesSection';
import useSEO from '@/hooks/useSEO';

const ServicesPage = () => {
  useSEO({
    title: 'AI Megoldások & Automatizáció Magyarországon | Bindflow',
    description: 'AI tanácsadás, egyedi chatbotok, n8n és Zapier automatizáció magyar vállalkozásoknak. Digitális transzformáció lépésről lépésre.',
    canonical: 'https://bindflow.hu/services',
  });
  return <ServicesSection />;
};
export default ServicesPage;
