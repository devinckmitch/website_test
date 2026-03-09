import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const facilityLinks: Record<string, string> = {
  hotel: '/hotel',
  restaurant: '/restaurant',
  proShop: '/pro-shop',
  drivingRange: '/golf',
}

const facilityColors = [
  { bg: '#1a3d2b', accent: '#c9a84c' },
  { bg: '#2d5a3d', accent: '#d4b96a' },
  { bg: '#3d7a52', accent: '#c9a84c' },
  { bg: '#1c1c1c', accent: '#c9a84c' },
]

export default function FacilitiesGrid() {
  const t = useTranslations('facilities')
  const locale = useLocale()

  const facilities = ['hotel', 'restaurant', 'proShop', 'drivingRange'] as const

  return (
    <section style={{ backgroundColor: '#1c1c1c' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            style={{ width: '50px', height: '1px', backgroundColor: '#c9a84c' }}
            className="mx-auto mb-6"
          />
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
            className="text-4xl md:text-5xl font-light mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {facilities.map((key, i) => (
            <Link
              key={key}
              href={`/${locale}${facilityLinks[key]}`}
              style={{ backgroundColor: facilityColors[i].bg }}
              className="p-8 group block hover:opacity-90 transition-opacity duration-300"
            >
              {/* Number */}
              <div
                style={{ color: facilityColors[i].accent, fontFamily: 'Cormorant Garamond, serif' }}
                className="text-5xl font-light mb-6 opacity-30"
              >
                0{i + 1}
              </div>

              {/* Gold line */}
              <div
                style={{ width: '30px', height: '1px', backgroundColor: facilityColors[i].accent }}
                className="mb-6 group-hover:w-16 transition-all duration-300"
              />

              {/* Name */}
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: facilityColors[i].accent,
                }}
                className="text-xl font-light mb-3"
              >
                {t(`${key}.name`)}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-xs leading-relaxed">{t(`${key}.description`)}</p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-white/30 text-xs uppercase tracking-widest group-hover:text-white/60 transition-colors">
                <span>Meer info</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
