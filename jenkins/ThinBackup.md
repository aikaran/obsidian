https://plugins.jenkins.io/thinBackup/


설정 위치
https://plugins.jenkins.io/thinBackup/#plugin-content-settings
| 버전     | 설정 위치                                          | URI                        |
| ------ | ---------------------------------------------- | -------------------------- |
| 2.0 이전 | Jenkins 관리 > ThinBackup > Settings             | /thinBackup/backupsettings |
| 2.0 이후 | Jenkins 관리 > System > ThinBackup Configuration | /manage/configure          |
failFast 옵션
- 백업 실행 도중 예외 발생 시 즉시 프로세스를 중단

백업 실패
- ThinBackup Worker Thread thread is still running. Execution aborted.
	- 이전 백업이 완료되지 않았으므로 신규 백업이 중단됨
- ThinBackupPeriodicWork#backupNow: Cannot perform a backup. Please be sure Jenkins has write privileges in the configured backup path
	- 쓰기 권한이 없어서 발생
- 백업이 왜이리 오래 걸릴까
	- 빌드 > config.xml > daysToKeep 태그 (오래된 빌드 삭제 옵션) 확인
	- grep -L '\<daysToKeep>.\*\</daysToKeep>' /var/lib/jenkins/jobs/\*/config.xml
	- 오래된 빌드 삭제 후 백업 성공
	- 추측: 백업이 너무 오래 걸림 -> 백업이 밀림

