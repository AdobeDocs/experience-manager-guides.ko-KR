---
title: 요소 ID 자동 생성
description: 요소 ID를 자동으로 생성하는 방법에 대해 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '509'
ht-degree: 1%

---

# 요소 ID 자동 생성 {#id20CIL40016I}

AEM Guides은 사용자가 만드는 모든 새 문서에 대한 문서 ID를 생성합니다. 예를 들어 DITA 맵을 만들 때 `map.ditamap_random_digits`과(와) 같은 ID가 맵의 ID에 지정됩니다. ID가 자동으로 생성되고 할당되는 요소를 정의할 수도 있습니다.

AEM Guides에서는 ID가 자동 생성되는 요소와 ID에 대한 패턴을 정의해야 하는 간편한 구성 설정을 제공합니다. 기본적으로 `section`, `table`, `ul`, `ol`과(와) 같은 일부 요소는 ID의 자동 생성용으로 구성됩니다. 이 목록에 다른 요소를 추가하여 이러한 요소가 문서에 삽입될 때마다 AEM Guides에서 지정된 패턴을 기반으로 ID를 생성하고 지정하도록 할 수 있습니다.

Experience Manager Guides 설정을 기반으로 자동 생성된 ID를 가지도록 요소를 구성하는 Cloud Service 또는 온-프레미스 탭에 대한 지침을 제공합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

구성 파일을 만들려면 [구성 재정의](download-install-config-override.md#)의 지침을 사용하십시오. 자동 생성된 요소 ID를 구성하려면 구성 파일에서 다음 \(property\) 세부 정보를 제공합니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.classes` | 쉼표로 구분된 요소 목록을 지정합니다. <br> **기본값**: `"topic, section, table, simpletable, fig, image, ul, ol"` |

자동 생성된 ID에 대한 패턴을 구성하려면 다음 속성을 사용하여 구성 파일을 만듭니다.

| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.pattern` | 이 필드의 기본값은 `${elementName}_${id}`(으)로 설정되어 있습니다. `${elementName}` 값이 요소의 이름으로 대체되었습니다. `${id}` 변수는 요소에 대한 순차적 번호를 생성합니다. 예를 들어, 단락 요소를 할당하여 자동 생성된 ID를 갖게 되면 주제나 문서의 첫 번째 단락은 p\_1과 같은 ID를 갖게 되고 다음 단락은 p\_2를 받게 됩니다. 하지만 다른 문서에서는 ID 생성 프로세스가 다시 시작됩니다. 즉, 다른 문서에서 p\_1 및 p\_2와 같은 ID를 단락 요소에 할당할 수 있습니다. **기본값**: ``${elementName}_${id}`` |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. *XmlEditorConfig* 설정에서 **요소 태그에 대한 ID 자동 생성** 필드에 하나 이상의 요소를 지정합니다.

   >[!NOTE]
   >
   > 요소 태그는 `body`, `title`, `codeblock` 등과 같은 DITA 요소 이름입니다. 여러 요소를 지정하려면 요소 이름을 쉼표로 구분합니다.

1. **ID 생성 패턴** 필드에서 ID를 생성할 패턴을 지정합니다.

   이 필드의 기본값은 `${elementName}_${id}`(으)로 설정되어 있습니다. `${elementName}` 값이 요소의 이름으로 대체되었습니다. `${id}` 변수는 요소에 대한 순차적 번호를 생성합니다. 예를 들어, 단락 요소를 할당하여 자동 생성된 ID를 갖게 되면 주제나 문서의 첫 번째 단락은 p\_1과 같은 ID를 갖게 되고 다음 단락은 p\_2를 받게 됩니다. 하지만 다른 문서에서는 ID 생성 프로세스가 다시 시작됩니다. 즉, 다른 문서에서 p\_1 및 p\_2와 같은 ID를 단락 요소에 할당할 수 있습니다.

   문서에 이미 지정된 패턴의 ID가 포함되어 있는 경우 자동 생성 프로세스는 이러한 ID를 새 요소에 할당하지 않습니다.

1. **저장**&#x200B;을 클릭합니다.

>[!ENDTABS]

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
