import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LangProvider } from '@/contexts/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import ScrollToTop from '@/components/ScrollToTop';

// A teljes app-héj és a globális providerek. A prerender (vite-react-ssg) a routert
// kívülről hozza létre, ezért a providerek a route-fán belül, itt élnek.
const Layout = () => {
  // Per-mount QueryClient — az SSG minden oldalt külön renderel, így nem szivárog
  // át állapot az oldalak között.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <LangProvider>
            <Toaster />
            <Sonner />
            <div className="min-h-screen bg-background flex flex-col">
              <ScrollToTop />
              <Header />
              <main className="flex-1 pt-16">
                <Outlet />
              </main>
              <Footer />
              <FloatingContactButton />
            </div>
          </LangProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
