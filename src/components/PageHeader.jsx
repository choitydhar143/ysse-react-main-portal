export default function PageHeader({ eyebrow, title, description }) {
  return <section className="bg-gradient-to-br from-[#f0f7f1] via-white to-[#f6f8f1] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="mb-4 text-xs font-extrabold uppercase tracking-[.22em] text-emerald-700">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>{description && <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>}</div></section>;
}
