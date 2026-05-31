import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const NAV_LINKS = ['about', 'experience', 'education', 'skills', 'projects', 'hobbies'];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = id => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          &lt;AN /&gt;
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map(id => (
            <li key={id}>
              <button
                className={`navbar__link${active === id ? ' navbar__link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {t.nav[id]}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map(id => (
            <button key={id} className="navbar__mobile-link" onClick={() => scrollTo(id)}>
              {t.nav[id]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
