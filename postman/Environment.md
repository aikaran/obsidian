변수를 활용하여 환경을 쉽게 변경할 수 있도록 도와주는 기능

자주 사용하는 값을 변수로 저장하는 것도 좋을 것 같음

예시)
```
https://api-keymanager.nhncloudservice.com/keymanager/v1.0/appkey/{{appkey}}/secrets/{{keyid}}
```
- appkey, keyid 는 다른 API에서도 자주 사용되므로 변수로 활용
- 하지만, 유출되면 안되는 민감한 정보이므로 Current value 로만 저장해서 사용