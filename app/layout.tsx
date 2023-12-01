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
        <header className="shadow-xl">
          {/* <nav className="w-full h-full flex justify-center">
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
          </nav> */}
          <nav className="bg-white border-gray-200 dark:bg-indigo-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-pink-500">Chad Family Films</span>
                </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="/family" className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0">Family</a>
                  </li>
                  <li>
                    <a href="/films" className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0">Films</a>
                  </li>
                  <li>
                    <a href="/vlogs" className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0">Vlogs</a>
                  </li>
                  <li>
                    <a href="/gallery" className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0">Gallery</a>
                  </li>
                  <li>
                    <a href="/contact" className="block py-2 px-3 text-slate-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  )
}
