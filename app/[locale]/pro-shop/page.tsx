import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('proShop') }
}

export default function ProShopPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-6">Equipment & Advies</p>
        <div
          style={{ width: '50px', height: '1px', backgroundColor: '#E41F13' }}
          className="mx-auto mb-8"
        />
        <h1
          style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
          className="text-5xl md:text-6xl font-light mb-6"
        >
          Pro Shop
        </h1>
        <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
          Topmerken, professioneel advies en alles wat u nodig heeft voor een perfecte golfdag
        </p>
      </div>

      {/* Content */}
      <section style={{ backgroundColor: '#F5F5F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} className="mb-6" />
              <h2
                style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                className="text-4xl font-light mb-6"
              >
                Uw golfspecialist
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                Onze professionele pro shop team staat klaar om u te adviseren over materiaal, kledinglijn en accessoires. We voeren de beste merken en bieden gepersonaliseerde fitting sessies aan.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Clubs & Equipment', 'Golfkleding', 'Accessoires', 'Club Fitting', "Buggy's & Trolleys", 'Golfballen'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <div style={{ width: '20px', height: '1px', backgroundColor: '#E41F13' }} />
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Openingsuren</p>
                <p className="text-gray-600 text-sm">Dagelijks 08:00 – 18:00</p>
                <p className="text-gray-400 text-xs mt-1">Seizoensgebonden aanpassingen mogelijk</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: '#111111', minHeight: '400px' }}
              className="flex items-center justify-center"
            >
              <p style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#E41F13', opacity: 0.3 }} className="text-6xl font-light">
                Pro Shop
              </p>
            </div>
          </div>

          {/* Brands */}
          <div className="text-center">
            <div
              style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }}
              className="mx-auto mb-8"
            />
            <h2
              style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
              className="text-3xl font-light mb-12"
            >
              Onze merken
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {['Titleist', 'Callaway', 'TaylorMade', 'Ping', 'FootJoy', 'Oakley'].map((brand) => (
                <div
                  key={brand}
                  className="bg-white p-4 text-center text-sm text-gray-400 tracking-wider border border-gray-100"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
