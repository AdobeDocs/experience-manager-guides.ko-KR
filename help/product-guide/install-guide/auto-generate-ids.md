---
title: 요소 ID 자동 생성
description: 요소 ID를 자동으로 생성하는 방법에 대해 알아봅니다.
exl-id: 8d09ab89-4be5-49f1-9831-9f01c92dc472
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '337'
ht-degree: 0%

---

# 요소 ID 자동 생성 {#id20CIL40016I}

AEM Guides은 사용자가 만드는 모든 새 문서에 대한 문서 ID를 생성합니다. 예를 들어 DITA 맵을 만들 때 `map.ditamap_random_digits`과(와) 같은 ID가 맵의 ID에 지정됩니다. ID가 자동으로 생성되고 할당되는 요소를 정의할 수도 있습니다.

AEM Guides에서는 ID가 자동 생성되는 요소와 ID에 대한 패턴을 정의해야 하는 간편한 구성 설정을 제공합니다. 기본적으로 `section`, `table`, `ul`, `ol`과(와) 같은 일부 요소는 ID의 자동 생성용으로 구성됩니다. 이 목록에 다른 요소를 추가하면 이러한 요소가 문서에 삽입될 때마다 AEM Guides에서 지정된 패턴을 기반으로 ID를 생성하고 지정할 수 있습니다

요소를 자동 생성된 ID로 구성하려면 다음 단계를 수행하십시오.

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


**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
