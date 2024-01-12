---
title: Oxygen에서 편집할 옵션 구성
description: Oxygen 커넥터 플러그인에서 편집할 옵션을 구성하는 방법을 알아봅니다.
exl-id: 96081a6d-39cf-4697-8b43-6494543ea187
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 1%

---

# Oxygen에서 편집할 옵션 구성

AEM Guides를 사용하면 Oxygen 커넥터 플러그인에서 DITA 주제 및 DITA 맵을 편집할 수도 있습니다.

에 제공된 지침 사용 [구성 재정의](download-install-additional-config-override.md#) 구성 파일을 만듭니다. 구성 파일에서 다음 (속성) 세부 사항을 입력하여 **Oxygen에서 편집** 옵션:



| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.editinoxygen` | 부울 \(true/false\). **기본값**: false |

>[!NOTE]
>
> 이 구성은 기본적으로 비활성화되며 옵션은 웹 편집기에서 사용할 수 없습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
