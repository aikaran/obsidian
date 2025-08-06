https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc_tuning.html#g1_gc_tuning

## Recommendations
- **Pause Time Goals**: When you evaluate or tune any garbage collection, there is always a latency versus throughput trade-off. The G1 GC is an incremental garbage collector with uniform pauses, but also more overhead on the application threads. The throughput goal for the G1 GC is 90 percent application time and 10 percent garbage collection time. Compare this to the Java HotSpot VM parallel collector. The throughput goal of the parallel collector is 99 percent application time and 1 percent garbage collection time. Therefore, when you evaluate the G1 GC for throughput, relax your pause time target. Setting too aggressive a goal indicates that you are willing to bear an increase in garbage collection overhead, which has a direct effect on throughput. When you evaluate the G1 GC for latency, you set your desired (soft) real-time goal, and the G1 GC will try to meet it. As a side effect, throughput may suffer. See the section [Pause Time Goal](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html#pause_time_goal) in [Garbage-First Garbage Collector](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html#garbage_first_garbage_collection) for additional information.

지연 시간과 처리량은 상호 절충 관계다.
## Overflow and Exhausted Log Messages
When you see to-space overflow or to-space exhausted messages in your logs, the G1 GC does not have enough memory for either survivor or promoted objects, or for both. The Java heap cannot because it is already at its maximum. Example messages:
- `924.897: [GC pause (G1 Evacuation Pause) (mixed) (to-space exhausted), 0.1957310 secs]`    
- `924.897: [GC pause (G1 Evacuation Pause) (mixed) (to-space overflow), 0.1957310 secs]`    

To alleviate the problem, try the following adjustments:
- Increase the value of the `-XX:G1ReservePercent` option (and the total heap accordingly) to increase the amount of reserve memory for "to-space".    
- Start the marking cycle earlier by reducing the value of `-XX:InitiatingHeapOccupancyPercent.`    
- Increase the value of the `-XX:ConcGCThreads` option to increase the number of parallel marking threads.

See the section [Important Defaults](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc_tuning.html#important_defaults) for a description of these options.

GC 로그 확인 시 `to-space exhausted`를 발견했고 `G1ReservePercent`, `ConcGCThreads`를 늘리거나 `InitiatingHeapOccupancyPercent`를 줄이는 방식으로 해결할 수 있다.