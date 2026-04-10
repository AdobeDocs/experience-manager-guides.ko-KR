---
title: AEM Guides 설치 확인
description: AEM Guides 설치 확인 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 0%

---

# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides을 설치한 후에는 설치 성공 여부를 확인해야 합니다.

Cloud Service 또는 온프레미스 탭에서 Experience Manager Guides 설정을 기반으로 AEM Guides 설치를 확인하는 지침을 제공합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

다음 단계를 수행하여 설치를 확인합니다.

1. Cloud Service Developer Console에 액세스합니다.

   Developer Console 액세스에 대한 자세한 내용은 AEM 설명서에서 [Developer Console 액세스](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ko)를 참조하십시오.

1. AEM의 OSGi 번들 목록에 액세스합니다.

   번들에 액세스하는 방법에 대한 자세한 내용은 AEM 설명서의 [번들](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ko#bundles)을 참조하십시오.

1. 번들 목록에서 fmdita를 검색하고 상태를 확인합니다.

   배포된 번들에 대한 *활성* 상태가 표시됩니다. 번들에 활성 상태가 없는 것이 있으면 AEM 로그를 확인하여 설치 문제를 해결하십시오.

>[!TAB 온-프레미스]

다음 단계를 수행하여 설치를 확인합니다.

1. AEM 인스턴스에 로그인하고 AEM 웹 콘솔 번들 페이지로 이동합니다. 번들 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   번들 목록이 표시됩니다.

1. 필터링 텍스트 상자에 fmdita를 입력하여 번들 목록을 필터링하고 **Enter**&#x200B;을 누릅니다.

   번들 목록은 AEM Guides에서 설치한 번들을 표시하도록 필터링됩니다. 설치가 성공하면 설치된 모든 번들의 **상태**&#x200B;이(가) **활성**&#x200B;입니다.

   번들에 **Active** 상태가 없는 경우 AEM 로그를 확인하여 설치 문제를 해결하십시오.


>[!IMPORTANT]
>
> 시스템 성능을 개선하기 위해 고려할 수 있는 다양한 성능 최적화 권장 사항이 있습니다. 자세한 내용은 [성능 최적화를 위한 권장 사항](perf-optimization-on-prem.md#)을 참조하십시오.

>[!ENDTABS]


