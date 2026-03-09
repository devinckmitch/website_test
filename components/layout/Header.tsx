'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  const navBg = scrolled || menuOpen ? 'rgba(0,0,0,0.97)' : 'transparent'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ backgroundColor: navBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/images/logo/rzgc-logo.png"
              alt="Royal Zoute Golf Club"
              width={44}
              height={44}
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
            <Image
              src="/images/logo/rzgc-logo-text.png"
              alt="Royal Zoute Golf Club"
              width={140}
              height={36}
              className="object-contain hidden sm:block"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={getHref(href)}
                className="text-white/80 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200 font-medium"
                style={{ fontFamily: 'ProximaNova, system-ui, sans-serif' }}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Language switcher + Book CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              {Object.entries(localeNames).map(([loc, name]) => (
                <Link
                  key={loc}
                  href={getLocalePath(loc)}
                  className={`text-xs font-bold tracking-widest transition-colors ${
                    currentLocale === loc ? 'text-[#E41F13]' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
            <Link
              href={getHref('/golf/green-fees')}
              className="text-white px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ backgroundColor: '#E41F13' }}
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
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: 'rgba(0,0,0,0.97)' }}>
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={getHref(href)}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white text-sm tracking-widest uppercase py-2 font-bold"
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Link
                href={getHref('/golf/green-fees')}
                onClick={() => setMenuOpen(false)}
                className="block text-white px-5 py-3 text-xs font-bold tracking-[0.1em] uppercase text-center transition-colors"
                style={{ backgroundColor: '#E41F13' }}
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
                  className={`text-xs font-bold tracking-widest ${
                    currentLocale === loc ? 'text-[#E41F13]' : 'text-white/50'
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
