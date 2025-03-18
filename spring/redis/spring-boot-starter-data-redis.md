spring-boot-starter-data-redis 를 사용하면 기본 설정이 다 된다.
프로퍼티 설정만 해주면 된다.

의존성 추가
```maven
<dependency>  
	<groupId>org.springframework.boot</groupId>  
	<artifactId>spring-boot-starter-data-redis</artifactId>  
</dependency>
```

application.yml 고려할 부분

설정 설명: https://docs.spring.io/spring-boot/docs/2.7.18/reference/html/application-properties.html#application-properties.data.spring.redis.client-name
lettuce: 기본 클라이언트, 다른 선택지로 jedis
```yml
spring:  
  redis:  
    cluster:  
      nodes: {ip1}:{port1},{ip2}:{port2}
      max-redirects: {num}
    lettuce:  
      pool:  
        enabled: true  
        max-active: {num}
        max-idle: {num}
        min-idle: {num}
        max-wait: {num}
        time-between-eviction-runs: {num}
```

사용 예시
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class RedisService {

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    public void saveToRedis(String key, String value) {
        stringRedisTemplate.opsForValue().set(key, value);  // Redis에 값 저장
    }

    public String getFromRedis(String key) {
        return stringRedisTemplate.opsForValue().get(key);  // Redis에서 값 조회
    }
}
```