---
title: 도구 모음 사용자 지정
description: 도구 모음을 사용자 지정하는 방법 알아보기
exl-id: ba82af48-9357-4f29-90ce-6793366ab432
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 5778ed2855287d1010728e689abbe6020ad56574
workflow-type: tm+mt
source-wordcount: '1013'
ht-degree: 0%

---

# 도구 모음 사용자 지정 {#id172FB00L0V6}

기본적으로 웹 편집기는 DITA 편집기에 필요한 가장 일반적인 편집 기능과 함께 제공됩니다. 편집기에서 유형 목록 \(번호 매기기 또는 글머리 기호\), 상호 참조, 콘텐츠 참조, 표, 단락 및 문자 서식의 요소 삽입과 같은 기능을 사용할 수 있습니다. 이러한 기본 요소 외에도 작성 환경에서 사용되는 요소를 삽입하도록 웹 편집기를 사용자 지정할 수 있습니다.

>[!NOTE]
>
> 이전 UI에서 새 AEM Guides UI(AEM Guides의 2502 및 5.0 릴리스에서 적용 가능)로 마이그레이션할 때 `ui_config`에 대한 업데이트를 보다 유연하고 모듈식 UI 구성으로 변환해야 합니다. 이 프레임워크를 사용하면 해당하는 경우 editor_toolbar 및 기타 대상 위젯에 변경 사항을 원활하게 적용할 수 있습니다. 자세한 내용은 [UI 구성 전환 개요](https://experienceleague.adobe.com/ko/docs/experience-manager-guides-learn/videos/advanced-user-guide/conver-ui-config)를 참조하세요.

웹 편집기의 도구 모음을 사용자 지정하는 방법에는 두 가지가 있습니다.

- 도구 모음에 새 기능 추가

- 도구 모음에서 기존 기능 제거


## 도구 모음에 기능 추가

웹 편집기에 기능을 추가하는 작업에는 두 가지 기본 작업이 포함됩니다. *ui\_config.json* 파일에 기능 아이콘을 추가하고 JavaScript에 백그라운드 기능을 추가하는 작업입니다.

웹 편집기의 도구 모음에 기능을 추가하려면 다음 단계를 수행하십시오.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 상단의 **편집** 아이콘을 클릭합니다
1. **다운로드** 아이콘을 클릭하여 로컬 시스템에서 ui\_config.json 파일을 다운로드합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.
1. `ui_config.json` 파일에서 도구 모음 섹션에 새 기능의 정의를 추가합니다. 파일을 저장하고 업로드합니다.

   일반적으로 새 도구 모음 단추 그룹을 만들고 하나 이상의 도구 모음 단추를 추가할 수 있습니다. 또는 기존 도구 모음 그룹 내에 새 도구 모음 단추를 추가할 수 있습니다. 새 도구 모음 그룹을 만들려면 다음 세부 정보가 필요합니다.

   **유형**:   `blockGroup`을(를) `type` 값으로 지정합니다. 이 값은 하나 이상의 도구 모음 그룹을 포함하는 블록 그룹을 생성 중임을 나타냅니다.

   **추출 클래스**:   공백으로 구분된 클래스의 이름입니다.

   **항목**:   도구 모음에서 모든 그룹의 정의를 지정합니다. 각 그룹에는 하나 이상의 도구 모음 아이콘이 포함될 수 있습니다. 도구 모음 그룹 내에서 아이콘을 정의하려면 `items` 내에서 `type` 특성을 다시 정의하고 해당 값을 `buttonGroup`(으)로 설정해야 합니다. `extraclass` 속성에 하나 이상의 클래스 이름을 지정하십시오. `label` 속성에 기능 이름을 지정하십시오. `ui_config.json` 파일의 다음 코드 조각은 기본 도구 모음 블록에 대한 정의 다음에 `buttonGroup` 정의를 표시합니다.

       &quot;
       &quot;toolbar&quot;: &lbrace;
       &quot;type&quot;: &quot;blockGroup&quot;,
       &quot;extraclass&quot;:
       &quot;도구 모음 작업&quot;,
       &quot;항목&quot;: &lbrack;
       &lbrace;
       &quot;type&quot;: &quot;buttonGroup&quot;,
       &quot;extraclass&quot;: &quot;left-controls&quot;,
       &quot;label&quot;: &quot;왼쪽 컨트롤&quot;,
       &quot;항목&quot;: &lbrack;
       &quot;
   
   `items` 컬렉션 내에서 하나 이상의 도구 모음 아이콘에 대한 정의를 지정해야 합니다.

   도구 모음 아이콘을 추가하려면 다음 속성을 정의해야 합니다.

   **유형**:   `button`을(를) `type` 값으로 지정합니다. 이 값은 도구 모음 단추를 추가하고 있음을 나타냅니다.

   **아이콘**:   도구 모음에서 사용할 Coral 아이콘의 이름을 지정합니다.

   **변형**:   `quiet`을(를) `variant` 값으로 지정합니다.

   **제목**:   아이콘의 툴팁을 지정합니다.

   **클릭 시**:   JavaScript 파일의 기능에 대해 정의된 명령 이름을 지정합니다. 명령에 입력 매개 변수가 필요한 경우 다음과 같이 명령 이름을 지정합니다.

       &quot;Javascript
       &quot;on-click&quot;: {&quot;name&quot;: &quot;AUTHOR_INSERT_ELEMENT&quot;, &quot;args&quot;: &quot;simpletable&quot;}
       &quot;
   
   **표시 또는 숨기기**:   `show` 속성을 정의하는 경우 아이콘이 표시되는 모드를 지정하십시오. 가능한 값은 `@isAuthorMode`, `@isSourceMode`, `@isPreviewMode`, `true` \(모든 모드에서 표시\) 또는 `false` \(모든 모드에서 숨기기\)입니다.

   `show` 대신 `hide` 속성을 정의할 수도 있습니다. 가능한 값은 `show` 속성과 같고 지정된 모드에 대해 아이콘이 표시되지 않는 유일한 차이점이 있습니다.

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

   *ui\_config.json* 파일에 다음과 같이 기능을 추가합니다.

   ```Javascript
   "type": "button",
   "icon": "alert","variant": "quiet","title": "About AEM Guides","show": "true","on-click": "user.alert"
   ```

1. *clientlib* 폴더를 만들고 이 폴더에 JavaScript을 추가하십시오.

1. *apps.fmdita.xml\_editor.page\_overrides*&#x200B;의 값을 할당하여 *clientlib* 폴더의 categories 속성을 업데이트합니다.

1. *ui\_config.json* 파일을 저장하고 웹 편집기를 다시 로드합니다.


## 도구 모음에서 기능 제거

웹 편집기에서 현재 사용 가능한 모든 기능을 제공하지는 않을 수 있습니다. 이 경우 웹 편집기의 도구 모음에서 원하지 않는 기능을 제거할 수 있습니다.

도구 모음에서 원하지 않는 피쳐를 제거하려면 다음 단계를 수행하십시오.

1. UI 구성 파일을 다운로드하려면 Adobe Experience Manager에 관리자로 로그인합니다.

1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 상단의 **편집** 아이콘을 클릭합니다
1. **다운로드** 아이콘을 클릭하여 로컬 시스템에서 ui\_config.json 파일을 다운로드합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

   `ui_config.json` 파일에는 다음 세 개의 섹션이 있습니다.

   1. **도구 모음**:   이 섹션에는 번호 목록 삽입/제거, \(file\) 닫기, 저장, 주석 등과 같은 편집기 도구 모음에서 사용할 수 있는 모든 기능에 대한 정의가 포함되어 있습니다.

   1. **바로 가기**:   이 섹션에는 편집기의 특정 기능에 할당된 키보드 단축키의 정의가 포함되어 있습니다.

   1. **템플릿**:   이 섹션에는 문서에서 사용할 수 있는 DITA 요소의 미리 정의된 구조가 포함되어 있습니다. 기본적으로 템플릿 섹션에는 단락, 간단한 표, 표 및 본문 요소에 대한 템플릿 정의가 포함되어 있습니다. 원하는 요소에 대한 유효한 XML 구조를 추가하여 모든 요소에 대한 템플릿 정의를 생성할 수 있습니다. 예를 들어 목록에 있는 모든 새 `li` 요소와 함께 `p` 요소를 추가하려면 템플릿 섹션의 끝에 다음 코드를 추가하여 이를 수행할 수 있습니다.

   ```css
   "li": "<li><p></p></li>"
   ```

1. 도구 모음 섹션에서 사용자에게 표시하지 않으려는 기능 항목을 제거합니다.

1. *ui\_config.json* 파일을 저장하고 웹 편집기를 다시 로드합니다.


**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
