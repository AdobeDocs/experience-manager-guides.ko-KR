---
title: 고급 맵 편집기 를 기본값으로 설정합니다.
description: 고급 맵 편집기를 기본값으로 설정하는 방법에 대해 알아봅니다
exl-id: 365264ab-f990-42c1-ab79-61a40ecea42f
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 126cecdaa481b9da1add4ba3664c26c2bc5da068
workflow-type: tm+mt
source-wordcount: '297'
ht-degree: 0%

---

# 고급 맵 편집기 를 기본값으로 설정합니다. {#id181AI0003PN}

>[!NOTE]
>
> 이전에 Experience Manager Guides에서 사용할 수 있었던 기본 맵 편집기는 버전 4.3 및 2307부터 더 이상 사용되지 않습니다. 기본 맵 편집기에 액세스하여 DITA 맵을 만들고 관리할 수 없습니다.
>고급 맵 편집기를 사용하는 것이 좋습니다. 고급 맵 편집기는 향상된 기능과 더 나은 사용자 지정 옵션을 제공합니다. [고급 맵 편집기](../user-guide/map-editor-advanced-map-editor.md)를 사용하여 작업하는 방법에 대해 자세히 알아보세요.

4.3 및 2307 이전 버전의 경우, Experience Manager Guides에는 기본 맵 편집기 및 고급 맵 편집기가 포함되어 있습니다. 기본 맵 편집기는 맵 파일을 만드는 데 필요한 모든 기능을 제공합니다. 고급 맵 편집기는 훨씬 더 많은 기능을 제공하며 웹 편집기 내에 통합됩니다. 고급 맵 편집기를 사용하면 작성자가 사용하기 쉬운 인터페이스로 DITA 맵 파일을 만들고 편집할 수 있습니다.

기본적으로 새 맵 파일이 생성될 때마다 기본 맵 편집기에서 열립니다. 기본적으로 고급 맵 편집기를 여는 설정을 활성화하여 이 동작을 변경할 수 있습니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 기본 맵 편집기를 활성화합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | ``fmdita.hide.oldmapeditor`` | 부울 \(true/false\). 기본적으로 고급 맵 편집기를 사용하려면 이 속성을 true로 설정합니다.<br> **기본값**: false |

>[!NOTE]
>
> 기본적으로 작성자가 맵 파일을 만들고 편집할 수 있도록 열도록 선택하면 기본 맵 편집기가 실행됩니다. Assets UI에서 맵 파일에 대해 [편집] 옵션을 선택하면 기본 맵 편집기에서도 열립니다.

**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
