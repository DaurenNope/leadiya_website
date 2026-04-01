import '../styles/footer.css'

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="var(--accent)"/>
    <path d="M8 11L16 6L24 11V19L16 24L8 19V11Z" fill="#000" fillOpacity="0.3"/>
    <path d="M8 11L16 6L24 11V19L16 24L8 19V11Z" stroke="#000" strokeWidth="1.5"/>
    <circle cx="16" cy="15" r="2.5" fill="#000"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#" className="footer-logo">
            <Logo />
            <span>Leadiya</span>
          </a>
          <span className="footer-by">
            by <a href="https://rahmetlabs.com" target="_blank" rel="noopener">Rahmet Labs</a>
          </span>
        </div>
        
        <div className="footer-center">
          <a href="mailto:hello@leadiya.kz">hello@leadiya.kz</a>
        </div>
        
        <div className="footer-right">
          <a href="https://t.me/leadiya_kz" target="_blank" rel="noopener">Telegram</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}