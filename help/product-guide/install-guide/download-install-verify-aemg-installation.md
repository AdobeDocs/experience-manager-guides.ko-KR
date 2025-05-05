---
title: AEM Guides 설치 확인
description: AEM Guides 설치 확인 방법 알아보기
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 0%

---

# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides을 설치한 후에는 설치 성공 여부를 확인해야 합니다. 다음 단계를 수행하여 설치 프로세스를 확인합니다.

1. AEM 인스턴스에 로그인하고 AEM Web Console 번들 페이지로 이동합니다. 번들 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   번들 목록이 표시됩니다.

1. 필터링 텍스트 상자에 fmdita를 입력하여 번들 목록을 필터링하고 **Enter**&#x200B;을 누릅니다.

   번들 목록은 AEM Guides에서 설치한 번들을 표시하도록 필터링됩니다. 설치가 성공하면 설치된 모든 번들의 **상태**&#x200B;이(가) **활성**&#x200B;입니다.

   번들에 **Active** 상태가 없는 경우 AEM 로그를 확인하여 설치 문제를 해결하십시오.


>[!IMPORTANT]
>
> 시스템 성능을 개선하기 위해 고려할 수 있는 다양한 성능 최적화 권장 사항이 있습니다. 자세한 내용은 [성능 최적화를 위한 Recommendations](download-install-recommend-perf-optimiz.md#)을 참조하십시오.

**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
