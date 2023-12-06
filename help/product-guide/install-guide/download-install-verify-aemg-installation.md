---
title: AEM Guides 설치 확인
description: AEM Guides 설치를 확인하는 방법에 대해 알아봅니다
exl-id: 8e0afe18-5675-4c7e-b216-6de1a752bd01
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '165'
ht-degree: 0%

---

# AEM Guides 설치 확인 {#id213BD030FBE}

AEM Guides를 설치한 후에는 설치 성공 여부를 확인해야 합니다. 다음 단계를 수행하여 설치 프로세스를 확인합니다.

1. AEM 인스턴스에 로그인하고 AEM Web Console 번들 페이지로 이동합니다. 번들 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/bundles
   ```

   번들 목록이 표시됩니다.

1. 필터링 텍스트 상자에 fmdita를 입력하여 번들 목록을 필터링한 다음 키를 누릅니다 **입력**.

   번들 목록은 AEM Guides에서 설치한 번들을 표시하도록 필터링됩니다. 성공적으로 설치되면 설치된 모든 번들에는 **상태** / **활성**.

   번들에 **활성** 상태를 확인한 다음 AEM 로그를 확인하여 설치 문제를 해결합니다.


>[!IMPORTANT]
>
> 시스템 성능을 개선하기 위해 고려할 수 있는 다양한 성능 최적화 권장 사항이 있습니다. 다음을 참조하십시오 [성능 최적화를 위한 Recommendations](download-install-recommend-perf-optimiz.md#) 을 참조하십시오.

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
