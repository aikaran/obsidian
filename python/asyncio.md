**run**
- python 비동기 함수(async def)를 실행
```python
import asyncio

async def say_hello():
    print("Hello, world!")
    await asyncio.sleep(1)
    print("Goodbye!")

asyncio.run(say_hello())  # 비동기 함수 실행
```

**asyncio.Semaphore**
- 비동기 작업 개수를 제한하는 도구
```python
import asyncio

semaphore = asyncio.Semaphore(2)  # 동시에 최대 2개 작업 실행 가능

async def task(name):
    async with semaphore:  # 세마포어 획득 (동시에 2개까지만 실행 가능)
        print(f"{name} started")
        await asyncio.sleep(2)  # 작업 실행 (예: API 요청)
        print(f"{name} finished")

async def main():
    tasks = [task(f"Task-{i}") for i in range(5)]
    await asyncio.gather(*tasks)

asyncio.run(main())
```
- async with를 안쓰면 release() 명시적으로 호출 필요
```python
async def task(name):
    await semaphore.acquire()  # 세마포어 수동 획득
    try:
        print(f"{name} running")
        await asyncio.sleep(1)
    finally:
        semaphore.release()  # 직접 해제 필요
```