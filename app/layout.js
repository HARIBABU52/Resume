import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Resume',
  description: 'A simple Next.js resume site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
