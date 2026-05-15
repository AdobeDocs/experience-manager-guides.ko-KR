---
title: UUID 기반 링크 표시 구성
description: UUID 기반 링크 표시를 구성하는 방법 알아보기
exl-id: 2ae6a27f-983b-4aa0-be29-166899aeb4ff
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/--RdjezGIsplCdBLF8u-3LvR92rVBcgGmPo8a7GbQys
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 162
ht-degree: 1%

---

# UUID 기반 링크 표시 구성 {#id2035G20M0QN}

기본적으로 웹 편집기의 참조 삽입 또는 재사용 콘텐츠 삽입 옵션을 사용하여 링크를 만들면 참조된 콘텐츠의 UUID를 사용하여 링크가 만들어집니다. 참조된 콘텐츠의 **Link** 속성 \( 속성 패널\)은 참조된 콘텐츠의 상대 파일 경로 또는 UUID를 표시하도록 구성할 수 있습니다. 기본적으로 참조된 콘텐츠의 UUID가 속성 패널에 표시됩니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 제공하여 웹 편집기에서 참조된 콘텐츠의 상대 경로 또는 UUID를 보여 줍니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.uuid` | 부울 \(true/false\). 연결된 콘텐츠의 상대 경로를 표시하려면 이 속성을 false로 설정하십시오. <br> **기본값**: true |

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
