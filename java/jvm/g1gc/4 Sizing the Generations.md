https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/sizing.html

The following are general guidelines regarding heap sizes for server applications:
- Unless you have problems with pauses, try granting as much memory as possible to the virtual machine. The default size is often too small.
- Setting `-Xms` and `-Xmx` to the same value increases predictability by removing the most important sizing decision from the virtual machine. However, the virtual machine is then unable to compensate if you make a poor choice.    
- In general, increase the memory as you increase the number of processors, since allocation can be parallelized.

pause 관련 문제가 없으면 최대한 메모리를 할당하라고 한다.
그런데, 현재 pause 관련 문제를 겪고 있으니 줄여보는게 좋을 것 같다.