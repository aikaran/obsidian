https://github.com/spring-projects/spring-retry
스프링 애플리케이션에서 선언적 재시도를 지원함.

`@EnableRetry`로 활성화 필요하고, 재시도가 모두 실패 시 `@Recover`로 대처함
```java
@Configuration
@EnableRetry
public class Application {

}

@Service
class Service {
    @Retryable(retryFor = RemoteAccessException.class)
    public void service() {
        // ... do something
    }
    @Recover
    public void recover(RemoteAccessException e) {
       // ... panic
    }
}
```

1.3 버전부터는 명령형 스타일로 가능
```java
RetryTemplate template = RetryTemplate.builder()
				.maxAttempts(3)
				.fixedBackoff(1000)
				.retryOn(RemoteAccessException.class)
				.build();

template.execute(ctx -> {
    // ... do something
});
```