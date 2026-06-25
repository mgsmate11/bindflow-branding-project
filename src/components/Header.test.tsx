import { describe, it, expect } from 'vitest';
import { renderWithProviders, screen } from '@/test/test-utils';
import Header from '@/components/Header';

describe('Header navigáció', () => {
  it('megjeleníti a fő navigációs linkeket, köztük a Blogot', () => {
    renderWithProviders(<Header />);

    // Desktop + mobil nav miatt több találat lehet — mindegyik linknek lennie kell.
    expect(screen.getAllByRole('link', { name: 'Blog' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Kapcsolat' }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Szolgáltatások' }).length).toBeGreaterThan(0);
  });

  it('a Blog link a /blog útvonalra mutat', () => {
    renderWithProviders(<Header />);
    const blogLinks = screen.getAllByRole('link', { name: 'Blog' });
    blogLinks.forEach((link) => expect(link).toHaveAttribute('href', '/blog'));
  });
});
