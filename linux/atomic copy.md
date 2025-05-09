logstash 등에서 파일 copy 도중 읽어버리면, 로그 유실이 발생할 수 있음.
그걸 방지하기 위해 copy 완료 전 파일을 읽지 못하게 처리함
## cp + mv
logstash 등이 읽지 못하게 임시 이름으로 cp 후 mv
mv는 같은 파일시스템이면 inode 포인터만 변경하므로 atomic하게 처리 가능

## rsync
```bash
rsync --temp-dir=/tmp -a source.log /dst/final.log
```