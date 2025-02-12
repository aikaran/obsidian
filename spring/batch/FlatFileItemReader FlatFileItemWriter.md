csv 파일 처리할 때 사용

```java
@Bean
public FlatFileItemReader<UserDTO> reader() {
    FlatFileItemReader<UserDTO> reader = new FlatFileItemReader<>();

    reader.setResource(new FileSystemResource("input.csv"));
    reader.setLinesToSkip(1); // 첫 번째 줄(헤더) 스킵

    // CSV 데이터 매핑 설정
    reader.setLineMapper(new DefaultLineMapper<UserDTO>() {{
        setLineTokenizer(new DelimitedLineTokenizer() {{
            setNames("id", "name", "age"); // CSV 컬럼 지정
        }});
        setFieldSetMapper(new BeanWrapperFieldSetMapper<>() {{
            setTargetType(UserDTO.class);
        }});
    }});

    return reader;
}
```
```java
@Bean
public FlatFileItemWriter<UserDTO> writer() {
    FlatFileItemWriter<UserDTO> writer = new FlatFileItemWriter<>();
    writer.setResource(new FileSystemResource("output.csv"));
    writer.setAppendAllowed(false); // 기존 파일 덮어쓰기

    // 헤더 작성
    writer.setHeaderCallback(writer1 -> writer1.write("id,name,age"));

    // 데이터 변환
    writer.setLineAggregator(new DelimitedLineAggregator<UserDTO>() {{
        setDelimiter(",");
        setFieldExtractor(new BeanWrapperFieldExtractor<>() {{
            setNames(new String[]{"id", "name", "age"});
        }});
    }});

    return writer;
}
```