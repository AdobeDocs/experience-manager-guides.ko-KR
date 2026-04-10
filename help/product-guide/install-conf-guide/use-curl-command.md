---
title: curl 명령 사용
description: Experience Manager Guides에서 업로드한 콘텐츠에 curl 명령을 사용하는 방법을 알아봅니다.
feature: Migration
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '289'
ht-degree: 1%

---

# curl 명령 사용

curl 명령을 사용하여 DAM에 폴더를 만들고, 파일을 업로드하고, 업로드된 콘텐츠에 메타데이터를 추가할 수도 있습니다.

## 폴더 만들기

다음 명령을 실행하여 AEM 저장소에 폴더를 만듭니다.

```curl
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

폴더를 만들려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 폴더 생성 권한이 있어야 합니다.

- `jcr:primaryType=sling:Folder`: 이 매개 변수 *을(를)*(으)로 지정하여 폴더 유형 리소스를 만드십시오.

- `<server folder path>`: AEM 저장소에 만들 새 폴더의 이름을 포함하는 전체 폴더 경로입니다. 예를 들어 경로를 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides`(으)로 지정하면 DAM의 `AEM-Guides` 폴더 내에 `projects` 폴더가 만들어집니다.


## 파일 업로드

다음 명령을 실행하여 AEM 저장소의 파일을 업로드합니다.

```curl
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

다음 매개 변수를 지정하여 파일을 업로드하십시오.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 `server folder path`에 대한 쓰기 권한이 있어야 합니다.

- ``local file path``: 업로드할 로컬 시스템의 전체 파일 경로입니다.

- `<server folder path>`: 파일을 업로드할 AEM 서버의 전체 폴더 경로입니다.


## 메타데이터 추가

다음 명령을 실행하여 파일에 메타데이터를 추가합니다.

```curl
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

메타데이터 정보를 추가하려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 ``metadata node path``에 대한 쓰기 권한이 있어야 합니다.

- ``-F<attribute name>=<value>``: `<attribute name>`은(는) `audience`과(와) 같은 메타데이터 특성의 이름이며 `<value>`은(는) `internal`일 수 있습니다. 여러 속성 이름-값 쌍을 공백으로 구분하여 지정할 수 있습니다.

- `<metadata node path>`: 파일 이름과 메타데이터 노드를 포함하는 전체 폴더 경로입니다. 예를 들어 경로를 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata`(으)로 지정하면 지정된 메타데이터 정보가 `intro.xml` 파일에 설정됩니다.