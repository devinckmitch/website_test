import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function CourseHighlights() {
  const t = useTranslations('courses')
  const locale = useLocale()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
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
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        {/* Championship course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8">
          <div
            style={{ backgroundColor: '#111111', minHeight: '400px' }}
            className="flex items-end p-10 relative overflow-hidden"
          >
            {/* Placeholder for course image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, #1a1a1a 0%, #111111 100%)',
              }}
            />
            <div className="relative z-10">
              <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-3">
                {t('championship.par')} · {t('championship.holes')}
              </p>
              <h3
                style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
                className="text-white text-4xl font-light"
              >
                {t('championship.name')}
              </h3>
            </div>
          </div>
          <div
            style={{ backgroundColor: '#F5F5F5' }}
            className="p-10 flex flex-col justify-center"
          >
            <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {t('championship.description')}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Par', value: '72' },
                { label: 'Holes', value: '18' },
                { label: 'Length', value: '6.2km' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div
                    style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                    className="text-3xl font-light"
                  >
                    {value}
                  </div>
                  <div className="text-gray-400 text-xs tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
            <Link
              href={`/${locale}/golf`}
              style={{ color: '#111111', borderColor: '#111111' }}
              className="border inline-block px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#111111] hover:text-white transition-all duration-300 self-start"
            >
              Meer info
            </Link>
          </div>
        </div>

        {/* Executive course */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div
            style={{ backgroundColor: '#F5F5F5' }}
            className="p-10 flex flex-col justify-center order-2 lg:order-1"
          >
            <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {t('executive.description')}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Par', value: '64' },
                { label: 'Holes', value: '18' },
                { label: 'Length', value: '3.5km' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div
                    style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                    className="text-3xl font-light"
                  >
                    {value}
                  </div>
                  <div className="text-gray-400 text-xs tracking-widest uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
            <Link
              href={`/${locale}/golf`}
              style={{ color: '#111111', borderColor: '#111111' }}
              className="border inline-block px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:bg-[#111111] hover:text-white transition-all duration-300 self-start"
            >
              Meer info
            </Link>
          </div>
          <div
            style={{ backgroundColor: '#1a1a1a', minHeight: '400px' }}
            className="flex items-end p-10 relative overflow-hidden order-1 lg:order-2"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
              }}
            />
            <div className="relative z-10">
              <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-3">
                {t('executive.par')} · {t('executive.holes')}
              </p>
              <h3
                style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
                className="text-white text-4xl font-light"
              >
                {t('executive.name')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
