import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}
