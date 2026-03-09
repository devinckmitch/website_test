import { getTranslations } from 'next-intl/server'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hotel' })
  return { title: t('title') }
}

function HotelPageContent() {
  const t = useTranslations('hotel')
  const locale = useLocale()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#1a3d2b' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">Knokke · België</p>
        <div
          style={{ width: '50px', height: '1px', backgroundColor: '#c9a84c' }}
          className="mx-auto mb-8"
        />
        <h1
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
          className="text-5xl md:text-6xl font-light mb-6"
        >
          {t('title')}
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">{t('subtitle')}</p>
      </div>

      {/* Main content */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p style={{ color: '#c9a84c' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                Inclusief Green Fee
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                className="text-4xl font-light mb-6"
              >
                Een onvergetelijk golfarrangement
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {t('description')}
              </p>
              <div
                style={{ borderColor: '#c9a84c', borderWidth: '1px' }}
                className="border p-6 mb-8"
              >
                <div
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c' }}
                  className="text-lg font-light mb-2"
                >
                  ✓ {t('benefit')}
                </div>
                <p className="text-gray-500 text-xs">
                  Als hotelgast ontvangt u een gratis green fee op het parcours naar keuze per nacht verblijf.
                </p>
              </div>
              <a
                href="mailto:hotel@rzgc.be"
                style={{ backgroundColor: '#c9a84c', color: '#1c1c1c' }}
                className="inline-block px-8 py-3 text-xs font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
              >
                {t('bookRoom')}
              </a>
            </div>
            <div
              style={{ backgroundColor: '#1a3d2b', minHeight: '450px' }}
              className="flex items-center justify-center"
            >
              <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c', opacity: 0.3 }} className="text-6xl font-light">
                Hotel
              </p>
            </div>
          </div>

          {/* Room types */}
          <div>
            <div className="text-center mb-12">
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                className="text-3xl font-light"
              >
                Onze Kamers & Suites
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Classic Kamer', size: '28m²', features: ['Tuinzicht', 'En-suite badkamer', 'Minibar'] },
                { type: 'Deluxe Kamer', size: '35m²', features: ['Baanzicht', 'Badkup & douche', 'Zithoek'] },
                { type: 'Suite', size: '55m²', features: ['Panoramisch zicht', 'Woonkamer', 'Premium amenities'] },
              ].map(({ type, size, features }) => (
                <div key={type} className="bg-white p-8 shadow-sm">
                  <div style={{ width: '30px', height: '1px', backgroundColor: '#c9a84c' }} className="mb-6" />
                  <h3
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                    className="text-xl font-light mb-1"
                  >
                    {type}
                  </h3>
                  <p style={{ color: '#c9a84c' }} className="text-xs tracking-widest mb-4">
                    {size}
                  </p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="text-gray-400 text-xs flex items-center gap-2">
                        <span style={{ color: '#c9a84c' }}>—</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href="mailto:hotel@rzgc.be"
                      style={{ color: '#1a3d2b' }}
                      className="text-xs font-medium tracking-widest uppercase hover:opacity-70 transition-opacity"
                    >
                      Beschikbaarheid →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package CTA */}
      <section style={{ backgroundColor: '#1a3d2b' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }}
            className="mx-auto mb-8"
          />
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
            className="text-4xl font-light mb-6"
          >
            Golfarrangement op maat
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Contacteer ons voor een persoonlijk arrangement inclusief verblijf, green fees en restaurantreservatie.
          </p>
          <a
            href="mailto:info@rzgc.be"
            style={{ backgroundColor: '#c9a84c', color: '#1c1c1c' }}
            className="inline-block px-10 py-4 text-xs font-medium tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
          >
            Arrangement aanvragen
          </a>
        </div>
      </section>
    </div>
  )
}

export default HotelPageContent
