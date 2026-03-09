import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()

  const links = [
    { key: 'golf', href: '/golf' },
    { key: 'greenFees', href: '/golf/green-fees' },
    { key: 'club', href: '/club' },
    { key: 'hotel', href: '/hotel' },
    { key: 'restaurant', href: '/restaurant' },
    { key: 'proShop', href: '/pro-shop' },
    { key: 'news', href: '/nieuws' },
    { key: 'contact', href: '/contact' },
  ]

  return (
    <footer style={{ backgroundColor: '#1a3d2b' }} className="text-white">
      {/* Gold divider */}
      <div style={{ backgroundColor: '#c9a84c', height: '1px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              className="text-2xl font-light tracking-[0.15em] uppercase mb-4"
            >
              <span style={{ color: '#c9a84c' }}>Royal Zoute</span>
              <span className="block text-sm tracking-[0.3em] font-light opacity-70">
                Golf Club
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{t('description')}</p>
            <div className="mt-6">
              <p className="text-white/50 text-xs">Caddiespad 14</p>
              <p className="text-white/50 text-xs">8300 Knokke-Heist, België</p>
              <p className="text-white/50 text-xs mt-1">+32 (0)50 60 12 80</p>
              <p className="text-white/50 text-xs">info@rzgc.be</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c' }}
              className="text-lg font-light tracking-wider mb-6 uppercase"
            >
              {t('quickLinks')}
            </h3>
            <nav className="space-y-3">
              {links.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className="block text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
                >
                  {tNav(key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Book */}
          <div>
            <h3
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c' }}
              className="text-lg font-light tracking-wider mb-6 uppercase"
            >
              Reserveer
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Reserveer uw green fee online of neem contact op met ons pro shop team.
            </p>
            <Link
              href={`/${locale}/golf/green-fees`}
              style={{ backgroundColor: '#c9a84c', color: '#1c1c1c' }}
              className="inline-block px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
            >
              {tNav('bookNow')}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">{t('legal')}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
