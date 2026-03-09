import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/sections/HeroSection'
import BookingBanner from '@/components/sections/BookingBanner'
import CourseHighlights from '@/components/sections/CourseHighlights'
import FacilitiesGrid from '@/components/sections/FacilitiesGrid'
import ClubStory from '@/components/sections/ClubStory'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })

  return {
    title: 'Royal Zoute Golf Club — Knokke, België',
    description: t('tagline'),
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingBanner />
      <CourseHighlights />
      <ClubStory />
      <FacilitiesGrid />
    </>
  )
}
