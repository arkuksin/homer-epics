import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// index.css enthält alle Subsets inkl. Kyrillisch (unicode-range)
import '@fontsource-variable/cormorant/index.css';
import '@fontsource-variable/literata/index.css';
import './styles/global.css';
import { I18nProvider } from './i18n';
import App from './App';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
);
