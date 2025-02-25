**@ConfigurationProperties**와 함께 사용
생성자를 통해 값을 주입하므로, 불변 객체 지원 가능
- @ConfigurationProperties는 기본적으로 setter 메소드를 사용함

```yml
app:
  name: "MyApplication"
  version: "1.0.0"
```

```java
@ConstructorBinding
@ConfigurationProperties(prefix = "app")
public record AppProperties(String name, String version) {
}
```