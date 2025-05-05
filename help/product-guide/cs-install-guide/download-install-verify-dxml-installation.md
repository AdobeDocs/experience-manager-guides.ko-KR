---
title: AEM Guides 설치 확인
description: AEM Guides 설치 확인 방법 알아보기
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '128'
ht-degree: 0%

---

# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides을 설치한 후에는 설치 성공 여부를 확인해야 합니다. 다음 단계를 수행하여 설치를 확인합니다.

1. Cloud Service Developer Console에 액세스합니다.

   Developer Console 액세스에 대한 자세한 내용은 AEM 설명서에서 [Developer Console 액세스](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ko)를 참조하십시오.

1. AEM의 OSGi 번들 목록에 액세스합니다.

   번들에 액세스하는 방법에 대한 자세한 내용은 AEM 설명서의 [번들](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=ko#bundles)을 참조하십시오.

1. 번들 목록에서 fmdita를 검색하고 상태를 확인합니다.

   배포된 번들에 대한 *활성* 상태가 표시됩니다. 번들에 활성 상태가 없는 경우 AEM 로그를 확인하여 설치 문제를 해결합니다.


**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
