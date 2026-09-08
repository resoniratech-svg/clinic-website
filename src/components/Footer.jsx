import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Mail, Phone, Heart, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-blueDeep text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Heart className="text-brand-red" fill="#D62027" size={26} strokeWidth={0} />
              <p className="font-heading text-lg font-extrabold">We Care Homeopathy</p>
            </div>
            <p className="mt-3 flex items-start gap-2 text-sm text-white/80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              # 6-6-576, Near Mancherial Chowrastha, Near Civil Hospital, Opp. Vasudeva Hospital, Karimnagar, Telangana - 505 001.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
              <Phone size={16} /> +91 70366 70881 / 70366 70887
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <Mail size={16} /> doctor@wecarehomeopathy.com
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-brand-red"><Facebook size={16} /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-brand-red"><Instagram size={16} /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-brand-red"><Youtube size={16} /></a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-brand-red"><Linkedin size={16} /></a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-white/60">Quick Links</p>
            <ul className="space-y-2 text-sm text-white/85">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>

              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/pay-now">Pay Now</Link></li>
            </ul>
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
