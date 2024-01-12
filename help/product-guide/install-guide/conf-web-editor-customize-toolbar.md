---
title: 도구 모음 사용자 지정
description: 도구 모음을 사용자 지정하는 방법 알아보기
exl-id: 14a82c7e-5c07-43a8-bd9e-b221d80f6d05
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '894'
ht-degree: 0%

---

# 도구 모음 사용자 지정 {#id172FB00L0V6}

기본적으로 웹 편집기는 DITA 편집기에 필요한 가장 일반적인 편집 기능과 함께 제공됩니다. 편집기에서 유형 목록 \(번호 매기기 또는 글머리 기호\), 상호 참조, 콘텐츠 참조, 표, 단락 및 문자 서식의 요소 삽입과 같은 기능을 사용할 수 있습니다. 이러한 기본 요소 외에도 작성 환경에서 사용되는 요소를 삽입하도록 웹 편집기를 사용자 지정할 수 있습니다.

웹 편집기의 도구 모음을 사용자 지정하는 방법에는 두 가지가 있습니다.

- 도구 모음에 새 기능 추가

- 도구 모음에서 기존 기능 제거


## 도구 모음에 기능 추가

웹 편집기에 기능을 추가하는 작업에는 두 가지 기본 작업이 포함됩니다. *ui\_config.json* 파일을 만들고 JavaScript의 백그라운드 기능을 추가합니다.

**도구 모음에 아이콘 추가**

웹 편집기의 도구 모음에 기능을 추가하려면 다음 단계를 수행하십시오.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. 다음 위치에 기본 구성 파일의 복사본을 만듭니다.

   `/apps/fmdita/xmleditor/ui_config.json`

1. 로 이동하여 `ui_config.json` 파일 위치: `apps` 편집할 노드입니다.

1. 다음에서 `ui_config.json` 파일에서 도구 모음 섹션에 새 기능의 정의를 추가합니다. 일반적으로 새 도구 모음 단추 그룹을 만들고 하나 이상의 도구 모음 단추를 추가할 수 있습니다. 또는 기존 도구 모음 그룹 내에 새 도구 모음 단추를 추가할 수 있습니다. 새 도구 모음 그룹을 만들려면 다음 세부 정보가 필요합니다.

   - **type:**Specify `blockGroup` (으)로 `type` 값. 이 값은 하나 이상의 도구 모음 그룹을 포함하는 블록 그룹을 생성 중임을 나타냅니다.

   - **제외 클래스:** 공백으로 구분된 클래스의 이름입니다.

   - **항목:** 도구 모음에서 모든 그룹의 정의를 지정합니다. 각 그룹에는 하나 이상의 도구 모음 아이콘이 포함될 수 있습니다. 도구 모음 그룹 내에서 아이콘을 정의하려면 다음을 다시 정의해야 합니다 `type` 속성 포함 `items`, 값을 로 설정합니다. `buttonGroup`. 에서 하나 이상의 클래스 이름을 지정합니다. `extraclass` 속성. 에서 피쳐 이름을 지정합니다. `label` 속성. 의 다음 코드 조각 `ui_config.json` 파일에는 기본 도구 모음 블록에 대한 정의가 표시되며, 그 뒤에는 `buttonGroup` 정의:

     ```json
     "toolbar": {    
       "type": "blockGroup",    
       "extraclass": 
       "toolbar operations",    
         "items": [      
           {        
             "type": "buttonGroup",        
             "extraclass": "left-controls",        
             "label": "Left Controls",        
             "items": [
     ```

     다음 범위 내 `items` 컬렉션에서는 하나 이상의 도구 모음 아이콘에 대한 정의를 지정해야 합니다.
도구 모음 아이콘을 추가하려면 다음 속성을 정의해야 합니다.

   - **유형:** 지정 `button` (으)로 `type` 값. 이 값은 도구 모음 단추를 추가하고 있음을 나타냅니다.

   - **아이콘:** 도구 모음에서 사용할 Coral 아이콘의 이름을 지정합니다.

   - **변형:** 지정 `quiet` (으)로 `variant` 값.

   - **제목:** 아이콘의 툴팁을 지정합니다.

   - **클릭 시:** JavaScript 파일의 기능에 대해 정의된 명령 이름을 지정합니다. 명령에 입력 매개 변수가 필요한 경우 다음과 같이 명령 이름을 지정합니다.

     ```JavaScript
     "on-click": {"name": "AUTHOR_INSERT_ELEMENT", "args": "simpletable"}
     ```

   - **표시 또는 숨기기:** 다음을 정의하는 경우 `show` 속성을 지정한 다음 아이콘이 표시되는 모드를 지정합니다. 가능한 값은 - `@isAuthorMode`, `@isSourceMode`, `@isPreviewMode`, `true` \(모든 모드에 표시\), 또는 `false` \(모든 모드에서 숨김\).

   의 대신에 `show`를 설정하는 경우 `hide` 속성. 가능한 값은 와 같습니다 `show` 유일한 차이점이 있는 속성은 지정된 모드에 대해 아이콘이 표시되지 않습니다.

1. 만들기 *clientlib* 폴더를 만들고 이 폴더에 JavaScript를 추가합니다.

1. 의 카테고리 속성을 업데이트합니다. *clientlib* 값을 할당하여 폴더 만들기 *apps.fmdita.xml\_editor.page\_overrides*.

1. 저장 *ui\_config.json* 파일을 만들고 웹 편집기를 다시 로드합니다.


