import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import Link from 'next/link';

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
        <header className="h-24 bg-indigo-900 shadow-xl">
          <nav className="w-full h-full flex justify-center">
            <ul className="flex w-full items-center">
              <li className="h-full w-full">
                <Link href="/" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Home</Link>
              </li>
              <li className="h-full w-full">
                <Link href="/family" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Meet the Fam</Link>
              </li>
              <li className="h-full w-full">
                <Link href="/films" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Films</Link>
              </li>
              <li className="h-full w-full">
                <Link href="/vlogs" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Vlogs</Link>
              </li>
              <li className="h-full w-full">
                <Link href="/gallery" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Gallery</Link>
              </li>
              <li className="h-full w-full">
                <Link href="/contact" className="hover:bg-pink-500 flex items-center justify-center h-full w-full">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
