import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, waitFor } from '@/test/test-utils';
import ContactSection from '@/components/ContactSection';

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

  it('helyes kitöltésnél elküldi az adatokat (fetch meghívódik)', async () => {
    const fetchSpy = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(new Response(null, { status: 200 }));
    const user = userEvent.setup();
    renderWithProviders(<ContactSection />);

    await user.type(screen.getByPlaceholderText('Neve'), 'Teszt Elek');
    await user.type(screen.getByPlaceholderText('E-mail cím'), 'teszt@example.com');
    await user.type(
      screen.getByPlaceholderText('Üzenete'),
      'Ez egy elég hosszú teszt üzenet a validációhoz.'
    );
    await user.click(screen.getByRole('button', { name: /Küldés/i }));

    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());
    // Formspree + n8n → két hívás.
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});
