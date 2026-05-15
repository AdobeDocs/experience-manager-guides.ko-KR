---
title: 텍스트 영역
description: 텍스트 영역
role: User, Admin
exl-id: 4c576acc-fa6a-4c41-9b92-443ba51dc8ee
TQID: https://experienceleague.adobe.com/ws7FgyxoutcYEts9wIJ3iQyjIwUfLrCgolSamc8ybDY
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 65
ht-degree: 3%

---

# 텍스트 필드 및 텍스트 영역

텍스트를 입력하려면 구성 요소, 텍스트 필드 및 텍스트 영역을 사용합니다.
JUI의 텍스트 영역 구성 요소는 html `<textarea/>`을(를) 나타냅니다.

```js title="textArea.js"
const textAreaJSON =  {
    "component": "textarea", //tells the component name
    "id": "input_name", // can be used to give a unique identifier to a component
    "data": "@name", // the variable storing the inputted text
    "on-keyup": {
        "name": "submitName",
        "eventArgs": {
            "keys": [
            "ENTER"
            ]
        }
    },
},
```

여기서 `on-keyup`은(는) 컨트롤러에서 명령을 호출하는 구문입니다.
Enter 키를 누르면 `submitName` 이벤트가 호출되는 textArea가 생성됩니다.

렌더링된 텍스트 영역은 다음과 같이 표시됩니다.

![텍스트 영역](./imgs/text_area.png "텍스트 영역")
