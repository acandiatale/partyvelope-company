'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from 'react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleChange = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPathname)
    })
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleChange('ko')}
        disabled={isPending}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          locale === 'ko'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        한국어
      </button>
      <button
        onClick={() => handleChange('en')}
        disabled={isPending}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-primary-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        English
      </button>
    </div>
  )
}