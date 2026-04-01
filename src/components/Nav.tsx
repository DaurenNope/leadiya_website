import { useState, useEffect } from 'react'
import '../styles/nav.css'

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#0A0A0B"/>
    <path d="M9 12L16 8L23 12V20L16 24L9 20V12Z" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" fill="none"/>
    <circle cx="16" cy="16" r="2" fill="var(--accent)"/>
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <Logo />
          <span>Leadiya</span>
        </a>
        
        <div className="nav-links">
          <a href="#features" className="nav-link">Возможности</a>
          <a href="#how" className="nav-link">Как это работает</a>
          <a href="#pricing" className="nav-link">Тарифы</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        
        <div className="nav-actions">
          <a href="mailto:hello@leadiya.kz" className="nav-login">Войти</a>
          <a href="#pricing" className="nav-cta">Попробовать</a>
        </div>

        <button 
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <a href="#features" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Возможности</a>
        <a href="#how" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Как это работает</a>
        <a href="#pricing" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Тарифы</a>
        <a href="#faq" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>FAQ</a>
        <div className="nav-mobile-actions">
          <a href="mailto:hello@leadiya.kz" className="nav-mobile-login">Войти</a>
          <a href="#pricing" className="nav-mobile-cta">Попробовать</a>
        </div>
      </div>
    </nav>
  )
}