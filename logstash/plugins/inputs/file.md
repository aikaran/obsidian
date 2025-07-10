https://www.elastic.co/docs/reference/logstash/plugins/plugins-inputs-file

로그 누락 이슈
# nginx 로그 롤링
copytruncate를 사용하면 안됨
kill -USR1 혹은 nginx -s reopen을 사용해야함. (같은 표현)

예시)
```bash
/var/log/nginx/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 nginx adm
    sharedscripts
    postrotate
        [ -f /run/nginx.pid ] && kill -USR1 `cat /run/nginx.pid`
    endscript
}
```
# 파일 패턴
로그 로테이트 후 inode로 추적을 계속하는데,
로테이트된 파일명이 파일 패턴을 벗어나면 ignore 해버릴 수 있음.

예시)
```ruby
input {
  file {
    path => ["/logs/app.log", "/logs/app.*.log"]
  }
}
```
