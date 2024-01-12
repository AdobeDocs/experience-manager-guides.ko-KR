---
title: AEM 사이트 출력에 대한 유효한 파일 이름 구성
description: AEM Site 출력에 대한 유효한 파일 이름을 구성하는 방법 알아보기
exl-id: 05215bec-653b-4563-83c6-a1bb16200469
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 1%

---

# AEM 사이트 출력에 대한 유효한 파일 이름 구성 {#id214GK0X0KXA}

DITA 주제에 허용되는 유효한 파일 이름 문자 목록과 유사하게 AEM Site 출력에 유효한 파일 이름 문자 목록을 구성할 수도 있습니다. URL에 허용되지 않는 알려진 문자 중 일부는 다음과 같습니다. ``'<>`@$``. 이 문자는 자동으로 밑줄(&quot;)로 변환되도록 구성되어 있습니다.`_`AEM Site 출력 파일 이름을 생성하는 동안 발견된 경우

에 제공된 지침 사용 [구성 재정의](download-install-additional-config-override.md#) 구성 파일을 만듭니다. AEM Site 출력에 유효한 문자를 설정하려면 구성 파일에서 다음 \(property\) 세부 정보를 제공합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM Site 출력 파일 이름에 밑줄로 바꿀 문자를 추가합니다. <br> **기본값**: ``'<\>\`@$`` |

**상위 항목:**[&#x200B;파일 이름 구성](conf-file-names.md)
