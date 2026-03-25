import { useEffect, useState } from 'react';
import { images, navLinks } from '../../data/content';

function Navbar() {
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
  }, []);

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
        <a className="btn-primary" href="#contact">
          Partner With Us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
