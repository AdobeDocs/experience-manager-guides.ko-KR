---
title: 버튼
description: 버튼
role: User, Admin
exl-id: 40e3f254-f94e-4f43-8ff5-2e6e1eb1cb6f
TQID: https://experienceleague.adobe.com/pmhyi9TN4gFF0opdy2SsTEUr4l1uLZMwhIwmUPMJSA0
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 62
ht-degree: 4%

---

# 버튼

버튼을 표시하려면 구성 요소 버튼을 사용합니다.
JUI의 단추 구성 요소는 html `<button/>`을(를) 나타냅니다.

```js title="buttonJSON.js"
const buttonJSON = {
  "component": "button",//tells the component name
  "label": "Yes, login",//tells the text for the button
  "variant": "cta",//tells the variants for the button which  provides default styles
  "on-click": "done",//tells what function to run after user clicks the button
};
```

레이블이 `Yes, login`인 단추가 생성됩니다. 다른 속성에는 variant,label,on-click이 포함되지만 이에 제한되지 않습니다.
> **_NOTE:_** `on-<events>`은(는) 컨트롤러에서 명령을 호출하는 구문입니다.

렌더링된 버튼은 다음과 같이 표시됩니다.

![단추](imgs/yes_login_button.png "단추")
