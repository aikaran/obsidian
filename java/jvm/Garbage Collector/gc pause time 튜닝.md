# 문제 상황
1. parallel gc가 주기적으로 800ms 이상 gc 발생
2. 특정 api의 경우 600ms 이내에 응답 필요
# 준비물
1. gc time 모니터링
2. gc 로그
# GC 변경
1. g1gc로 변경
	- https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html
		- Applications running today with either the CMS or the with parallel compaction would benefit from switching to G1 if the application has one or more of the following traits.
			- The application is experiencing undesired long garbage collection or compaction pauses (longer than 0.5 to 1 second).
2. 하루 3-4건 정도 2s 이상의 gc time 발생
# GC 튜닝
1. gc 로그에서 `to-space exhausted` 확인
2. G1ReservePercent 옵션 변경해서 대응
	- https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc_tuning.html
		- Overflow and Exhausted Log Messages 항목
# 결과
목표 달성
![](Pasted%20image%2020250811164836.png)