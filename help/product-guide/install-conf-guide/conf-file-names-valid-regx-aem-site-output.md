---
title: AEM 사이트 출력에 대한 유효한 파일 이름 구성
description: AEM 사이트 출력에 대한 유효한 파일 이름을 구성하는 방법 알아보기
feature: Filename Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '217'
ht-degree: 0%

---

# AEM 사이트 출력에 대한 유효한 파일 이름 구성 {#id214GK0X0KXA}

DITA 주제에 허용되는 유효한 파일 이름 문자 목록과 유사하게 AEM 사이트 출력에 유효한 파일 이름 문자 목록을 구성할 수도 있습니다. URL에 허용되지 않는 알려진 문자 중 일부는 ``'<>`@$``입니다. 이러한 문자는 AEM 사이트 출력 파일 이름을 생성하는 동안 발견될 때 밑줄 &quot;`_`&quot;(으)로 자동 변환되도록 구성되어 있습니다.

Experience Manager Guides 설정을 기반으로 AEM 사이트 출력에 대해 유효한 파일 이름을 구성하는 지침을 제공하는 탭은 Cloud Service 또는 온프레미스입니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. AEM 사이트 출력의 유효한 문자를 설정하려면 구성 파일에 다음 \(property\) 세부 정보를 입력하십시오.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.common.SanitizeNodeNameImpl` | `aemsite.DisallowedFileNameChars` | AEM 사이트 출력 파일 이름에 밑줄로 바꿀 문자를 추가합니다. <br> **기본값**: ``'<\>\`@$`` |

>[!TAB 온-프레미스]

AEM 사이트 출력에 올바른 문자를 설정할 수 있는 구성이 `com.adobe.fmdita.common.SanitizeNodeNameImpl` 번들에 있습니다. **AEM Sites에 게시하기 위해 허용되지 않는 문자 집합을 설정합니다** 설정이 AEM 사이트 출력 파일 이름에 밑줄로 바꿀 문자를 포함합니다.

>[!ENDTABS]
