https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/parallel.html

If the maximum pause time goal is not being met, then the size of only one generation is shrunk at a time. If the pause times of both generations are above the goal, then the size of the generation with the larger pause time is shrunk first.

pause time을 줄이기 위해선 heap 사이즈를 줄일 필요가 있다.
