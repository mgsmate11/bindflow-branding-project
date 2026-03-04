import { useLang } from '@/contexts/LangContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="font-semibold text-foreground">BINDFLOW</span>. {t('Minden jog fenntartva.', 'All rights reserved.')}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground">{t('AI-vezérelt megoldások', 'AI-powered solutions')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
