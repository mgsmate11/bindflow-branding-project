import { describe, it, expect, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { LangProvider, useLang } from '@/contexts/LangContext';

const Probe = () => {
  const { t, setLang } = useLang();
  return (
    <div>
      <span data-testid="text">{t('Magyar', 'English')}</span>
      <button onClick={() => setLang('en')}>to-en</button>
      <button onClick={() => setLang('hu')}>to-hu</button>
    </div>
  );
};

describe('LangContext', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = '';
  });

  it('alapból magyarul renderel', () => {
    render(
      <LangProvider>
        <Probe />
      </LangProvider>
    );
    expect(screen.getByTestId('text')).toHaveTextContent('Magyar');
  });

  it('nyelvváltáskor frissül a szöveg, a localStorage és a <html lang>', async () => {
    const user = userEvent.setup();
    render(
      <LangProvider>
        <Probe />
      </LangProvider>
    );

    await user.click(screen.getByText('to-en'));

    expect(screen.getByTestId('text')).toHaveTextContent('English');
    expect(window.localStorage.getItem('bindflow-lang')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });
});
