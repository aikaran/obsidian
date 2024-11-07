- Jackson 라이브러리에서 **다형성**을 지원하기 위해 사용하는 애노테이션
- JSON 직렬화/역직렬화 과정에서 다양한 서브타입을 처리
- 상속 구조에서 부모 클래스의 타입에 따라 적절한 서브타입을 자동으로 매핑

```java
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.databind.ObjectMapper;

@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.PROPERTY,
    property = "type"
)
@JsonSubTypes({
    @JsonSubTypes.Type(value = Dog.class, name = "dog"),
    @JsonSubTypes.Type(value = Cat.class, name = "cat")
})
public abstract class Animal {
    public String name;
}

public class Dog extends Animal {
    public double barkVolume;
}

public class Cat extends Animal {
    public int lives;
}

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        // 직렬화
        Dog dog = new Dog();
        dog.name = "Buddy";
        dog.barkVolume = 5.0;

        String json = mapper.writeValueAsString(dog);
        System.out.println(json); // {"type":"dog","name":"Buddy","barkVolume":5.0}

        // 역직렬화
        Animal animal = mapper.readValue(json, Animal.class);
        System.out.println(animal.getClass()); // class Dog
    }
}
```