import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import '../globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'], 
  variable: '--font-noto-sans-kr',
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: '파티벨롭 - 스마트한 장보기의 시작',
  description: '실시간 가격 비교, 할인 알림, 장보기 리스트 관리까지. 매달 30% 절약하는 스마트 쇼핑 앱',
  keywords: '파티벨롭, 장보기앱, 가격비교, 할인알림, 쇼핑리스트, 마트가격비교, 온라인쇼핑',
  authors: [{ name: '파티벨롭' }],
  openGraph: {
    title: '파티벨롭 - 스마트한 장보기의 시작',
    description: '실시간 가격 비교로 매달 30% 절약하는 스마트 쇼핑 앱',
    url: 'https://partyvelope.myshofit.com',
    siteName: '파티벨롭',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '파티벨롭 - 스마트한 장보기의 시작',
    description: '실시간 가격 비교로 매달 30% 절약하는 스마트 쇼핑 앱',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${notoSansKr.variable} ${locale === 'ko' ? 'font-noto-sans-kr' : 'font-inter'}`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}