---
title: 닫을 때 새 버전으로 저장하라는 메시지 구성
description: 닫을 때 새 버전으로 저장하도록 프롬프트를 구성하는 방법 알아보기
exl-id: 9029b671-8ff8-45eb-b27e-ab89bd09e7ed
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '186'
ht-degree: 1%

---

# 닫을 때 새 버전으로 저장하라는 메시지 구성 {#id222HBI00XXA}

웹 편집기에서 연 파일을 닫으려고 할 때 **닫기** 파일 탭의 단추 또는 **닫기** 옵션 메뉴의 옵션은 파일에 저장되지 않은 데이터나 저장되지 않은 버전이 있는 경우 대화 상자가 나타납니다. 버전이 저장되지 않은 경우 파일을 새 버전으로 저장하라는 메시지가 표시됩니다.

에 제공된 지침 사용 [구성 재정의](download-install-additional-config-override.md#) 구성 파일을 만듭니다. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 닫을 때 새 버전으로 저장하라는 메시지를 구성합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.savenewversion` | 부울 \( true/ false\). <br>  **기본값**: true |

이 구성을 활성화하면 **새 버전으로 저장** 대화 상자에서 확인란이 기본적으로 선택됩니다.

자세한 내용은 *파일 닫기 및 저장 시나리오* 섹션(Adobe Experience Manager Guides as a Cloud Service 사용 안내서)을 참조하십시오.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
