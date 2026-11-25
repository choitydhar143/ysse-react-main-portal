import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="bg-[#103a33] text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
      <div><Link to="/" aria-label="YSSE home" className="inline-flex"><img src="https://i.ibb.co/N2GZ2Cvk/logo-png-01.png" alt="YSSE official logo" className="h-16 w-32 object-contain object-left brightness-0 invert" /></Link><p className="mt-5 max-w-sm text-sm leading-7 text-emerald-100/75">A student-built portal concept for exploring youth learning, leadership and social innovation.</p></div>
      <div><h2 className="mb-4 text-sm font-extrabold uppercase tracking-[.16em] text-emerald-200">Explore</h2><div className="flex flex-col gap-3 text-sm text-emerald-50/80"><Link className="hover:text-white" to="/about">About YSSE</Link><Link className="hover:text-white" to="/programs">Programs</Link><Link className="hover:text-white" to="/notices">Notices</Link><Link className="hover:text-white" to="/learning-catalog">Learning Catalog</Link></div></div>
      <div><h2 className="mb-4 text-sm font-extrabold uppercase tracking-[.16em] text-emerald-200">Connect</h2><div className="flex flex-col gap-3 text-sm text-emerald-50/80"><Link className="hover:text-white" to="/contact">Contact / Inquiry</Link><a className="hover:text-white" href="https://ysseglobal.org/" target="_blank" rel="noreferrer">Official YSSE website ↗</a><span>Social media links can be added from verified official profiles.</span></div></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-emerald-100/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><span>© {new Date().getFullYear()} YSSE Main Portal — student demonstration project.</span><span>Illustrative programme and notice content is labelled accordingly.</span></div></div>
  </footer>;
}
