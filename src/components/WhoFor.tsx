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

  const roles = [
    {
      title: 'B2B продажи',
      desc: 'Менеджеры и отделы продаж, которые ищут новых клиентов в Казахстане',
      stats: '67% клиентов'
    },
    {
      title: 'Агентства',
      desc: 'Маркетинговые и продающие агентства для клиентов из РК',
      stats: '23% клиентов'
    },
    {
      title: 'Фрилансеры',
      desc: 'Бизнес-консультанты, рекрутеры, b2b продавцы',
      stats: '10% клиентов'
    }
  ]

  return (
    <section className="who-for" id="who" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Для кого</span>
          <h2>Кому подходит платформа</h2>
        </div>
        
        <div className="who-grid">
          {roles.map((role, i) => (
            <div 
              key={i} 
              className={`who-card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="who-percent">{role.stats}</span>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoFor