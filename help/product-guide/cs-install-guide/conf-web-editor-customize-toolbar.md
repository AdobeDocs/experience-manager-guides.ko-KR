---
title: 도구 모음 사용자 지정
description: 도구 모음을 사용자 지정하는 방법 알아보기
exl-id: ba82af48-9357-4f29-90ce-6793366ab432
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '956'
ht-degree: 0%

---

# 도구 모음 사용자 지정 {#id172FB00L0V6}

기본적으로 웹 편집기는 DITA 편집기에 필요한 가장 일반적인 편집 기능과 함께 제공됩니다. 편집기에서 유형 목록 \(번호 매기기 또는 글머리 기호\), 상호 참조, 콘텐츠 참조, 표, 단락 및 문자 서식의 요소 삽입과 같은 기능을 사용할 수 있습니다. 이러한 기본 요소 외에도 작성 환경에서 사용되는 요소를 삽입하도록 웹 편집기를 사용자 지정할 수 있습니다.

웹 편집기의 도구 모음을 사용자 지정하는 방법에는 두 가지가 있습니다.

- 도구 모음에 새 기능 추가

- 도구 모음에서 기존 기능 제거


## 도구 모음에 기능 추가

웹 편집기에 기능을 추가하는 작업에는 두 가지 기본 작업이 포함됩니다. *ui\_config.json* 파일을 만들고 JavaScript의 백그라운드 기능을 추가합니다.

