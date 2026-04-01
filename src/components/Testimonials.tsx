import { useEffect, useRef, useState } from 'react'
import '../styles/testimonials.css'

const testimonials = [
  {
    quote: "Раньше искали контакты вручную — неделя уходила на 50 компаний. Теперь за 15 минут получаем 200+ готовых лидов с телефонами директоров.",
    author: "Азамат К.",
    role: "Руководитель отдела продаж",
    company: "TechHouse Kazakhstan"
  },
  {
    quote: "Интеграция с amoCRM сэкономила нам 3 часа каждый день. Контакты падают автоматически, менеджеры сразу звонят.",
    author: "Динара С.",
    role: "Директор",
    company: "Digital Leads Agency"
  },
  {
    quote: "База обновляется сама. Проверяем тендеры — видим, кто сейчас закупается. Это реально работает.",
    author: "Ерлан М.",
    role: "B2B менеджер",
    company: "НефтеГазСнаб"
  }
]

const stats = [
  { value: "2,400+", label: "компаний нашли клиентов" },
  { value: "18,000+", label: "лидов передано за месяц" },
  { value: "94%", label: "контактов с телефонами" }
]

const Testimonials = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="testimonials" id="reviews" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Отзывы</span>
          <h2>Кому уже помогло</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`testimonial-card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <p className="quote">"{t.quote}"</p>
              <div className="author">
                <div className="author-avatar">{t.author[0]}</div>
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`stats-bar ${visible ? 'visible' : ''}`}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials