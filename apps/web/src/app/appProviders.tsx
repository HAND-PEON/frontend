'use client';

import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function AppProviders({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}
