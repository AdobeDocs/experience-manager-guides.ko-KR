---
title: 목록
description: 목록
role: User, Admin
exl-id: 333b5e24-efba-4a51-8f68-83b5d1d7daec
TQID: https://experienceleague.adobe.com/2mjVuKodk-Jn7tGoiF1fNpCnTd1VqK57oATMiN2gd0o
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 58
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

일반적으로 itemConfig는 `widget`입니다. 위젯에 대한 자세한 내용을 보려면 [위젯](../Widgets/basic-widget.md)(으)로 이동하십시오.

렌더링된 목록은 다음과 같이 표시됩니다.

![목록](./imgs/list.png "목록")
