https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/sizing.html

The following are general guidelines regarding heap sizes for server applications:
- Unless you have problems with pauses, try granting as much memory as possible to the virtual machine. The default size is often too small.
- Setting `-Xms` and `-Xmx` to the same value increases predictability by removing the most important sizing decision from the virtual machine. However, the virtual machine is then unable to compensate if you make a poor choice.    
- In general, increase the memory as you increase the number of processors, since allocation can be parallelized.

pause 관련 문제가 없으면 최대한 메모리를 할당하라고 한다.
그런데, 현재 pause 관련 문제를 겪고 있으니 줄여보는게 좋을 것 같다.

The bigger the young generation, the less often minor collections occur. However, for a bounded heap size, a larger young generation implies a smaller tenured generation, which will increase the frequency of major collections.

performance를 올리기 위해 young generation 비중을 높일 수 있다.
tenured generation이 작아져서 major gc가 자주 일어난다.
-> 사이즈가 작아서 gc 타임이 짧다면 문제가 없을 것 같다.