- 자동 구성(autoconfiguration)을 위해 사용
- 경로: src/main/resources/META-INF/spring.factories

예시
```properties
# 자동 구성 클래스 등록
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.example.demo.AutoConfigurationClass

# 특정 후처리기 또는 필터 등록
org.springframework.boot.web.servlet.FilterRegistrationBean=\
com.example.demo.CustomFilter
```