import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Notices', '/notices'],
  ['Programs', '/programs'],
  ['Contact', '/contact'],
  ['Learning Catalog', '/learning-catalog'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="YSSE home" onClick={() => setOpen(false)}>
          <img className="ysse-logo" src="https://i.ibb.co/N2GZ2Cvk/logo-png-01.png" alt="YSSE — Stage of Innovation" />
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
