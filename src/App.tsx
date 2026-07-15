import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useI18n } from './i18n';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { EpicPage } from './pages/EpicPage';
import { JourneyPage } from './pages/JourneyPage';
import { CharactersPage } from './pages/CharactersPage';
import { PlacesPage } from './pages/PlacesPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { SourcesPage } from './pages/SourcesPage';
import { NotFoundPage } from './pages/NotFoundPage';

/** Setzt das Werk-Farbthema abhängig von der Route. */
function useRouteTheme() {
  const { pathname } = useLocation();
  useEffect(() => {
    const body = document.body;
    body.classList.remove('theme-iliad', 'theme-odyssey');
    if (pathname.startsWith('/iliad')) body.classList.add('theme-iliad');
    else if (pathname.startsWith('/odyssey')) body.classList.add('theme-odyssey');
  }, [pathname]);
}

export default function App() {
  const { content, ui } = useI18n();
  useRouteTheme();

  if (!content) {
    return (
      <div className="content-loading" role="status">
        {ui.actions.loading}
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iliad" element={<EpicPage work="iliad" />} />
        <Route path="/iliad/journey" element={<JourneyPage work="iliad" />} />
        <Route path="/odyssey" element={<EpicPage work="odyssey" />} />
        <Route path="/odyssey/journey" element={<JourneyPage work="odyssey" />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/sources" element={<SourcesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
