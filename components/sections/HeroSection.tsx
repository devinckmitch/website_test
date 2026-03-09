'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background gradient overlay — replace with actual course photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #000000 0%, #111111 40%, #1a1a1a 70%, #111111 100%)',
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold lines */}
      <div
        className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2"
        style={{ width: '1px', height: '120px', backgroundColor: '#E41F13', opacity: 0.4 }}
      />
      <div
        className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2"
        style={{ width: '1px', height: '120px', backgroundColor: '#E41F13', opacity: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Since badge */}
        <p
          className="text-white/50 text-xs tracking-[0.3em] uppercase mb-8"
          style={{ letterSpacing: '0.3em' }}
        >
          {t('since')}
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} />
          <div
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#E41F13',
              transform: 'rotate(45deg)',
            }}
          />
          <div style={{ width: '40px', height: '1px', backgroundColor: '#E41F13' }} />
        </div>

        {/* Title */}
        <h1
          style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6 leading-tight"
        >
          {t('title')}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div style={{ width: '80px', height: '1px', backgroundColor: '#E41F13' }} />
        </div>

        {/* Tagline */}
        <p
          style={{ fontFamily: 'FreightNeo, Georgia, serif' }}
          className="text-xl md:text-2xl font-light italic text-white/75 mb-12 tracking-wide"
        >
          {t('tagline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/golf/green-fees`}
            style={{ backgroundColor: '#E41F13', color: '#ffffff' }}
            className="px-8 py-4 text-sm font-bold tracking-[0.12em] uppercase hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
          >
            {t('cta')}
          </Link>
          <Link
            href={`/${locale}/club`}
            className="px-8 py-4 text-sm font-medium tracking-[0.12em] uppercase border border-white/40 text-white hover:border-white/80 hover:bg-white/5 transition-all duration-300"
          >
            {t('discover')}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px animate-bounce"
          style={{ height: '40px', backgroundColor: '#E41F13', opacity: 0.6 }}
        />
      </div>
    </section>
  )
}
