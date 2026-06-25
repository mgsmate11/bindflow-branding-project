import { useLang } from '@/contexts/LangContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BindflowLogo from '@/components/BindflowLogo';
import ScrollProgress from '@/components/ScrollProgress';

const Header = () => {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: t('Bemutatkozás', 'Intro'), href: '/' },
    { label: t('Szolgáltatások', 'Services'), href: '/services' },
    { label: t('Referenciák', 'References'), href: '/references' },
    { label: t('Blog', 'Blog'), href: '/blog' },
    { label: t('Kapcsolat', 'Contact'), href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? t('Világos mód', 'Light mode') : t('Sötét mód', 'Dark mode')}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-primary hover:bg-foreground/5 transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/">
          <BindflowLogo size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <button
              onClick={() => setLang('hu')}
              className={`px-2 py-1 rounded transition-colors ${lang === 'hu' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              HU
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
          </div>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            className="relative flex items-center justify-center w-9 h-9 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('Menü bezárása', 'Close menu') : t('Menü megnyitása', 'Open menu')}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-sm font-medium border-l-2 pl-3 transition-colors ${
                    isActive(item.href)
                      ? 'text-primary border-primary'
                      : 'text-muted-foreground border-transparent hover:text-primary hover:border-primary/40'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-2 border-t border-border text-sm font-semibold">
                <button onClick={() => { setLang('hu'); setMobileOpen(false); }} className={lang === 'hu' ? 'text-primary' : 'text-muted-foreground'}>HU</button>
                <span className="text-border">|</span>
                <button onClick={() => { setLang('en'); setMobileOpen(false); }} className={lang === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollProgress />
    </motion.header>
  );
};

export default Header;
