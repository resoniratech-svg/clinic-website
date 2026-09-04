import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'

export default function Blogs() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Blog</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">Health Tips & Articles</h1>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {blogs.map((b) => (
          <Link key={b.slug} to={`/blogs/${b.slug}`} className="rounded-xl2 border border-brand-border bg-white p-6 shadow-card hover:shadow-cardHover">
            <p className="text-xs font-semibold text-brand-red">{b.category}</p>
            <p className="mt-2 font-heading text-lg font-bold text-brand-ink">{b.title}</p>
            <p className="mt-2 text-sm text-brand-slate">{b.excerpt}</p>
            <p className="mt-4 text-xs text-brand-slate/70">{new Date(b.date).toDateString()}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
