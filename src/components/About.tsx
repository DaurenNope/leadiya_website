import { useEffect, useRef, useState } from 'react'
import '../styles/about.css'

const About = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-bg" />
      <div className="container">
        <div className={`about-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// О нас</span>
          <h2>Leadiya — платформа для поиска B2B лидов в Казахстане</h2>
        </div>

        <div className="about-grid">
          <div className={`about-main ${visible ? 'visible' : ''}`}>
            <div className="about-card problem-card">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              </div>
              <h3>Проблема</h3>
              <p>В Казахстане нет сервисов с проверенными контактами компаний. Бизнесы тратят недели на ручной поиск лидов — время, которое можно spent на продажи.</p>
            </div>

            <div className="about-card solution-card">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Решение</h3>
              <p>Leadiya автоматически собирает данные о компаниях из открытых источников, обогащает контактами директоров и добавляет информацию о тендерах.</p>
            </div>
          </div>

          <div className={`about-story ${visible ? 'visible' : ''}`}>
            <div className="story-badge">
              <span className="story-badge-dot" />
              Как мы это создали
            </div>
            <h3>Из AI-агента в самостоятельный продукт</h3>
            <p>Мы в Rahmet Labs изначально разрабатывали AI-агента для холодных звонков. Но быстро поняли: чтобы AI работал, нужны качественные данные.</p>
            <p>Ни одного сервиса с казахстанскими компаниями не было — пришлось создать свой. Сначала для себя. Потом поняли: это нужно всем.</p>
            <p>Так AI-агент стал Leadiya — платформой для поиска B2B лидов, которой пользуются уже 2,400+ компаний.</p>
          </div>

          <div className={`about-stats ${visible ? 'visible' : ''}`}>
            {[
              { num: '12,847', label: 'компаний в базе' },
              { num: '94%', label: 'контактов с телефонами' },
              { num: '2,400+', label: 'компаний нашли клиентов' },
              { num: '14 дней', label: 'бесплатный период' }
            ].map((stat, i) => (
              <div key={i} className="stat-block" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About