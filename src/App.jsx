import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import FloatingActions from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import Treatments from './pages/Treatments'
import TreatmentDetail from './pages/TreatmentDetail'
import Clinics from './pages/Clinics'
import ClinicDetail from './pages/ClinicDetail'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import PayNow from './pages/PayNow'

export default function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const openAppointment = () => setAppointmentOpen(true)

  return (
    <div className="flex min-h-screen flex-col font-body text-brand-ink">
      <ScrollToTop />
      <Header onBookAppointment={openAppointment} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onBookAppointment={openAppointment} />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/category/:categorySlug" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail onBookAppointment={openAppointment} />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/clinics/:slug" element={<ClinicDetail onBookAppointment={openAppointment} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay-now" element={<PayNow />} />
        </Routes>
      </main>

      <Footer />
      <FloatingActions />
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  )
}
