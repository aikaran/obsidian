run
- python 비동기 함수(async def)를 실행
```python
import asyncio

async def say_hello():
    print("Hello, world!")
    await asyncio.sleep(1)
    print("Goodbye!")

asyncio.run(say_hello())  # 비동기 함수 실행
```