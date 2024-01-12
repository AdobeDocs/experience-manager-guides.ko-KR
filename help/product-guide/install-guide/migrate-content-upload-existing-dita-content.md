---
title: 기존 DITA 콘텐츠 업로드
description: 기존 DITA 콘텐츠를 업로드하는 방법 알아보기
exl-id: 1dde8a29-301f-461e-b598-2a8cab61bf3d
feature: Migration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '1201'
ht-degree: 0%

---

# 기존 DITA 콘텐츠 업로드 {#id176FF000JUI}

AEM Guides에 사용할 기존 DITA 콘텐츠 저장소가 있을 가능성이 높습니다. 이러한 기존 콘텐츠의 경우 다음 접근 방식 중 하나를 사용하여 콘텐츠를 AEM 저장소에 일괄 업로드할 수 있습니다.

## WebDAV 도구 사용

다른 DITA 편집기에서 주제 및 맵을 작성하는 경우 WebDAV 도구를 사용하여 파일을 업로드할 수 있습니다. 이 섹션에서 지정한 절차는 WebDAV 도구로 WinSCP를 사용하여 콘텐츠를 업로드합니다.

WinSCP를 사용하여 파일을 업로드하려면 다음 단계를 수행하십시오.

1. 컴퓨터에 WinSCP를 다운로드하여 설치합니다.

1. WinSCP 앱을 시작합니다.

   로그인 대화 상자가 나타납니다.

1. 로그인 대화 상자에서 WebDAV를 로 선택하여 새 사이트 설정을 지정합니다. **파일 프로토콜** 및 다음과 같은 기타 연결 세부 정보 제공:

   - AEM 서버가 호스팅되는 URL,

   - 포트 번호 \(기본값은 4502\),

   - AEM 서버에 액세스하기 위한 사용자 이름 및 암호입니다.

1. **로그인**&#x200B;을 클릭합니다.

   연결에 성공하면 WinSCP 사용자 인터페이스에 AEM Assets의 콘텐츠가 표시됩니다. WinSCP 파일 탐색기를 사용하여 콘텐츠를 쉽게 검색, 만들기, 업데이트 또는 삭제할 수 있습니다.


## FrameMaker 사용

Adobe FrameMaker에는 기존 DITA 및 기타 FrameMaker 문서 \(.book 및 .fm\)를 AEM에 쉽게 업로드할 수 있는 강력한 AEM 커넥터가 포함되어 있습니다. 단일 파일 업로드, 종속성 유무에 관계없이 전체 폴더 업로드 \(예: 콘텐츠 참조, 상호 참조 및 그래픽\)와 같은 다양한 파일 업로드 기능을 사용할 수 있습니다.

FrameMaker의 AEM Connector를 사용하여 콘텐츠를 업로드하려면 다음 단계를 수행하십시오.

1. FrameMaker 시작.

1. 를 엽니다. **연결 관리자** 대화 상자.

   ![](assets/fm-aem-connector.png){width="550" align="left"}

