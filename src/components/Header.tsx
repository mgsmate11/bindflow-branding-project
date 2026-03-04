import { useLang } from '@/contexts/LangContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t('Bemutatkozás', 'Intro'), href: '#hero' },
    { label: t('Szolgáltatások', 'Services'), href: '#services' },
    { label: t('Referenciák', 'References'), href: '#references' },
    { label: t('Kapcsolat', 'Contact'), href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-extrabold tracking-tight text-foreground">
          BIND<span className="text-primary">FLOW</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-1 text-sm font-semibold">
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

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-border bg-background px-4 pb-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 text-sm font-semibold">
            <button
              onClick={() => { setLang('hu'); setMobileOpen(false); }}
              className={lang === 'hu' ? 'text-primary' : 'text-muted-foreground'}
            >
              HU
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => { setLang('en'); setMobileOpen(false); }}
              className={lang === 'en' ? 'text-primary' : 'text-muted-foreground'}
            >
              EN
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
