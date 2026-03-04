import { LangProvider } from '@/contexts/LangContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ReferencesSection from '@/components/ReferencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ReferencesSection />
        <ContactSection />
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Index;
