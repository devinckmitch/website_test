import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function ClubStory() {
  const t = useTranslations('club')
  const locale = useLocale()

  return (
    <section style={{ backgroundColor: '#f5f0e8' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p
              style={{ color: '#c9a84c' }}
              className="text-xs tracking-[0.3em] uppercase mb-4"
            >
              {t('history')}
            </p>
            <div style={{ width: '50px', height: '1px', backgroundColor: '#c9a84c' }} className="mb-8" />
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
              className="text-4xl md:text-5xl font-light mb-6 leading-tight"
            >
              {t('title')}
            </h2>
            <p
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
              className="text-xl italic font-light mb-8 text-gray-500"
            >
              {t('subtitle')}
            </p>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              {t('historyText')}
            </p>
            <Link
              href={`/${locale}/club`}
              style={{ color: '#1a3d2b', borderColor: '#1a3d2b' }}
              className="border inline-block px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#1a3d2b] hover:text-white transition-all duration-300"
            >
              Ontdek onze geschiedenis
            </Link>
          </div>

          {/* Stats / Heritage block */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '1908', label: 'Opgericht' },
              { value: '80ha', label: 'Natuur' },
              { value: '36', label: 'Holes' },
              { value: '10', label: 'Hotel kamers' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{ borderColor: '#c9a84c', borderWidth: '1px' }}
                className="border p-8 text-center"
              >
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#1a3d2b',
                    fontSize: '3rem',
                  }}
                  className="font-light leading-none mb-2"
                >
                  {value}
                </div>
                <div className="text-gray-400 text-xs tracking-[0.2em] uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
