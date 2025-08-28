'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Corporate Event Manager',
    company: 'Tech Solutions Inc.',
    content: 'PartyBox Company exceeded our expectations for our annual conference. Their attention to detail and professional approach made our event a huge success.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Bride\'s Father',
    company: 'Private Client',
    content: 'They made my daughter\'s wedding day absolutely perfect. From the decorations to the coordination, everything was flawless. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    content: 'We\'ve worked with PartyBox for multiple corporate events. Their creativity and reliability make them our go-to partner for all company celebrations.',
    rating: 5
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-lg text-gray-700 italic mb-8 text-center">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials