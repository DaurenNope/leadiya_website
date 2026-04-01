import { useEffect, useRef, useState } from 'react'
import '../styles/testimonials.css'

const testimonials = [
  { quote: "Раньше искали контакты вручную — неделя уходила на 50 компаний. Теперь за 15 минут получаем 200+ готовых лидов с телефонами директоров.", author: "Азамат К.", role: "Руководитель отдела продаж", company: "TechHouse Kazakhstan" },
  { quote: "Интеграция с amoCRM сэкономила нам 3 часа каждый день. Контакты падают автоматически, менеджеры сразу звонят.", author: "Динара С.", role: "Директор", company: "Digital Leads Agency" },
  { quote: "База обновляется сама. Проверяем тендеры — видим, кто сейчас закупается. Это реально работает.", author: "Ерлан М.", role: "B2B менеджер", company: "НефтеГазСнаб" },
  { quote: "Сначала сомневался, но попробовал бесплатный период — за первый день нашел 15 реальных клиентов.", author: "Максим Р.", role: "Фрилансер", company: "B2B Sales" },
  { quote: "Используем для холодных звонков. Конверсия выросла с 2% до 8% — это окупило подписку за неделю.", author: "Алия Н.", role: "Head of Sales", company: "Grow Kazakhstan" },
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
      <div className="testimonials-stats-bar">
        {stats.map((s, i) => (
          <div key={i} className={`stat-item ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Отзывы</span>
          <h2>Команды, которые растут с нами</h2>
        </div>

        <div className="testimonials-scroller">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className={`testimonial-card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i % 5) * 0.08}s` }}
            >
              <div className="quote-mark">"</div>
              <p className="quote">{t.quote}</p>
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
      </div>
    </section>
  )
}

export default Testimonials