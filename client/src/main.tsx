import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import GlobalContextProvider from './context/index.tsx';
import GlobalErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalContextProvider>
            <GlobalErrorBoundary>
              <App />
            </GlobalErrorBoundary>
          </GlobalContextProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
