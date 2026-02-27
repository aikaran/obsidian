## 주요 경력 사항
회사: NHN PAYCO

재직 기간: 2019.03 - 현재
## 핵심 역량

- Java/Spring 기반 대규모 광고 플랫폼 백엔드 개발
- 이벤트 페이지 프론트엔드(JSP/JavaScript) 개발
- 데이터 파이프라인 설계 및 배치 시스템 운영
- Python 기반 웹 크롤러 개발 및 유지보수
- 인프라 모니터링 및 보안 취약점 대응

---

## 기술 스택

| 영역       | 기술                                                          |
| -------- | ----------------------------------------------------------- |
| Backend  | Java, Spring Framework, Spring Boot, JPA/Hibernate, MyBatis |
| Frontend | JSP, JavaScript, jQuery                                     |
| Database | MySQL, Redis Cluster                                        |
| Batch    | Spring Batch, Quartz Scheduler                              |
| Infra    | Nginx/OpenResty (Lua), Jenkins, Grafana, Prometheus         |
| Crawler  | Python, REST API Reverse Engineering, HTML Parsing          |
| Tools    | Git, GitHub Enterprise, Dooray (프로젝트 관리)                    |
## 주요 개발 경험
### 쿠폰 강화 시스템 신규 개발 (2025.12 ~ 2026.02)

**개요**: 기존 쿠폰에 게임화(Gamification) 요소를 접목한 강화 시스템 설계 및 개발. 사용자가 카드를 선택하여 쿠폰 할인율을 랜덤으로 강화하는 기능.

**담당 영역**:

- 아키텍처 설계: 강화 페이지, 트래픽 로그, 로그 시스템 전반의 설계 문서 작성
- 기능 명세서 작성 및 구현
- 일별 발급/사용 리포트 지표 신규 추가 (Batch 집계 + Admin 조회/엑셀 다운로드)

**기술적 성과**:

- **시간 기반 구간 매핑 컴포넌트 설계**: 발급 기간을 시간대별로 분할 관리하는 공통 컴포넌트를 개발하여 재사용성 확보
- **Redis Cluster 기반 사용자 세그먼트 관리**: 테스트 그룹 및 유저 세그먼트를 Redis에서 실시간 조회하여 A/B 테스트 지원
- **트래픽 로그 체계 설계**: 서비스 페이지 진입 → 발급 완료 → 사용까지의 전체 퍼널을 추적하는 로그 시스템 구축
- **상태 전이 안전성 검증**: 결제 실패 시 강화쿠폰 원복(롤백) 처리에서 JPA 영속성 컨텍스트 이슈 분석 및 해결. 단방향 상태 흐름에서 양방향 전이 가능 구조로의 안전한 전환
- **비정답 강화율 알고리즘 개선**: 3구간 → 2구간 방식으로 변경하여 사용자 경험 개선, 중복 배제 로직 적용
- **리포트 시스템 확장**: 기존 HashMap 응답을 제네릭 POJO(PagedContentResponse)로 리팩토링하여 타입 안전성 향상

**기술 스택**: Java, Spring, JPA, Redis Cluster, MyBatis, JSP, JavaScript, Spring Batch

### CLO(Card Linked Offer) 캠페인 관리 시스템 개선 (2025.09 ~ 2026.02)

**개요**: 결제 연동형 광고 캠페인 관리 시스템의 데이터 정합성 강화 및 리포트 확장.

**담당 영역**:

- 결제사 혜택 ID 유효성 검사 조건 개선
- 통합 리포트에 쿠폰 발급/사용 지표 추가
- 클릭 적립 캠페인 이벤트 페이지 기능 개선
- 결제 상태 변경 알림 오류 대응

**기술적 성과**:

- **DB 스키마 최적화**: 결제사 혜택 ID의 Unique Index → Primary Key 전환으로 데이터 정합성 강화. 기존 77건의 중복 데이터 정리 및 마이그레이션
- **결제 상태 변경 알림 오류 원인 분석**: 매월 초 발생하던 메일 발송 오류의 로그를 분석하여, 이메일 템플릿 null 반환 시 null 체크 없이 발송을 시도하는 근본 원인을 식별하고 개선 방향 제시
- **미사용 코드 정리**: 레거시 API 엔드포인트 및 컨트롤러 메서드 체계적 제거
- **통합 리포트 확장**: 기존 리포트 프레임워크에 쿠폰 다운로드수/사용수 컬럼을 추가하고 엑셀 다운로드 기능 연동

**기술 스택**: Java, Spring, MySQL, MyBatis, JavaScript, Jenkins
### 2025
- 페이코 블랙 럭키데이 이벤트 (10월)
	- 경품 이벤트 재활용
	- 페이백 이벤트 재활용
