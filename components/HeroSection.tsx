'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

const HeroSection = () => {
  const t = useTranslations('hero')
  const params = useParams()
  const locale = params.locale as string

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
              <span className="text-primary-600"> {t('titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={`/${locale}/services`} className="btn-primary inline-block text-center">
                {t('cta.services')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn-secondary inline-block text-center">
                {t('cta.quote')}
              </Link>
            </div>
          </div>
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary-600">500+</div>
                    <div className="text-gray-600">{t('stats.events')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">1000+</div>
                    <div className="text-gray-600">{t('stats.clients')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">50+</div>
                    <div className="text-gray-600">{t('stats.team')}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">10+</div>
                    <div className="text-gray-600">{t('stats.experience')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection