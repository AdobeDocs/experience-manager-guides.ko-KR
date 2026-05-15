---
title: 레이블
description: 레이블
role: User, Admin
exl-id: aceefb08-3198-4c3a-90ec-ac1cdde28582
TQID: https://experienceleague.adobe.com/fYBih0o2nCF66z8OgoFJ0Xqt2oN8aY7ZomqfgljZIyA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 45
ht-degree: 6%

---

# 레이블

텍스트나 문자열을 표시하기 위해 구성 요소인 레이블을 사용합니다.
JUI의 레이블 구성 요소는 html `<label/>`을(를) 나타냅니다.

다음은 정적 레이블을 추가하는 예제입니다

```js title="staticLabel.js"
const staticLabelJSON =  {
    "component": "label", //tells the component name
    "label": "This is an example label", // the string to be displayed
}
```

JSON 아래에 동적 문자열이 표시됩니다.

```js title="dynamicLabel.js"
const labelJSON =  {
    "component": "label", //tells the component name
    "label": "@name", // the variable storing the text to be displayed
},
```

렌더링된 레이블은 다음과 같이 표시됩니다.

![레이블](./imgs/label.png "레이블")
