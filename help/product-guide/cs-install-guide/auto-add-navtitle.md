---
title: 기본적@navtitle 속성 포함
description: 기본적으로 @navtitle 속성을 포함하는 방법 알아보기
exl-id: 38711c0c-efa8-461a-92e1-ecfcdcdd36d3
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '294'
ht-degree: 1%

---

# 기본적@navtitle 속성 포함 {#id2115BC0J0XA}

주제, 참조, 작업, \(하위\) 맵 등과 같은 여러 유형의 참조 파일을 맵에 추가할 수 있습니다. 이러한 파일의 대부분은 `@navtitle` 특성. 하지만 이를 일관되게 사용하는 저자는 많지 않다. 을(를) 강제로 사용하려면 `@navtitle` 맵에서 참조된 모든 파일의 속성을 지정하므로 간단한 구성으로 그렇게 할 수 있습니다.

활성화하면 맵에 추가하는 모든 참조 파일이 자동으로 `@navtitle` 속성이 속성에 추가되었습니다. 다음 `@navtitle` 은 또한 의 값을 가져옵니다. `title` 참조된 콘텐츠의 요소입니다.

포함할 항목 `@navtitle` 속성 기본적으로 참조 파일의 속성에서 다음 단계를 수행합니다.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**.
1. 선택 **안내서** 도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** tab 키를 누른 다음 클릭 **편집** 맨 위에 있는 아이콘
1. 다음을 클릭합니다. **다운로드** 로컬 시스템에서 ui\_config.json 파일을 다운로드하는 아이콘입니다.
1. 글로벌 수준 또는 폴더 수준 프로필에서 이 변경 작업을 수행할 수 있습니다. 이를 변경할 위치에 따라 해당 ui\_config.json 파일을 다운로드해야 합니다. ui\_config.json 파일 다운로드에 대한 자세한 내용은 [XML Web Editor 구성 및 사용자 지정](conf-folder-level.md#id2065G300O5Z).

1. 검색 `ditaAttributes` 정의.

   의 기본 정의 `ditaAttributes` 은(는)

   ```
   "ditaAttributes": {
                           "attributes": [],
                           "constraint": false,
                           "required": {}
                           },
   ```

1. 변경 `required` 매개 변수 형식:

   ```
   "required": {"navtitle": true}
   ```

1. 파일을 저장합니다.

1. 해당 프로필 \(Global 또는 Folder\)에 있는 파일을 업로드합니다.


이 구성을 사용하면 맵에 추가하는 모든 참조 파일에 `@navtitle` 기본적으로 속성입니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
