## 소개
2019년부터 광고 플랫폼 개발자로 일했으며,

웹 개발 위주의 경험을 쌓았으며 약간의 데이터 처리 관련 경험도 가지고 있습니다.

개발 경험을 쌓으면서 중요시 했던 부분은 가독성 높은 코드 퀄리티와 안정적인 서비스 배포입니다.
## 주요 보유 기술
프로그래밍 언어: javascript, java, kotlin, sql(mysql)

프레임워크: spring framework, vue.js
## 주요 경력 사항
회사: NHN PAYCO

재직 기간: 2019.03 - 현재
## 주요 개발 경험
### 2024
- 쿠폰발급형 배너 개발 (11 ~ 12월)
	- 프론트
		- 매장 리스트, 가맹점 불러오기 팝업 개발
		- 매장 리스트 vue.js Slot 적용 리팩토링
	- 백엔드
		- 매장 ORM MyBatis -> JPA 전환
		- 매장 조회 API 통합
		- 가맹점 위치 조회 API 연동 개발
	- 기술스택
		- spring boot 2.7 (mvc, mybatis, jpa, kotlin, mysql 8)
		- vue js 2 (javascript)
- 정률 쿠폰 할인율 소수점 적용 (11월)
	- 쿠폰 API 사용처 및 사이드 이펙트 조사
	- 백엔드
		- 쿠폰 API 응답값 변경 (Integer -> BigDecimal)
	- 기술스택
		- spring boot 2.7 (mvc, batch, mybatis, jpa, kotlin, java, mysql 8)
		- uwsgi (python 3, mysql 8)
- OS CentOs7 -> Ubuntu22 변경 (03 ~ 10월)
	- 알파 서버 스펙/현황/애플리케이션/기술스택(현재 버전, 신규 버전, 마이그레이션 가이드, 페이드 아웃 여부) 조사 및 재분류 (03 ~ 04월)
	- 서버
		- 알파/리얼 DB 이전 (03 ~ 05월)
		- 배치 잡 네이밍 규칙 통일 및 불필요 배치 페이드 아웃 (04, 06월)
		- 신규 알파 서버 nginx 설치 및 프로메테우스 - 그라파나 설정 (04, 06월)
		- 신규 알파/베타 서버 애플리케이션 설치 (04, 06월)
		- 신규 서버 모니터링 설정 (07월)
		- 신규 리얼 서버 세팅 및 IP 이전 (07월)
		- 서버 설정 위키 최신화 (08 ~ 09월)
			- 기술스택 설정값, 서버 설정값, 쉘 스크립트 등
		- 젠킨스 배치 잡 이전 (09 ~ 10월)
			- 배치 잡 실패 시 영향도 조사, 대응 시나리오 작성
			- 애플리케이션/기술스택 별 사용 포트 조사 및 재할당
	- 기술스택
		- linux (CentOS 7, Ubuntu 22)
		- nginx-openresty, grafana(nginx-exporter), jenkins
		- mysql 8
- 바이럴형 컬렉션 댓글 기능 개발 (07 ~ 09월)
	- 프론트 + 백엔드
		- 관리자 기능 개발 (댓글/유저/어드민/기타 설정 관리)
	- 백엔드
		- 배너 API에 댓글 추가
		- 댓글 관련 entity를 공통 모듈로 작업해서 재사용
		- 댓글 관련 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, jpa, redis, java, mysql 8)
		- uwsgi (python 3, mysql 8)
- 혜택 홈 개편 (04 ~ 06월)
	- 프론트 + 백엔드
		- 가맹점 혜택 설정 기능 개발
		- 리포트 정상 인입 확인, 크롤링 파라미터 유효성 검사 변경 개발, 쿠폰 정보 추가 저장 개발
		- 쿠폰 다운로드 페이지 개편 작업
	- 백엔드
		- 이벤트 페이지 HTML 파싱 & 쿠폰 다운로드 페이지 HTML 생성 역할과 쿠폰 정보(DB) 불러오기 역할이 섞인 부분을 각각의 영역으로 분리 리팩토링 작업
	- 기술스택
		- spring boot 2.7 (mvc, jsp, mybatis, jpa, kotlin, java, mysql 8)
		- uwsgi (python 3, mysql 8)
		- vue js 2 (javascript)
- 모여서 쿠폰 쓰기 달성 독려 푸시 배치 개발 (01 ~ 02월)
	- 프론트 + 백엔드
		- 푸시 알림/소재 관리 페이지 개발
		- 어드민 미사용 페이지 제거
	- 백엔드
		- 미달성 모임 대상자에게 푸시 발송 배치 개발
		- 푸시 API 클라이언트 모듈 리팩토링 및 공통 모듈로 변경해 코드 중복 제거
		- 푸시 알림/소재 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, batch, jsp, mybatis, java, mysql 8)
