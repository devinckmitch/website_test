import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function BookingBanner() {
  const t = useTranslations('booking')
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#F5F5F5' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            style={{ width: '50px', height: '1px', backgroundColor: '#E41F13' }}
            className="mx-auto mb-6"
          />
          <h2
            style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
            className="text-4xl md:text-5xl font-light mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Championship */}
          <div
            style={{ borderColor: '#E41F13' }}
            className="border p-8 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3
                  style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                  className="text-2xl font-light mb-1"
                >
                  {t('championship')}
                </h3>
                <p className="text-gray-400 text-sm">{t('championshipDesc')}</p>
              </div>
              <div
                style={{ backgroundColor: '#111111' }}
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E41F13"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              </div>
            </div>
            <Link
              href={`/${locale}/golf/green-fees`}
              style={{ backgroundColor: '#111111', color: 'white' }}
              className="block text-center py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              {t('bookCta')}
            </Link>
          </div>

          {/* Executive */}
          <div
            style={{ borderColor: '#E41F13' }}
            className="border p-8 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3
                  style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                  className="text-2xl font-light mb-1"
                >
                  {t('executive')}
                </h3>
                <p className="text-gray-400 text-sm">{t('executiveDesc')}</p>
              </div>
              <div
                style={{ backgroundColor: '#111111' }}
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E41F13"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
            <Link
              href={`/${locale}/golf/green-fees`}
              style={{ backgroundColor: '#111111', color: 'white' }}
              className="block text-center py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              {t('bookCta')}
            </Link>
          </div>
        </div>

        {/* Phone booking */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-3">{t('callCta')}</p>
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111', fontSize: '1.5rem' }}
            className="font-light tracking-wider hover:opacity-70 transition-opacity"
          >
            {t('phone')}
          </a>
        </div>
      </div>
    </section>
  )
}
