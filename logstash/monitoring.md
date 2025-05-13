ELK 유료 버전을 사용하면, kibana에서 바로 볼 수 있다.
그래서인지, 공식으로 제공하는 프로메테우스 exporter나 그라파나 dashboard가 없다.
하지만, logstash의 node stat api와 오픈소스를 이용해서 구성할 순 있다.
## exporter
https://github.com/SAP/prometheus-logstash-exporter
그 유명한 SAP의 오픈소스라서 안심하고 사용할 수 있을 것 같다.
나름 최근까지(2025-03) 유지보수되는 exporter다.
docker도 제공한다 !!

옵션은 아래 표처럼 줄 수 있다.

| 옵션                 | 타입       | 기본 설정     |
| ------------------ | -------- | --------- |
| logstash.host      | string   | localhost |
| logstash.port      | int      | 9600      |
| logstash.timeout   | duration | 5s        |
| web.listen-address | string   | :9304     |
| web.telemetry-path | string   | /metrics  |

### docker-compose.yml
```yml
services:  
  logstash-exporter:  
    image: ghcr.io/sap/prometheus-logstash-exporter:latest  
    container_name: logstash-exporter  
    restart: unless-stopped
```
매번 명령어 외워서 입력하기 싫어서 docker-compose 구성을 사용했다.

## dashboard
https://grafana.com/grafana/dashboards/17918-logstash-monitoring/
위에 소개한 exporter와 호환되는 대시보드로, 마찬가지로 나름 최근(2025-03)까지 유지보수되고 있다.

