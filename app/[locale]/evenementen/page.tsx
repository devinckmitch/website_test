import { getTranslations } from 'next-intl/server'
import { useTranslations, useLocale } from 'next-intl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'events' })
  return { title: t('title') }
}

// Sample events — replaced by Payload CMS data
const sampleEvents = [
  {
    id: 1,
    titleNl: 'Voorjaarstoernooi 2025',
    titleFr: 'Tournoi de printemps 2025',
    titleEn: 'Spring Tournament 2025',
    date: '2025-04-12',
    endDate: '2025-04-13',
    type: 'Tornooi',
  },
  {
    id: 2,
    titleNl: 'Ladies Day — Mei 2025',
    titleFr: 'Ladies Day — Mai 2025',
    titleEn: "Ladies' Day — May 2025",
    date: '2025-05-07',
    endDate: null,
    type: 'Clubevenement',
  },
  {
    id: 3,
    titleNl: 'Clubkampioenschap 2025',
    titleFr: 'Championnat du Club 2025',
    titleEn: 'Club Championship 2025',
    date: '2025-06-14',
    endDate: '2025-06-15',
    type: 'Kampioenschap',
  },
  {
    id: 4,
    titleNl: 'Seniors Medley',
    titleFr: 'Médley Seniors',
    titleEn: 'Seniors Medley',
    date: '2025-07-03',
    endDate: null,
    type: 'Tornooi',
  },
]

function EventsPageContent() {
  const t = useTranslations('events')
  const locale = useLocale()

  const getTitle = (event: (typeof sampleEvents)[0]) => {
    if (locale === 'fr') return event.titleFr
    if (locale === 'en') return event.titleEn
    return event.titleNl
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(
      locale === 'fr' ? 'fr-BE' : locale === 'en' ? 'en-GB' : 'nl-BE',
      { day: 'numeric', month: 'long', year: 'numeric' }
    )
  }

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

      {/* Events list */}
      <section style={{ backgroundColor: '#f5f0e8' }} className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sampleEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow duration-300"
              >
                {/* Date */}
                <div
                  style={{ borderColor: '#c9a84c', borderWidth: '1px', minWidth: '100px' }}
                  className="border p-4 text-center"
                >
                  <div
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                    className="text-3xl font-light leading-none"
                  >
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                    {new Date(event.date).toLocaleDateString(
                      locale === 'fr' ? 'fr-BE' : locale === 'en' ? 'en-GB' : 'nl-BE',
                      { month: 'short' }
                    )}
                  </div>
                  <div style={{ color: '#c9a84c' }} className="text-xs mt-1">
                    {new Date(event.date).getFullYear()}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div
                    style={{ backgroundColor: '#c9a84c', color: '#1c1c1c' }}
                    className="inline-block text-xs px-3 py-1 tracking-widest uppercase mb-3"
                  >
                    {event.type}
                  </div>
                  <h2
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1a3d2b' }}
                    className="text-2xl font-light mb-2"
                  >
                    {getTitle(event)}
                  </h2>
                  <p className="text-gray-400 text-xs">
                    {formatDate(event.date)}
                    {event.endDate && ` — ${formatDate(event.endDate)}`}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <a
                    href="#"
                    style={{ color: '#1a3d2b', borderColor: '#1a3d2b' }}
                    className="border px-6 py-2 text-xs font-medium tracking-widest uppercase hover:bg-[#1a3d2b] hover:text-white transition-all duration-200 block text-center"
                  >
                    Inschrijven
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventsPageContent
