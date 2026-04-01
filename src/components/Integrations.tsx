import { useEffect, useRef, useState } from 'react'
import '../styles/integrations.css'

const integrations = [
  { name: 'Google Sheets', desc: 'Экспорт в таблицы' },
  { name: 'CSV/Excel', desc: 'Скачать файл' },
  { name: 'amoCRM', desc: 'Автоматический импорт' },
  { name: 'Bitrix24', desc: 'Синхронизация контактов' },
  { name: 'Zapier', desc: 'Автоматизация процессов' },
  { name: 'API', desc: 'Доступ для разработчиков' },
]

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
          <h2>Куда экспортировать данные</h2>
        </div>
        
        <div className="int-grid">
          {integrations.map((int, i) => (
            <div 
              key={i} 
              className={`int-card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="int-icon">
                {i === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>}
                {i === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>}
                {i === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>}
                {i === 3 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>}
                {i === 4 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                {i === 5 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>}
              </div>
              <h3>{int.name}</h3>
              <p>{int.desc}</p>
            </div>
          ))}
        </div>
        
        <p className={`int-note ${visible ? 'visible' : ''}`}>Нужна интеграция с другой системой? Напишите — добавим.</p>
      </div>
    </section>
  )
}

export default Integrations