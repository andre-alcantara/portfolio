'use client'

import { Nav } from './Nav'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.profile}>
          <span className={styles.name}>André Alcantara</span>
          <span className={styles.role}>Design at Mercado Livre</span>
        </div>
        <div className={styles.navFixed}>
          <Nav />
        </div>
      </div>
    </header>
  )
}
