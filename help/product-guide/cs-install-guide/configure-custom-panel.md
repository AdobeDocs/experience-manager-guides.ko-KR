---
title: 왼쪽 패널에서 사용자 정의 패널 구성
description: 왼쪽 패널에서 사용자 정의 패널을 구성하는 방법 알아보기
exl-id: 5c25efc1-0976-4554-a186-2ffd5e62f500
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '87'
ht-degree: 0%

---

# 왼쪽 패널에서 사용자 정의 패널 구성 {#id224JI200Y6F}

다음 단계를 수행하여 웹 편집기의 왼쪽 패널 내에 사용자 지정 패널을 추가합니다.

1. *clientlib* 폴더를 만들고 이 폴더에 JavaScript 및 CSS 파일을 추가하십시오.
1. *apps.fmdita.xml\_editor.page\_overrides*&#x200B;의 값을 할당하여 *clientlib* 폴더의 categories 속성을 업데이트합니다.

사용자 지정 패널을 구성하는 샘플 코드:

```
tcx.ready(function () { //Ready will call the callback after editor code is set for events and global variable excess
 
 
    // APP_ADD_AUTHOR_LEFT_TAB event will add a new left tab in the left panel, user can show hide it using editor settings
    tcx.eventHandler.next(tcx.eventHandler.KEYS.APP_ADD_AUTHOR_LEFT_TAB, {
            id: 'my_panel',
            class: 'my-panel-tab',
            icon: 'file', //Any valid Adobe Spectrum icon name https://spectrum.adobe.com/page/icons/
            label: 'My Tab',
            prevTabID: 'repository_panel' //Existing tab ids are 'collection_panel', 'repository_panel', 'map_panel', 'outline_panel', 'conref_panel', 'glossary_panel', 'condition_panel', 'subject_scheme_panel', 'snippet_panel', 'template_panel', 'search_panel'
    })
 
    // APP_PANEL_DID_MOUNT event will be called after user has selected the panel and panel is rendered in the DOM
    tcx.eventHandler.subscribe({
        key: tcx.eventHandler.KEYS.APP_PANEL_DID_MOUNT,
        next: function(opts) {
            // TODO create panel ui inside $el
            let $el = opts.$el //$el is Tab panel content html node
            let id = opts.id //id is tab panel id (my_panel)
            console.log("mounted", opts)
        }
    })
 
  // APP_PANEL_WILL_UNMOUNT will be called before destorying the new left panel
  tcx.eventHandler.subscribe({
        key: tcx.eventHandler.KEYS.APP_PANEL_WILL_UNMOUNT,
        next: function(opts) {
            //TODO do some cleanup
            let id = opts.id //id is tab panel id (my_panel)
            console.log("unmounted", opts)
        }
    })
 
});
```

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
