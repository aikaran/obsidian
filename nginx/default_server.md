https://nginx.org/en/docs/http/ngx_http_core_module.html#listen

if present, will cause the server to become the default server for the specified `_address_`:`_port_` pair.
If none of the directives have the `default_server` parameter then the first server with the `_address_`:`_port_` pair will be the default server for this pair.
- 지정 안하면 첫번째 서버가 default_server

- 호스트 이름 미지정 요청 처리
```nginx
server {
    listen 80 default_server;
    server_name _;
    return 444; # 연결을 강제로 닫음
}
```
	- listen 80 default_server: 포트 80에서 기본 서버로 지정
	- server_name _: 모든 도메인 요청을 처리
	- return 444: 미지정 요청을 거부
