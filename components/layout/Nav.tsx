'use client'

import { useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NavItem } from './NavItem'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  { label: 'Index', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Lab', href: '/craft' },
  { label: 'Info', href: '/info' },
]

// Must stay in sync with .item width (72px) and nav padding (8px) in CSS
const ITEM_WIDTH = 72
const NAV_PADDING = 8

const indicatorTransition = {
  type: 'spring' as const,
  stiffness: 600,
  damping: 60,
}

export function Nav() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  const activeIndex = NAV_ITEMS.findIndex(({ href }) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)
  )

  const indicatorLeft = NAV_PADDING + activeIndex * ITEM_WIDTH + ITEM_WIDTH / 2 - 2

  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={item.href}
          label={item.label}
          href={item.href}
          isActive={index === activeIndex}
          skipAnimation={isFirstRender.current}
        />
      ))}
      {activeIndex >= 0 && (
        <motion.div
          className={styles.indicator}
          animate={{ x: indicatorLeft }}
          initial={false}
          transition={isFirstRender.current ? { duration: 0 } : indicatorTransition}
        />
      )}
    </nav>
  )
}
