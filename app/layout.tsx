import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Elariz Rajabov',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>
        <Navbar />
        <div className="pt-24">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}