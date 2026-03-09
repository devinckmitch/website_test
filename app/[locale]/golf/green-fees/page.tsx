import { getTranslations } from 'next-intl/server'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'greenFees' })
  return { title: t('title'), description: t('subtitle') }
}

// Fallback rates if CMS is unavailable
const fallbackRates = [
  { category: 'Championship 18 holes', weekday: 75, weekend: 95 },
  { category: 'Championship 9 holes', weekday: 45, weekend: 55 },
  { category: 'Executive 18 holes', weekday: 55, weekend: 70 },
  { category: 'Executive 9 holes', weekday: 35, weekend: 45 },
]

function GreenFeesContent() {
  const t = useTranslations('greenFees')
  const locale = useLocale()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#1a3d2b' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">
          Royal Zoute Golf Club
        </p>
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

      {/* Main booking CTA — prominent, above the fold after header */}
      <div style={{ backgroundColor: '#c9a84c' }} className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div style={{ fontFamily: 'Cormorant Garamond, serif' }} className="text-xl font-light">
              {t('bookTitle')}
            </div>
            <a
              href="https://www.igolf.be"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#1a3d2b', color: 'white' }}
              className="px-8 py-3 text-xs font-medium tracking-[0.12em] uppercase hover:bg-[#2d5a3d] transition-colors duration-200 whitespace-nowrap"
            >
              {t('bookNow')} →
            </a>
          </div>
        </div>
      </div>

      {/* Rates table */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }}
              className="mx-auto mb-6"
            />
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
              className="text-3xl md:text-4xl font-light"
            >
              Tarieven 2025
            </h2>
          </div>

          {/* Table */}
          <div className="bg-white shadow-sm overflow-hidden">
            {/* Header row */}
            <div
              style={{ backgroundColor: '#1a3d2b' }}
              className="grid grid-cols-3 gap-0"
            >
              <div className="p-4 text-white/80 text-xs font-medium tracking-widest uppercase">
                Baan
              </div>
              <div className="p-4 text-white/80 text-xs font-medium tracking-widest uppercase text-center border-l border-white/10">
                {t('weekday')}
              </div>
              <div className="p-4 text-white/80 text-xs font-medium tracking-widest uppercase text-center border-l border-white/10">
                {t('weekend')}
              </div>
            </div>

            {/* Rows */}
            {fallbackRates.map((rate, i) => (
              <div
                key={rate.category}
                className="grid grid-cols-3 gap-0 border-b border-gray-100"
                style={{ backgroundColor: i % 2 === 0 ? 'white' : '#fafaf8' }}
              >
                <div className="p-4 text-sm text-gray-700">{rate.category}</div>
                <div className="p-4 text-center font-medium" style={{ color: '#1a3d2b' }}>
                  € {rate.weekday}
                </div>
                <div className="p-4 text-center font-medium border-l border-gray-100" style={{ color: '#1a3d2b' }}>
                  € {rate.weekend}
                </div>
              </div>
            ))}
          </div>

          {/* Includes */}
          <div className="mt-10">
            <h3
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
              className="text-xl font-light mb-4"
            >
              {t('includes')}
            </h3>
            <ul className="space-y-2">
              {['Greenfee', 'Gebruik van oefenfaciliteiten', 'Locker room toegang'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                  <div
                    style={{ backgroundColor: '#c9a84c' }}
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Book Now section */}
      <section style={{ backgroundColor: '#1a3d2b' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            style={{ width: '50px', height: '1px', backgroundColor: '#c9a84c' }}
            className="mx-auto mb-8"
          />
          <h2
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
            className="text-white text-4xl font-light mb-6"
          >
            {t('bookTitle')}
          </h2>
          <p className="text-white/60 text-sm mb-10 leading-relaxed max-w-xl mx-auto">
            {t('bookSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.igolf.be"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#c9a84c', color: '#1c1c1c' }}
              className="px-10 py-4 text-sm font-medium tracking-[0.12em] uppercase hover:opacity-90 transition-opacity duration-200"
            >
              {t('bookNow')} →
            </a>
            <a
              href="tel:+3250601280"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
              className="border px-10 py-4 text-sm font-medium tracking-[0.12em] uppercase hover:bg-white/5 transition-colors duration-200"
            >
              +32 (0)50 60 12 80
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }}
              className="mx-auto mb-6"
            />
            <h2
              style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
              className="text-3xl font-light"
            >
              {t('faq')}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is reserveren verplicht?',
                a: 'Ja, een starttijd reserveren is verplicht. Dit kan online via ons boekingssysteem of telefonisch.',
              },
              {
                q: 'Wat is het annuleringsbeleid?',
                a: 'Gratis annuleren tot 48 uur voor uw starttijd. Daarna geldt een annuleringskosten van 50%.',
              },
              {
                q: 'Zijn huurmaterialen beschikbaar?',
                a: "Ja, buggy's en trolleys zijn te huur via de pro shop. Golf sets zijn beschikbaar op aanvraag.",
              },
              {
                q: 'Welke betalingsmethoden worden aanvaard?',
                a: 'We aanvaarden alle gangbare creditcards, bancontact en cash.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-6 shadow-sm">
                <h3
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                  className="text-lg font-light mb-3"
                >
                  {q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GreenFeesContent
