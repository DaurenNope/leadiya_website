import { useEffect, useRef, useState } from 'react'
import '../styles/hero.css'

const leads = [
  { company: 'ТОО "АлматыСтройПлюс"', city: 'Алматы', director: 'Сейткали Н.', phone: '+7 727 123-45-67', tender: '₸84.5M', status: 'hot' },
  { company: 'ТОО "КазМедПрибор"', city: 'Астана', director: 'Ахметов Р.', phone: '+7 7172 123-456', tender: '—', status: '' },
  { company: 'ИП "Джаксыбеков"', city: 'Шымкент', director: 'Джаксыбеков А.', phone: '+7 7252 123-456', tender: '₸12.1M', status: '' },
  { company: 'ТОО "ҚазНефтьГаз"', city: 'Атырау', director: 'Нурланов Е.', phone: '+7 7122 123-456', tender: '₸45.2M', status: 'hot' },
]

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow(Math.floor(Math.random() * 4))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 8
      })
    }
    const card = cardRef.current
    if (card) { card.addEventListener('mousemove', handleMove); return () => card.removeEventListener('mousemove', handleMove) }
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="grid-lines" />
      </div>
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }} />
        ))}
      </div>
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-down">Проект Rahmet Labs</div>
          
          <h1 className="hero-title">
            Находите клиентов,<br/>которые <span className="accent">покупают</span>
          </h1>
          
          <p className="hero-subtitle">
            12,000+ компаний Казахстана с проверенными контактами директоров.
            Сфильтруйте по городу, отрасли, бюджету — и получите готовых к звонку.
          </p>
          
          <div className="hero-actions">
            <a href="#pricing" className="btn-primary btn-bounce">
              Попробовать
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#how" className="btn-secondary btn-pulse">Как это работает</a>
          </div>
          
          <div className="hero-risks">
            <span className="risk-item"><span className="risk-dot" />14 дней бесплатно</span>
            <span className="dot"></span>
            <span className="risk-item"><span className="risk-dot" />Карта не нужна</span>
            <span className="dot"></span>
            <span className="risk-item"><span className="risk-dot" />Отмена в любое время</span>
          </div>
          
          <div className="hero-stats">
            <div className="stat stat-bounce" style={{ animationDelay: '0s' }}><span className="stat-number">12,847</span><label>компаний</label></div>
            <div className="stat stat-bounce" style={{ animationDelay: '0.1s' }}><span className="stat-number">4,230</span><label>с директорами</label></div>
            <div className="stat stat-bounce" style={{ animationDelay: '0.2s' }}><span className="stat-number">847</span><label>с тендерами</label></div>
          </div>
        </div>
        
        <div 
          className="hero-visual" 
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="dashboard"
            style={{ 
              transform: `perspective(1200px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(${isHovered ? 1.03 : 1})`,
              transition: 'transform 0.15s ease, box-shadow 0.3s ease',
              boxShadow: isHovered ? '0 40px 80px rgba(0, 212, 170, 0.2)' : '0 25px 50px rgba(0,0,0,0.4)'
            }}
          >
            <div className="dash-header">
              <div className="dash-dots"><span></span><span></span><span></span></div>
              <span className="dash-title">Leadiya</span>
              <div className="dash-live">
                <span className="live-dot" />
                LIVE
              </div>
            </div>
            
            <div className="dash-body">
              <div className="dash-sidebar">
                <div className="sidebar-title">Фильтры</div>
                <select className="select-animated"><option>Город</option></select>
                <select className="select-animated"><option>ICP 80+</option></select>
                <div className="sidebar-stats">
                  <div className="s-stat"><span>12,847</span><label>Всего</label></div>
                  <div className="s-stat hot"><span>234</span><label>Горячие</label></div>
                </div>
              </div>
              
              <div className="dash-main">
                <div className="dash-table-header">
                  <span>Компания</span><span>Город</span><span>Директор</span><span>Телефон</span><span>Тендер</span>
                </div>
                {leads.map((l, i) => (
                  <div 
                    key={i} 
                    className={`dash-row ${l.status ? 'hot' : ''} ${activeRow === i ? 'active' : ''}`}
                    onMouseEnter={() => setActiveRow(i)}
                    onMouseLeave={() => setActiveRow(null)}
                  >
                    <span>{l.company}</span>
                    <span>{l.city}</span>
                    <span>{l.director}</span>
                    <span className="mono">{l.phone}</span>
                    <span className={l.tender !== '—' ? 'tender' : ''}>{l.tender}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="dashboard-glow" />
          <div className="dashboard-reflection" />
        </div>
      </div>
    </section>
  )
}