- 메타 픽셀 (9월)
	- 메타 픽셀 데이터 수집 설정
- 페이코 10주년 이벤트 (9월)
	- 경품 이벤트 DB 설계 (jpa, mysql)
	- 경품 이벤트 API 작업 (java)
	- 이벤트 페이지 화면 동작 작업 (js, jsp)
	- 데이터 추출 쿼리 작성 (mysql)
	- api client 리팩토링 (spring boot auto config)
- wca(web crawling agent) 인수인계 (8월)
	- python, mongodb, rabbitmq, redis
- jvm gc 트러블슈팅 (7월)
	- gc 전환 및 모니터링
	- java/jvm/Garbage Collector/gc pause time 튜닝.md
- 개인화 추천 스코어링 트러블슈팅 (7월)
	- 유저-가맹점 추천 로직 이슈 추적
- 모델링 데이터 이관 (7월)
	- 데이터 생성 방식, 전달 방식 간소화
- 페이백 매체 URL 개선 (6월)
	- 레거시 전환 (vue.js, jquery -> 바닐라 js)
	- 미사용 코드 제거
- 로그스태시 트러블슈팅 (5월)
	- 모니터링 구성 (exporter(docker) + prometheus + grafana dashboard)
	- Persistent queues (PQ) 구성
- 개인화 컬렉션 고도화 (3~4월)
- 쿠폰 리워드 프로그램 개발 (2월)
- 사내 모니터링 시스템 grafana + telegraf 전환 (1월)
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
		- 샵존 기능 리팩토링
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
		- uwsgi (python 3, redis, mysql 8)
- 혜택 홈 개편 (04 ~ 06월)
	- 프론트 + 백엔드
		- 가맹점 혜택 설정 기능 개발
		- 리포트 정상 인입 확인, 크롤링 파라미터 유효성 검사 변경 개발, 쿠폰 정보 추가 저장 개발
		- 쿠폰 다운로드 페이지 개편 작업
	- 백엔드
		- 이벤트 페이지 HTML 파싱 & 쿠폰 다운로드 페이지 HTML 생성 역할과 쿠폰 정보(DB) 불러오기 역할이 섞인 부분을 각각의 영역으로 분리 리팩토링 작업
	- 기술스택
		- spring boot 2.7 (mvc, jsp, mybatis, jpa, kotlin, java, mysql 8)
		- uwsgi (python 2, mysql 8)
		- vue js 2 (javascript)
- 쇼핑적립 타부서로 이관 (03 ~ 07월)
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
- 배치 기능 개선 (03 ~ 05월)
	- 백엔드
		- 배치 오류 시 알림 기능 추가
		- 불필요한 에러 로그 제거 및 발생하던 에러 수정
	- 기술스택
		- spring boot 2.7 (batch, mybatis, java, mysql 8)
		- jenkins
- 추천 브랜드 컬렉션 개발 (02 ~ 03월)
	- 사용자가 검색한 키워드를 기반으로 추천해주는 서비스
	- 프론트 + 백엔드
		- 검색 컬렉션 설정, 리포트 페이지 개발
	- 백엔드
		- 이벤트 페이지 HTML 파싱해 쿠폰 정보 얻는 기능 개발
		- 이벤트 페이지 예약 변경 시 쿠폰 정보도 업데이트 되도록 배치 수정
		- 로그시스템 신규 배너 타입 추가
		- 모델링 서버에 가맹점 정보 전달 배치 개발
		- 메타 데이터에 배치에 쿠폰 정보 추가 개발 및 미사용 데이터 제거
		- 검색 컬렉션 DB 스키마 설계
	- 기술스택
		- spring boot 2.7 (mvc, redis, mybatis, jsp, java, kotlin, mysql 8)
		- uwsgi (python 2, redis, mysql 8)
		- spring boot 2 (es, spark), kibana
- 쿠폰별 과금 설정 기능 (01월)
	- 프론트 + 백엔드
		- CLO센터 쿠폰별 과금 설정 기능 추가
	- 백엔드
		- 쿠폰 저장 기능 리팩토링해 코드 중복 제거
	- 기술스택
		- spring boot 2.7 (mvc, mybatis, kotlin, mysql 8)
		- vue js 2 (javascript)
### 2022
- 쇼핑적립 시스템 인수인계 (08 ~ 12월)
	- 쿠폰탭 쇼핑적립 노출 개발 (09 ~ 12월)
	- 프론트 + 백엔드
		- 쇼핑적립 컬렉션 개발
		- 미사용 코드 제거
	- MySQL 5.7 -> 8 버전업 (09 ~ 10월)
	- Spring Boot 2.0 -> 2.7 버전업 (08 ~ 11월)
	- 기술스택
		- spring boot 2.0, 2.7 (mvc, mybatis, jsp, java, mysql 5/8)
