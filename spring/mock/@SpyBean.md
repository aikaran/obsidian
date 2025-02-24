특정 경우에만 내가 원하는 대로 동작하고(mocking), 다른 때 에는 정상적으로 동작하게 하려고 할 때 사용
- 원래의 기능 유지
- Mocking 기능과 결합 가능
```java
@SpringBootTest
class SpyBeanTest {
    
    @SpyBean
    private MyService myService;

    @Test
    void testSpyBean() {
        // 실제 메서드 호출
        myService.process();

        // 메서드가 호출되었는지 검증
        verify(myService, times(1)).process();
    }
}
```
```java
@SpringBootTest
class SpyBeanTest {
    
    @SpyBean
    private MyService myService;

    @Test
    void testModifyBehavior() {
        // 특정 메서드의 반환값 변경
        doReturn("Mocked Result").when(myService).getData();

        String result = myService.getData();
        assertEquals("Mocked Result", result);

        // 원래 메서드가 호출되지 않았는지 검증
        verify(myService, times(1)).getData();
    }
}
```