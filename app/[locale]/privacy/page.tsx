'use client'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">개인정보보호약관</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 개인정보의 수집 및 이용목적</h2>
            <p className="text-gray-600 leading-relaxed">
              파티벨롭(이하 &ldquo;회사&rdquo;)은 다음과 같은 목적을 위하여 개인정보를 수집 및 이용합니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>회원가입 및 관리</li>
              <li>서비스 제공 및 운영</li>
              <li>맞춤형 쇼핑 정보 제공</li>
              <li>마케팅 및 프로모션 활용</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 수집하는 개인정보 항목</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">필수 항목</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
              <li>이메일 주소</li>
              <li>비밀번호</li>
              <li>닉네임</li>
              <li>휴대전화번호</li>
            </ul>
            
            <h3 className="text-lg font-medium text-gray-700 mb-2">선택 항목</h3>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>생년월일</li>
              <li>성별</li>
              <li>주소</li>
              <li>관심 카테고리</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 개인정보의 보유 및 이용기간</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.
              단, 관련 법령에 의거하여 보존할 필요가 있는 경우 회사는 아래와 같이 관련 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
              <li>표시/광고에 관한 기록: 6개월</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>이용자들이 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-600 leading-relaxed">
              회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>개인정보 취급 직원의 최소화 및 교육</li>
              <li>내부관리계획의 수립 및 시행</li>
              <li>해킹 등에 대비한 기술적 대책</li>
              <li>개인정보의 암호화</li>
              <li>접속기록의 보관 및 위변조 방지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 이용자의 권리와 행사 방법</h2>
            <p className="text-gray-600 leading-relaxed">
              이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 회원탈퇴를 요청할 수도 있습니다.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-600 space-y-1">
              <li>개인정보 조회 및 수정: 앱 내 &apos;마이페이지&apos; 메뉴</li>
              <li>회원탈퇴: 앱 내 &apos;설정&apos; &gt; &apos;계정&apos; &gt; &apos;회원탈퇴&apos;</li>
              <li>개인정보보호 관련 문의: partyvelope@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. 개인정보 보호책임자</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">개인정보 보호책임자</p>
              <ul className="text-gray-600 space-y-1">
                <li>성명: 김보안</li>
                <li>직책: 정보보호팀장</li>
                <li>이메일: partyvelope@gmail.com</li>
                <li>전화번호: 02-1234-5678</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. 개인정보처리방침의 변경</h2>
            <p className="text-gray-600 leading-relaxed">
              이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              공고일자: 2024년 1월 1일<br/>
              시행일자: 2024년 1월 1일
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}