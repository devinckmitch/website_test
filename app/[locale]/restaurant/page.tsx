import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'restaurant' })
  return { title: t('title') }
}

function RestaurantPageContent() {
  const t = useTranslations('restaurant')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-6">Fine Dining</p>
        <div
          style={{ width: '50px', height: '1px', backgroundColor: '#E41F13' }}
          className="mx-auto mb-8"
        />
        <h1
          style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
          className="text-5xl md:text-6xl font-light mb-6"
        >
          {t('title')}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
      </div>

      {/* Content */}
      <section style={{ backgroundColor: '#F5F5F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              style={{ backgroundColor: '#111111', minHeight: '400px' }}
              className="flex items-center justify-center"
            >
              <p style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13', opacity: 0.3 }} className="text-6xl font-light">
                Restaurant
              </p>
            </div>
            <div>
              <p style={{ color: '#E41F13' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                Seizoensgebonden keuken
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-4xl font-light mb-6"
              >
                Verfijning aan de baan
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                {t('description')}
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Restaurant', info: 'Lunch & diner · Reservatie aanbevolen' },
                  { label: 'Bistro', info: 'Ontbijt, lunch & snacks · Open voor alle bezoekers' },
                  { label: 'Terras', info: 'Zomers · Zicht op de baan' },
                ].map(({ label, info }) => (
                  <div key={label} className="flex gap-4">
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#E41F13' }} className="mt-3 flex-shrink-0" />
                    <div>
                      <h3
                        style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                        className="text-lg font-light"
                      >
                        {label}
                      </h3>
                      <p className="text-gray-400 text-xs">{info}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="tel:+3250601280"
                style={{ backgroundColor: '#E41F13', color: '#111111' }}
                className="inline-block px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
              >
                Tafel Reserveren
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RestaurantPageContent
