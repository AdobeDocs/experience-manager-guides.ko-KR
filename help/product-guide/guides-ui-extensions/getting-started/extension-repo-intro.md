---
title: 확장 저장소 소개
description: AEM Guides 확장 패키지 디렉터리 구조
role: User, Admin
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '110'
ht-degree: 0%

---


# AEM Guides 확장 패키지 디렉터리 구조

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

최종 빌드 디렉터리입니다. AEM에 복사해야 하는 최종 JS 및 CSS가 포함되어 있습니다.

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
