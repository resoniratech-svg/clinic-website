import { CreditCard, Globe, ShieldCheck } from 'lucide-react'

export default function PayNow() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-red">Pay Now</p>
      <h1 className="mt-2 font-heading text-3xl font-extrabold text-brand-blue">Pay for Your Consultation</h1>
      <p className="mt-2 max-w-xl text-sm text-brand-slate">
        Choose the option that applies to you. Payments are processed securely — no card details are stored on our site.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl2 border border-brand-border bg-white p-7 shadow-card">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blueLight text-brand-blue">
            <CreditCard size={20} />
          </div>
          <h2 className="mt-4 font-heading text-lg font-bold text-brand-blue">Domestic Payments</h2>
          <p className="text-xs text-brand-slate">For PAN India</p>
          <p className="mt-3 text-sm text-brand-slate">
            Pay online with Razorpay using debit cards, credit cards or UPI.
          </p>
          {/* Replace href with your live Razorpay payment link */}
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white hover:bg-brand-blueDeep"
          >
            Pay Now
          </a>
        </div>

        <div className="rounded-xl2 border border-brand-border bg-white p-7 shadow-card">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-redLight text-brand-red">
            <Globe size={20} />
          </div>
          <h2 className="mt-4 font-heading text-lg font-bold text-brand-blue">International Payments</h2>
          <p className="text-xs text-brand-slate">For UK, USA, UAE and other countries</p>
          <p className="mt-3 text-sm text-brand-slate">
            Transparent and secure payment via PayPal, with minimal effort.
          </p>
          {/* Replace href with your live PayPal payment link */}
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white hover:bg-brand-redDeep"
          >
            Pay Now
          </a>
        </div>
      </div>

      <p className="mt-8 flex items-center gap-2 text-xs text-brand-slate">
        <ShieldCheck size={16} className="text-brand-blue" /> All transactions are encrypted and processed by a licensed payment gateway.
      </p>
    </div>
  )
}
