import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahamad Groups - Corporate Portal',
  description: 'Leading the way in construction and agricultural solutions with trusted Tata products.',
  keywords: 'Ahamad Groups, Tata roofing sheets, Tata coils, Tata Agrico, construction materials, agricultural products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
