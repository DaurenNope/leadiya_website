import '../styles/footer.css'

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#0A0A0B"/>
    <path d="M9 9L16 5L23 9V23L16 27L9 23V9Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" fill="none" stroke-opacity="0.3"/>
    <circle cx="16" cy="16" r="2" fill="white" fill-opacity="0.8"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <Logo />
            <span>Leadiya</span>
          </a>
          <p className="footer-tagline">
            Из AI-агента в полноценную платформу для поиска B2B лидов в Казахстане.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Продукт</h4>
          <a href="#features">Возможности</a>
          <a href="#pricing">Тарифы</a>
          <a href="#integrations">Интеграции</a>
        </div>

        <div className="footer-links-group">
          <h4>Компания</h4>
          <a href="#story">История</a>
          <a href="mailto:hello@leadiya.kz">Контакты</a>
        </div>

        <div className="footer-contact">
          <h4>Связаться</h4>
          <a href="mailto:hello@leadiya.kz" className="footer-email">hello@leadiya.kz</a>
          <div className="footer-social">
            <a href="https://t.me/leadiya_kz" target="_blank" rel="noopener" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <span className="footer-copyright">
          2025 Leadiya. Проект <a href="https://rahmetlabs.com" target="_blank" rel="noopener">Rahmet Labs</a>
        </span>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}