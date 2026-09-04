import { useParams, Link } from 'react-router-dom'
import { blogs } from '../data/blogs'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogs.find((b) => b.slug === slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-heading text-xl font-bold text-brand-ink">Article not found</p>
        <Link to="/blogs" className="mt-4 inline-block text-brand-blue">Back to blog</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">{post.category}</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">{post.title}</h1>
      <p className="mt-2 text-xs text-brand-slate/70">{new Date(post.date).toDateString()}</p>
      <p className="mt-6 text-sm leading-relaxed text-brand-slate">{post.excerpt}</p>
      <p className="mt-4 text-sm leading-relaxed text-brand-slate">
        Replace this placeholder with the full article content, written from the patient's perspective —
        what to expect, realistic timelines, and when to see a doctor in person.
      </p>
    </div>
  )
}
