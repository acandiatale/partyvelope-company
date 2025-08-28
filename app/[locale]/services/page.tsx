'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

const services = {
  corporate: {
    title: 'Corporate Events',
    description: 'Professional event solutions for businesses',
    items: [
      {
        name: 'Conferences & Seminars',
        description: 'Full-scale conference planning with AV equipment, catering, and logistics',
        price: 'From $5,000',
        features: ['Venue Selection', 'Technical Setup', 'Catering Services', 'Guest Management']
      },
      {
        name: 'Team Building Events',
        description: 'Engaging activities to strengthen team bonds and boost morale',
        price: 'From $2,000',
        features: ['Activity Planning', 'Venue Arrangement', 'Refreshments', 'Professional Facilitators']
      },
      {
        name: 'Product Launches',
        description: 'Memorable launch events that create buzz for your products',
        price: 'From $8,000',
        features: ['Event Design', 'Media Coverage', 'Guest Experience', 'Brand Activation']
      },
      {
        name: 'Corporate Galas',
        description: 'Elegant evening events for awards, fundraisers, and celebrations',
        price: 'From $10,000',
        features: ['Theme Development', 'Entertainment', 'Fine Dining', 'Award Ceremonies']
      }
    ]
  },
  weddings: {
    title: 'Wedding Celebrations',
    description: 'Making your special day absolutely perfect',
    items: [
      {
        name: 'Full Wedding Planning',
        description: 'Complete wedding coordination from engagement to honeymoon',
        price: 'From $15,000',
        features: ['Venue Selection', 'Vendor Management', 'Day-of Coordination', 'Design & Decor']
      },
      {
        name: 'Partial Planning',
        description: 'Professional assistance with specific aspects of your wedding',
        price: 'From $5,000',
        features: ['Vendor Recommendations', 'Timeline Creation', 'Budget Management', 'Consultation']
      },
      {
        name: 'Day-of Coordination',
        description: 'Ensure your wedding day runs smoothly with our coordinators',
        price: 'From $2,000',
        features: ['Vendor Coordination', 'Timeline Management', 'Problem Solving', 'Guest Assistance']
      },
      {
        name: 'Destination Weddings',
        description: 'Dream weddings in exotic locations around the world',
        price: 'Custom Quote',
        features: ['Location Scouting', 'Travel Coordination', 'Local Vendor Network', 'Guest Services']
      }
    ]
  },
  birthday: {
    title: 'Birthday Parties',
    description: 'Celebrations for all ages and styles',
    items: [
      {
        name: 'Kids Birthday Parties',
        description: 'Fun-filled parties with themes, games, and entertainment',
        price: 'From $500',
        features: ['Theme Selection', 'Entertainment', 'Party Supplies', 'Cake & Refreshments']
      },
      {
        name: 'Sweet 16 / Quinceañera',
        description: 'Milestone celebrations with style and elegance',
        price: 'From $3,000',
        features: ['Venue Decoration', 'DJ & Music', 'Photography', 'Catering']
      },
      {
        name: 'Adult Birthday Parties',
        description: 'Sophisticated celebrations for any milestone',
        price: 'From $1,500',
        features: ['Custom Themes', 'Entertainment Options', 'Catering Services', 'Bar Services']
      },
      {
        name: 'Surprise Parties',
        description: 'Perfectly executed surprises that create lasting memories',
        price: 'From $1,000',
        features: ['Secret Planning', 'Guest Coordination', 'Surprise Setup', 'Memory Capture']
      }
    ]
  },
  special: {
    title: 'Special Occasions',
    description: 'Every celebration deserves to be special',
    items: [
      {
        name: 'Anniversary Celebrations',
        description: 'Romantic celebrations for couples marking milestones',
        price: 'From $2,000',
        features: ['Venue Selection', 'Romantic Decor', 'Special Dining', 'Memory Lane Setup']
      },
      {
        name: 'Graduation Parties',
        description: 'Celebrate academic achievements in style',
        price: 'From $1,000',
        features: ['Venue Setup', 'Catering', 'Photo Booth', 'Achievement Display']
      },
      {
        name: 'Baby Showers',
        description: 'Welcoming new arrivals with joy and celebration',
        price: 'From $800',
        features: ['Theme Design', 'Games & Activities', 'Gift Management', 'Refreshments']
      },
      {
        name: 'Holiday Parties',
        description: 'Seasonal celebrations for any holiday',
        price: 'From $1,500',
        features: ['Seasonal Decor', 'Themed Entertainment', 'Holiday Menu', 'Activity Planning']
      }
    ]
  }
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('corporate')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to create unforgettable experiences
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.keys(services).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {services[category as keyof typeof services].title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {services[activeCategory as keyof typeof services].title}
            </h2>
            <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {services[activeCategory as keyof typeof services].description}
            </p>

            {/* Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id={activeCategory}>
              {services[activeCategory as keyof typeof services].items.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <span className="text-primary-600 font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Entertainment</h3>
              <p className="text-gray-600">DJs, live bands, performers, and entertainers for any event</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Photography & Video</h3>
              <p className="text-gray-600">Professional photographers and videographers to capture memories</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Catering Services</h3>
              <p className="text-gray-600">Full-service catering with customizable menus for any taste</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Decor</h3>
              <p className="text-gray-600">Custom themes, floral arrangements, and venue transformation</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transportation</h3>
              <p className="text-gray-600">Guest transportation and logistics coordination</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Party Rentals</h3>
              <p className="text-gray-600">Tables, chairs, tents, and all event equipment rentals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your specific needs and let&apos;s create something amazing together
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Your Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}