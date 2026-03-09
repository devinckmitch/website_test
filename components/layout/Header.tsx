'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

const localeNames = { nl: 'NL', fr: 'FR', en: 'EN' }

const navLinks = [
  { key: 'golf', href: '/golf' },
  { key: 'greenFees', href: '/golf/green-fees' },
  { key: 'club', href: '/club' },
  { key: 'hotel', href: '/hotel' },
  { key: 'restaurant', href: '/restaurant' },
  { key: 'news', href: '/nieuws' },
  { key: 'contact', href: '/contact' },
]

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const currentLocale = useLocale()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  const getHref = (href: string) => `/${currentLocale}${href}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-[#1a3d2b] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex-shrink-0">
            <div className="text-white">
              <div
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                className="text-xl font-light tracking-[0.15em] uppercase leading-tight"
              >
                <span className="text-[#c9a84c]">Royal Zoute</span>
                <span className="block text-xs tracking-[0.3em] font-light opacity-80">
                  Golf Club
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={getHref(href)}
                className="text-white/85 hover:text-white text-sm tracking-wide font-light transition-colors duration-200 uppercase"
                style={{ letterSpacing: '0.06em', fontSize: '0.8rem' }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Right section: Language switcher + Book Now */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              {Object.entries(localeNames).map(([loc, name]) => (
                <Link
                  key={loc}
                  href={getLocalePath(loc)}
                  className={`text-xs font-medium tracking-widest transition-colors ${
                    currentLocale === loc
                      ? 'text-[#c9a84c]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>

            {/* Book Now CTA */}
            <Link
              href={getHref('/golf/green-fees')}
              className="bg-[#c9a84c] text-[#1c1c1c] px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#d4b96a] transition-colors duration-200"
            >
              {t('bookNow')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1a3d2b] border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={getHref(href)}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white text-sm tracking-widest uppercase py-2"
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href={getHref('/golf/green-fees')}
                onClick={() => setMenuOpen(false)}
                className="block bg-[#c9a84c] text-[#1c1c1c] px-5 py-3 text-xs font-medium tracking-[0.1em] uppercase text-center hover:bg-[#d4b96a] transition-colors"
              >
                {t('bookNow')}
              </Link>
            </div>
            <div className="flex gap-4 pt-2">
              {Object.entries(localeNames).map(([loc, name]) => (
                <Link
                  key={loc}
                  href={getLocalePath(loc)}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs font-medium tracking-widest ${
                    currentLocale === loc ? 'text-[#c9a84c]' : 'text-white/60'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
