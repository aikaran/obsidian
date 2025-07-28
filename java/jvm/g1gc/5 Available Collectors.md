https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/collectors.html

The mostly concurrent collector performs most of its work concurrently (for example, while the application is still running) to keep garbage collection pauses short. It is designed for applications with medium-sized to large-sized data sets in which response time is more important than overall throughput because the techniques used to minimize pauses can reduce application performance. The Java HotSpot VM offers a choice between two mostly concurrent collectors; see [The Mostly Concurrent Collectors](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/concurrent.html#mostly_concurrent). Use the option `-XX:+UseConcMarkSweepGC` to enable the CMS collector or `-XX:+UseG1GC` to enable the G1 collector.

If response time is more important than overall throughput and garbage collection pauses must be kept shorter than approximately 1 second, then select the concurrent collector with `-XX:+UseConcMarkSweepGC` or `-XX:+UseG1GC`.

GC pause를 짧게 유지하고 싶으면, CMS collector나 G1 collector를 사용해라