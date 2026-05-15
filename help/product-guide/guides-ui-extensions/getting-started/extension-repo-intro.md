---
title: 확장 저장소 소개
description: AEM Guides 확장 패키지 디렉토리 구조
role: User, Admin
exl-id: 99a00b3e-a5c9-41d8-a73d-8690d587277e
TQID: https://experienceleague.adobe.com/REfq-LVYahMiO0avNtO7aOsXeJvkC9Eqo0stpiX1Qgc
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 110
ht-degree: 0%

---

# AEM Guides 확장 패키지 디렉토리 구조

```text
├── src
│   ├── **/*{js,ts}
│   ├── index.ts
├── dist
│   ├── guides-extension.js
│   ├── guides-extension.umd.cjs
│   ├── build.css
├── node_modules
├── package.json
├── package-lock.json 
└── .gitignore
└── buildCSS.mjs // for creating tailwind classes
└── vite.config.js // config for specifying TS and javascript build options
└── taliwind.config.js // config for tailwind we can add custom config for a design system here
├── jsons // jsons for the aem app
│   ├── context_menus // jsons for the context menus
│   ├── review_app // jsons for the review app
│   ├── xmleditor // jsons for xmleditor
```

## /src

```text
├── src
│   ├── **/*{js,ts}
│   ├── index.ts
```

소스 디렉터리에는 확장에 대한 typescript 또는 javascript 파일이 포함됩니다. index.ts 파일은 확장의 진입점입니다. 여기서 모든 구성 요소를 가져와서 단일 객체로 내보낼 수 있습니다. 이 개체는 구성 요소를 렌더링하는 데 확장에서 사용됩니다.

### /dist

최종 빌드 디렉터리입니다. 여기에는 AEM에 복사해야 하는 최종 JS 및 CSS가 포함되어 있습니다

```test
├── dist
│   ├── gudies-extension.js // you can either choose es module (this one) or .cjs(other one) file
│   ├── gudies-extension.umd.cjs
│   ├── build.css // this is your tailwind css output
```

## /jsons

이 디렉터리에는 다양한 보기에 대한 JSON이 포함되어 있습니다. 이러한 JSON을 사용하여 대상을 식별하고 보기를 사용자 지정할 수 있습니다.

```text
├── jsons // jsons for the aem app
│   ├── context_menus // jsons for the context menus
│   ├── review_app // jsons for the review app
│   ├── xmleditor // jsons for xmleditor
```
