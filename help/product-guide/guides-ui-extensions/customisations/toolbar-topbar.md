---
title: 상단 표시줄 및 도구 모음
description: 상단 표시줄 및 도구 모음 사용자 지정
role: User, Admin
exl-id: 7065c9b8-67ac-4f6d-8124-daa547f2dc3b
source-git-commit: e1d6123991ddd8d25f76ee03befeb95f020a9834
workflow-type: tm+mt
source-wordcount: '264'
ht-degree: 0%

---

# 상단 표시줄 및 도구 모음 사용자 지정

`topbar` 및 `toolbar`을(를) 사용자 지정하려면 ID `topbar` 또는 `toolbar`을(를) 사용하고 동일한 보기, 컨트롤러 구조를 따를 수 있습니다.

>[!NOTE]
>
>Experience Manager Guides 2502 릴리스부터 ID **도구 모음**&#x200B;의 이름이 **편집기 도구 모음**(으)로 변경되었습니다. 이전 버전을 사용하는 경우 **도구 모음** ID를 사용하여 도구 모음을 사용자 지정할 수 있습니다. 이제 **topbar**(으)로 ID가 없으며 **editor_tab_bar**&#x200B;이(가) 있습니다.

다음은 도구 모음 사용자 지정의 간단한 예입니다. 여기서는 `Insert Numbered List` 단추를 제거하고 사용자 지정된 On-Click 처리기를 사용하여 `Insert Paragraph` 단추를 자체 구성 요소로 교체했습니다.

>[!TIP]
>
>**editor_toolbar**&#x200B;은(는) 단추를 렌더링하도록 설계되었기 때문에 위젯을 추가하면 해당 CSS 및 응답성을 방해할 수 있습니다. 단추나 레이블과 같은 기본 구성 요소만 포함하는 것이 좋습니다.

`proxy` 개체 아래에 노출된 기능에 액세스하려면 `this.getValue`을(를) 사용하여 액세스해야 합니다. 값을 가져오려면 을(를) 참조하십시오.

AEM Guides 2502 릴리스 이상의 경우 도구 모음 사용자 지정에 대한 아래 예를 참조할 수 있습니다.

```js title = toolbar_customization.js
const toolbarExtend = {
    id: "editor_toolbar",
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
                "component": "button",
                "icon": "textParagraph",
                "variant": "action",
                "quiet": true,
                "title": "Insert Paragraph",
                "on-click": "INSERT_P",
                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                "component": "button",
                "icon": "fileHTML",
                "variant": "action",
                "quiet": true,
                "title": "URL Link Customization",
                "on-click": "openExternalLinkDialog",
                target: {
                key: "title", value: "Insert Bulleted List",
                viewState: VIEW_STATE.REPLACE
                }
            }
        ]
    },
    controller: {
        init: function() {
            console.log(this.getValue("canUndo"))
            this.subscribeAppEvent({
              key: "editor.preview_rendered",
              next: async function (e) {
                console.log(this.getValue("canUndo"))
              }.bind(this)
            })
        },
        INSERT_P(){
            this.appEventHandlerNext("AUTHOR_INSERT_ELEMENT",  "p" )
        },
        openExternalLinkDialog() {
            this.appEventHandlerNext("AUTHOR_INSERT_ELEMENT",
                {
                args: "<xref href='' scope='external' format = 'dita' ></xref>", activeTabId: "conkey_reference"
                }
            )
        }
    }
}
```


사용자 지정되면 최종 출력을 다음과 같이 볼 수 있습니다.

![editor_toolbar](imgs/editor_toolbar.png)

AEM Guides 4.6.x 릴리스 및 이전 버전에서 도구 모음을 사용자 지정하는 경우 아래 예를 참조하십시오.

```js title = toolbar_customization.js
const topbarExtend = {
    id: "toolbar",
    view: {
        items: [
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Element",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Paragraph",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Numbered List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                component: "div",
                target: {
                    key:"title",value: "Insert Bulleted List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
            {
                "component": "button",
                "extraclass": "insert-multimedia",
                "icon": "more",
                "variant": "action",
                "quiet": true,
                "holdAffordance": true,
                "title": "More Insert Options",
                "elementID": "toolbar_insert",
                "on-click": {
                    "name": "APP_SHOW_OPTIONS_POPOVER",
                    "args":{
                        "target": "toolbar_insert",
                        "extraclass": "new_options_buttons",
                        "items": [
                            {
                                "component": "button",
                                "icon": "add",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Element",
                                "on-click": "AUTHOR_SHOW_INSERT_ELEMENT_UI"
                            },
                            {
                                "component": "button",
                                "icon": "textParagraph",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Paragraph",
                                "on-click": "INSERT_P"
                            },
                            {
                                "component": "button",
                                "icon": "textNumbered",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Numbered List",
                                "on-click": "AUTHOR_INSERT_REMOVE_NUMBERED_LIST"
                            },
                            {
                                "component": "button",
                                "icon": "textBulleted",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Bulleted List",
                                "on-click": "AUTHOR_INSERT_REMOVE_BULLETED_LIST"
                            },
                            {
                                "component": "button",
                                "icon": "table",
                                "variant": "action",
                                "quiet": true,
                                "title": "Insert Table",
                                "on-click": "AUTHOR_INSERT_ELEMENT",
                            }
                        ]
                    },
                },
                target: {
                    key:"title",value: "Insert Table",                    
                    viewState: VIEW_STATE.REPLACE
                }
            },
        ]
    },
    controller: {
        init() {
            console.log(this.proxy.getValue('canUndo'))
            this.proxy.subscribeAppEvent({
                key: "editor.preview_rendered",
                next: async function (e) {
                    console.log(this.proxy.getValue('canUndo'))
                }.bind(this)
            })
        },
        INSERT_P(){
            this.next("AUTHOR_INSERT_ELEMENT",  "p" )
        }
    }
}
```

사용자 지정되면 최종 출력을 다음과 같이 볼 수 있습니다.

![도구 모음](imgs/toolbar.png)


다른 예에서는 사용자 지정 도구 모음 단추를 만들어 이메일, 파일 참조, 웹 링크 등과 같은 **상호 참조**&#x200B;의 원하는 하위 옵션으로 바로 이동할 수 있습니다.


```js title = toolbar_customisation.js
const toolbarExtend = {
    id: "editor_toolbar",
    view: {
        items: [
            
                {
                    "component": "button",
                    "icon": "fileHTML",
                    "variant": "action",
                    "quiet": true,
                    "title": "External URL Link",
                    "on-click": "openExternalLinkDialogP",
            
                target: {
                    key:"title",value: "Insert Bulleted List",                    
                    viewState: VIEW_STATE.REPLACE
                }
            }
        ]
    },
    controller: {
        openExternalLinkDialog() {
            tcx.eventHandler.next ("AUTHOR_INSERT_ELEMENT")
            t{
          args:"<xref href='' scope='external' format = 'dita' ></xref>",activeTabId:"conkey_reference"
        }
    }
  }
}
```

여기서 `activeTabId`은(는) 올바른 탭을 선택하는 열거형입니다. 기본적으로 상호 참조 탭을 선택하면 `file_link`이(가) 열립니다. 요구 사항에 따라 `activeTabId` 값을 `content_reference`, `conkey_reference`, `key_reference`, `file_link`, `web_link` 및 ` email_link`(으)로 변경할 수 있습니다.
