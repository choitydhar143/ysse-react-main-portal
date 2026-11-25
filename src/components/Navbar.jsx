import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  ['Home', '/'], ['About', '/about'], ['Notices', '/notices'],
  ['Programs', '/programs'], ['Learning Catalog', '/learning-catalog'],
];
const navClass = ({ isActive }) => `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-800'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm shadow-slate-900/[0.03] backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <Link to="/" aria-label="YSSE home" onClick={() => setOpen(false)} className="flex shrink-0 items-center">
        <img className="h-12 w-24 object-contain object-left sm:h-14 sm:w-28" src="https://i.ibb.co/N2GZ2Cvk/logo-png-01.png" alt="YSSE official logo" />
      </Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={navClass}>{label}</NavLink>)}
        <NavLink to="/contact" className="ml-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800">Contact us <span aria-hidden="true">↗</span></NavLink>
      </nav>
      <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-2xl text-emerald-950 lg:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? '×' : '☰'}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={navClass} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <NavLink to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-emerald-900 px-4 py-3 text-center text-sm font-bold text-white">Contact us ↗</NavLink>
      </div>
    </nav>}
  </header>;
}
