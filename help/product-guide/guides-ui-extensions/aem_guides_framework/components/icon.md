---
title: 아이콘
description: 아이콘
role: User, Admin
exl-id: 5ba41c77-7329-49fc-bce5-02682261ea8e
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '49'
ht-degree: 6%

---

# 아이콘

아이콘을 표시하려면 구성 요소 아이콘을 사용합니다.
JUI의 텍스트 영역 구성 요소는 html `<icon/>`을(를) 나타냅니다.

[Adobe 스펙트럼 아이콘](https://spectrum.adobe.com/page/icons/)에서 사용할 수 있는 아이콘이 앱과 호환됩니다.

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
