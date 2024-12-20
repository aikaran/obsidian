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
- java.util.zip.ZipException: zip file is empty
	- https://github.com/jenkinsci/thin-backup-plugin/blob/9eafc8f5b5841d2ed0ba19ba30e19e757dada2e8/src/main/java/org/jvnet/hudson/plugins/thinbackup/backup/BackupSet.java#L119
	- 백업 경로가 네트워크 파일 시스템(NFS) 또는 CIFS 기반 경로라면, ThinBackup에서 파일을 정상적으로 읽지 못할 가능성
	- Jenkins가 ZIP 파일을 읽을 수 있는 권한이 있는지 확인
- 백업이 왜이리 오래 걸릴까
	- 빌드 > config.xml > daysToKeep 태그 (오래된 빌드 삭제 옵션) 확인
	- grep -L '\<daysToKeep>.\*\</daysToKeep>' /var/lib/jenkins/jobs/\*/config.xml
	- 오래된 빌드 삭제 후 백업 성공 -> 오류 발생 멈춤
	- 추측: 백업이 너무 오래 걸림 -> 백업이 밀림