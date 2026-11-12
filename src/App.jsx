import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import DirectorWord from './pages/DirectorWord.jsx';
import Organisation from './pages/Organisation.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import { ROUTES } from './routes.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.directorWord} element={<DirectorWord />} />
        <Route path={ROUTES.organisation} element={<Organisation />} />
        {/* Every page not yet migrated points to the legacy site */}
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
