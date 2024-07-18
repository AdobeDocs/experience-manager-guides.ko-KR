---
title: 상단 표시줄 및 도구 모음
description: 상단 표시줄 및 도구 모음 사용자 지정
role: User, Admin
exl-id: 7065c9b8-67ac-4f6d-8124-daa547f2dc3b
source-git-commit: 4f41609368b64415993b93be27162b069e7b2e32
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 0%

---

# 상단 표시줄 및 도구 모음 사용자 지정

`topbar` 및 `toolbar`을(를) 사용자 지정하려면 ID `topbar` 또는 `toolbar`을(를) 사용하고 동일한 보기, 컨트롤러 구조를 따릅니다.

다음은 도구 모음 사용자 지정의 간단한 예입니다. 여기서는 `Insert Numbered List` 단추를 제거하고 사용자 지정된 On-Click 처리기를 사용하여 `Insert Paragraph` 단추를 자체 구성 요소로 교체했습니다.

`proxy` 개체 아래에 노출된 기능에 액세스하려면 `this.proxy.getValue`을(를) 사용하여 액세스해야 합니다. 값을 가져오라고 가정합니다.

```js title = toolbar_customisation.js
const toolbarExtend = {
    id: "toolbar",
    view: {
        items: [
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Numbered List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                {
                    "component": "button",
                    "icon": "textParagraph",
                    "variant": "action",
                    "quiet": true,
                    "title": "Insert Paragraph",
                    "on-click": "INSERT_P"
                },

                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
        ]
    },
    controller: {
        init: function() {
            console.log(this.proxy.getValue("canUndo"))
            this.proxy.subscribeAppEvent({
              key: "editor.preview_rendered",
              next: async function (e) {
                console.log(this.proxy.getValue("canUndo"))
              }.bind(this)
            })
        },
        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```
