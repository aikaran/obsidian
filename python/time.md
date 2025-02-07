monotonic()
- 프로그램 실행 중 경과 시간을 측정하는 데 유용
- time() 은 시스템 시간 변경에 영향 받음
```python
import time

start = time.monotonic()  # 시작 시간 기록
time.sleep(2)  # 2초 대기
end = time.monotonic()  # 종료 시간 기록

print(f"Elapsed time: {end - start} seconds")  # 경과 시간 출력
```