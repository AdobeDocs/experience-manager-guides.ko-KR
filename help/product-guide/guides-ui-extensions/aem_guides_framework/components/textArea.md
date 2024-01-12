---
title: 텍스트 영역
description: 텍스트 영역
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '64'
ht-degree: 3%

---

# 텍스트 필드 및 텍스트 영역

텍스트를 입력하려면 구성 요소, 텍스트 필드 및 텍스트 영역을 사용합니다.
JUI의 텍스트 영역 구성 요소는 html을 나타냅니다 `<textarea/>`.

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

여기, `on-keyup` 는 컨트롤러에서 명령을 호출하는 구문입니다.
이렇게 하면 Enter 키를 눌러 이벤트를 호출하는 textArea가 생성됩니다. `submitName`

렌더링된 텍스트 영역은 다음과 같이 표시됩니다.

![텍스트 영역](./imgs/text_area.png "텍스트 영역")
