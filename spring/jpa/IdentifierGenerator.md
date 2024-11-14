auto_increment 형식이 아닌 방식으로 id 생성하고 싶을 때 사용
```java
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class CustomIdGenerator implements IdentifierGenerator {

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object obj) {
        try (Connection connection = session.connection();
             // ID 가져오기 쿼리 실행
             PreparedStatement ps = connection.prepareStatement(
                "SELECT next_val FROM ID_GENERATOR_TABLE WHERE id_key = 'YOUR_ENTITY' FOR UPDATE");
             ResultSet rs = ps.executeQuery()) {

            if (rs.next()) {
                long id = rs.getLong("next_val");

                // ID 증가
                try (Statement st = connection.createStatement()) {
                    st.executeUpdate("UPDATE ID_GENERATOR_TABLE SET next_val = next_val + 1 WHERE id_key = 'YOUR_ENTITY'");
                }

                return id;
            } else {
                throw new RuntimeException("ID 값을 가져오는 중 오류 발생");
            }

        } catch (Exception e) {
            throw new RuntimeException("ID 생성 중 오류 발생", e);
        }
    }
}
```
```java
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class YourEntity {

    @Id
    @GeneratedValue(generator = "custom-id-generator")
    @GenericGenerator(name = "custom-id-generator", strategy = "com.yourpackage.CustomIdGenerator")
    private Long id;

    private String name;
    private String description;

    // Getters, Setters, Constructors
}
```