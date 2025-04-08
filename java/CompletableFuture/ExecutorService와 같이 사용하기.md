자바가 기본으로 제공 ForkJoinPool를 사용하면, 다른 프레임워크(spring)나 라이브러리에서 사용할 경우 경쟁이 발생해서 성능이 급격히 저하될 수 있다.

그러므로, Executors.newFixedThreadPool를 사용해서 적절한 사이즈의 스레드 풀을 만들어서 사용하면 좋다.

CPU 바운드 작업: CPU 코어 수 + 1
IO 바운드 작업: CPU 코어 수 x (1 + (IO 대기 시간 / 작업 시간))
혼합 작업: CPU 코어 수 x (1 + (IO 비율 / CPU 비율))

Executors.newFixedThreadPool 를 사용할 때는 ThreadFactory를 이용해서 데몬 설정을 해주고 이름을 지어주면 좋다.

데몬 설정: JVM 종료 시 같이 회수
이름 설정: 디버깅 시 편함
```java
private final ExecutorService executorService = Executors.newFixedThreadPool(  
        9,  
        new ThreadFactoryBuilder()  
                .setDaemon(true)  
                .setNameFormat("example-thread-%d")  
                .build()  
);
```

