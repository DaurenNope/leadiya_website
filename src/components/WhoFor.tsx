import { useEffect, useRef, useState } from 'react'
import '../styles/who-for.css'

const WhoFor = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="who-for" id="who" ref={sectionRef}>
      <div className="who-for-bg" />
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Для кого</span>
          <h2>Кому подходит Leadiya</h2>
        </div>
        
        <div className="who-timeline">
          <div className="who-line" />
          {[
            { title: 'B2B продажи', desc: 'Отделы продаж и менеджеры, которым нужны проверенные лиды в Казахстане', pct: '67%' },
            { title: 'Агентства', desc: 'Маркетинговые и sales-агентства с клиентами из РК', pct: '23%' },
            { title: 'Фрилансеры', desc: 'Бизнес-консультанты, рекрутеры и B2B продавцы', pct: '10%' }
          ].map((role, i) => (
            <div 
              key={i} 
              className={`who-item ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="who-item-dot">
                <span className="who-item-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="who-item-content">
                <span className="who-item-pct">{role.pct}</span>
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoFor