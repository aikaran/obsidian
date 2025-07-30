https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html

Applications running today with either the CMS or the with parallel compaction would benefit from switching to G1 if the application has one or more of the following traits.
- More than 50% of the Java heap is occupied with live data.    
- The rate of object allocation rate or promotion varies significantly.    
- The application is experiencing undesired long garbage collection or compaction pauses (longer than 0.5 to 1 second).

pause time 이슈를 겪고 있으므로 G1GC를 선택

## Pause Time Goal

Set a pause time goal for G1 with the flag `MaxGCPauseMillis`. G1 uses a prediction model to decide how much garbage collection work can be done within that target pause time. At the end of a collection, G1 chooses the regions to be collected in the next collection (the collection set). The collection set will contain young regions (the sum of whose sizes determines the size of the logical young generation). It is partly through the selection of the number of young regions in the collection set that G1 exerts control over the length of the GC pauses. You can specify the size of the young generation on the command line as with the other garbage collectors, but doing so may hamper the ability of G1 to attain the target pause time. In addition to the pause time goal, you can specify the length of the time period during which the pause can occur. You can specify the minimum mutator usage with this time span (`GCPauseIntervalMillis`) along with the pause time goal. The default value for `MaxGCPauseMillis` is 200 milliseconds. The default value for `GCPauseIntervalMillis` (0) is the equivalent of no requirement on the time span.