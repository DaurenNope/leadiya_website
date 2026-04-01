import { useEffect, useRef, useState } from 'react'
import '../styles/how-it-works.css'

const steps = [
  { num: '01', title: 'Сбор данных', desc: 'Автоматический сбор компаний из открытых источников' },
  { num: '02', title: 'Обогащение', desc: 'Дополнение данных директорами, телефонами, email' },
  { num: '03', title: 'Скоринг', desc: 'ICP оценка и классификация по потенциалу' },
  { num: '04', title: 'Интеграция', desc: 'Экспорт в CRM, email рассылки, API' }
]

const SearchIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
const DatabaseIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="6" rx="6" ry="2"/><path d="M3 6v12c0 1.1 2.686 2 6 2s6-.9 6-2V6"/><path d="M3 12v4c0 1.1 2.686 2 6 2s6-.9 6-2v-4"/></svg>
const ChartIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 6-10"/></svg>
const ExportIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>

const icons = [SearchIcon, DatabaseIcon, ChartIcon, ExportIcon]

const HowItWorks = ({ scrollY = 0 }: { scrollY?: number }) => {
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
    <section className="how" id="how" ref={sectionRef}>
      <div className="container">
        <div className={`section-header ${visible ? 'visible' : ''}`}>
          <span className="section-tag">// Как это работает</span>
          <h2>Полный цикл работы с лидами</h2>
        </div>
        
        <div className="steps-grid">
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <div 
                key={i} 
                className={`step-item ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="step-icon"><Icon /></div>
                <span className="step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks