# 목표
내가 작성한 라이브러리를 의존성에 추가해서 사용할 때, 생성된 Bean만 가져와서 바로 사용하고 싶다.
ex) 의존성만 추가하면 objectMapper를 바로 가져다 사용하는 것 처럼

## Properties 파일 생성
환경별로 properties 파일을 생성한다.
ex) mylib-defaults.properties, mylib-test.properties, mylib-prod.properties

application-${spring.profiles.active}.yml 로 하면 간단하지만, 이런 경우 문제가 생길 수 있다.
라이브러리를 사용하는 모듈에서도 같은 이름의 yml을 사용하면서 라이브러리 파일의 설정이 무시되는 경우다.
나도 어떤 모듈은 동작하고, 어떤 모듈은 동작하지 않는 등의 문제가 발생했다.
## EnvironmentPostProcessor
내가 생성한 properties 를 사용하려면 @PropertySource 로는 안된다.

만약, 액티브하는 프로파일이 1개라면 문제가 없다.
해당 과정을 스킵하고 아래처럼 진행할 수 있다.
```java
@PropertySource(value = "classpath:mylib-${spring.profiles.active:defaults}.properties"
```

내가 생성한 properties 을 읽을 수 있도록 환경을 수정한다.
```java
public class ConfigLoader implements EnvironmentPostProcessor {  
    @Override  
    public void postProcessEnvironment(ConfigurableEnvironment env, SpringApplication application) {  
        String[] profiles = env.getActiveProfiles();  
        String firstProfile = profiles.length > 0 ? profiles[0] : "default";  
  
        try {  
            Resource resource = new ClassPathResource("mylib-" + firstProfile + ".properties");  
            PropertySource<?> ps = new PropertiesPropertySourceLoader()  
                    .load("mylibConfig", resource).get(0);  
            env.getPropertySources().addLast(ps);  
        } catch (IOException e) {  
            throw new IllegalStateException("Failed to load mylib-config", e);  
        }  
    }  
}
```
spring.factories 에서 EnvironmentPostProcessor 설정
```factories
org.springframework.boot.env.EnvironmentPostProcessor=com.example.ConfigLoader
```
참고) 디렉토리 구조
```dir
mylib/
├─ src/main/resources/
│  └─ META-INF/
│     └─ spring.factories
```
## EnableAutoConfiguration
라이브러리 의존성을 추가한 곳에서 바로 Bean을 사용할 수 있게 Config 클래스에서 선언해준다.
```java
@RequiredArgsConstructor
@Configuration
@EnableConfigurationProperties({MylibProperties.class})
public class MylibConfig {
	private final MylibProperties properties;
    
    @Bean
    public MylibUtil mylibUtil() {
        return new MylibUtil(properties);
    }
}
```
spring.factories 에서 EnableAutoConfiguration 설정
```factories
org.springframework.boot.autoconfigure.EnableAutoConfiguration=com.example.mylibConfig
```
참고) 디렉토리 구조
```dir
mylib/
├─ src/main/resources/
│  └─ META-INF/
│     └─ spring.factories
```

# 후기
다 끝내고 보니 공식 가이드가 있었다.
https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html

EnvironmentPostProcessor 의 경우 라이브러리 별로 prefix만 바꿔주면서 재사용할 수 있어 보인다.
gpt한테 재사용 가능하게 만들어달라고 했다.
라이브러리 별로 getConfigPrefix만 구현해주면 된다.
```java
package com.example.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.boot.env.PropertiesPropertySourceLoader;

import java.io.IOException;

public abstract class AbstractProfileConfigLoader implements EnvironmentPostProcessor {

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment env, SpringApplication app) {
        String[] profiles = env.getActiveProfiles();
        String firstProfile = profiles.length > 0 ? profiles[0] : "default";

        String resourceName = getConfigPrefix() + "-" + firstProfile + ".properties";
        try {
            PropertySource<?> propertySource = new PropertiesPropertySourceLoader()
                    .load(resourceName, new ClassPathResource(resourceName)).get(0);

            env.getPropertySources().addLast(propertySource);
        } catch (IOException e) {
            // 파일이 없는 경우 무시 (optional 로딩)
            System.out.println("No resource found for: " + resourceName);
        }
    }

    /** 라이브러리별 prefix 정의 */
    protected abstract String getConfigPrefix();
}
```