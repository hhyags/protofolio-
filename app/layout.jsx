import { Bebas_Neue, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata = {
  title: 'Goutham Sai | Cinematic Portfolio',
  description: 'Aspiring developer and creative technologist portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