1. AEM 저장소에 연결하려면 다음 세부 정보를 입력하십시오.

   - **이름**: AEM 서버에 대한 연결을 식별하는 수사적 이름을 입력합니다.
   - **서버**: AEM 서버의 URL 및 포트 번호를 입력합니다.

   - **사용자 이름**/**암호**: AEM 서버에 액세스하려면 사용자 이름과 암호를 입력합니다.

1. 클릭 **연결**.

   연결이 성공적으로 설정되면 AEM 저장소의 자산이 저장소 관리자 창에 표시됩니다.

   ![](assets/fm-repo-manager.png){width="550" align="left"}

   파일 또는 폴더를 마우스 오른쪽 버튼으로 클릭하면 관련 작업을 수행할 수 있습니다. 예를 들어, 폴더를 마우스 오른쪽 버튼으로 클릭하면 파일 업로드, 종속성이 있는 파일 업로드, 전체 폴더 업로드 등의 옵션이 제공됩니다.


## UUID 파일 이름 패턴 구성

콘텐츠를 가져올 때 파일 이름이 UUID를 기반으로 할 필요는 없습니다. UUID 기반 파일 이름을 사용하는 시스템에서 모든 파일을 원래 파일 이름이 아닌 해당 UUID를 사용하여 참조해야 합니다. 가져온 파일에 UUID 기반 파일 이름이 없는 경우 파일 속성에 UUID를 추가하도록 시스템을 구성할 수 있습니다. 그런 다음 이 UUID는 파일 이름을 지정하는 데 UUID가 사용되지 않는 파일을 참조하는 데 사용됩니다.

UUID 패턴에 대해 파일 이름을 확인하고 UUID가 할당되지 않은 파일에 UUID를 할당하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. 을(를) 검색하고 클릭합니다. *com.adobe.fmdita.config.ConfigManager* 번들.

1. 다음에서 **UUID 파일 이름 패턴** 속성을 사용하려면 가져온 파일의 이름을 확인하는 패턴을 지정합니다.

   파일이 지정된 패턴을 따르지 않으면 UUID가 파일의 속성에 추가되고 파일에 대한 모든 참조가 파일에 지정된 UUID로 업데이트됩니다.

1. **저장**&#x200B;을 클릭합니다.


## WebDav 도구를 사용하여 UUID로 콘텐츠 업로드 {#id201MI0I04Y4}

다음 방법 중 하나를 사용하여 UUID로 콘텐츠를 업로드할 수 있습니다.

- 로컬 시스템에서 콘텐츠를 드래그 앤 드롭합니다.
- 사용 **만들기** \> **파일** AEM Assets UI의 워크플로.
- WinSCP와 같은 도구를 사용합니다.

WinSCP와 같은 도구를 사용하는 경우 **UUID가 동일한 이전 파일을 새 폴더로 이동** configMgr의 옵션입니다. 이 옵션은 AEM 저장소의 다른 위치에서 사용할 수 있는 파일에 대해 수행되는 작업을 정의합니다. 이 설정은 *com.adobe.fmdita.config.ConfigManager* configMgr에 번들을 추가합니다.

기본적으로 **UUID가 동일한 이전 파일을 새 폴더로 이동** 옵션이 켜져 있습니다. 이는 업로드되는 파일이 저장소의 다른 폴더에 있는 경우 기존 파일이 현재 위치로 이동되고 업로드되는 파일로 덮어쓰기됨을 의미합니다. 이 옵션을 선택하지 않으면 기존 위치에서 파일을 덮어씁니다.

**UUID 기반 파일 작업에 대한 추가 참고 사항**:

AEM 저장소 내에서 콘텐츠를 이동하거나 복사하는 동안 다음 사항을 고려해야 합니다.

- 한 위치에서 다른 위치로 하나 이상의 파일을 복사할 때 UUID가 없는 파일에 대해 새 UUID가 생성됩니다. 이 UUID는 파일의 메타데이터에 추가됩니다.

- 파일에 충돌이 있거나 중복이 있는 경우 복사되거나 이동되는 새 파일에 대해 고유한 파일 이름이 생성됩니다.

- 두 파일이 동일한 UUID를 가질 수 없습니다. 고유한 UUID가 모든 새 파일에 할당됩니다.


로컬 시스템에서 AEM 저장소로 콘텐츠를 이동하거나 복사할 때에는 다음 사항을 고려해야 합니다.

- 서로 다른 두 사용자가 동시에 파일을 업로드하는 경우 나중에 처리되는 파일이 이전 파일을 덮어씁니다. 그러나 이러한 관행은 드물며 피해야 합니다.

- AEM 저장소에서 컨텐츠를 체크아웃하고 로컬 시스템에서 변경할 때 파일을 업로드할 때 파일 이름이 변경되지 않았는지 확인하십시오.


## curl 명령 사용

curl 명령을 사용하여 DAM에 폴더를 만들고, 파일을 업로드하고, 업로드된 콘텐츠에 메타데이터를 추가할 수도 있습니다.

**폴더 만들기**

다음 명령을 실행하여 AEM 저장소에 폴더를 생성합니다.

```curl
curl --user <username>:<password> --data jcr:primaryType=sling:Folder "<server folder path>"
```

폴더를 만들려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하기 위한 사용자 이름과 암호를 지정합니다. 이 사용자는 폴더 생성 권한이 있어야 합니다.

- `jcr:primaryType=sling:Folder`: 이 매개 변수를 지정합니다 *있는 그대로* 을 클릭하여 폴더 유형 리소스를 생성합니다.

- `<server folder path>`: AEM 저장소에 만들 새 폴더의 이름을 포함하는 전체 폴더 경로입니다. 예를 들어 경로를 로 지정하는 경우 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides`, 폴더 순으로 정렬됩니다. `AEM-Guides` 다음 기간 내에 만들어짐: `projects` DAM의 폴더입니다.


**파일 업로드**

다음 명령을 실행하여 AEM 저장소의 파일을 업로드합니다.

```curl
curl --user <username>:<password> -T "<local file path>" "<server folder path>"
```

다음 매개 변수를 지정하여 파일을 업로드하십시오.

- `<username>:<passowrd>`: AEM 저장소에 액세스하기 위한 사용자 이름과 암호를 지정합니다. 이 사용자는 다음에 대한 쓰기 권한이 있어야 합니다. `server folder path`.

- ``local file path``: 업로드할 로컬 시스템의 전체 파일 경로입니다.

- `<server folder path>`: 파일을 업로드할 AEM 서버의 전체 폴더 경로입니다.


**메타데이터 추가**

다음 명령을 실행하여 파일에 메타데이터를 추가합니다.

```curl
curl --user <username>:<password> -F<attribute name>=<value> <metadata node path>
```

메타데이터 정보를 추가하려면 다음 매개 변수를 지정합니다.

- `<username>:<passowrd>`: AEM 저장소에 액세스하기 위한 사용자 이름과 암호를 지정합니다. 이 사용자는 다음에 대한 쓰기 권한이 있어야 합니다. ``metadata node path``.

- ``-F<attribute name>=<value>``: `<attribute name>` 는 메타데이터 속성의 이름입니다. 예: `audience` 및 `<value>` 다음과 같을 수 있음 `internal`. 여러 속성 이름-값 쌍을 공백으로 구분하여 지정할 수 있습니다.

- `<metadata node path>`: 파일 이름 및 해당 메타데이터 노드를 포함하는 전체 폴더 경로. 예를 들어 경로를 로 지정하는 경우 `http://192.168.1.1:4502/content/dam/projects/AEM-Guides/intro.xml/jcr:content/metadata`을 누르고 지정된 메타데이터 정보가에 `intro.xml` 파일.


**상위 항목:**[&#x200B;기존 콘텐츠 마이그레이션](migrate-content.md)
