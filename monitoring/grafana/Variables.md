하나의 대시보드에서 여러 개의 인스턴스에 대해 모니터링이 필요한 경우가 있다.
ex) 젠킨스 대시보드에서 알파/리얼 모니터링

각각 대시보드를 만들 수도 있지만, 하나의 대시보드에서 변수 교체로 번갈아 볼 수도 있다.
젠킨스 알파/리얼에서 job을 각각 jenkins-alpha / jekins-real 로 수집했다.

## 변수 생성
Settings > Variables
- Select variable type: Query
- Query options
	- Data source 지정
	- Query
		- Query type: Label values
		- Label*: job
		- Regex: jenkins-(alpha|real)

## 대시보드 적용
```json
rate(jenkins_job_building_duration_count{job="jenkins-$변수명"}[1m])
```