import React from 'react'

export default function App() {
  return (
      <div className="app-layout">
        <aside className="col col-left">
          <div className="corner-label">Design, Mercado Livre</div>
          <div className="corner-foot">New website in dev...</div>
        </aside>

        <main className="col col-right">
          <div className="meta">São Paulo — 19:28:35</div>
          <article className="hero">
            <p>
              <span>I'm André Alcantara, a brazilian designer based in São Paulo, over the past 5 years, I've had the privilege of working with brands like </span>
              <span className="muted">Itaú</span>
              <span>, </span>
              <span className="muted">Raízen</span>
              <span> and </span>
              <span className="muted">MRV</span>
              <span>, bringing clarity to complex problems with intentional decisions and attention to </span>
              <span className="muted">craft</span>
              <span>. Currently at </span>
              <span className="muted">Mercado Livre</span>
              <span>.</span>
            </p>
          </article>
          <div className="meta">São Paulo — 19:28:35</div>
        </main>
      </div>
    )
}