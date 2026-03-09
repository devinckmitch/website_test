'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function MobileBookingBar() {
  const locale = useLocale()
  const t = useTranslations('nav')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{ backgroundColor: '#c9a84c', zIndex: 40 }}
      className="fixed bottom-0 left-0 right-0 md:hidden py-4 px-4"
    >
      <Link
        href={`/${locale}/golf/green-fees`}
        style={{ backgroundColor: '#1a3d2b', color: 'white' }}
        className="block text-center py-3 text-sm font-medium tracking-[0.1em] uppercase"
      >
        {t('bookNow')} →
      </Link>
    </div>
  )
}
