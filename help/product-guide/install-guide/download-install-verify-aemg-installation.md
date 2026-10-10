---
title: AEM Guides 설치 확인
description: AEM Guides 설치 확인 방법 알아보기
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
feature: Installation
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/sniTYknUIyJH0D1moIL3olj3AeBT08kLH52Gba27sqs'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '164'
ht-degree: 0%
---
# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides을 설치한 후에는 설치 성공 여부를 확인해야 합니다. 다음 단계를 수행하여 설치 프로세스를 확인합니다.

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
> 시스템 성능을 개선하기 위해 고려할 수 있는 다양한 성능 최적화 권장 사항이 있습니다. 자세한 내용은 [성능 최적화를 위한 권장 사항](download-install-recommend-perf-optimiz.md#)을 참조하십시오.

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
