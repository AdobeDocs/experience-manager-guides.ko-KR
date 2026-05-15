---
title: 웹 편집기에서 파일 자동 저장 구성
description: 웹 편집기에서 파일 자동 저장을 구성하는 방법에 대해 알아봅니다
exl-id: 4d99c3d8-cf6a-4cf3-aaec-9009a0376c1e
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/yHZSl9G2a6ras7kUUpNho5TG8yeIJzeFXzwxGQSWp44
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 190
ht-degree: 1%

---

# 웹 편집기에서 파일 자동 저장 구성 {#id199CC0J0M5Z}

브라우저 기반 편집기에서 가장 일반적인 기능 중 하나는 특정 기간 후에 데이터를 저장하는 기능입니다. AEM Guides 웹 편집기는 또한 지정된 시간 간격으로 주제 및 맵 파일을 자동으로 저장할 수 있도록 지원합니다. 이 기능이 트리거되면 주제 또는 맵의 작업 복사본이 저장됩니다. 주제나 맵의 새 버전이 만들어지지 않습니다. 새 버전을 생성하려면 웹 편집기의 도구 모음에서 개정 저장 아이콘을 클릭해야 합니다.

자동 저장 기능은 기본적으로 활성화되어 있지 않으며 구성 파일을 사용하여 활성화해야 합니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 파일 자동 저장 및 자동 저장 시간 간격을 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.autosave` | 부울 \(true/false\).<br> **기본값**: false |
| `xmleditor.autosaveinterval` | 자동 저장 기능을 트리거할 시간 간격(초)을 지정합니다. |  |

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
