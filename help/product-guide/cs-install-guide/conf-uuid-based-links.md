---
title: UUID 기반 링크 표시 구성
description: UUID 기반 링크 표시를 구성하는 방법 알아보기
exl-id: 2ae6a27f-983b-4aa0-be29-166899aeb4ff
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 1%

---

# UUID 기반 링크 표시 구성 {#id2035G20M0QN}

기본적으로 웹 편집기의 참조 삽입 또는 재사용 콘텐츠 삽입 옵션을 사용하여 링크를 만들면 참조된 콘텐츠의 UUID를 사용하여 링크가 만들어집니다. 참조된 콘텐츠의 **Link** 속성 \( 속성 패널\)은 참조된 콘텐츠의 상대 파일 경로 또는 UUID를 표시하도록 구성할 수 있습니다. 기본적으로 참조된 콘텐츠의 UUID가 속성 패널에 표시됩니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 웹 편집기에서 참조된 콘텐츠의 상대 경로 또는 UUID를 보여 줍니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | 부울 \(true/false\). 연결된 콘텐츠의 상대 경로를 표시하려면 이 속성을 false로 설정하십시오. <br> **기본값**: true |

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
