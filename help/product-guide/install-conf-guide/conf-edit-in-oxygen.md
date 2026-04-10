---
title: Oxygen에서 편집할 옵션 구성
description: Oxygen 커넥터 플러그인에서 편집할 옵션을 구성하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 3aadc59f5034828cf319992b7acb32d5a88eaf93
workflow-type: tm+mt
source-wordcount: '107'
ht-degree: 1%

---

# Cloud Service용 Oxygen에서 편집할 옵션 구성

AEM Guides을 사용하면 Oxygen 커넥터 플러그인에서 DITA 주제 및 DITA 맵을 편집할 수도 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. **Edit in Oxygen** 옵션을 구성하려면 구성 파일에서 다음(속성) 세부 정보를 제공합니다.



| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | 부울 \(true/false\). **기본값**: false |

>[!NOTE]
>
> 이 구성은 기본적으로 비활성화되며 옵션은 웹 편집기에서 사용할 수 없습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
