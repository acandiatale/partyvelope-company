'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                스마트한 장보기의 시작
                <span className="text-blue-600 block mt-2">파티벨롭</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                실시간 가격 비교, 할인 알림, 장보기 리스트 관리까지<br/>
                모든 쇼핑을 한 곳에서 스마트하게
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#download" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-block text-center">
                  앱 다운로드
                </a>
                <a href="#features" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors inline-block text-center">
                  서비스 소개
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl opacity-20"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-3xl shadow-xl">
                  <div className="text-8xl mb-4">🛒</div>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-bold text-blue-600">100만+</div>
                      <div className="text-gray-600">다운로드</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-600">50만+</div>
                      <div className="text-gray-600">활성 사용자</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-600">1000+</div>
                      <div className="text-gray-600">제휴 매장</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-blue-600">4.8★</div>
                      <div className="text-gray-600">앱 평점</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 앱 소개 섹션 */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              파티벨롭의 핵심 기능
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              쇼핑을 더 편리하고 경제적으로 만들어주는 다양한 기능들
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                실시간 가격 비교
              </h3>
              <p className="text-gray-600">
                주변 마트와 온라인 쇼핑몰의 가격을 실시간으로 비교하여 가장 저렴한 곳을 찾아드립니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                장보기 리스트 관리
              </h3>
              <p className="text-gray-600">
                가족과 공유 가능한 장보기 리스트를 만들고, 카테고리별로 정리하여 효율적인 쇼핑을 도와드립니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                할인 알림
              </h3>
              <p className="text-gray-600">
                관심 상품의 할인 정보를 실시간으로 알려드려 놓치지 않고 구매할 수 있도록 도와드립니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                소비 패턴 분석
              </h3>
              <p className="text-gray-600">
                월별 소비 패턴을 분석하여 합리적인 소비 습관을 만들 수 있도록 인사이트를 제공합니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                포인트 & 쿠폰
              </h3>
              <p className="text-gray-600">
                다양한 제휴사의 포인트와 쿠폰을 한 곳에서 관리하고 자동으로 적용해드립니다.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                배송 추적
              </h3>
              <p className="text-gray-600">
                온라인 구매 상품의 배송 현황을 실시간으로 추적하고 알림을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 앱 다운로드 섹션 */}
      <section id="download" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지금 바로 다운로드하세요
            </h2>
            <p className="text-lg text-white/90 mb-8">
              스마트한 장보기 생활을 시작하고 매달 평균 30% 절약하세요
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#" className="inline-block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.05-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              
              <a href="#" className="inline-block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l13.5-7.8c.5-.29 1.16-.07 1.45.43.15.27.21.57.15.87v.35L5.5 4.5c-.5.29-.5 1.01 0 1.3l13.5 7.8v7.4c0 .59-.34 1.11-.84 1.35l-13.5-7.8c-.5-.29-1.16-.07-1.45.43-.15.27-.21.57-.15.87z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="flex justify-center">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='white'/%3E%3Ctext x='75' y='75' text-anchor='middle' dy='.3em' font-size='12' font-family='monospace'%3EQR Code%3C/text%3E%3C/svg%3E" alt="QR Code" className="bg-white p-2 rounded-lg" />
            </div>
            <p className="text-sm text-white/70 mt-4">
              QR 코드를 스캔하여 바로 다운로드하세요
            </p>
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사용자 후기
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              실제 사용자들의 생생한 후기를 확인하세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;가격 비교 기능 덕분에 매달 장보기 비용을 30% 이상 절약하고 있어요. 정말 유용한 앱입니다!&rdquo;
              </p>
              <p className="font-semibold text-gray-900">김민지</p>
              <p className="text-sm text-gray-500">주부, 서울</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;할인 알림 기능이 정말 좋아요. 필요한 물건을 가장 저렴할 때 구매할 수 있게 되었습니다.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">이준호</p>
              <p className="text-sm text-gray-500">직장인, 부산</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex mb-4">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;가족과 장보기 리스트를 공유할 수 있어서 너무 편해요. 중복 구매도 없어졌고요!&rdquo;
              </p>
              <p className="font-semibold text-gray-900">박서연</p>
              <p className="text-sm text-gray-500">프리랜서, 대전</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}