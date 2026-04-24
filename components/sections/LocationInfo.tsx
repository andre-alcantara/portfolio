'use client'

import { useEffect, useState } from 'react'
import { getSaoPauloTime } from '@/lib/time'
import styles from './LocationInfo.module.css'

export function LocationInfo() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    setTime(getSaoPauloTime())
    const interval = setInterval(() => {
      setTime(getSaoPauloTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>São Paulo</span>
      <div className={styles.sunPlaceholder} />
      <span className={styles.label}>{time}</span>
    </div>
  )
}
