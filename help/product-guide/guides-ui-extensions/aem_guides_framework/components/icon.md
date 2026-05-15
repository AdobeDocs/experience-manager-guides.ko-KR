---
title: 아이콘
description: 아이콘
role: User, Admin
exl-id: 5ba41c77-7329-49fc-bce5-02682261ea8e
TQID: https://experienceleague.adobe.com/5c5VcpdsC33tCSWajYHY08FIVVmxkidHnj9nKNzgeUA
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 51
ht-degree: 5%

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
