---
title: UUID 파일 이름 패턴 구성
description: UUID 파일 이름 패턴을 구성하는 방법 알아보기
feature: Migration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '297'
ht-degree: 1%

---

# UUID 파일 이름 패턴 구성

콘텐츠를 가져올 때 파일 이름이 UUID를 기반으로 할 필요는 없습니다. UUID 기반 파일 이름을 사용하는 시스템에서 모든 파일을 원래 파일 이름이 아닌 해당 UUID를 사용하여 참조해야 합니다. 가져온 파일에 UUID 기반 파일 이름이 없는 경우 파일 속성에 UUID를 추가하도록 시스템을 구성할 수 있습니다. 그런 다음 이 UUID는 파일 이름을 지정하는 데 UUID가 사용되지 않는 파일을 참조하는 데 사용됩니다.

## UUID 파일 이름 패턴을 구성하는 단계

Experience Manager Guides 설정을 기반으로 UUID 파일 이름 패턴을 구성하는 지침은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 UUID 파일 이름 패턴을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.config.ConfigManager` | `uuid.regex` | UUID 파일 이름 패턴의 정규 표현식을 지정하는 문자열. <br> 파일이 지정된 패턴을 따르지 않으면 UUID가 파일의 속성에 추가되고 파일에 대한 모든 참조가 파일에 할당된 UUID로 업데이트됩니다. <br> **기본값**: `"^GUID-(?<id>.*)"` |

>[!TAB 온-프레미스]

UUID 패턴에 대해 파일 이름을 확인하고 UUID가 할당되지 않은 파일에 UUID를 할당하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. **UUID 파일 이름 패턴** 속성에서 가져온 파일의 이름을 확인할 패턴을 지정합니다.

   파일이 지정된 패턴을 따르지 않으면 UUID가 파일의 속성에 추가되고 파일에 대한 모든 참조가 파일에 지정된 UUID로 업데이트됩니다.

1. **저장**&#x200B;을 선택합니다.

>[!ENDTABS]





