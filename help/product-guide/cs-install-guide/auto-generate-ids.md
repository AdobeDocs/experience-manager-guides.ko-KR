---
title: 요소 ID 자동 생성
description: 요소 ID를 자동으로 생성하는 방법에 대해 알아봅니다.
exl-id: a651db7f-228e-4de5-b569-3f1b4f86c418
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '284'
ht-degree: 1%

---

# 요소 ID 자동 생성 {#id20CIL40016I}

AEM Guides는 사용자가 만드는 새 문서에 대한 문서 ID를 생성합니다. 예를 들어 DITA 맵을 만들 때 다음과 같은 ID가 `map.ditamap_random_digits` 은 맵의 ID에 할당됩니다. ID가 자동으로 생성되고 할당되는 요소를 정의할 수도 있습니다.

AEM Guides에서는 ID가 자동 생성되는 요소와 ID에 대한 패턴을 정의해야 하는 간편한 구성 설정을 제공합니다. 기본적으로 다음과 같은 일부 요소 `section`, `table`, `ul`, `ol`는 ID의 자동 생성용으로 구성됩니다. 이 목록에 다른 요소를 추가하여 이러한 요소가 문서에 삽입될 때마다 AEM Guides가 지정된 패턴을 기반으로 ID를 생성하고 지정하도록 할 수 있습니다

에 제공된 지침 사용 [구성 재정의](download-install-additional-config-override.md#) 구성 파일을 만듭니다. 자동 생성된 요소 ID를 구성하려면 구성 파일에서 다음 \(property\) 세부 정보를 제공합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.classes` | 쉼표로 구분된 요소 목록을 지정합니다. <br> **기본값**: `"topic, section, table, simpletable, fig, image, ul, ol"` |

자동 생성된 ID에 대한 패턴을 구성하려면 다음 속성을 사용하여 구성 파일을 만듭니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.pattern` | 이 필드의 기본값은 (으)로 설정됩니다. `${elementName}_${id}`. 다음 `${elementName}` 값이 요소의 이름으로 대체됩니다. 다음 `${id}` 변수는 요소에 대한 순차적 번호를 생성합니다. 예를 들어, 단락 요소를 할당하여 자동 생성된 ID를 갖게 되면 주제나 문서의 첫 번째 단락은 p\_1과 같은 ID를 갖게 되고 다음 단락은 p\_2를 받게 됩니다. 하지만 다른 문서에서는 ID 생성 프로세스가 다시 시작됩니다. 즉, 다른 문서에서 p\_1 및 p\_2와 같은 ID를 단락 요소에 할당할 수 있습니다. **기본값**: ``${elementName}_${id}`` |

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
