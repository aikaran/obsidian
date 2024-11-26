정확한 수치 처리가 필요할 경우 사용 (금융 데이터 등)

생성자로 `input`값 유효성 확인
```java
import java.math.BigDecimal;

public boolean isNumeric(String input) {
    try {
        new BigDecimal(input);
        return true;
    } catch (NumberFormatException e) {
        return false;
    }
}

System.out.println(isNumeric("5.5")); // true
System.out.println(isNumeric("123")); // true
System.out.println(isNumeric("abc")); // false
```

곱셈
```java
BigDecimal integerNumber = new BigDecimal("10");
BigDecimal decimalNumber = new BigDecimal("2.5");

BigDecimal resultMultiply = integerNumber.multiply(decimalNumber);
System.out.println("곱셈 결과: " + resultMultiply); // 출력: 25.0
```

나눗셈
```java
BigDecimal integerNumber = new BigDecimal("10");
BigDecimal decimalNumber = new BigDecimal("3");

BigDecimal resultDivide = integerNumber.divide(decimalNumber, 2, RoundingMode.HALF_UP); // 소수점 이하 2자리, 반올림 방식: HALF_UP
System.out.println("나눗셈 결과: " + resultDivide); // 출력: 3.33
```

자릿수 지정
```java
BigDecimal value = new BigDecimal("10.456");
BigDecimal scaledValue = value.setScale(2, RoundingMode.HALF_UP); // 소수점 이하 2자리에서 반올림
System.out.println(scaledValue); // 출력: 10.46
```

불필요한 0 제거
```java
BigDecimal decimalWithZeros = new BigDecimal("123.45000");

// 소수점 이하 0 제거
BigDecimal strippedDecimal = decimalWithZeros.stripTrailingZeros();

System.out.println("원래 값: " + decimalWithZeros);          // 출력: 123.45000
System.out.println("0 제거된 값: " + strippedDecimal);       // 출력: 123.45
```

toPlainString()
지수 표현 대신 사람에게 편하게 표현
```java
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        BigDecimal value1 = new BigDecimal("1.23E+3");
        BigDecimal value2 = new BigDecimal("0.00000123");

        // toPlainString()
        System.out.println("toPlainString:");
        System.out.println(value1.toPlainString()); // 1230
        System.out.println(value2.toPlainString()); // 0.00000123

        // toString()
        System.out.println("\ntoString:");
        System.out.println(value1.toString()); // 1.23E+3
        System.out.println(value2.toString()); // 1.23E-6
    }
}
```