### 2023
- 웹서비스 전환 (11월 ~ 2024년 02월)
	- 프론트
		- 기존 모바일 웹뷰로만 제공되는 이벤트 페이지를 PC사용자에게도 제공하도록개편
	- 프론트 + 백엔드
		- 미사용 페이지 페이드 아웃
	- 백엔드
		- 이벤트 페이지/쿠폰 다운로드 페이지 HTML 파싱 & 쿠폰 정보(API) 설정하는 역할이 섞인 부분을 각각의 영역으로 분리 리팩토링 작업
		- HTML 프로세서 인터페이스를 만들어 기능 별로 분리하여 이벤트 페이지/쿠폰 다운로드 페이지에서 필요한 기능만 재사용하도록 리팩토링하여 코드 중복 제거
		- 앱 UA 파싱 기능 공통 모듈로 이동하여 코드 중복 제거 및 RequestContextHolder(ThreadLocal) 의존성 제거하도록 리팩토링
	- 기술스택
		- spring boot 2.7 (mvc, jsp, java)
- 상계 시스템 개발 (10 ~ 11월)
	- 광고비를 정산 시스템에 상계 요청하는 시스템
	- 프론트 + 백엔드
		- CLO센터 상계 내역 페이지 개발
	- 백엔드
		- 결제 내역 저장 배치에서 상계를 위한 데이터도 저장하도록 수정
		- 상계 관련 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, mybatis, kotlin, java, mysql 8)
		- vue js 2 (javascript)
- 모여서 쿠폰 쓰기 서비스 개발 (08 ~ 09월)
	- 모임을 만들어 결제한 유저에게 추가 헤택을 주는 기능
	- 프론트 + 백엔드
		- CLO센터 모쿠쓰 리포트 페이지 개발
		- 기존 리포트 페이지와 분리 제안
	- 백엔드
		- 모쿠쓰 리포트 배치 개발
		- 모쿠쓰 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, mybatis, kotlin, java, mysql 8)
		- vue js 2 (javascript)
- 쇼핑적립 데이터 검수 자동화 개발 (06 ~ 08월)
	- 매달 수기반영하는 데이터 검수를 자동화 가능해 보여 제안
	- 어드민 페이지 기획 & 개발 & 가이드 작성 공유
	- 매달 수기반영하는 데이터 패턴 조사 및 담당자 실수 시 롤백 시나리오 작성
	- 프론트 + 백엔드
		- 데이터 검수 페이지 개발 (적립 수수료 변경/거래 상태 변경/변경 전 히스토리 조회 & CSV 다운로드)
	- 백엔드
		- 수수료 적립 히스토리 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, mybatis, jsp, java, mysql 8)
		- javascript, tui-grid, tui-datetime-picker
- 추천 브랜드 컬렉션 개발 (02 ~ 03월)
	- 사용자가 검색한 키워드를 기반으로 추천해주는 서비스
	- 검색 컬렉션 설정, 리포트 페이지 개발
	- 모델링 시스템으로 데이터 전달 배치 개발
- 과금 시스템 개선
	- 광고별 과금을 쿠폰별 과금 설정할 수 있도록 개선
- 쇼핑적립 시스템 유지보수
	- 수기 처리되던 데이터 검수 자동화
	- MySQL 버전업
- 배치 기능 개선
	- 로깅 시스템 개선
	- 배치 오류 시 알림 기능 추가
### 2022
- CLO 센터 구축
	- 프로모션 예산 배치
	- 캠페인 상태 변경 배치
	- 연계 매출 동기화 배치
	- 보안 취약점 대응 - CSV Injection
- 결제사 연계 시스템 구축
	- Rest API 설계
	- 캠페인 조회 API 개발
	- 프로젝트 설정 (모니터링, WebClient 등)
- Spring Boot 버전업
- 쇼핑적립 시스템 인수인계
### 2021
- DisplayAd 리타게팅 시스템 개발
	- 레디스, API 서버 장비 세팅
	- 노출/클릭 API 개발
	- 집계 배치 개발
	- 리포트 속도 개선
- 광고주센터 2차 인증 기능 개발
- 쿠폰홈 개편
- 배너 디자인 변경 개발
- 광고주센터 캠페인 복사 기능 개발
### 2020
- 광고주센터
	- 검색 가맹점 키워드 관리 기능 개발
	- 광고주 관리 기능 개선
	- 내 주변 쿠폰, 정보형 캠페인 개발
- 어필리에이트 오류 대응
- 이벤트 공유하기 기능 개발
### 2019
- 광고주센터 개발
	- 캠페인 관리
	- 광고주 관리
	- 결제 관리
	- 캠페인 생성/수정 (이벤트 페이지)
- 페이코 홈 개편 대응 개발
- 신입사원 기술 교육

