import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: '회사소개', href: '/about' },
      { name: '채용정보', href: '/careers' },
      { name: '공지사항', href: '/notice' },
      { name: '문의하기', href: '/contact' },
    ],
    service: [
      { name: '서비스 소개', href: '/#features' },
      { name: '다운로드', href: '/#download' },
      { name: '사용 가이드', href: '/guide' },
      { name: '자주 묻는 질문', href: '/faq' },
    ],
    legal: [
      { name: '개인정보보호약관', href: '/privacy' },
      { name: '이용약관', href: '/terms' },
      { name: '위치기반서비스 약관', href: '/location-terms' },
      { name: '쿠키 정책', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    { name: 'Blog', href: 'https://blog.naver.com', icon: 'M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">파티벨롭</h3>
              <p className="text-gray-400">스마트한 장보기 서비스</p>
            </div>
            <p className="text-gray-400 mb-4">
              실시간 가격 비교로<br/>
              매달 30% 절약하는 스마트 쇼핑 앱
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-white mb-4">회사</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">법적 고지</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm">
                <strong>주식회사 파티벨롭</strong><br/>
                대표이사: 김대표 | 사업자등록번호: 123-45-67890<br/>
                통신판매업신고: 2024-서울강남-0001
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400 text-sm">
                <strong>고객센터</strong><br/>
                전화: 1588-1234 (평일 09:00-18:00)<br/>
                이메일: partyvelope@gmail.com
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 pt-4 border-t border-gray-800">
            <p>&copy; {currentYear} 파티벨롭. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer