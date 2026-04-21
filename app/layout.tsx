import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}