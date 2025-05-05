---
title: 동일한 탭에서 DITA 주제 또는 맵 파일 열기
description: 동일한 탭에서 DITA 주제 또는 맵 파일을 여는 방법에 대해 알아봅니다
exl-id: 466cbea4-c75a-488e-bde2-465cf2c184d5
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '208'
ht-degree: 0%

---

# 동일한 탭에서 DITA 주제 또는 맵 파일 열기 {#id223HH0301J3}

일부 워크플로우에서는 주제나 맵 파일의 링크를 클릭하면 새 탭에서 열립니다. 이렇게 하면 브라우저에서 많은 탭이 열려 생산성에 영향을 줄 수 있습니다. 새 탭에서 주제 또는 맵 파일을 여는 동작을 변경하여 현재 탭 자체에서 강제로 열 수 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 새 탭에서 주제 또는 맵 파일을 엽니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinsametab` | 부울 \(true/false\). <br> **기본값**: `false` |

이 설정은 주제 또는 맵 파일에 액세스할 수 있는 다음 위치에 영향을 줍니다.

- DITA 주제를 만듭니다. \(워크플로우 끝에 **주제 열기** 단추를 클릭하면\)

- DITA 맵 만들기 \(워크플로우 끝에 **맵 열기** 단추를 클릭하면\)

- DITA 맵 콘솔의 주제 탭

- DITA 맵 콘솔의 기준선 탭

- DITA 맵 콘솔의 보고서 탭


**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
