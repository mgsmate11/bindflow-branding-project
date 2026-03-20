import HeroSection from '@/components/HeroSection';
import useSEO from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Bindflow – AI Megoldások Vállalatoknak | Automatizáció & Chatbot',
    description: 'A Bindflow AI tanácsadással, chatbotokkal és automatizációval segíti a magyar vállalkozásokat. Intelligens folyamatok, emberi léptékkel. Ingyenes konzultáció!',
    canonical: 'https://bindflow.hu/',
  });
  return <HeroSection />;
};
export default Index;
