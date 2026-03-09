import Link from 'next/link'
import Image from 'next/image'
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
    <footer className="text-white" style={{ backgroundColor: '#111111' }}>
      {/* Red top border */}
      <div style={{ backgroundColor: '#E41F13', height: '3px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo/rzgc-logo.png"
                alt="Royal Zoute Golf Club"
                width={48}
                height={48}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Image
                src="/images/logo/rzgc-logo-text.png"
                alt="Royal Zoute Golf Club"
                width={150}
                height={38}
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{t('description')}</p>
            <div className="space-y-1">
              <p className="text-white/40 text-xs">Caddiespad 14</p>
              <p className="text-white/40 text-xs">8300 Knokke-Heist, België</p>
              <a href="tel:+3250601280" className="block text-white/40 text-xs hover:text-white/70 transition-colors mt-2">
                +32 (0)50 60 12 80
              </a>
              <a href="mailto:info@rzgc.be" className="block text-white/40 text-xs hover:text-white/70 transition-colors">
                info@rzgc.be
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: '#E41F13' }}
            >
              {t('quickLinks')}
            </h3>
            <nav className="space-y-3">
              {links.map(({ key, href }) => (
                <Link
                  key={key}
                  href={`/${locale}${href}`}
                  className="block text-white/50 hover:text-white text-sm tracking-wide transition-colors duration-200"
                >
                  {tNav(key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Book */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: '#E41F13' }}
            >
              Reserveer
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Reserveer uw green fee online of neem contact op met ons pro shop team.
            </p>
            <Link
              href={`/${locale}/golf/green-fees`}
              className="inline-block text-white px-6 py-3 text-xs font-bold tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E41F13' }}
            >
              {tNav('bookNow')}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">{t('legal')}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
