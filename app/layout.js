import { icons } from 'lucide-react'
import './globals.css'

export const metadata = {
  title: 'Lukin rođus - lista želja',
  description: 'Lista poklona koje želim da dobijem',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
}