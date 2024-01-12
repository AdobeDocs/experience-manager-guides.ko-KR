---
title: AEM 사이트 출력에 대한 유효한 파일 이름 구성
description: AEM Site 출력에 대한 유효한 파일 이름을 구성하는 방법 알아보기
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 0%

---

# AEM 사이트 출력에 대한 유효한 파일 이름 구성 {#id214GK0X0KXA}

DITA 주제에 허용되는 유효한 파일 이름 문자 목록과 유사하게 AEM Site 출력에 유효한 파일 이름 문자 목록을 구성할 수도 있습니다. URL에 허용되지 않는 알려진 문자 중 일부는 다음과 같습니다. ```'<>`@$```. 이러한 문자는 AEM Site 출력 파일 이름을 생성하는 동안 발견될 때 밑줄 &quot;_&quot;로 자동 변환되도록 구성됩니다. AEM Site 출력에서 유효한 문자를 설정할 수 있는 구성은 `com.adobe.fmdita.common.SanitizeNodeNameImpl` 번들. **AEM Sites에 게시하기 위해 허용되지 않는 문자 집합 설정** AEM 사이트 출력 파일 이름에 밑줄로 바꿀 문자를 포함하도록 을 설정합니다.

**상위 항목:**[&#x200B;파일 이름 구성](conf-file-names.md)
