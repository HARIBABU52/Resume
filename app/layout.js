import { Sora, Poppins } from 'next/font/google';
import './globals.css'
import Header from '../components/Header'

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'Resume',
  description: 'A simple Next.js resume site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${poppins.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
