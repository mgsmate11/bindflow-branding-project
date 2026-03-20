import ServicesSection from '@/components/ServicesSection';
import useSEO from '@/hooks/useSEO';

const ServicesPage = () => {
  useSEO({
    title: 'Szolgáltatások – AI Tanácsadás, Chatbot, Automatizáció | Bindflow',
    description: 'Fedezd fel a Bindflow AI szolgáltatásait: stratégiai tanácsadás, egyedi chatbotok, n8n és Zapier automatizáció. Digitális transzformáció lépésről lépésre.',
    canonical: 'https://bindflow.hu/services',
  });
  return <ServicesSection />;
};
export default ServicesPage;
