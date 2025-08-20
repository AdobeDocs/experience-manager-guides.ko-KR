---
title: 기본적@navtitle 속성 포함
description: 기본적으로 @navtitle 속성을 포함하는 방법 알아보기
exl-id: 38711c0c-efa8-461a-92e1-ecfcdcdd36d3
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: a3c7973868549c72e868c05a3fc6ca8bdce9bce3
workflow-type: tm+mt
source-wordcount: '327'
ht-degree: 0%

---

# 기본적@navtitle 속성 포함 {#id2115BC0J0XA}

주제, 참조, 작업, \(하위\) 맵 등과 같은 여러 유형의 참조 파일을 맵에 추가할 수 있습니다. 이러한 파일의 대부분은 `@navtitle` 특성을 지원합니다. 하지만 이를 일관되게 사용하는 저자는 많지 않다. 맵에서 참조된 모든 파일에서 `@navtitle` 특성을 사용하도록 강제하려면 간단한 구성을 통해 그렇게 할 수 있습니다.

사용하도록 설정하면 맵에 추가하는 모든 참조 파일이 속성에 추가된 `@navtitle` 특성을 자동으로 가져옵니다. `@navtitle`은(는) 참조된 콘텐츠의 `title` 요소 값도 가져옵니다.

참조 파일의 속성에 기본적으로 `@navtitle` 특성을 포함하려면 다음 단계를 수행하십시오.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 상단의 **편집** 아이콘을 클릭합니다
1. **다운로드** 아이콘을 클릭하여 로컬 시스템에서 ui\_config.json 파일을 다운로드합니다.
1. 글로벌 수준 또는 폴더 수준 프로필에서 이 변경 작업을 수행할 수 있습니다. 이를 변경할 위치에 따라 해당 ui\_config.json 파일을 다운로드해야 합니다. ui\_config.json 파일 다운로드에 대한 자세한 내용은 [XML Web Editor 구성 및 사용자 지정](conf-folder-level.md#id2065G300O5Z)을 참조하십시오.

1. `ditaAttributes` 정의를 검색합니다.

   `ditaAttributes`의 기본 정의는 다음과 같습니다.

   ```
   "ditaAttributes": {
                           "attributes": [],
                           "constraint": false,
                           "required": {}
                           },
   ```

1. 아래와 같이 `required` 매개 변수를 변경합니다.

   ```
   "required": {"navtitle": true}
   ```

   `true`(으)로 설정하면 **탐색 제목 특성 새로 고침** 단추가 편집기 도구 모음에 표시되도록 활성화됩니다. `false`(으)로 설정하거나 비워 두면 단추가 편집기에서 숨겨집니다.
1. 파일을 저장합니다.

1. 해당 프로필 \(Global 또는 Folder\)에 있는 파일을 업로드합니다.


이 구성을 사용하면 맵에 추가하는 모든 참조 파일에 기본적으로 `@navtitle` 특성이 포함됩니다.



**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
