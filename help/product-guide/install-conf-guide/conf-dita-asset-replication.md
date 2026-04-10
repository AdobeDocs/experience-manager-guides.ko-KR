---
title: DITA Assets 복제 구성
description: Dita Assets 복제를 구성하는 방법 알아보기
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 453da51a42984b912547570f2e1de70806b41171
workflow-type: tm+mt
source-wordcount: '109'
ht-degree: 3%

---

# DITA 에셋 복제 구성

Experience Manager Guides 설정을 기반으로 DITA Assets 복제 기능을 구성하는 지침은 Cloud Service 또는 온프레미스를 참조하십시오.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](../install-conf-guide/download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `publish.replicate` | **기본값:** &quot;true&quot; |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 `Replicate DITA assets` 설정을 구성하십시오. 이 설정은 기본적으로 활성화되어 있습니다.


   ![](assets/dita-assets-replication.png){width="350" align="left"}


1. **저장**&#x200B;을 선택합니다.

>[!ENDTABS]
