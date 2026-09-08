import { useState } from 'react'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form:', form)
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Contact Us</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">Get in Touch</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <div className="space-y-4 rounded-xl2 border border-brand-border bg-white p-6 shadow-card">
            <p className="flex items-start gap-3 text-sm text-brand-slate">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" />
              # 6-6-576, Near Mancherial Chowrastha, Near Civil Hospital, Opp. Vasudeva Hospital, Karimnagar, Telangana - 505 001.
            </p>
            <p className="flex items-center gap-3 text-sm text-brand-slate">
              <Phone size={18} className="text-brand-blue" /> +91 70366 70881 / 70366 70887
            </p>
            <p className="flex items-center gap-3 text-sm text-brand-slate">
              <Mail size={18} className="text-brand-blue" /> doctor@wecarehomeopathy.com
            </p>
          </div>
          <div className="mt-6 h-64 rounded-xl2 border border-brand-border bg-brand-bg flex items-center justify-center text-sm text-brand-slate">
            Map embed goes here
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-xl2 border border-brand-border bg-white p-8 text-center shadow-card">
              <p className="font-heading text-lg font-bold text-brand-blue">Message sent</p>
              <p className="mt-2 text-sm text-brand-slate">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl2 border border-brand-border bg-white p-6 shadow-card">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
              <Field label="Email Address" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <div>
                <label className="mb-1 block text-sm font-medium text-brand-ink">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
                />
              </div>
              <button type="submit" className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-redDeep">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, required }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-brand-ink">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
      />
    </div>
  )
}
