import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react'
import { treatmentCategories } from '../data/treatments'

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${
    isActive ? 'text-brand-red' : 'text-brand-ink hover:text-brand-blue'
  }`

export default function Header({ onBookAppointment }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [forceCloseDropdown, setForceCloseDropdown] = useState(false)

  const handleLinkClick = () => {
    setForceCloseDropdown(true)
  }

  const toggleMobileSection = (key) =>
    setMobileSection(mobileSection === key ? null : key)

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
      {/* Utility bar */}
      <div className="hidden md:block bg-brand-blueDeep text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span>We Care. We Heal. We Serve.</span>
          <div className="flex items-center gap-4">
            <a href="tel:+917337557851" className="hover:text-brand-redLight">India: +91 xxxxx xxxxx</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6">
        <Link to="/" className="flex items-center md:ml-8">
          <img src="/logo2.png" alt="We Care Homeopathy Logo" className="h-14 md:h-20 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>

          <div className="group" onMouseEnter={() => setForceCloseDropdown(false)}>
            <button className="flex items-center gap-1 text-sm font-semibold text-brand-ink hover:text-brand-blue py-6 -my-6">
              Treatments <ChevronDown size={15} />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-[950px] xl:w-[1100px] -translate-x-1/2 pt-4 -mt-4 transition-all ${forceCloseDropdown ? 'invisible opacity-0' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'}`}>
              <div className="rounded-xl2 border border-brand-border bg-white p-6 shadow-cardHover grid grid-cols-5 gap-6">
                {treatmentCategories.map((cat) => (
                  <div key={cat.id}>
                    <Link onClick={handleLinkClick} to={`/treatments/category/${cat.slug}`} className="mb-4 block text-base font-bold text-brand-red hover:underline">
                      {cat.name}
                    </Link>
                    <ul className="flex flex-col">
                      {cat.conditions.map((c) => (
                        <li key={c.slug} className="border-b border-brand-border/60 last:border-0">
                          <Link onClick={handleLinkClick} to={`/treatments/${c.slug}`} className="block py-2 text-sm text-brand-slate hover:text-brand-blue">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {cat.conditions.length >= 10 && (
                      <Link onClick={handleLinkClick} to={`/treatments`} className="mt-3 inline-block text-sm font-bold text-brand-ink hover:text-brand-blue">
                        View All ➔
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>



          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+917337557851" className="hidden items-center gap-1.5 text-sm font-semibold text-brand-blue md:flex">
            <Phone size={16} /> +91 xxxxx xxxxx
          </a>
          <button
            onClick={onBookAppointment}
            className="hidden rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-redDeep md:block"
          >
            Book Appointment
          </button>
          <Link
            to="/pay-now"
            className="hidden rounded-full border-2 border-brand-blue px-5 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blueLight md:block"
          >
            Pay Now
          </Link>
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={26} className="text-brand-blueDeep" />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-brand-border px-4 py-3">
            <p className="font-heading text-lg font-bold text-brand-blue">Menu</p>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X size={26} className="text-brand-blueDeep" />
            </button>
          </div>
          <div className="max-h-[calc(100vh-58px)] overflow-y-auto px-4 py-4">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>

            <MobileAccordion
              label="Treatments"
              open={mobileSection === 'treatments'}
              onToggle={() => toggleMobileSection('treatments')}
            >
              {treatmentCategories.map((cat) => (
                <div key={cat.id} className="mb-3">
                  <p className="text-xs font-bold uppercase text-brand-red">{cat.name}</p>
                  <div className="mt-1 flex flex-col gap-1.5 pl-2">
                    {cat.conditions.map((c) => (
                      <Link key={c.slug} to={`/treatments/${c.slug}`} onClick={() => setMobileOpen(false)} className="text-sm text-brand-slate">
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </MobileAccordion>



            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileLink>
            <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</MobileLink>
            <MobileLink to="/pay-now" onClick={() => setMobileOpen(false)}>Pay Now</MobileLink>

            <button
              onClick={() => { setMobileOpen(false); onBookAppointment() }}
              className="mt-4 w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
            >
              Book Appointment
            </button>
            <a href="tel:+917337557851" className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue">
              <Phone size={16} /> +91 xxxxx xxxxx
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="block border-b border-brand-border py-3 text-sm font-semibold text-brand-ink">
      {children}
    </Link>
  )
}

function MobileAccordion({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-brand-border">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-3 text-sm font-semibold text-brand-ink">
        {label}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  )
}
