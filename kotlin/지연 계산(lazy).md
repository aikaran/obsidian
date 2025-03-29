https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/as-sequence.html
컬렉션에 asSequence()를 호출하면 시퀀스로 변경해줌

```kotlin
fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6)

    val lazyResult = numbers.asSequence()
        .map { it * 2 }  // (1) 값 2배
        .filter { it > 5 }  // (2) 5보다 큰 값만 필터링
        .toList() // 최종 연산 (Terminal Operation)

    println(lazyResult) // [6, 8, 10, 12]
}
```

중간 연산과 최종 연산이 있고, 최종 연산(예시에서 toList())을 호출해야 그때서야 처리를 진행함.
ㄴ 자바 8 스트림과 매우 유사 (kotlin은 자바6 호환)

지연 연산과 즉시 연산의 차이점
지연 연산은 원소를 하나씩 연산을 순서대로 처리하고
즉시 연산은 컬렉션을 통째로 연산을 처리함
```kotlin
fun main() {
    val numbers = (1..1_000_000).toList()

    println("🔹 즉시 연산(List) 수행")
    val eagerResult = numbers
        .filter { it % 2 == 0 }  // (1) 짝수만 선택
        .map { 
            println("Mapping: $it") 
            it * 2 
        }
        .take(5)  // (2) 처음 5개만 가져옴
        .toList()

    println("\n🔹 지연 연산(Sequence) 수행")
    val lazyResult = numbers.asSequence()
        .filter { it % 2 == 0 }  // (1) 짝수만 선택
        .map { 
            println("Mapping: $it") 
            it * 2 
        }
        .take(5)  // (2) 처음 5개만 가져옴
        .toList()
}
```

```kotlin
🔹 즉시 연산(List) 수행
Mapping: 2
Mapping: 4
Mapping: 6
...
(중략: 총 500,000번 Mapping 실행)
...
Mapping: 999998
Mapping: 1000000

🔹 지연 연산(Sequence) 수행
Mapping: 2
Mapping: 4
Mapping: 6
Mapping: 8
Mapping: 10
```

비교표

| **연산 방식**            | map() **실행 횟수** | **최적화** |
| -------------------- | --------------- | ------- |
| **즉시 연산 (List)**     | 500,000번        | ❌ 비효율적  |
| **지연 연산 (Sequence)** | 5번              | ✅ 최적    |

any, find 등 술어를 사용하는 최종 연산을 대규모 컬렉션에 사용할 경우 유용할 것으로 보임.
ㄴ 지연 연산은 원소를 하나씩 처리하다가 원하는 결과를 찾으면 바로 종료
ㄴ 즉시 연산은 대규모 컬렉션에 모든 작업을 순서대로 처리하고 마지막에 술어에 해당하는 원소를 찾음