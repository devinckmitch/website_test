import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'club' })
  return { title: t('title') }
}

function ClubPageContent() {
  const t = useTranslations('club')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-6">Est. 1908</p>
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

      {/* History section */}
      <section style={{ backgroundColor: '#F5F5F5' }} className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p style={{ color: '#E41F13' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                {t('history')}
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-8" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-3xl md:text-4xl font-light mb-6 leading-tight"
              >
                Een rijke golftraditie sedert meer dan een eeuw
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {t('historyText')}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Door de decennia heen heeft de club talrijke nationale en internationale tornooien georganiseerd en verwelkomde ze golflegendes uit de hele wereld. De club is lid van de Koninklijke Belgische Golf Federatie en heeft een rijke palmares in de Belgische golfsport.
              </p>
            </div>
            <div className="lg:col-span-5">
              {[
                { year: '1908', event: 'Oprichting van de club in Knokke' },
                { year: '1920', event: 'Toekenning van het koninklijk predicaat' },
                { year: '1965', event: 'Uitbreiding naar 36 holes' },
                { year: '1985', event: 'Renovatie van Villa Magere Schorre' },
                { year: '2010', event: 'Heraanleg en modernisering van beide banen' },
              ].map(({ year, event }) => (
                <div key={year} className="flex gap-6 mb-8">
                  <div
                    style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13' }}
                    className="text-2xl font-light w-16 flex-shrink-0"
                  >
                    {year}
                  </div>
                  <div>
                    <div style={{ width: '20px', height: '1px', backgroundColor: '#E41F13' }} className="mt-4 mb-3" />
                    <p className="text-gray-500 text-sm">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clubhouse */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              style={{ backgroundColor: '#111111', minHeight: '450px' }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <p
                  style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13', opacity: 0.6 }}
                  className="text-3xl font-light italic"
                >
                  Villa Magere Schorre
                </p>
              </div>
            </div>
            <div>
              <p style={{ color: '#E41F13' }} className="text-xs tracking-[0.3em] uppercase mb-4">
                {t('clubhouse')}
              </p>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-4xl font-light mb-6"
              >
                Villa Magere Schorre
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {t('clubhouseText')}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Het clubhuis herbergt ons restaurant, bar, pro shop, en kleedkamers. De stijlvolle omgeving nodigt uit tot ontspanning voor of na een ronde golf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section style={{ backgroundColor: '#111111' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }}
            className="mx-auto mb-8"
          />
          <h2
            style={{ fontFamily: 'FreightNeo, Georgia, serif', color: 'white' }}
            className="text-4xl font-light mb-6"
          >
            Lid worden
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Nieuwe leden worden voorgesteld door een bestaand lid of kunnen zich zelf-sponsoren. Neem contact op voor meer informatie over lidmaatschap.
          </p>
          <a
            href="mailto:info@rzgc.be"
            style={{ backgroundColor: '#E41F13', color: '#111111' }}
            className="inline-block px-10 py-4 text-xs font-medium tracking-[0.12em] uppercase hover:opacity-90 transition-opacity"
          >
            Informatie aanvragen
          </a>
        </div>
      </section>
    </div>
  )
}

export default ClubPageContent
