---
title: 텍스트 영역
description: 텍스트 영역
role: User, Admin
exl-id: 4c576acc-fa6a-4c41-9b92-443ba51dc8ee
source-git-commit: 08d379acc98dac425f1c84b0ac2226b0e34f6d8b
workflow-type: tm+mt
source-wordcount: '64'
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