웹 편집기의 도구 모음에 기능을 추가하려면 다음 단계를 수행하십시오.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**.
1. 선택 **안내서**&#x200B;도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** tab 키를 누른 다음 클릭 **편집** 맨 위에 있는 아이콘
1. 다음을 클릭합니다. **다운로드** 로컬 시스템에서 ui\_config.json 파일을 다운로드하는 아이콘입니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.
1. 다음에서 `ui_config.json` 파일에서 도구 모음 섹션에 새 기능의 정의를 추가합니다. 파일을 저장하고 업로드합니다.

   일반적으로 새 도구 모음 단추 그룹을 만들고 하나 이상의 도구 모음 단추를 추가할 수 있습니다. 또는 기존 도구 모음 그룹 내에 새 도구 모음 단추를 추가할 수 있습니다. 새 도구 모음 그룹을 만들려면 다음 세부 정보가 필요합니다.

   **유형**: 지정 `blockGroup` (으)로 `type` 값. 이 값은 하나 이상의 도구 모음 그룹을 포함하는 블록 그룹을 생성 중임을 나타냅니다.

   **교외 교제**: 공백으로 구분된 클래스 이름.

   **개 항목**: 도구 모음에 있는 모든 그룹의 정의를 지정합니다. 각 그룹에는 하나 이상의 도구 모음 아이콘이 포함될 수 있습니다. 도구 모음 그룹 내에서 아이콘을 정의하려면 다음을 다시 정의해야 합니다 `type` 속성 포함 `items`, 값을 로 설정합니다. `buttonGroup`. 에서 하나 이상의 클래스 이름을 지정합니다. `extraclass` 속성. 에서 피쳐 이름을 지정합니다. `label` 속성. 의 다음 코드 조각 `ui_config.json` 파일에는 기본 도구 모음 블록에 대한 정의가 표시되며, 그 뒤에는 `buttonGroup` 정의:

       &quot;
       &quot;toolbar&quot;: {
       &quot;type&quot;: &quot;blockGroup&quot;,
       &quot;extraclass&quot;:
       &quot;도구 모음 작업&quot;,
       &quot;items&quot;: [
       {
       &quot;type&quot;: &quot;buttonGroup&quot;,
       &quot;extraclass&quot;: &quot;left-controls&quot;,
       &quot;label&quot;: &quot;왼쪽 컨트롤&quot;,
       &quot;items&quot;: [
       &quot;
   
   다음 범위 내 `items` 컬렉션에서는 하나 이상의 도구 모음 아이콘에 대한 정의를 지정해야 합니다.

   도구 모음 아이콘을 추가하려면 다음 속성을 정의해야 합니다.

   **유형**: 지정 `button` (으)로 `type` 값. 이 값은 도구 모음 단추를 추가하고 있음을 나타냅니다.

   **아이콘**: 도구 모음에서 사용할 Coral 아이콘의 이름을 지정합니다.

   **변형**: 지정 `quiet` (으)로 `variant` 값.

   **제목**: 아이콘에 대한 도구 설명을 지정합니다.

   **클릭 시**: JavaScript 파일의 기능에 대해 정의된 명령 이름을 지정합니다. 명령에 입력 매개 변수가 필요한 경우 다음과 같이 명령 이름을 지정합니다.

       &quot;Javascript
       &quot;on-click&quot;: {&quot;name&quot;: &quot;AUTHOR_INSERT_ELEMENT&quot;, &quot;args&quot;: &quot;simpletable&quot;}
       &quot;
   
   **표시 또는 숨기기**: 를 정의하는 경우 `show` 속성을 지정한 다음 아이콘이 표시되는 모드를 지정합니다. 가능한 값은 - `@isAuthorMode`, `@isSourceMode`, `@isPreviewMode`, `true` \(모든 모드에 표시\), 또는 `false` \(모든 모드에서 숨김\).

   의 대신에 `show`를 설정하는 경우 `hide` 속성. 가능한 값은 와 같습니다 `show` 유일한 차이점이 있는 속성은 지정된 모드에 대해 아이콘이 표시되지 않습니다.

   다음 예제에서는 사용자가 도구 모음에서 버전 표시 아이콘을 클릭할 때 AEM Guides 버전 번호를 보여 줍니다.

   JavaScript 파일에 다음 코드를 추가합니다.

   ```Javascript
   $(document).ready(setTimeout(function() {
                           fmxml.commandHandler.subscribe({
                           key: 'user.alert',
                           next: function() {
                           alert("AEM Guides version x.x")
                           }
                           })
                           }, 1000))
   ```

   에 기능 추가 *ui\_config.json* 파일 형식:

   ```Javascript
   "type": "button",
   "icon": "alert","variant": "quiet","title": "About AEM Guides","show": "true","on-click": "user.alert"
   ```

1. 만들기 *clientlib* 폴더를 만들고 이 폴더에 JavaScript를 추가합니다.

1. 의 카테고리 속성을 업데이트합니다. *clientlib* 값을 할당하여 폴더 만들기 *apps.fmdita.xml\_editor.page\_overrides*.

1. 저장 *ui\_config.json* 파일을 만들고 웹 편집기를 다시 로드합니다.


## 도구 모음에서 기능 제거

웹 편집기에서 현재 사용 가능한 모든 기능을 제공하지는 않을 수 있습니다. 이 경우 웹 편집기의 도구 모음에서 원하지 않는 기능을 제거할 수 있습니다.

도구 모음에서 원하지 않는 피쳐를 제거하려면 다음 단계를 수행하십시오.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**.
1. 선택 **안내서** 도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** tab 키를 누른 다음 클릭 **편집** 맨 위에 있는 아이콘
1. 다음을 클릭합니다. **다운로드** 로컬 시스템에서 ui\_config.json 파일을 다운로드하는 아이콘입니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

   다음 `ui_config.json` 파일에는 세 개의 섹션이 있습니다.

   1. **도구 모음**: 이 섹션에는 번호 목록 삽입/제거, \(file\) 닫기, 저장, 주석 등과 같은 편집기 도구 모음에서 사용할 수 있는 모든 기능에 대한 정의가 포함되어 있습니다.

   1. **단축키**: 이 섹션에는 편집기의 특정 기능에 할당된 키보드 단축키의 정의가 포함되어 있습니다.

   1. **템플릿**: 이 섹션에는 문서에서 사용할 수 있는 DITA 요소의 사전 정의된 구조가 포함되어 있습니다. 기본적으로 템플릿 섹션에는 단락, 간단한 표, 표 및 본문 요소에 대한 템플릿 정의가 포함되어 있습니다. 원하는 요소에 대한 유효한 XML 구조를 추가하여 모든 요소에 대한 템플릿 정의를 생성할 수 있습니다. 예를 들어 를 추가하려면 `p` 모든 새 항목이 있는 요소 `li` 요소의 템플릿 섹션 끝에 다음 코드를 추가하여 이를 수행할 수 있습니다.

   ```css
   "li": "<li><p></p></li>"
   ```

1. 도구 모음 섹션에서 사용자에게 표시하지 않으려는 기능 항목을 제거합니다.

1. 저장 *ui\_config.json* 파일을 만들고 웹 편집기를 다시 로드합니다.


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
