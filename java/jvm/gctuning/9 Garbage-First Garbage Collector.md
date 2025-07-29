https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/g1_gc.html

Applications running today with either the CMS or the with parallel compaction would benefit from switching to G1 if the application has one or more of the following traits.
- More than 50% of the Java heap is occupied with live data.    
- The rate of object allocation rate or promotion varies significantly.    
- The application is experiencing undesired long garbage collection or compaction pauses (longer than 0.5 to 1 second).

pause time 이슈를 겪고 있으므로 G1GC를 선택