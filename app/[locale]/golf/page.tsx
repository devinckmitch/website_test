import { getTranslations } from 'next-intl/server'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'courses' })
  return { title: t('title') }
}

function GolfPageContent() {
  const t = useTranslations('courses')
  const locale = useLocale()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-6">Knokke · België</p>
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

      {/* Championship Course */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p style={{ color: '#E41F13' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                18 Holes · Par 72
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-4xl font-light mb-6"
              >
                {t('championship.name')}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                {t('championship.description')}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { label: 'Par', value: '72' },
                  { label: 'Holes', value: '18' },
                  { label: 'Lengte', value: '6.200m' },
                ].map(({ label, value }) => (
                  <div key={label} className="border border-gray-100 p-4 text-center">
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
                href={`/${locale}/golf/green-fees`}
                style={{ backgroundColor: '#E41F13', color: '#111111' }}
                className="inline-block px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
              >
                Reserveer Green Fee →
              </Link>
            </div>
            <div
              style={{ backgroundColor: '#111111', minHeight: '450px' }}
              className="flex items-center justify-center"
            >
              <p style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13', opacity: 0.3 }} className="text-6xl font-light">
                Championship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Course */}
      <section style={{ backgroundColor: '#F5F5F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              style={{ backgroundColor: '#1a1a1a', minHeight: '450px' }}
              className="flex items-center justify-center order-1 lg:order-1"
            >
              <p style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13', opacity: 0.3 }} className="text-6xl font-light">
                Executive
              </p>
            </div>
            <div className="order-2">
              <p style={{ color: '#E41F13' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                18 Holes · Par 64
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-4xl font-light mb-6"
              >
                {t('executive.name')}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                {t('executive.description')}
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { label: 'Par', value: '64' },
                  { label: 'Holes', value: '18' },
                  { label: 'Lengte', value: '3.550m' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white p-4 text-center">
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
                href={`/${locale}/golf/green-fees`}
                style={{ backgroundColor: '#E41F13', color: '#111111' }}
                className="inline-block px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
              >
                Reserveer Green Fee →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice facilities */}
      <section style={{ backgroundColor: '#111111' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }}
            className="mx-auto mb-8"
          />
          <h2
            style={{ fontFamily: 'FreightNeo, Georgia, serif', color: 'white' }}
            className="text-3xl md:text-4xl font-light mb-6"
          >
            Oefenfaciliteiten
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
            Perfecteer uw spel op onze uitgebreide oefenfaciliteiten, beschikbaar voor alle green fee bezoekers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Driving Range', 'Putting Green', 'Chipping Green', 'Bunker Area'].map((facility) => (
              <div key={facility} className="border border-white/10 p-6">
                <div style={{ color: '#E41F13' }} className="text-sm tracking-widest uppercase">
                  {facility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GolfPageContent
