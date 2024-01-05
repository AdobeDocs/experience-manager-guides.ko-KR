---
title: 목록
description: 목록
source-git-commit: dfd4c898d3c093bfee1a8a6efff4e395efd20c60
workflow-type: tm+mt
source-wordcount: '59'
ht-degree: 5%

---

# 목록

목록을 표시하려면 구성 요소 목록을 사용합니다.

```js title="list.js"
const listJSON =  {
    "component": "list", //tells the component name
    "data": "@languages", // an array of list items
},
```

여기서 언어는 간단한 문자열 배열입니다. `languages = ["English", "Hindi", "French"]`
개체 목록을 렌더링하려는 경우 항목 구성을 사용하여 구조를 지정할 수 있습니다.

```js title="list.js"
const listJSON =  {
    "component": "list", //tells the component name
    "data": "@projects", // an array of list items
    "itemConfig": { // used to define the structure of the list items.
    "component": "widget",
    "id": "checkbox_label"
    }
},
```

일반적으로 itemConfig는 `widget`. 위젯에 대한 자세한 내용을 보려면 다음 위치로 이동하십시오. [위젯](../Widgets/basic-widget.md)

렌더링된 목록은 다음과 같이 표시됩니다.

![목록](./imgs/list.png "목록")
