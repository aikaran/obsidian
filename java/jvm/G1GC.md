jdk8 기준 docs https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html

jdk9 부터는 기본 GC

- 낮은 GC 타임 + 높은 처리량을 만족시키고자함
-  제한된 GC 지연 시간으로 대용량 힙 (=6 GB 이상의 힙 사이즈 + 0.5 초 미만의 정지 시간)
- 아래의 문제가 있으면 G1GC로 전환
	- Java 힙의 50% 이상이 라이브 데이터로 채워져 있습니다.
	- 객체 할당률이나 프로모션의 비율은 상당히 다양합니다.
	- 해당 애플리케이션은 원치 않는 긴 가비지 수집 또는 압축 일시 중지(0.5~1초 이상)를 경험하고 있습니다.