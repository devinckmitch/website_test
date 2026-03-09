import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  return { title: slug.replace(/-/g, ' ') }
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  return (
    <div className="min-h-screen">
      <div
        style={{ backgroundColor: '#111111' }}
        className="pt-32 pb-20 px-4 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/${locale}/nieuws`}
            className="text-white/50 hover:text-white text-xs tracking-widest uppercase mb-8 block transition-colors"
          >
            ← Terug naar nieuws
          </Link>
          <div
            style={{ width: '50px', height: '1px', backgroundColor: '#E41F13' }}
            className="mb-8"
          />
          <h1
            style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
            className="text-4xl md:text-5xl font-light leading-tight"
          >
            {slug.replace(/-/g, ' ')}
          </h1>
        </div>
      </div>

      <section style={{ backgroundColor: '#F5F5F5' }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gray-500 text-sm leading-relaxed">
            Dit artikel wordt geladen vanuit het Payload CMS. Voeg artikelen toe via{' '}
            <code className="bg-white px-1 py-0.5 text-xs">/admin</code>.
          </p>
        </div>
      </section>
    </div>
  )
}
