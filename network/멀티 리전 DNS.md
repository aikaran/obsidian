- 데이터센터 장애 대응을 위해 멀티리전을 구성할 수 있다.
	- 카카오 데이터센터 장애후기: https://www.kakaocorp.com/page/detail/9902
- 판교 데이터센터와 평촌 데이터센터에 각각 서비스를 구성
	- DNS를 CNAME 레코드로 구성
	- 판교와 평촌의 데이터센터에서 GSLB로 구성 (A 레코드)
	- 판교 데이터센터 장애 시에도 평촌 데이터센터에서 대응 가능
- A 레코드 (Address Record)
	- 호스트 이름을 IP 주소에 매핑
- CNAME 레코드 (Canonical Name Record)
	- 호스트 이름을 다른 호스트 이름에 매핑
- CNAME을 사용하는 이유
	- 도메인 관리를 단순화하고 유연성을 높일 수 있음
- DB, Redis 등도 이중화 필요