import { useEffect, useRef, useState } from 'react'
import '../styles/integrations.css'

const integrations = [
  { name: 'amoCRM', desc: 'Автоматический импорт лидов', icon: 'crm' },
  { name: 'Bitrix24', desc: 'Синхронизация контактов', icon: 'bitrix' },
  { name: 'Google Sheets', desc: 'Экспорт в таблицы', icon: 'sheets' },
  { name: 'CSV/Excel', desc: 'Скачать файл', icon: 'file' },
  { name: 'Zapier', desc: 'Автоматизация процессов', icon: 'zap' },
  { name: 'API', desc: 'Доступ для разработчиков', icon: 'api' },
]

const icons: Record<string, JSX.Element> = {
  crm: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  bitrix: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  sheets: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>,
  file: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>,
  zap: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  api: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
}

const Integrations = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="integrations" id="integrations" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Интеграции</span>
          <h2>Подключайте свои инструменты</h2>
        </div>
        
        <div className="int-showcase">
          <div className={`int-main ${visible ? 'visible' : ''}`}>
            <div className="int-visual">
              <div className="int-visual-header">
                <div className="int-dots"><span></span><span></span><span></span></div>
                <span>Leadiya → amoCRM</span>
              </div>
              <div className="int-visual-body">
                <div className="int-connection">
                  <div className="int-connector from">
                    <span className="int-label">Лид из Leadiya</span>
                    <div className="int-data">
                      <span>ТОО "АлматыСтройПлюс"</span>
                      <span>+7 727 123-45-67</span>
                    </div>
                  </div>
                  <div className="int-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                  <div className="int-connector to">
                    <span className="int-label">Сделка в amoCRM</span>
                    <div className="int-data success">
                      <span>Новый лид создан</span>
                      <span className="check">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="int-grid">
            {integrations.map((int, i) => (
              <div 
                key={i} 
                className={`int-card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="int-icon">{icons[int.icon]}</div>
                <h3>{int.name}</h3>
                <p>{int.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <p className={`int-note ${visible ? 'visible' : ''}`}>Нужна интеграция с другой системой? Напишите — добавим за 24 часа.</p>
      </div>
    </section>
  )
}

export default Integrations