'use client'

import { useTranslations } from 'next-intl'

const FeaturedServices = () => {
  const t = useTranslations('services')

  const services = [
    {
      key: 'corporate',
      icon: '🏢',
    },
    {
      key: 'wedding',
      icon: '💒',
    },
    {
      key: 'birthday',
      icon: '🎂',
    },
    {
      key: 'special',
      icon: '🎉',
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-600 mb-4">
                {t(`${service.key}.description`)}
              </p>
              <ul className="space-y-2">
                {[0, 1, 2, 3].map((idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t(`${service.key}.features.${idx}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices