import { useEffect, useState } from 'react';
import { images } from '../../data/content';

function Navbar({ navLinks, ctaFull, ctaCompact, languageLabel, lang, onChangeLang }) {
  const [activeTarget, setActiveTarget] = useState(navLinks[0]?.target ?? '');

  useEffect(() => {
    const onScroll = () => {
      const offset = 120;
      let current = navLinks[0]?.target ?? '';

      for (const { target } of navLinks) {
        const section = document.getElementById(target);
        if (!section) continue;
        if (section.offsetTop - offset <= window.scrollY) {
          current = target;
        }
      }

      setActiveTarget(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navLinks]);

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand-wrap" href="#hero" onClick={() => setActiveTarget(navLinks[0]?.target ?? '')}>
          <img src={images.logo} alt="EgyptViet logo" className="navbar__logo" />
          <strong className="navbar__brand">EgyptViet</strong>
        </a>
        <div className="navbar__links">
          {navLinks.map(({ label, target }) => (
            <a
              key={target}
              className={activeTarget === target ? 'is-active' : ''}
              href={`#${target}`}
              onClick={() => setActiveTarget(target)}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="navbar__lang" aria-label={languageLabel} role="group">
          <button
            type="button"
            className={lang === 'vi' ? 'is-active' : ''}
            onClick={() => onChangeLang('vi')}
          >
            VI
          </button>
          <button
            type="button"
            className={lang === 'en' ? 'is-active' : ''}
            onClick={() => onChangeLang('en')}
          >
            EN
          </button>
        </div>
        <a className="btn-primary navbar__cta" href="#contact">
          <span className="navbar__cta-label navbar__cta-label--full">{ctaFull}</span>
          <span className="navbar__cta-label navbar__cta-label--compact">
            <i className="material-symbols-outlined navbar__cta-icon" aria-hidden="true">
              handshake
            </i>
            {ctaCompact}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
