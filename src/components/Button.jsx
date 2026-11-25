import { Link } from 'react-router-dom';
const styles = { primary: 'bg-[#c6ed78] text-emerald-950 hover:bg-[#b5df65]', dark: 'bg-emerald-900 text-white hover:bg-emerald-800', light: 'bg-white text-emerald-950 hover:bg-emerald-50', outline: 'border border-white/50 text-white hover:bg-white/10' };
export default function Button({ to, children, variant = 'primary', type = 'button', onClick, className = '' }) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold shadow-sm transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 ${styles[variant] || styles.primary} ${className}`;
  return to ? <Link className={cls} to={to}>{children}</Link> : <button className={cls} type={type} onClick={onClick}>{children}</button>;
}
