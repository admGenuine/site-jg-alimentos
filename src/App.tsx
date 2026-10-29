import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollManager from './components/ScrollManager'
import LandingPage from './pages/LandingPage'
import CatalogPage from './pages/CatalogPage'
import SobrePage from './pages/SobrePage'
import NotFoundPage from './pages/NotFoundPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </MotionConfig>
  )
}
