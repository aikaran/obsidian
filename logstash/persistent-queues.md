https://www.elastic.co/docs/reference/logstash/persistent-queues

장점
- Can absorb bursts of events without needing an external buffering mechanism like Redis or Apache Kafka.
- = bursts of events 를 견딜 수 있다.

대용량 로그 파일 복사 + 메모리 큐 조합에서 로그 유실이 발생할 수 있다.
더 문제인 점은, 로그 유실이 발생한 것을 인지하기 힘들다. (유실에 대한 logstash의 로그가 없음)

대량의 로그를 저장한 파일 복사 후 메모리 큐를 사용하는 logstash로 처리할 경우 일부 유실하는 이슈가 발생한다.
- atomic copy로 cp 도중 읽는 일 없게 처리
- output에서 실패없이 처리
- events in/out 같은 상황

20GB의 로그로 테스트 했을 때,
메모리 큐는 유실이 잔뜩 발생했지만, (30% 가량)
pq는 유실없이 처리에 성공했다. (대신 시간이 2배 정도 걸림)

운영환경에서 유실을 피해야할 경우 pq는 선택이 아니라 필수다.