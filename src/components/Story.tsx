import { useEffect, useRef, useState } from 'react'
import '../styles/story.css'

const Story = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="story" id="story" ref={sectionRef}>
      <div className="story-bg" />
      <div className="container">
        <div className={`story-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// История</span>
          <h2>Как мы это создали</h2>
        </div>

        <div className="story-content">
          <div className={`story-timeline ${visible ? 'visible' : ''}`}>
            <div className="story-card origin">
              <div className="story-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <div className="story-card-date">2024</div>
              <h3>Всё началось с AI-агента</h3>
              <p>Мы в Rahmet Labs хотели создать AI-агента для холодных звонков. Но быстро поняли: чтобы агент работал, нужны качественные данные о компаниях Казахстана.</p>
            </div>

            <div className="story-connector">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>

            <div className="story-card problem">
              <div className="story-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <div className="story-card-date">Проблема</div>
              <h3>Данных просто не было</h3>
              <p>Ни одного сервиса с проверенными контактами казахстанских компаний. Всто приходилось собирать вручную — недели на 50 компаний.</p>
            </div>

            <div className="story-connector">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>

            <div className="story-card solution">
              <div className="story-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="story-card-date">Решение</div>
              <h3>Создали Leadiya</h3>
              <p>Сначала для себя. Потом поняли: это должно быть доступно всем. Так AI-агент стал самостоятельным продуктом — платформой для поиска B2B лидов.</p>
            </div>
          </div>

          <div className={`story-cta ${visible ? 'visible' : ''}`}>
            <p>Сейчас Leadiya помогает компаниям находить клиентов по всему Казахстану</p>
            <a href="#pricing" className="story-btn">
              Попробовать бесплатно
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story