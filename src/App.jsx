import React, { useState, useEffect } from 'react'
import { getSaoPauloTime, isDaytime } from './utils/time'
import sunUrl from './assets/sun.svg'
import moonUrl from './assets/moon.svg'

export default function App() {
  const [time, setTime] = useState(getSaoPauloTime)
  const [hours, minutes, seconds] = time.split(':')

  useEffect(() => {
    const id = setInterval(() => setTime(getSaoPauloTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="app-layout">
      <header className="app-header">
        <span className="header-name">André Alcantara</span>
        <div className="header-location">
          <span>São Paulo</span>
          <img src={isDaytime(time) ? sunUrl : moonUrl} alt="" />
          <div className="time">
            <span key={`h-${hours}`} className="slide-up">{hours}</span>
            <span>:</span>
            <span key={`m-${minutes}`} className="slide-up">{minutes}</span>
            <span>:</span>
            <span key={`s-${seconds}`} className="slide-up">{seconds}</span>
          </div>
        </div>
        <nav className="header-nav">
          <a>Work</a>
          <a className="dim">Craft</a>
          <a className="dim">Vault</a>
        </nav>
      </header>

      <main className="content-panel">
        <div className="top">
          <a>Design @ Mercado Livre</a>
          <a className="muted" href="https://www.linkedin.com/in/and-alcantara/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <article className="hero">
          <p>
            <a>I'm André Alcantara, a brazilian designer based in São Paulo, over the past 5 years, I've had the privilege of working with brands like </a>
            <a className="muted" href="https://www.itau.com.br" target="_blank" rel="noopener noreferrer">Itaú</a>
            <a>, </a>
            <a className="muted" href="https://www.raizen.com.br/" target="_blank" rel="noopener noreferrer">Raízen</a>
            <a> and </a>
            <a className="muted" href="https://www.mrv.com.br/" target="_blank" rel="noopener noreferrer">MRV</a>
            <a>, bringing clarity to complex problems with intentional decisions and attention to </a>
            <a className="muted" href="https://www.doc.cc/syntax/craft" target="_blank" rel="noopener noreferrer">craft</a>.<br />
            <a> Currently at </a>
            <a className="muted" href="https://www.mercadolivre.com.br/" target="_blank" rel="noopener noreferrer">Mercado Livre</a>
            <a>.</a>
          </p>
        </article>
      </main>
    </div>
  )
}
