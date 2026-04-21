import type { Metadata } from 'next'
import './globals.css'
import styles from './layout.module.css'
import { Nav } from '@/components/layout/Nav'

export const metadata: Metadata = {
  title: 'André Alcantara — Portfolio',
  description: 'Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  )
}