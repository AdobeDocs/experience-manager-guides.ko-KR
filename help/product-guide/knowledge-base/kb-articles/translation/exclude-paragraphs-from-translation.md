---
title: 주제 내의 단락을 번역에서 제외
description: 항목 내의 단락을 번역에서 제외하는 방법
feature: Translation
role: User
exl-id: 21e41bb4-52f3-4352-92d9-4a60f636de99
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# 항목 내의 단락을 번역에서 제외하는 방법

가장 쉬운 방법은 translation=no attribute 를 사용하는 것입니다.

+ 작성자는 다음과 같이 추가 속성을 삽입할 수 있습니다. **translation=no** 번역할 필요가 없는 단락에 대해서입니다. 번역 공급업체에 정보를 제공하고 마지막에서 이 특성이 있는 텍스트를 무시하도록 구성할 수 있습니다.
+ OOTB 기계 번역(체험판 Microsoft 번역 커넥터 사용)에도 동일한 동작이 표시됩니다.
+ Microsoft 번역을 사용하여 테스트 : **translate=no** 속성이 단락 수준에서 바뀌면 전체 단락이 번역되지 않습니다. 이 속성은 모든 요소에서 정의할 수 있으며 해당 요소 내의 콘텐츠는 번역되지 않습니다.


다음은 이를 자세히 설명하는 몇 가지 스크린샷입니다.

**소스 컨텐츠**

![소스 컨텐츠](assets/source-content.jpg)

**번역된 스페인어 콘텐츠**

![번역된 스페인어 콘텐츠](assets/trans-content.jpg)
