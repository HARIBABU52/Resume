import { Inter } from 'next/font/google';
import './globals.css'
import Header from '../components/Header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Resume',
  description: 'A simple Next.js resume site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