**JavaScript 코드 샘플**

이 섹션에서는 사용자 정의 기능 추가를 시작하는 데 도움이 되는 두 가지 JavaScript 코드 예를 제공합니다. 다음 예제에서는 사용자가 도구 모음에서 버전 표시 아이콘을 클릭할 때 AEM Guides 버전 번호를 보여 줍니다.

JavaScript 파일에 다음 코드를 추가합니다.

```JavaScript
/**
* This file contains an example to show AEM Guides version 
* number when a user clicks on the Show Version icon in the toolbar. 
* Step 1. Create a clientlib folder and add save a file with your *JavaScript code into this folder. A code sample is shared below.
* Step 2: Update the categories property of the clientlib folder by *assigning it the value of 
* "apps.fmdita.xml_editor.page_overrides".
* Step 3: Add the feature in the ui_config.json file as shown after the *sample code. Save the ui_config.json file and reload the Web Editor
 */

(function (window) {
  "use strict";

  window.addEventListener('DOMContentLoaded', function () {
    fmxml.ready(function () {
      fmxml.eventHandler.subscribe({
        key: 'user.alert',
        next: function next() {
          alert("AEM Guides version x.x");
        }
      });
    });
  });
})(window);
```

ui\_config.json 파일에 다음과 같은 기능을 추가합니다.

```json
 {
      "type": "button",
      "icon": "alert",
      "title": "About AEM Guides",
      "variant": "quiet",

  "show": "true",
      "on-click": "user.alert"
  } 
```

다음 예제에서는 문서의 활성 파일 상태를 &quot;In-Review&quot;로 변경하는 방법을 보여 줍니다.

```JavaScript
/**
* This file contains an example to set the document state of an active *open documen to "In-Review". 
* Step 1. Create a clientlib folder and add save a file with your *JavaScript code into this folder. A code sample is shared below.
* Step 2: Update the categories property of the clientlib folder by *assigning it the value of 
* "apps.fmdita.xml_editor.page_overrides".
* Step 3: Add the feature in the ui_config.json file as shown after the *sample code. Save the ui_config.json file and reload the Web Editor
 */

(function (window) {
  "use strict";

  //Wait for the page has been completely loaded 

  window.addEventListener('DOMContentLoaded', function () {

    //Wait for the xml editor to start
    fmxml.ready(function () {

      //Subscribe to 'user.docstate.to.in-review' event
      fmxml.eventHandler.subscribe({
        key: 'user.docstate.to.in-review',
        next: function next() {
          var docstate = "In-Review"; // New docstate name
          var filePath = fmxml.curEditor.filePath; 
// Get the file path of active open file
          if (filePath) {
            //Call API to change the doc state
            $.ajax({
              type: 'POST',
              url: '/bin/fmdita/states',
              data: {
                paths: filePath,
                operation: "setdocstates",
                docstate: docstate
              }
            }).fail(function (xhr, textStatus, errorThrown) {
              console.error("Cannot update docstate to " + docstate);
            }).success(function (data) {
              console.log('docstate updated to ' + docstate);
            });
          }
        }
      });
    });
  });
})(window);
```

ui\_config.json 파일에 다음과 같은 기능을 추가합니다.

```json
 {
      "type": "button",
      "icon": "actions",
      "title": "Change document state to In-Review",
      "variant": "quiet",
      "show": "true",
      "on-click": "user.docstate.to.in-review"
    } 
```

## 도구 모음에서 기능 제거

웹 편집기에서 현재 사용 가능한 모든 기능을 제공하지는 않을 수 있습니다. 이 경우 웹 편집기의 도구 모음에서 원하지 않는 기능을 제거할 수 있습니다.

도구 모음에서 원하지 않는 피쳐를 제거하려면 다음 단계를 수행하십시오.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. 다음 위치에 기본 구성 파일의 복사본을 만듭니다.

   `/apps/fmdita/xmleditor/ui_config.json`

1. 로 이동하여 `ui_config.json` 파일 위치: `apps` 편집할 노드입니다.
다음 `ui_config.json` 파일에는 세 개의 섹션이 있습니다.

- **도구 모음:**   이 섹션에는 번호 목록 삽입/제거, \(file\) 닫기, 저장, 주석 등과 같은 편집기 도구 모음에서 사용할 수 있는 모든 기능에 대한 정의가 포함되어 있습니다.

- **단축키:**   이 섹션에는 편집기의 특정 기능에 할당된 키보드 단축키의 정의가 포함되어 있습니다.

- **템플릿:**   이 섹션에는 문서에서 사용할 수 있는 DITA 요소의 미리 정의된 구조가 포함되어 있습니다. 기본적으로 템플릿 섹션에는 단락, 간단한 표, 표 및 본문 요소에 대한 템플릿 정의가 포함되어 있습니다. 원하는 요소에 대한 유효한 XML 구조를 추가하여 모든 요소에 대한 템플릿 정의를 생성할 수 있습니다. 예를 들어 를 추가하려면 `p` 모든 새 항목이 있는 요소 `li` 요소의 템플릿 섹션 끝에 다음 코드를 추가하여 이를 수행할 수 있습니다.

```HTML
"li": "<li><p></p></li>"
```

1. 도구 모음 섹션에서 사용자에게 표시하지 않으려는 기능 항목을 제거합니다.

1. 저장 *ui\_config.json* 파일을 만들고 웹 편집기를 다시 로드합니다.


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
