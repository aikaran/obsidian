깃헙 페이지: https://github.com/oliver006/redis_exporter

docker로 실행 가능
https://github.com/oliver006/redis_exporter?tab=readme-ov-file#run-via-docker

## docker 옵션 별 기능

| 옵션             | 기능                                         |
| -------------- | ------------------------------------------ |
| -d             | 데몬 실행 (백그라운드 실행)                           |
| --name         | 이름 지정                                      |
| -p             | 포트 포워딩 (호스트 포트:도커 포트)                      |
| --network host | 호스트 노드와 동일 네트워크에서 실행<br>ㄴ 기본 값은 호스트 노드와 격리 |
### 예시
데몬 실행 `-d` 옵션
이름 지정 `--name` 옵션
포트 포워딩 `-p` 옵션
```bash
docker run -d --name redis_exporter -p 9121:9121 oliver006/redis_exporter
```

호스트 노드에서 실행되는 레디스에 접근하고 싶으면, `--network host` 옵션 추가
```bash
docker run -d --name redis_exporter --network host oliver006/redis_exporter
```
