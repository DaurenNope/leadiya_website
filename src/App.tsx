import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhoFor from './components/WhoFor'
import Story from './components/Story'
import Testimonials from './components/Testimonials'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles/global.css'

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${Math.min(scrollY / 500, 1)})` }} />
      <Nav />
      <main>
        <Hero scrollY={scrollY} />
        <WhoFor scrollY={scrollY} />
        <Story scrollY={scrollY} />
        <Testimonials scrollY={scrollY} />
        <Integrations scrollY={scrollY} />
        <HowItWorks scrollY={scrollY} />
        <Features scrollY={scrollY} />
        <Pricing scrollY={scrollY} />
        <FAQ scrollY={scrollY} />
      </main>
      <Footer />
    </>
  )
}