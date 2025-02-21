내가 사용하는 라이브러리에서 사용하는 라이브러리의 의존성을 바꾸고 싶을 때가 있다.
exclusions를 사용해 제외하고 내가 원하는 라이브러리 버전을 추가하면 된다.

ex) 나는 B라이브러리 1.2 버전 쓰고 싶은데, 내가 사용하는 A 라이브러리가 B 라이브러리 다른 버전 사용
```xml
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>A</artifactId>
        <version>1.0</version>
        <exclusions>
            <exclusion>
                <groupId>com.example</groupId>
                <artifactId>B</artifactId>
            </exclusion>
        </exclusions>
    </dependency>

    <!-- 우리가 원하는 버전의 B를 직접 추가 -->
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>B</artifactId>
        <version>1.2</version>
    </dependency>
</dependencies>
```