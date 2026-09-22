---
title: 클라우드 서비스 및 온프레미스용 XML 구문 분석 엔티티 구성
description: 클라우드 서비스 및 온프레미스용 XML 구문 분석 엔티티를 구성하는 방법에 대해 알아봅니다
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: e4019ae1e605bd26f7df676a4fab8c632fd8fa8e
workflow-type: tm+mt
source-wordcount: '311'
ht-degree: 1%
---
# XML 파서 엔터티 크기 제한 구성

Experience Manager Guides을 사용하면 게시 중에 XML 파서가 허용하는 총 엔티티 크기에 대한 제한을 구성할 수 있습니다. 따라서 XML 엔티티 확장 공격과 오버사이즈 페이로드 처리와 같은 문제가 발생하지 않도록 할 수 있습니다.

>[!NOTE]
>
>게시 중에 XML 파서에서 허용하는 총 엔티티 크기에 대한 제한을 구성하여 XML 엔티티 확장 공격 및 오버사이즈 페이로드 처리와 같은 위험을 완화할 수 있습니다. 엔티티 크기 제한 처리는 Java 21과 Java 25에 따라 다릅니다. 따라서 Java 25로 업그레이드한 환경에서는 게시 워크플로우가 오류 없이 계속 작동하도록 구성을 검토하고 확인하는 것이 좋습니다.

이 구성에는 두 가지 관련 속성이 포함됩니다.

* **XML 파서 총 엔터티 크기 제한 적용**(`dxml.publish.xml.apply.total.entity.size.limit`): 총 엔터티 크기 제한 검사를 사용하거나 사용하지 않도록 설정합니다.
* **XML 구문 분석기의 총 엔터티 크기 제한**(`dxml.publish.xml.total.entity.size.limit`): 적용 플래그를 사용하도록 설정한 경우 보안 XML 구문 분석기에 적용되는 JAXP `totalEntitySizeLimit` 값(문자)을 지정합니다.

Experience Manager Guides 설정을 기반으로 이러한 속성을 구성하는 지침은 Cloud Service 또는 온프레미스에서 제공됩니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService` | `dxml.publish.xml.apply.total.entity.size.limit` | **기본값:** &quot;true&quot; |
   | `com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService` | `dxml.publish.xml.total.entity.size.limit` | **기본값:** &quot;50000000&quot; |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.publishworkflow.PublishWorkflowConfigurationService* 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 다음 설정을 구성합니다.

   * **XML 구문 분석기의 총 엔터티 크기 제한 적용**(`dxml.publish.xml.apply.total.entity.size.limit`): 기본적으로 이 설정은 비활성화되어 있습니다.
   * **XML 구문 분석기의 총 엔터티 크기 제한**(`dxml.publish.xml.total.entity.size.limit`): 기본적으로 이 값은 `50000000`자로 설정됩니다. 이 설정은 **XML 구문 분석기의 총 엔터티 크기 제한 적용** 설정을 사용하는 경우에만 적용됩니다.

1. **저장**&#x200B;을 선택합니다.

>[!ENDTABS]



