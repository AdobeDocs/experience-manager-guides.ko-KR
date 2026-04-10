---
title: AEM 사이트 출력에 대한 유효한 파일 이름 구성
description: AEM 사이트 출력에 대한 유효한 파일 이름을 구성하는 방법 알아보기
exl-id: 05215bec-653b-4563-83c6-a1bb16200469
feature: Filename Configuration
role: Admin
level: Experienced
hidefromtoc: true
source-git-commit: 564ee1731be2378744ffd2ed54a2fd423901a0b3
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 1%

---

# AEM 사이트 출력에 대한 유효한 파일 이름 구성 {#id214GK0X0KXA}

DITA 주제에 허용되는 유효한 파일 이름 문자 목록과 유사하게 AEM 사이트 출력에 유효한 파일 이름 문자 목록을 구성할 수도 있습니다. URL에 허용되지 않는 알려진 문자 중 일부는 ``'<>`@$``입니다. 이러한 문자는 AEM 사이트 출력 파일 이름을 생성하는 동안 발견될 때 밑줄 &quot;`_`&quot;(으)로 자동 변환되도록 구성되어 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. AEM 사이트 출력의 유효한 문자를 설정하려면 구성 파일에 다음 \(property\) 세부 정보를 입력하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM 사이트 출력 파일 이름에 밑줄로 바꿀 문자를 추가합니다. <br> **기본값**: ``'<\>\`@$`` |

**상위 항목:**[&#x200B;파일 이름 구성](conf-file-names.md)
