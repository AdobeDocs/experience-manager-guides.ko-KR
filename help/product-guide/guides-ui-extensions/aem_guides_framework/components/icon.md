---
sidebar_position: 4
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 2%

---


# 아이콘

아이콘을 표시하려면 구성 요소 아이콘을 사용합니다.
JUI의 텍스트 영역 구성 요소는 html을 나타냅니다 `<icon/>`.

사용 가능한 아이콘: [Adobe 스펙트럼 아이콘](https://spectrum.adobe.com/page/icons/) 은 앱과 호환됩니다.

```js title="icon.js"
const iconJSON =  {
    "component": "icon", //tells the component name
    "icon": "info", // name of the icon to be used
    "size": "S", // size of the icon
    "title": "Information" // tooltip corresponding to the icon.
},
```

아이콘은 단추에 추가할 수도 있습니다.

렌더링된 아이콘은 다음과 같이 표시됩니다.

![아이콘](./imgs/info_icon.png "아이콘")
