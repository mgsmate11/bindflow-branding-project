import { LangProvider } from '@/contexts/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </LangProvider>
  );
};

export default Layout;
