import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen } from '@/test/test-utils';
import ContactSection from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';

describe('ContactSection űrlap-validáció', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('üres küldésnél mezőszintű hibákat mutat, és nem hív fetch-et', async () => {
    const fetchSpy = vi.spyOn(global, 'fetch');
    const user = userEvent.setup();
    renderWithProviders(<ContactSection />);

    await user.click(screen.getByRole('button', { name: /Küldés/i }));

    expect(await screen.findByText('Kérjük, adja meg a nevét.')).toBeInTheDocument();
    expect(screen.getByText('Az e-mail cím megadása kötelező.')).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('érvénytelen e-mailre hibaüzenetet ad', async () => {
    const user = userEvent.setup();
    renderWithProviders(<ContactSection />);

    await user.type(screen.getByPlaceholderText('E-mail cím'), 'nem-email');
    await user.click(screen.getByRole('button', { name: /Küldés/i }));

    expect(await screen.findByText('Érvénytelen e-mail cím.')).toBeInTheDocument();
  });

  const fillAndSubmit = async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <>
        <ContactSection />
        <Toaster />
      </>
    );

    await user.type(screen.getByPlaceholderText('Neve'), 'Teszt Elek');
    await user.type(screen.getByPlaceholderText('E-mail cím'), 'teszt@example.com');
    await user.type(
      screen.getByPlaceholderText('Üzenete'),
      'Ez egy elég hosszú teszt üzenet a validációhoz.'
    );
    await user.click(screen.getByRole('button', { name: /Küldés/i }));
  };

  it('helyes kitöltésnél egyszer, a Formspree-re küld, és sikerüzenetet mutat', async () => {
    const fetchSpy = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(new Response(null, { status: 200 }));

    await fillAndSubmit();

    expect(await screen.findByText('Üzenet elküldve!')).toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith('https://formspree.io/f/mkoqyggr', expect.anything());
  });

  it('hibás szerverválasznál hibaüzenetet mutat', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(new Response(null, { status: 500 }));

    await fillAndSubmit();

    expect(await screen.findByText('Hiba történt!')).toBeInTheDocument();
  });

  it('hálózati hibánál hibaüzenetet mutat', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new TypeError('Failed to fetch'));

    await fillAndSubmit();

    expect(await screen.findByText('Hiba történt!')).toBeInTheDocument();
  });
});
