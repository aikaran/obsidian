- 셀레니움과 유사한 상위호환 크롤링 도구
- 멀티 브라우저 지원, 동적 웹사이트 지원(js 렌더링)
- 간단한 API 지원
- 전문 도구(Scrapy) 대비 러닝 커브 낮음
- 셀레니움 대비 성능 우위
```python
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=False)  # 브라우저 실행
        page = await browser.new_page()
        await page.goto("https://example.com")  # 웹페이지 이동
        print(await page.title())  # 페이지 제목 출력
        await browser.close()  # 브라우저 종료

import asyncio
asyncio.run(main())  # 비동기 실행
```
- async with를 안쓰면 stop() 명시적으로 호출 필요
```python
playwright = await async_playwright().start()
# 사용 후 반드시 stop() 호출 필요!
await playwright.stop()
```
- 브라우저 선택 가능
```python
# Chromium (Chrome 기반 브라우저)
browser = await playwright.chromium.launch()

# Firefox
browser = await playwright.firefox.launch()

# WebKit (Safari 기반 브라우저)
browser = await playwright.webkit.launch()
```