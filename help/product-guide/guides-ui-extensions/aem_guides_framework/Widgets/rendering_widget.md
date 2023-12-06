---
sidebar_position: 2
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '78'
ht-degree: 0%

---


# 렌더링 위젯

위젯을 사용하여 참조함으로써 위젯을 렌더링할 수 있습니다 `id`

위젯을 렌더링하려면 `widget_languages` 앱의 모든 위치에서 간단한 구문을 사용할 수 있습니다.

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

여기 `@files` 는 필드가 포함된 파일 개체 목록입니다.

```typescript
- fileName: string
- contributors: Array<String>
```
