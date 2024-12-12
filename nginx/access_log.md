path를 지정하지 않으면 상위 레벨의 path를 사용함

아래의 경우 /abc 블록의 access_log는 /var/log/nginx/global-access.log에 남음
```nginx
http {
    access_log /var/log/nginx/global-access.log;

    server {
        listen 80;
        server_name example.com;

        location / {
            access_log /var/log/nginx/root-access.log;
        }

        location /abc {
            # access_log 설정 없음
        }
    }
}
```