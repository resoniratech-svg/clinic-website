import { useState } from 'react'
import { X } from 'lucide-react'

export default function AppointmentModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: '' })

  if (!open) return null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — wire this up to your appointment API / CRM later.
    console.log('Appointment request:', form)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', email: '', reason: '' })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/50 p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md rounded-xl2 bg-white shadow-cardHover"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-brand-border px-6 py-4">
          <h3 className="font-heading text-lg font-bold text-brand-blueDeep">Book an Appointment</h3>
          <button onClick={handleClose} aria-label="Close" className="rounded-full p-1 text-brand-slate hover:bg-brand-bg">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <p className="font-heading text-xl font-bold text-brand-blue">Request received</p>
            <p className="mt-2 text-sm text-brand-slate">
              Our team will call you shortly to confirm your slot.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-blueDeep"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
            <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
            <div>
              <label className="mb-1 block text-sm font-medium text-brand-ink">Reason for visit</label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
                placeholder="e.g. Skin allergy, migraine, thyroid..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white hover:bg-brand-redDeep"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-brand-ink">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-brand-border px-3 py-2 text-sm outline-none focus:border-brand-blue"
      />
    </div>
  )
}