- Spring Boot 2.0 -> 2.7 버전업 (08 ~ 11월)
	- 백엔드
		- @Deprecated 코드 변경
		- 삭제된 의존성 추가
		- junit 4 -> 5 마이그레이션
	- 서버
		- tomcat 버전업, 배포 스크립트 변경
	- 기술스택
		- spring boot 2.0, 2.7 (mvc, jsp, mybatis, java, mysql 5/8, test)
		- tomcat 8.5
- CLO 센터 구축 (03 ~ 08)
	- 프론트 + 백엔드
		- CLO 센터 프로모션 예산 관리 페이지 개발
	- 백엔드
		- CLO 프로모션 예산 배치 개발
		- CLO 캠페인 상태 변경 배치 개발
		- CLO 연계 매출 동기화 배치/API 개발
		- 보안 취약점 대응 - CSV Injection
		- CLO 캠페인 정보 조회 API 개발 및 webClient 설정
		- 프로모션 예산 DB 스키마 설계
	- 서버
		- 배포 스크립트, 모니터링, 로그 설정
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, kotlin, java, mysql 8)
		- spring boot 2.7 (mvc, java)
		- vue js 2 (javascript)
- 광고주센터 가맹점 키워드 기능 개선 & 어뷰징 키워드 개발 (2021년 12월 ~ 02월)
	- 프론트 + 백엔드
		- 가맹점 동의어/키워드 분리
		- 가맹점 어뷰징 키워드 신규 개발
		- 가맹점 단어 관련 DB 스키마 설계
	- 백엔드
		- 모델링 서버에 가맹점 데이터 피드 전달 배치 개발
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, kotlin, java, mysql 8)
		- vue js 2 (javascript)
		- uwsgi (python 2, mysql 8)

### 2021
- 검색 맞춤쿠폰-상품 모듈 추가 개발 (10 ~ 12월)
	- 서버
		- nginx-openresty 이미지 캐시 모듈 추가
		- spring boot actuator 모니터링 추가
	- 기술스택
		- nginx-openresty
		- spring boot 2.0 (actuator)
- DisplayAd 리타게팅 시스템 개발 (06 ~ 12월)
	- 서버
		- 레디스 클러스터, DisplayAd API 서버 장비 스펙 산정 및 세팅, wiki 정리
	- 백엔드
		- DisplayAd 노출/클릭 API 개발
		- 메타 데이터 추가 개발
		- 전환 집계 리포트 배치 개발 (11 ~ 12월)
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, redis, java, mysql 8)
		- uwsgi (python 2, redis, mysql 8)
- 광고주센터 캠페인 복사 기능 개발 (05 ~ 07월)
	- 프론트 + 백엔드
		- 캠페인 삭제 기능 개발
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, kotlin, mysql 8)
		- vue js 2 (javascript)
- 쿠폰홈 개편 (03 ~ 05월)
	- 프론트 + 백엔드
		- 배너 생성/수정 기능 개발
		- 컬렉션 리포트 페이지 개발
		- 랭킹형 리포트 페이지 개발
	- 기술스택
		- spring boot 2.0 (mvc, jsp, mybatis, java, mysql 8)
- 배너 디자인 변경 개발 (01 ~ 02월)
	- 프론트 + 백엔드
		- 광고주센터 신규 배너 설정 개발
	- 백엔드
		- 앱과 신규 디자인 API 응답 스펙 협의
		- API 버전에 맞춰 신규 배너 응답 개발
		- 신규 배너 데이터 메타 데이터 추가
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, java, kotlin, mysql 8)
		- vue js 2 (javascript)
		- uwsgi (python 2, redis, mysql 8)
### 2020
- 광고주센터
	- 프론트 + 백엔드
		- 검색 가맹점 키워드 관리 기능 개발
		- 광고주 관리 기능 개선
		- 내 주변 쿠폰, 정보형 캠페인 개발
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, kotlin, mysql 8)
		- vue js 2 (javascript)
- 어필리에이트 오류 대응
	- 기술스택
		- spring boot 2.0 (mvc, jsp, mybatis, java, mysql 8)
- 이벤트 공유하기 기능 개발
	- 기술스택
		- spring boot 2.0 (mvc, jsp, mybatis, java, kotlin, mysql 8)
		- vue js 2 (javascript)
### 2019
- 광고주센터 개발
	- 프론트 + 백엔드
		- 캠페인 관리
		- 광고주 관리
		- 결제 관리
		- 캠페인 생성/수정 (이벤트 페이지)
	- 기술스택
		- spring boot 2.0 (mvc, mybatis, kotlin, mysql 8)
		- vue js 2 (javascript)
- 페이코 홈 개편 대응 개발
- 신입사원 기술 교육ㅂ