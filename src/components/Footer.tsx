import { useLang } from '@/contexts/LangContext';
import { Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 <span className="font-semibold text-foreground">Bindflow Kft.</span>{' '}
            {t('Minden jog fenntartva.', 'All rights reserved.')}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t('Adatvédelmi irányelvek', 'Privacy Policy')}
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t('Felhasználási feltételek', 'Terms of Service')}
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/bindflow-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary" />
            </a>
            <a
              href="https://facebook.com/bindflow"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
