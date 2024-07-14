---
title: 설치 및 설정
description: AEM Guides 확장 패키지 설치 및 사용
role: User, Admin
exl-id: 0304c8d0-35a8-4712-a9af-36557e3b247f
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# AEM Guides 확장 패키지 설치 및 사용

확장을 사용하면 필요에 따라 AEM Guides 앱을 사용자 정의할 수 있습니다. 이 확장 프레임워크는 AEM Guides v4.3 이상(온-프레미스) 및 2310(클라우드)에서 지원됩니다.

## 요구 사항

이 패키지를 사용하려면 [git bash](https://github.com/git-guides/install-git) 및 npm이 필요합니다.

## 설치

AEM Guides 프레임워크 설치를 부트스트랩하는 가장 쉬운 방법은 cli를 사용하는 것입니다

```bash
npx @adobe/create-guides-extension
```

## 사용자 지정 코드 추가

1. `src/` 디렉터리에 확장할 각 구성 요소의 코드 파일을 추가합니다. 일부 샘플 파일이 이미 추가되었습니다.
2. 이제 `src/` 디렉터리에 있는 `index.ts` 파일에서:
   - 빌드에 추가할 사용자 지정 내용이 포함된 `.ts` 파일을 가져옵니다.
   - `window.extension`에 가져오기 추가
   - 사용자 지정된 구성 요소의 `id` 및 해당 가져오기를 `tcx extensions`에 등록
   - 샘플 `/src/index.ts`을(를) 참조하세요.

## 사용자 지정된 코드 작성

- 루트 디렉터리에서 `npm run build` 실행. `dist/` 디렉터리에 3개의 파일이 있습니다.
   - `build.css`
   - `guides-extension.js`
   - `guides-extension.umd.cjs`

![빌드 출력](./../imgs/build_output.png)

## AEM에 사용자 지정 추가

- `CRXDE` `crx/de/index.jsp#/`(으)로 이동
- `apps` 폴더 아래에서 `cq:ClientLibraryFolder` 형식의 새 노드를 만듭니다.

![폴더 구조](./../imgs/crxde_folder_structure.png)

- 노드의 `properties`에서 `Multi`을(를) 선택하고 다음 속성을 추가합니다
이름: `categories`
유형: `String []`
값: `apps.fmdita.review_overrides`, `apps.fmdita.xml_editor.page_overrides`

![폴더 속성](./../imgs/crxde_folder_properties.png)

- 빌드된 js를 추가하려면 위에서 만든 노드에 새 파일, 즉 `tcx1.js`을(를) 만듭니다. 여기에 `dist/guides-extension.umd.cjs` 또는 `dist/guides-extension.js`의 코드를 추가합니다. 이제 새 파일 `js.txt`을(를) 만듭니다. 여기서 js 파일의 이름을 추가합니다. 이 경우 다음과 같습니다.

```t
#base=.
tcx1.js
```

- 빌드된 css를 추가하려면 위에서 만든 노드에 새 파일, 즉 `tcx1.css`을(를) 만듭니다. 여기에 `dist/build.css`의 코드를 추가합니다. 이제 새 파일 `css.txt`을(를) 만듭니다. 여기에서 css 파일의 이름을 추가합니다. 이 경우 다음과 같습니다.

```t
#base=.
tcx1.css
```

- 맞춤화가 적용된 앱을 로드하려면 `shift + refresh`을(를) 실행하십시오.

## 문제 해결

위의 모든 단계가 올바르게 수행되었는지 확인합니다.
tcx.js에 코드를 추가한 후 하드 새로 고침(shift+refresh)을 수행해야 합니다.
이제 AEM을 열고 마우스 오른쪽 단추를 클릭하여 `Inspect`을(를) 클릭합니다.
소스로 이동하여 `[node_name].js`(예: extensions.js) 파일을 검색합니다. 제어 / Cmd + D를 수행하여 파일을 검색합니다. `dist/guides-extension.umd.cjs` 또는 `dist/guides-extension.js`에서 붙여넣은 JS 코드와 함께 `.js` 파일이 있으면 설정이 완료되었습니다
