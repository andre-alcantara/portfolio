'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './NavItem.module.css'
import type { NavItemProps } from '@/lib/types'

const MotionLink = motion.create(Link)

const pressTransition = {
  type: 'spring' as const,
  stiffness: 600,
  damping: 28,
}

export function NavItem({ label, href, isActive, skipAnimation: _ }: NavItemProps) {
  return (
    <MotionLink
      href={href}
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      whileTap={isActive ? undefined : { scale: 0.875 }}
      transition={pressTransition}
    >
      <span className={styles.label}>{label}</span>
    </MotionLink>
  )
}
