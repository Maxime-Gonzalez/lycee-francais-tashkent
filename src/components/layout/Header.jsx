import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo.jsx';
import TricolorBar from '../ui/TricolorBar.jsx';
import SocialLinks from './SocialLinks.jsx';
import { NAVIGATION } from '../../data/navigation.js';
import { ROUTES } from '../../routes.js';
import './Header.css';

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  // Close menus on navigation or Escape
  useEffect(() => { setMenuOpen(false); setOpenSub(null); }, [pathname]);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setOpenSub(null); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="header">
      <TricolorBar />
      <div className="header__top">
        <div className="container header__top-inner">
          <SocialLinks className="header__social" />
          <Link to={ROUTES.enrolment} className="header__cta">S’inscrire</Link>
        </div>
      </div>

      <div className="container header__main">
        <Logo />
        <button
          className="header__burger"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="header__burger-icon" aria-hidden="true" />
        </button>

        <nav id="main-nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigation principale">
          <ul className="nav__list">
            {NAVIGATION.map((item) => {
              const hasSub = Boolean(item.children);
              const open = openSub === item.label;
              return (
                <li key={item.label} className={`nav__item ${open ? 'is-open' : ''}`}>
                  <div className="nav__row">
                    <NavLink to={item.to} className="nav__link">{item.label}</NavLink>
                    {hasSub && (
                      <button
                        className="nav__toggle"
                        aria-expanded={open}
                        aria-label={`Sous-menu ${item.label}`}
                        onClick={() => setOpenSub(open ? null : item.label)}
                      />
                    )}
                  </div>
                  {hasSub && (
                    <ul className="nav__sub">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink to={child.to} className="nav__sublink">{child.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
