import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone, Heart } from 'lucide-react'
import { clinicRegions } from '../data/clinics'

export default function Footer() {
  return (
    <footer className="bg-brand-blueDeep text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="text-brand-red" fill="#D62027" size={26} strokeWidth={0} />
              <p className="font-heading text-lg font-extrabold">We Care Homeopathy</p>
            </div>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              No. 69-1, 2nd Floor, Park View Enclave, Road No. 1, Jubilee Hills, Near TV5, Hyderabad, Telangana 500033.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <Phone size={16} /> +91 xxxxx xxxxx
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <Mail size={16} /> doctor@wecarehomeopathy.com
            </p>
            <div className="mt-4 flex gap-3">
              <Facebook size={18} /> <Instagram size={18} /> <Youtube size={18} /> <Linkedin size={18} />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/85">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/clinics">Clinics</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/pay-now">Pay Now</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">Our Clinics</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {clinicRegions.map((r) => (
                <div key={r.region}>
                  <p className="text-xs font-semibold text-brand-redLight/90">{r.region}</p>
                  <ul className="mt-1.5 space-y-1 text-xs text-white/75">
                    {r.branches.slice(0, 4).map((b) => (
                      <li key={b.slug}><Link to={`/clinics/${b.slug}`}>{b.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} We Care Homeopathy. Results may vary from patient to patient.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
