/* eslint-disable react-refresh/only-export-components */
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LangProvider } from '@/contexts/LangContext';

// A valós provider-láncot tükrözi (App.tsx + Layout.tsx), hogy a komponensek
// a környezetükkel együtt tesztelhetők legyenek.
interface ProvidersProps {
  children: ReactNode;
  route?: string;
}

const AllProviders = ({ children, route = '/' }: ProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <MemoryRouter initialEntries={[route]}>
            <LangProvider>{children}</LangProvider>
          </MemoryRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { route?: string }
) => {
  const { route, ...rest } = options ?? {};
  return render(ui, {
    wrapper: ({ children }) => <AllProviders route={route}>{children}</AllProviders>,
    ...rest,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
