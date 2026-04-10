---
title: 클라우드 서비스에 대한 자산 처리 구성
description: 클라우드 서비스를 위한 자산 처리를 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '113'
ht-degree: 3%

---

# 자산 처리 기능 구성

Experience Manager Guides 설정을 기반으로 에셋 처리 기능을 구성하는 지침은 Cloud Service 또는 온프레미스를 참조하십시오.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **기본값:** &quot;true&quot; |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 `Enable Guides asset processing scheduled job` 설정을 구성하십시오. 이 설정은 기본적으로 활성화되어 있습니다.

1. **저장**&#x200B;을 선택합니다.

>[!ENDTABS]