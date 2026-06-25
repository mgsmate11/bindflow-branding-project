import { useLang } from '@/contexts/LangContext';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import BindflowLogo from '@/components/BindflowLogo';

const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navItems = [
    { label: t('Bemutatkozás', 'Intro'), href: '/' },
    { label: t('Szolgáltatások', 'Services'), href: '/services' },
    { label: t('Referenciák', 'References'), href: '/references' },
    { label: t('Blog', 'Blog'), href: '/blog' },
    { label: t('Kapcsolat', 'Contact'), href: '/contact' },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <BindflowLogo size="sm" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              {t(
                'Intelligens folyamatok, emberi léptékkel. AI megoldások, automatizáció és chatbotok magyar vállalkozásoknak.',
                'Intelligent workflows on a human scale. AI solutions, automation and chatbots for Hungarian businesses.'
              )}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              {t('Magyarország', 'Hungary')}
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:justify-self-center">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
              {t('Navigáció', 'Navigation')}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="md:justify-self-end">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground/70">
              {t('Kezdjük el', "Let's start")}
            </h3>
            <p className="mb-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              {t(
                'Foglalj egy ingyenes konzultációt, és nézzük meg együtt, hol hozhat értéket az AI a cégednek.',
                "Book a free consultation and let's explore where AI can add value to your business."
              )}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t('Kapcsolatfelvétel', 'Get in Touch')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} Bindflow. {t('Minden jog fenntartva.', 'All rights reserved.')}</p>
          <div className="flex items-center gap-4">
            <Link to="/adatvedelem" className="transition-colors hover:text-primary">
              {t('Adatkezelési tájékoztató', 'Privacy Policy')}
            </Link>
            <span>{t('AI Megoldások Vállalatoknak', 'AI Solutions for Enterprises')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
