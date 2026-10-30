import { useState, useEffect } from 'react'
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  const handleLinkClick = () => {
    setForceCloseDropdown(true)
  }

  const toggleMobileSection = (key) =>
    setMobileSection(mobileSection === key ? null : key)

  return (
    <>
      <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
        {/* Utility bar */}
        <div className="hidden md:block bg-brand-blueDeep text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
            <span>We Care. We Heal. We Serve.</span>
            <div className="flex items-center gap-4">
              <a href="tel:+917036670881" className="hover:text-brand-redLight">+91 70366 70881 / 70366 70887</a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6">
          <Link to="/" className="flex items-center md:ml-8">
            <img src="/logo2.png" alt="We Care Homeopathy Logo" className="h-20 md:h-25 w-auto object-contain" />
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
            <a href="tel:+917036670881" className="hidden items-center gap-1.5 text-sm font-semibold text-brand-blue md:flex">
              <Phone size={16} /> +91 70366 70881 / 70366 70887
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
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          {/* Top Bar with Logo & Close Button */}
          <div className="flex items-center justify-between border-b border-brand-border bg-white px-4 py-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <img src="/logo2.png" alt="We Care Homeopathy Logo" className="h-14 w-auto object-contain" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-blueDeep hover:bg-brand-bg transition-colors"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="flex flex-col">
              <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>

              <MobileAccordion
                label="Treatments"
                open={mobileSection === 'treatments'}
                onToggle={() => toggleMobileSection('treatments')}
              >
                <div className="mt-2 space-y-4 rounded-xl bg-brand-bg/80 p-3.5 border border-brand-border/60">
                  {treatmentCategories.map((cat) => (
                    <div key={cat.id} className="last:border-0 border-b border-brand-border/50 pb-3 last:pb-0">
                      <Link
                        to={`/treatments/category/${cat.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-red hover:underline"
                      >
                        {cat.name}
                      </Link>
                      <div className="grid grid-cols-1 gap-1 pl-1">
                        {cat.conditions.map((c) => (
                          <Link
                            key={c.slug}
                            to={`/treatments/${c.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="py-1 text-sm text-brand-slate hover:text-brand-blue transition-colors"
                          >
                            • {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/treatments"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 block text-center rounded-lg bg-white py-2 text-xs font-bold text-brand-blue border border-brand-border"
                  >
                    View All Treatments ➔
                  </Link>
                </div>
              </MobileAccordion>

              <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileLink>
              <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</MobileLink>
              <MobileLink to="/pay-now" onClick={() => setMobileOpen(false)}>Pay Now</MobileLink>
            </div>
          </div>

          {/* Fixed Bottom Action Bar */}
          <div className="border-t border-brand-border bg-white px-5 py-4 shadow-lg space-y-2.5">
            <button
              onClick={() => { setMobileOpen(false); onBookAppointment() }}
              className="w-full rounded-full bg-brand-red py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-brand-redDeep active:scale-[0.99] transition-all"
            >
              Book Appointment
            </button>
            <a
              href="tel:+917036670881"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-blue bg-white py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blueLight/50 transition-colors"
            >
              <Phone size={16} /> +91 70366 70881 / 70366 70887
            </a>
          </div>
        </div>
      )}
    </>
  )
}

function MobileLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center justify-between border-b border-brand-border/70 py-3.5 text-base font-semibold transition-colors ${
          isActive ? 'text-brand-red' : 'text-brand-ink hover:text-brand-blue'
        }`
      }
      end={to === '/'}
    >
      <span>{children}</span>
    </NavLink>
  )
}

function MobileAccordion({ label, open, onToggle, children }) {
  return (
    <div className="border-b border-brand-border/70">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-brand-ink hover:text-brand-blue transition-colors"
      >
        <span>{label}</span>
        <ChevronDown size={18} className={`text-brand-slate transition-transform duration-200 ${open ? 'rotate-180 text-brand-blue' : ''}`} />
      </button>
      {open && <div className="pb-4 pt-1">{children}</div>}
    </div>
  )
}
