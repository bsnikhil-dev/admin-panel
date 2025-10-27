import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import GlobalContextProvider from './context/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
