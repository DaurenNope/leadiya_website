import { useEffect, useRef, useState } from 'react'
import '../styles/faq.css'

const ChevronIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>

const faqs = [
  { q: 'Как начать использовать?', a: 'Зарегистрируйтесь, настройте фильтры и начните собирать лиды. Первые 14 дней бесплатно.' },
  { q: 'Какие источники данных?', a: 'Работаем с открытыми данными компаний Казахстана: 2GIS, государственные реестры, тендерные площадки.' },
  { q: 'Как происходит оплата?', a: 'Ежемесячная подписка. Можно отменить в любое время. Оплата через Kaspi или перевод на счет.' },
  { q: 'Можно ли экспортировать данные?', a: 'Да, экспорт в CSV, Excel или через API. Также есть готовые интеграции с CRM.' },
  { q: 'Есть ли бесплатный период?', a: 'Да, 14 дней полного доступа к платформе без ограничений.' }
]

const FAQ = ({ scrollY = 0 }: { scrollY?: number }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState<number | null>(0)
  
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        setVisible(true)
      }
    }
  }, [scrollY])

  return (
    <section className="faq" id="faq" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// FAQ</span>
          <h2>Ответы на вопросы</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className={`faq-item ${open === i ? 'open' : ''} ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="faq-question">
                <span>{item.q}</span>
                <span className={`faq-icon ${open === i ? 'rotated' : ''}`}><ChevronIcon /></span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