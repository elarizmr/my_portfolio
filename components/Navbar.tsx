'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = ['Experience', 'Projects', 'About']

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(false)
      setTimeout(() => setVisible(true), 1000)
    }
    window.addEventListener('scroll', onScroll, { once: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) {
        setActive('')
        return
      }

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (scrolledToBottom) {
        setActive(links[links.length - 1].toLowerCase())
        return
      }

      const sections = ['experience', 'projects', 'about']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) {
            current = id
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between md:justify-center md:gap-130 px-6 md:px-16 py-4 md:py-6 transition-all duration-500 bg-[#0e1118]
      ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>

      {/* Logo */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src="/images/projects/photo3.png"
          alt="Profile"
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-12">
        {links.map(link => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="relative flex flex-col items-center gap-1"
          >
            <span className={`transition-colors text-base ${
              active === link.toLowerCase() ? 'text-white' : 'text-white/40 hover:text-white'
            }`}>
              {link}
            </span>
            {active === link.toLowerCase() && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0e1118] flex flex-col items-center gap-6 py-6 border-t border-white/10">
          {links.map(link => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="relative flex flex-col items-center gap-1"
            >
              <span className={`transition-colors text-base ${
                active === link.toLowerCase() ? 'text-white' : 'text-white/40'
              }`}>
                {link}
              </span>
              {active === link.toLowerCase() && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              )}
            </Link>
          ))}
        </div>
      )}

    </nav>
  )
}