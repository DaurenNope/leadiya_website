import { useState, useEffect } from 'react'
import '../styles/nav.css'

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="var(--accent)"/>
    <path d="M8 11L16 6L24 11V19L16 24L8 19V11Z" fill="#000" fillOpacity="0.3"/>
    <path d="M8 11L16 6L24 11V19L16 24L8 19V11Z" stroke="#000" strokeWidth="1.5"/>
    <circle cx="16" cy="15" r="2.5" fill="#000"/>
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
      </div>
    </nav>
  )
}