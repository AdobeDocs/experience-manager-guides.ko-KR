---
sidebar_position: 3
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '49'
ht-degree: 0%

---


# 상단 표시줄 및 도구 모음 사용자 지정

을(를) 사용자 지정하려면 `topbar` 및 `toolbar`, 다음 id를 사용합니다. `topbar` 또는 `toolbar`, 그리고 같은 보기, 컨트롤러 구조를 따릅니다.

다음은 도구 모음 사용자 지정의 간단한 예입니다. 여기에서 을(를) 제거했습니다 `Insert Numbered List` 단추를 클릭하고 `Insert Paragraph` 사용자 지정된 On-Click 핸들러를 사용하여 고유한 구성 요소로 단추를 작성합니다.

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

        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```

