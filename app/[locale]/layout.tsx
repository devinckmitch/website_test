import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBookingBar from '@/components/ui/MobileBookingBar'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Royal Zoute Golf Club',
    default: 'Royal Zoute Golf Club — Knokke, België',
  },
  description:
    'Royal Zoute Golf Club — Een koninklijke golfervaring op de Belgische kust. 36 holes, boutique hotel, restaurant en pro shop in Knokke.',
  openGraph: {
    siteName: 'Royal Zoute Golf Club',
    type: 'website',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'nl' | 'fr' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
          <MobileBookingBar />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
