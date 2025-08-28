'use client'

import { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Events
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to our newsletter and get exclusive offers, event tips, and party planning guides
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 text-white font-medium">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-200 font-medium">
              Something went wrong. Please try again later.
            </p>
          )}
          
          <p className="mt-6 text-sm text-white/70">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection