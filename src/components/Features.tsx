import { useEffect, useRef, useState } from 'react'
import '../styles/features.css'

const ZapIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
const CollectionIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
const MapIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
const ExportIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const FreeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>

const features = [
  { Icon: ZapIcon, title: 'Быстрый сбор', desc: 'Собираем тысячи компаний за часы, а не за недели', color: '#00D4AA' },
  { Icon: CollectionIcon, title: 'Автоматизация', desc: 'Настроили один раз — работает сама', color: '#8B5CF6' },
  { Icon: MapIcon, title: 'Все города РК', desc: 'Охватываем все регионы Казахстана', color: '#F59E0B' },
  { Icon: ExportIcon, title: 'Экспорт данных', desc: 'CSV, Excel или интеграция по API', color: '#EC4899' },
  { Icon: ShieldIcon, title: 'Безопасность', desc: 'Ваши данные хранятся только у вас', color: '#06B6D4' },
  { Icon: FreeIcon, title: 'Бесплатный доступ', desc: 'На время бета-теста полный функционал', color: '#10B981' }
]

const Features = ({ scrollY = 0 }: { scrollY?: number }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true)
      }
    }
  }, [scrollY])

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features-bg" />
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Возможности</span>
          <h2>Всё для работы с лидами</h2>
        </div>
        
        <div className="features-grid">
          {features.map((f, i) => (
            <div 
              key={i} 
              className={`feature-card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="feature-icon" style={{ background: `${f.color}15`, color: f.color }}>
                <f.Icon />
              </div>
              <div className="feature-content">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
              <div className="feature-accent" style={{ background: f.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features