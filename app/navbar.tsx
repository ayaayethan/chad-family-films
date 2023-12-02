'use client'

import { Collapse } from 'flowbite'
import { useEffect } from 'react'

import Link from 'next/link';

const options = {
  onCollapse: () => {
      console.log('element has been collapsed');
  },
  onExpand: () => {
      console.log('element has been expanded');
  },
  onToggle: () => {
      console.log('element has been toggled');
  },
};

const instanceOptions = {
  id: 'targetEl',
  override: true
};

export default function NavBar() {
  let collapse: any;

  useEffect(() => {
    const $targetEl: HTMLElement | null = document.getElementById('targetEl')
    const $triggerEl: HTMLElement | null = document.getElementById('triggerEl')

    collapse = new Collapse($targetEl, $triggerEl, options, instanceOptions)
  })

  const toggleCollapse = () => {
    collapse.toggle()
  }

  return (
    <nav className="border-gray-200 bg-blue-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-pink-500">Chad Family Films</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-50 text-gray-400 hover:bg-blue-900" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-slate-900">
            <li>
              <Link href="/family" className="block py-2 px-3 text-slate-50 rounded hover:bg-blue-900 md:hover:bg-blue-950 hover:text-pink-500 md:p-0">Family</Link>
            </li>
            <li>
              <Link href="/films" className="block py-2 px-3 text-slate-50 rounded hover:bg-blue-900 md:hover:bg-blue-950 hover:text-pink-500 md:p-0">Films</Link>
            </li>
            <li>
              <Link href="/vlogs" className="block py-2 px-3 text-slate-50 rounded hover:bg-blue-900 md:hover:bg-blue-950 hover:text-pink-500 md:p-0">Vlogs</Link>
            </li>
            <li>
              <Link href="/gallery" className="block py-2 px-3 text-slate-50 rounded hover:bg-blue-900 md:hover:bg-blue-950 hover:text-pink-500 md:p-0">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-slate-50 rounded hover:bg-blue-900 md:hover:bg-blue-950 hover:text-pink-500 md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}