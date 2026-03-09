import { getTranslations } from 'next-intl/server'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'news' })
  return { title: t('title') }
}

// Sample news data — will be replaced with Payload CMS data
const sampleNews = [
  {
    slug: 'clubkampioenschap-2025',
    titleNl: 'Clubkampioenschap 2025 — Inschrijvingen open',
    titleFr: 'Championnat du Club 2025 — Inscriptions ouvertes',
    titleEn: 'Club Championship 2025 — Registration Open',
    publishedAt: '2025-03-01',
    excerpt: 'Schrijf u nu in voor het jaarlijkse clubkampioenschap. Speel op beide banen en strijd voor de prestigieuze clubtitel.',
  },
  {
    slug: 'renovatie-clubhuis-voltooid',
    titleNl: 'Renovatie terras clubhuis voltooid',
    titleFr: 'Rénovation de la terrasse du clubhouse terminée',
    titleEn: 'Clubhouse Terrace Renovation Completed',
    publishedAt: '2025-02-15',
    excerpt: 'Na weken van werken zijn we trots te melden dat het terras van Villa Magere Schorre volledig gerenoveerd is.',
  },
  {
    slug: 'nieuwe-pro-shop',
    titleNl: 'Nieuwe collectie zomer 2025 in de pro shop',
    titleFr: 'Nouvelle collection été 2025 au pro shop',
    titleEn: 'New Summer 2025 Collection in the Pro Shop',
    publishedAt: '2025-02-01',
    excerpt: 'Ontdek de nieuwste golfmode en equipment van topmerken als Titleist, Callaway en FootJoy.',
  },
]

function NewsPageContent() {
  const t = useTranslations('news')
  const locale = useLocale()

  const getTitle = (article: (typeof sampleNews)[0]) => {
    if (locale === 'fr') return article.titleFr
    if (locale === 'en') return article.titleEn
    return article.titleNl
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-center text-white"
      >
        <p className="text-[#E41F13] text-xs tracking-[0.3em] uppercase mb-6">
          Royal Zoute Golf Club
        </p>
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

      {/* News grid */}
      <section style={{ backgroundColor: '#F5F5F5' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleNews.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/nieuws/${article.slug}`}
                className="group bg-white hover:shadow-md transition-shadow duration-300"
              >
                {/* Image placeholder */}
                <div
                  style={{ backgroundColor: '#111111', height: '200px' }}
                  className="flex items-center justify-center overflow-hidden"
                >
                  <div
                    style={{ color: '#E41F13', opacity: 0.2, fontFamily: 'FreightNeo, Georgia, serif' }}
                    className="text-4xl font-light"
                  >
                    RZGC
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">
                    {new Date(article.publishedAt).toLocaleDateString(
                      locale === 'fr' ? 'fr-BE' : locale === 'en' ? 'en-GB' : 'nl-BE',
                      { day: 'numeric', month: 'long', year: 'numeric' }
                    )}
                  </p>
                  <div
                    style={{ width: '30px', height: '1px', backgroundColor: '#E41F13' }}
                    className="mb-4 group-hover:w-16 transition-all duration-300"
                  />
                  <h2
                    style={{ fontFamily: 'FreightNeo, Georgia, serif', color: '#111111' }}
                    className="text-xl font-light mb-3 leading-snug"
                  >
                    {getTitle(article)}
                  </h2>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{article.excerpt}</p>
                  <span
                    style={{ color: '#111111' }}
                    className="text-xs font-medium tracking-widest uppercase group-hover:opacity-70 transition-opacity"
                  >
                    {t('readMore')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPageContent
