import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return { title: t('title') }
}

function ContactPageContent() {
  const t = useTranslations('contact')

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

      {/* Content */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }} className="mb-8" />
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                className="text-3xl font-light mb-10"
              >
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2">{t('address')}</h3>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }} className="text-lg font-light">
                    Caddiespad 14<br />
                    8300 Knokke-Heist<br />
                    België
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2">{t('phone')}</h3>
                  <a
                    href="tel:+3250601280"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                    className="text-lg font-light hover:opacity-70 transition-opacity"
                  >
                    +32 (0)50 60 12 80
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2">{t('email')}</h3>
                  <a
                    href="mailto:info@rzgc.be"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                    className="text-lg font-light hover:opacity-70 transition-opacity"
                  >
                    info@rzgc.be
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-2">{t('hours')}</h3>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }} className="text-lg font-light">
                    {t('hoursValue')}
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                style={{ backgroundColor: '#1a3d2b', marginTop: '2.5rem' }}
                className="h-48 flex items-center justify-center"
              >
                <p className="text-white/30 text-sm">Kaart — Knokke, België</p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#c9a84c' }} className="mb-8" />
              <h2
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                className="text-3xl font-light mb-10"
              >
                Stuur een bericht
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3d2b] transition-colors"
                      placeholder="Jan Janssen"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3d2b] transition-colors"
                      placeholder="jan@voorbeeld.be"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                    {t('form.subject')}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3d2b] transition-colors"
                    placeholder="Green fee reservatie / Lidmaatschap / ..."
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-400 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#1a3d2b] transition-colors resize-none"
                    placeholder="Uw bericht..."
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#1a3d2b', color: 'white' }}
                  className="w-full py-4 text-xs font-medium tracking-[0.12em] uppercase hover:bg-[#2d5a3d] transition-colors duration-200"
                >
                  {t('form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPageContent
