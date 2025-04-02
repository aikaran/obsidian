CompletableFuture, Stream를 같이 쓸 경우
Future 생성 후 바로 collect 해줘야 한다. (최종 연산을 수행)
그래야 병렬적으로 작업을 진행해서 사용한 의미가 있다.

```java
import java.time.LocalDateTime;  
import java.util.concurrent.CompletableFuture;  
import java.util.stream.Collectors;  
import java.util.stream.Stream;  
  
public class AsyncTest {  
    public static void main(String[] args) {  
        Stream.of("1-Task1", "1-Task2", "1-Task3")  
                .map(task -> CompletableFuture.supplyAsync(() -> {  
                    try {  
                        Thread.sleep(1000); // 비동기 작업을 시뮬레이션하기 위해 1초 대기  
                    } catch (InterruptedException e) {  
                        throw new RuntimeException(e);  
                    }  
                    System.out.println("1-time = " + LocalDateTime.now());  
                    // 비동기 작업 수행  
                    return task + " completed";  
                }))  
                .collect(Collectors.toList())  
                .stream()  
                .map(CompletableFuture::join)  
                .peek(System.out::println)  
                .collect(Collectors.toList());  
  
        Stream.of("2-Task1", "2-Task2", "2-Task3")  
                .map(task -> CompletableFuture.supplyAsync(() -> {  
                    try {  
                        Thread.sleep(1000); // 비동기 작업을 시뮬레이션하기 위해 1초 대기  
                    } catch (InterruptedException e) {  
                        throw new RuntimeException(e);  
                    }  
                    System.out.println("2-time = " + LocalDateTime.now());  
                    // 비동기 작업 수행  
                    return task + " completed";  
                }))  
                .map(CompletableFuture::join)  
                .peek(System.out::println)  
                .collect(Collectors.toList());  
    }  
}
```

결과
```bash
1-time = 2025-04-02T16:35:00.754787
1-time = 2025-04-02T16:35:00.756720
1-time = 2025-04-02T16:35:00.756748
1-Task1 completed
1-Task2 completed
1-Task3 completed
2-time = 2025-04-02T16:35:01.762680
2-Task1 completed
2-time = 2025-04-02T16:35:02.770377
2-Task2 completed
2-time = 2025-04-02T16:35:03.775291
2-Task3 completed
```