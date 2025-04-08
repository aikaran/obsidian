자바가 기본으로 제공 ForkJoinPool를 사용하면, 다른 프레임워크(spring)나 라이브러리에서 사용할 경우 경쟁이 발생해서 성능이 급격히 저하될 수 있다.

그러므로, Executors.newFixedThreadPool를 사용해서 적절한 사이즈의 