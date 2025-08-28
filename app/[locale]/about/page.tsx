import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - PartyBox Company',
  description: 'Learn about PartyBox Company, our mission, values, and the team behind unforgettable events.',
}

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO & Founder',
    bio: 'With over 15 years in event management, Sarah founded PartyBox to bring joy to every celebration.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'David Chen',
    role: 'Creative Director',
    bio: 'David brings innovative design concepts to life, ensuring each event is unique and memorable.',
    image: '/images/team/david.jpg'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Operations Manager',
    bio: 'Maria ensures seamless execution of events with her exceptional organizational skills.',
    image: '/images/team/maria.jpg'
  },
  {
    name: 'James Wilson',
    role: 'Head of Marketing',
    bio: 'James connects PartyBox with clients who seek extraordinary event experiences.',
    image: '/images/team/james.jpg'
  }
]

const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every detail of your event.',
    icon: '⭐'
  },
  {
    title: 'Creativity',
    description: 'Innovation and imagination drive our unique event solutions.',
    icon: '🎨'
  },
  {
    title: 'Reliability',
    description: 'You can count on us to deliver on our promises, every time.',
    icon: '🤝'
  },
  {
    title: 'Passion',
    description: 'We love what we do, and it shows in every event we create.',
    icon: '❤️'
  }
]

const milestones = [
  { year: '2014', event: 'PartyBox Company founded' },
  { year: '2016', event: 'Expanded to corporate events' },
  { year: '2018', event: 'Opened second location' },
  { year: '2020', event: 'Launched virtual event services' },
  { year: '2022', event: 'Celebrated 500+ successful events' },
  { year: '2024', event: '10 years of making memories' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            About PartyBox Company
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            For over a decade, we&apos;ve been transforming ordinary gatherings into extraordinary experiences
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At PartyBox Company, our mission is to create unforgettable moments that bring people together. 
                We believe every celebration deserves to be extraordinary, regardless of size or budget.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Since our founding in 2014, we&apos;ve dedicated ourselves to providing comprehensive event solutions 
                that combine creativity, professionalism, and attention to detail.
              </p>
              <p className="text-lg text-gray-600">
                From intimate birthday parties to large corporate conferences, we approach each event with 
                the same commitment to excellence that has made us a trusted name in event management.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary-600 font-bold mr-4 min-w-[60px]">{milestone.year}</span>
                    <span className="text-gray-600">{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our talented team of event professionals is dedicated to making your vision a reality
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recognition & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Event Company 2023</h3>
              <p className="text-gray-600">City Business Awards</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Event Industry Association</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Choice Award</h3>
              <p className="text-gray-600">2022 & 2023 Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to make your next event unforgettable
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}