import ServicesSection from '@/components/ServicesSection';
import Seo from '@/components/Seo';

const ServicesPage = () => (
  <>
    <Seo
      title="AI Megoldások & Automatizáció Magyarországon | Bindflow"
      description="AI tanácsadás, egyedi chatbotok, n8n és Zapier automatizáció magyar vállalkozásoknak. Digitális transzformáció lépésről lépésre."
      canonical="https://bindflow.hu/services"
    />
    <ServicesSection />
  </>
);
export default ServicesPage;
