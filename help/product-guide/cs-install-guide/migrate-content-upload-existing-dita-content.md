---
title: 기존 DITA 콘텐츠 업로드
description: 기존 DITA 콘텐츠를 업로드하는 방법 알아보기
exl-id: 2b385eef-00a7-4c25-9e78-367a0c9e44ba
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '499'
ht-degree: 0%

---

# 기존 DITA 콘텐츠 업로드 {#id176FF000JUI}

AEM Guides에서 사용하려는 기존 DITA 콘텐츠 저장소가 있을 수 있습니다. 이러한 기존 콘텐츠의 경우 [Adobe Experience Manager as a Cloud Service Assets에 디지털 에셋 추가](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/add-assets.html?lang=ko)에 설명된 지원되는 방법을 사용할 수 있습니다.

## UUID 파일 이름 패턴 구성

콘텐츠를 가져올 때 파일 이름이 UUID를 기반으로 할 필요는 없습니다. UUID 기반 파일 이름을 사용하는 시스템에서 모든 파일을 원래 파일 이름이 아닌 해당 UUID를 사용하여 참조해야 합니다. 가져온 파일에 UUID 기반 파일 이름이 없는 경우 파일 속성에 UUID를 추가하도록 시스템을 구성할 수 있습니다. 그런 다음 이 UUID는 파일 이름을 지정하는 데 UUID가 사용되지 않는 파일을 참조하는 데 사용됩니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 UUID 파일 이름 패턴을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `uuid.regex` | UUID 파일 이름 패턴의 정규 표현식을 지정하는 문자열. <br> 파일이 지정된 패턴을 따르지 않으면 UUID가 파일의 속성에 추가되고 파일에 대한 모든 참조가 파일에 할당된 UUID로 업데이트됩니다. <br> **기본값**: `"^GUID-(?<id>.*)"` |

## curl 명령 사용

curl 명령을 사용하여 DAM에 폴더를 만들고, 파일을 업로드하고, 업로드된 콘텐츠에 메타데이터를 추가할 수도 있습니다.

**폴더 만들기**

다음 명령을 실행하여 AEM 저장소에 폴더를 생성합니다.

```
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

폴더를 만들려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 폴더 생성 권한이 있어야 합니다.

- `jcr:primaryType=sling:Folder`: 이 매개 변수 *을(를)*(으)로 지정하여 폴더 유형 리소스를 만드십시오.

- `<server folder path>`: AEM 저장소에 만들 새 폴더의 이름을 포함하는 전체 폴더 경로입니다. 예를 들어 경로를 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides`(으)로 지정하면 DAM의 `projects` 폴더 내에 `AEM-Guides` 폴더가 만들어집니다.


**파일 업로드**

다음 명령을 실행하여 AEM 저장소의 파일을 업로드합니다.

```
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

다음 매개 변수를 지정하여 파일을 업로드하십시오.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 `server folder path`에 대한 쓰기 권한이 있어야 합니다.

- ``local file path``: 업로드할 로컬 시스템의 전체 파일 경로입니다.

- `<server folder path>`: 파일을 업로드할 AEM 서버의 전체 폴더 경로입니다.


**메타데이터 추가**

다음 명령을 실행하여 파일에 메타데이터를 추가합니다.

```
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

메타데이터 정보를 추가하려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하려면 사용자 이름과 암호를 지정하십시오. 이 사용자는 ``metadata node path``에 대한 쓰기 권한이 있어야 합니다.

- ``-F<attribute name>=<value>``: `<attribute name>`은(는) `audience`과(와) 같은 메타데이터 특성의 이름이며 `<value>`은(는) `internal`일 수 있습니다. 여러 속성 이름-값 쌍을 공백으로 구분하여 지정할 수 있습니다.

- `<metadata node path>`: 파일 이름과 메타데이터 노드를 포함하는 전체 폴더 경로입니다. 예를 들어 경로를 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata`(으)로 지정하면 지정된 메타데이터 정보가 `intro.xml` 파일에 설정됩니다.


**상위 항목:**&#x200B;[&#x200B;기존 콘텐츠 마이그레이션](migrate-content.md)
