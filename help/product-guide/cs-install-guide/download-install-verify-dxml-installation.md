---
title: AEM Guides 설치 확인
description: AEM Guides 설치 확인 방법 알아보기
exl-id: 4e566c57-a522-4605-bc70-47155f20b429
feature: Installation
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/WDiYcOCdCuaJCrGYCupOS0TEk5TV-1q6Zi5z-S7KWLA
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 162
ht-degree: 0%

---

# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides을 설치한 후에는 설치 성공 여부를 확인해야 합니다. 다음 단계를 수행하여 설치를 확인합니다.

1. Cloud Service Developer Console에 액세스합니다.

   Developer Console 액세스에 대한 자세한 내용은 AEM 설명서에서 [Developer Console 액세스](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html)를 참조하십시오.

1. AEM의 OSGi 번들 목록에 액세스합니다.

   번들에 액세스하는 방법에 대한 자세한 내용은 AEM 설명서의 [번들](https://experienceleague.adobe.com/docs/experience-manager-learn/cloud-service/debugging/debugging-aem-as-a-cloud-service/developer-console.html?lang=en#bundles)을 참조하십시오.

1. 번들 목록에서 fmdita를 검색하고 상태를 확인합니다.

   배포된 번들에 대한 *활성* 상태가 표시됩니다. 번들에 활성 상태가 없는 것이 있으면 AEM 로그를 확인하여 설치 문제를 해결하십시오.


**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
