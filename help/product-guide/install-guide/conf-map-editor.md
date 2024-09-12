---
title: 고급 맵 편집기 를 기본값으로 설정합니다.
description: 고급 맵 편집기를 기본값으로 설정하는 방법에 대해 알아봅니다
exl-id: ecc023f6-48eb-4afd-97a2-4b3cdd5a8991
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 126cecdaa481b9da1add4ba3664c26c2bc5da068
workflow-type: tm+mt
source-wordcount: '270'
ht-degree: 0%

---

# 고급 맵 편집기 를 기본값으로 설정합니다. {#id181AI0003PN}

>[!NOTE]
>
> 이전에 Experience Manager Guides에서 사용할 수 있었던 기본 맵 편집기는 버전 4.3 및 2307부터 더 이상 사용되지 않습니다. 기본 맵 편집기에 액세스하여 DITA 맵을 만들고 관리할 수 없습니다.
>고급 맵 편집기를 사용하는 것이 좋습니다. 고급 맵 편집기는 향상된 기능과 더 나은 사용자 지정 옵션을 제공합니다. [고급 맵 편집기](../user-guide/map-editor-advanced-map-editor.md)를 사용하여 작업하는 방법에 대해 자세히 알아보세요.

4.3 및 2307 이전 버전의 경우, Experience Manager Guides에는 기본 맵 편집기 및 고급 맵 편집기가 포함되어 있습니다. 기본 맵 편집기는 맵 파일을 만드는 데 필요한 모든 기능을 제공합니다. 고급 맵 편집기는 훨씬 더 많은 기능을 제공하며 웹 편집기 내에 통합됩니다. 고급 맵 편집기를 사용하면 작성자가 사용하기 쉬운 인터페이스로 DITA 맵 파일을 만들고 편집할 수 있습니다.

기본적으로 새 맵 파일이 생성될 때마다 기본 맵 편집기에서 열립니다. 기본적으로 고급 맵 편집기를 여는 설정을 활성화하여 이 동작을 변경할 수 있습니다.

고급 맵 편집기를 맵 파일의 기본 편집기로 만들려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.xmleditor.config.XmlEditorConfig** 번들을 검색하고 클릭합니다.

1. **기본 맵 편집기 숨기기** 옵션을 선택합니다.

   이 옵션을 선택하면 사용자 인터페이스의 모든 위치에 기본 맵 편집기 링크가 표시되지 않습니다. 기본적으로 맵 파일은 고급 맵 편집기에서 열립니다.
