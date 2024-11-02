빌더에서 특정 프로퍼티를 제외하고 싶을 때
개발자가 코드로 직접 값을 설정하는게 아니라, 설정된 값으로 계산되는 프로퍼티가 있을 수 있다.
```java
@Getter  
class Person {  
    private final String firstName;  
    private final String lastName;  
    private final String fullName;  
  
    @Builder  
    public Person(String firstName, String lastName) {  
        this.firstName = firstName;  
        this.lastName = lastName;  
        this.fullName = firstName + " " + lastName;  
    }  
}
```

빌더에서 제외된 것을 확인할 수 있다.
![](Pasted%20image%2020241101173153.png)

빌드된 객체에선 접근 가능한 것을 확인.
![](Pasted%20image%2020241101173302.png)