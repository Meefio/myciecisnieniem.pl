'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function BlogHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top banner - email + phone (hidden on mobile) */}
        <div
          className={`hidden sm:block transition-all duration-300 overflow-hidden ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'
          }`}
          style={{ backgroundColor: '#27262a' }}
        >
          <div className="px-[3vw] h-14 flex items-center justify-end gap-12 text-sm text-white">
            <a
              href="mailto:kontakt@myciecisnieniem.pl"
              className="hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <div className="h-6"><img src="/images/At-sign-min.png" alt="" className="h-full" /></div>
              kontakt@myciecisnieniem.pl
            </a>
            <a
              href="tel:507296296"
              className="hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <div className="h-6"><img src="/images/iPhone-14-min.png" alt="" className="h-full" /></div>
              507-296-296
            </a>
          </div>
        </div>

        {/* Navbar */}
        <header
          className="backdrop-blur-sm transition-all duration-300"
          style={{ backgroundColor: 'rgba(15, 15, 16, 0.64)' }}
        >
          <div className="pt-3 pd:mt-0 px-[3vw] flex items-center justify-between">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/Logo-Under-Pressure-min.png"
                alt="Under Pressure - Mycie Cisnieniowe"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled
                    ? 'h-10 md:h-20'
                    : 'h-10 md:h-22'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              <Link href="/#uslugi" className="text-[#e9e3e2] hover:text-secondary transition-colors">
                Uslugi
              </Link>
              <Link href="/#oferta" className="text-[#e9e3e2] hover:text-secondary transition-colors">
                Oferta
              </Link>
              <Link href="/#galeria" className="text-[#e9e3e2] hover:text-secondary transition-colors">
                Galeria
              </Link>
              <Link href="/#opinie" className="text-[#e9e3e2] hover:text-secondary transition-colors">
                Opinie
              </Link>
              <Link href="/blog" className="text-primary font-medium">
                Blog
              </Link>
              <Link
                href="/#kontakt"
                className="hidden lg:inline-flex border-[3px] border-stroke-blue text-stroke-blue font-medium px-12.5 py-2.5 rounded-xl ml-10 hover:border-secondary hover:text-secondary hover:scale-95 transition-all"
              >
                Kontakt
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="menu"
            >
              <img src="/images/Burger-Menu-icon.svg" alt="" className="w-[22px]" />
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden py-4 flex flex-col max-h-[70vh] overflow-y-auto"
              style={{ backgroundColor: '#27262a' }}
            >
              <Link href="/#uslugi" onClick={() => setMobileMenuOpen(false)} className="text-[#e9e3e2] hover:text-secondary transition-colors py-3 px-8">
                Uslugi
              </Link>
              <Link href="/#oferta" onClick={() => setMobileMenuOpen(false)} className="text-[#e9e3e2] hover:text-secondary transition-colors py-3 px-8">
                Oferta
              </Link>
              <Link href="/#galeria" onClick={() => setMobileMenuOpen(false)} className="text-[#e9e3e2] hover:text-secondary transition-colors py-3 px-8">
                Galeria
              </Link>
              <Link href="/#opinie" onClick={() => setMobileMenuOpen(false)} className="text-[#e9e3e2] hover:text-secondary transition-colors py-3 px-8">
                Opinie
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-primary font-medium py-3 px-8">
                Blog
              </Link>
              <Link href="/#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-secondary font-medium py-3 px-8">
                Kontakt
              </Link>
            </nav>
          )}
        </header>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-32 md:h-38 bg-bg" />
    </>
  )
}
