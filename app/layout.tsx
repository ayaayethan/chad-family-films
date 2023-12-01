import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import NavBar from './navbar'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
  });

export const metadata: Metadata = {
  title: 'Chad Family Films'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="shadow-lg">
          <NavBar />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  )
}
