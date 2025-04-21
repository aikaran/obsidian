스프링에서 빈 제거 직전 발생하는 훅
빈을 생성하면서 할당했던 자원을 회수하기 좋다.

```java
@PreDestroy
public void onDestroy() {
    this.redisClusterClient.shutdown();
}
```