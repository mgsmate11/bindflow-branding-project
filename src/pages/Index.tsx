import HeroSection from '@/components/HeroSection';
import useSEO from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'AI Megoldások & Automatizáció Magyarországon | Bindflow',
    description: 'A Bindflow AI tanácsadással, chatbotokkal és automatizációval segíti a magyar vállalkozásokat. Intelligens folyamatok, emberi léptékkel.',
    canonical: 'https://bindflow.hu/',
  });
  return <HeroSection />;
};
export default Index;
