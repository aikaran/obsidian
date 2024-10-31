https://docs.spring.io/spring-batch/reference/step/late-binding.html

1. 동적 파라미터 지원
2. 지연 초기화

보통은 컴파일 단계에서 해결할 수 있음.
```java
@Bean
public FlatFileItemReader flatFileItemReader() {
	FlatFileItemReader<Foo> reader = new FlatFileItemReaderBuilder<Foo>()
			.name("flatFileItemReader")
			.resource(new FileSystemResource("file://outputs/file.txt"))
			...
}
```

근데, 런타임 시점에 파일명이 정해질 수도 있음.
이런 경우는 -D 옵션을 사용
```java
@Bean
public FlatFileItemReader flatFileItemReader(@Value("${input.file.name}") String name) {
	return new FlatFileItemReaderBuilder<Foo>()
			.name("flatFileItemReader")
			.resource(new FileSystemResource(name))
			...
}
```

```bash
-Dinput.file.name="file://outputs/file.txt"
```

`JobParameters`나 `ExecutionContext`를 사용하는 걸 선호할 수도 있음.
```java
@StepScope
@Bean
public FlatFileItemReader flatFileItemReader(@Value("#{jobParameters['input.file.name']}") String name) {
	return new FlatFileItemReaderBuilder<Foo>()
			.name("flatFileItemReader")
			.resource(new FileSystemResource(name))
			...
}
```

```java
@StepScope
@Bean
public FlatFileItemReader flatFileItemReader(@Value("#{jobExecutionContext['input.file.name']}") String name) {
	return new FlatFileItemReaderBuilder<Foo>()
			.name("flatFileItemReader")
			.resource(new FileSystemResource(name))
			...
}
```

```java
@StepScope
@Bean
public FlatFileItemReader flatFileItemReader(@Value("#{stepExecutionContext['input.file.name']}") String name) {
	return new FlatFileItemReaderBuilder<Foo>()
			.name("flatFileItemReader")
			.resource(new FileSystemResource(name))
			...
}
```