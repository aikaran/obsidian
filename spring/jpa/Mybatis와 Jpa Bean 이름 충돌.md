MyBatis의 @MapperScan 범위에 JpaRepository 패키지도 포함 돼 발생한 이슈.
실제 @Mapper를 사용하는 범위로 스캔 범위를 좁혀주면 해결된다.