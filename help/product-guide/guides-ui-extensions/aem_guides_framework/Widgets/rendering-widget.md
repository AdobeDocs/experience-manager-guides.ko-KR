---
title: 렌더링 위젯
description: JUI 위젯에서 렌더링이 작동하는 방법
role: User, Admin
exl-id: 381cc7b9-c957-40be-9db4-8347eefe2fa7
TQID: https://experienceleague.adobe.com/-VznRFHuyxLqumy55MssEvPMMHIIt2BelCe7C6zBqR8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 86
ht-degree: 0%

---

# 렌더링 위젯

`id`을(를) 사용하여 위젯을 참조하여 렌더링할 수 있습니다.

앱의 어느 곳에서든 `widget_languages` 위젯을 렌더링하려면 간단한 구문을 사용할 수 있습니다.

```json
{
    "component": "widget",
    "id": "widget_languages"
}
```

위젯은 복잡한 항목을 렌더링하는 데 사용할 수도 있습니다. 예를 들어 각 파일에 기여자 목록을 렌더링하고 싶습니다.
여기서 위젯은 다음과 같이 구성할 수 있습니다.

```js title="fileContributorsWidget.js"
const widgetJSON =  {
    component: "div", 
    id: "file_contributors", 
    items: [ // adding components to the widget
        {
            component: "div",
            items: [
                {
                    component: "icon",
                    icon: "file"
                },
                {
                    component: "label",
                    label: "@fileName"
                }
            ]
        },
        {
            component: "list",
            data: "@contributors",
            itemConfig: {
                component: "label"
            }
        }
    ]
},
```

이제 각 파일에 대한 기여자 목록을 렌더링하기 위해 목록을 다음과 같이 작성합니다.

```js title="fileContributorsList.js"
const listJSON = {
    component: "list"
    data: "@files"
    itemConfig: {
        component: "widget",
        id: "file_contributors"
    }
}
```

`@files`은(는) 필드가 포함된 파일 개체 목록입니다.

```typescript
- fileName: string
- contributors: Array<String>
```
