import { useEffect, useRef, useState } from 'react'
import '../styles/pricing.css'

const CheckIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>

const Pricing = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="pricing" id="pricing" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Тарифы</span>
          <h2>Простой pricing</h2>
        </div>
        
        <div className="pricing-grid">
          <div className={`pricing-card basic ${visible ? 'visible' : ''}`}>
            <div className="card-header">
              <h3>Старт</h3>
              <div className="price">
                <span className="price-amount">9,000</span>
                <span className="price-currency">₸</span>
                <span className="price-period">/мес</span>
              </div>
            </div>
            <ul className="price-features">
              <li><CheckIcon /> До 500 лидов/мес</li>
              <li><CheckIcon /> Базовые фильтры</li>
              <li><CheckIcon /> Экспорт CSV</li>
              <li><CheckIcon /> Email поддержка</li>
            </ul>
            <a href="mailto:hello@leadiya.kz" className="price-btn">Выбрать</a>
          </div>
          
          <div className={`pricing-card featured ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="card-badge">Популярный</div>
            <div className="card-header">
              <h3>Бизнес</h3>
              <div className="price">
                <span className="price-amount">25,000</span>
                <span className="price-currency">₸</span>
                <span className="price-period">/мес</span>
              </div>
            </div>
            <ul className="price-features">
              <li><CheckIcon /> До 5,000 лидов/мес</li>
              <li><CheckIcon /> Все фильтры</li>
              <li><CheckIcon /> API доступ</li>
              <li><CheckIcon /> Интеграции</li>
              <li><CheckIcon /> Приоритетная поддержка</li>
            </ul>
            <a href="mailto:hello@leadiya.kz" className="price-btn primary">Выбрать</a>
          </div>
          
          <div className={`pricing-card pro ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="card-header">
              <h3>Агентство</h3>
              <div className="price">
                <span className="price-amount">75,000</span>
                <span className="price-currency">₸</span>
                <span className="price-period">/мес</span>
              </div>
            </div>
            <ul className="price-features">
              <li><CheckIcon /> Безлимит лидов</li>
              <li><CheckIcon /> 5 пользователей</li>
              <li><CheckIcon /> White-label</li>
              <li><CheckIcon /> Персональный менеджер</li>
              <li><CheckIcon /> SLA гарантия</li>
            </ul>
            <a href="mailto:hello@leadiya.kz" className="price-btn">Связаться</a>
          </div>
        </div>
        
        <div className={`pricing-note ${visible ? 'visible' : ''}`}>
          <span>Бесплатный период на 14 дней</span>
          <span className="divider">|</span>
          <span>Отмена в любое время</span>
        </div>
      </div>
    </section>
  )
}

export default Pricing