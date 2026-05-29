---
title: AEM 사이트 출력에 대한 유효한 파일 이름 구성
description: AEM 사이트 출력에 대한 유효한 파일 이름을 구성하는 방법 알아보기
exl-id: 1e69d6f8-7baf-4189-bbbd-34cd0fec6634
feature: Filename Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/vGe4--XJ9VL5q74J7hVFCmD0vrBRnUkBAdZDCFcUxeU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ccd46b93-df7f-4458-ba4c-90a3562d9ab0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 179e9016b12edb14c09ce9352a318e06a4fc628a
workflow-type: tm+mt
source-wordcount: 139
ht-degree: 0%

---

# AEM 사이트 출력에 대한 유효한 파일 이름 구성 {#id214GK0X0KXA}

DITA 주제에 허용되는 유효한 파일 이름 문자 목록과 유사하게 AEM 사이트 출력에 유효한 파일 이름 문자 목록을 구성할 수도 있습니다. URL에 허용되지 않는 알려진 문자 중 일부는 `<>` `@$`입니다. 이러한 문자는 AEM 사이트 출력 파일 이름을 생성하는 동안 발견될 때 밑줄 &quot;_&quot;로 자동 변환되도록 구성됩니다. AEM 사이트 출력에 올바른 문자를 설정할 수 있는 구성이 `com.adobe.fmdita.common.SanitizeNodeNameImpl` 번들에 있습니다. **AEM Sites에 게시하기 위해 허용되지 않는 문자 집합을 설정합니다** 설정이 AEM 사이트 출력 파일 이름에 밑줄로 바꿀 문자를 포함합니다.

**상위 항목:**&#x200B;[&#x200B;파일 이름 구성](conf-file-names.md)
