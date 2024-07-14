---
title: 특정 사용자 또는 그룹에 대한 폴더 컨텍스트 메뉴 옵션에서 DitaMap 만들기 옵션을 숨깁니다.
description: 특정 사용자/그룹에 대한 폴더 컨텍스트 메뉴에서 'DitaMap' 옵션을 숨겨서 웨비저를 사용자 지정하는 방법을 알아봅니다
exl-id: 796bfe3a-3950-4ade-9215-c33534791055
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '541'
ht-degree: 0%

---

# 웹 편집기의 폴더 컨텍스트 메뉴에서 &#39;DitaMAP 만들기&#39; 표시/숨기기

이 문서에서는 사용자/그룹 권한에 따라 폴더 컨텍스트 메뉴에서 &quot;DitaMap 만들기&quot; 옵션을 숨기거나 표시하도록 안내서 웹 편집기를 사용자 지정하는 방법을 알아봅니다.
이 사용 사례에서는 작성자가 아닌 모든 사용자에 대해 이 옵션을 숨깁니다.

## 전제 조건

요구 사항에 따라 앱의 UI를 사용자 지정할 수 있는 AEM Guides 확장 패키지를 활용합니다.
이 [설명서](https://github.com/adobe/guides-extension/tree/main)를 통해 안내서 확장 프레임워크 작동 방식에 대한 자세한 정보를 얻으십시오.

이제 을(를) 시작하여 작성자가 아닌 모든 사용자에 대해 이 옵션을 숨기도록 폴더 컨텍스트 메뉴를 맞춤화하는 방법을 배울 수 있습니다.

아래 코드 조각에서 볼 수 있듯이 &quot;DitaMap 만들기&quot; 옵션이 작성자 사용자에게 표시됩니다.

![DitaMap 만들기 옵션 표시](../../../assets/authoring/ditamap-show-author.png)

이제 Guides Extension Framework를 사용하여 이 옵션을 숨길 수 있는 방법을 살펴보겠습니다.

## 구현 단계

구현은 아래 부분에서 설명합니다.

- **Folder_options 컨트롤러의 변경 사항**

  각 컨텍스트 메뉴에는 연결된 컨트롤러 ID가 있습니다. 이 컨트롤러는 다양한 컨텍스트 메뉴 옵션에 대한 이벤트 내 기능을 처리합니다.

  이 예제에서는 폴더 컨텍스트 메뉴를 사용자 지정하여 작성자가 아닌 사용자를 위해 &quot;DitaMap 만들기&quot; 옵션을 숨기도록 하겠습니다. 이를 위해 가이드 확장 프레임워크 저장소의 /src 아래에 있는 folder_options.ts 파일을 변경합니다.

  상황에 맞는 메뉴에서 이 옵션을 숨기기 위해 &quot;viewState&quot;를 &quot;REPLACE&quot;로 사용하고 있습니다.
&#39;id&#39; 키를 통해 이 folder_options에서 새 위젯을 호출합니다.

```typescript
const folderOptions = {
  id: "folder_options",
  contextMenuWidget: "repository_panel",
  view: {
    items: [
      {
        component: "widget",
        id: "customditamap",
        target: {
          key: "displayName",
          value: "DITA Map",
          viewState: VIEW_STATE.REPLACE,
        },
      },
    ],
  },
};
```

- **논리를 처리할 새 위젯 만들기**

  작성자가 아닌 사용자에게만 이 옵션을 숨기도록 논리를 작성하는 데 새 위젯 생성(customoptions.ts)이 필요합니다. 이를 위해 JSON 구조에서 전환 역할을 하는 &#39;표시&#39; 키를 사용했습니다.

  고유한 외부 서블릿을 작성하여 그룹 세부 사항을 확인할 수 있습니다. 이렇게 하면 사용자 지정 그룹에 대한 폴더 메뉴 옵션도 사용자 지정할 수 있습니다.
이 예에서는 OOTB AEM &#39;rolesapi&#39; 호출을 활용하여 사용자 세부 정보를 가져오고 위의 스니펫에 표시된 대로 &#39;isAuthor&#39;에서 응답을 설정했습니다.

```typescript
const folderOptions = {
  id: "customditamap",
  view: {
    component: "button",
    quiet: true,
    icon: "breakdownAdd",
    label: "DITA Map",
    "on-click": "createNewDitaMap",
    show: "@extraProps.isAuthor",
  },
};
```

이를 통해 &#39;show&#39;의 값을 기반으로 레이블이 &quot;Dita Map&quot;인 버튼을 숨길 수 있습니다.

모델에서 &#39;isAuthor&#39; 속성을 설정하는 컨트롤러를 추가했습니다. 이 작업은 컨트롤러의 다음 구문을 사용하여 수행할 수 있습니다.

```typescript
this.model.extraProps.set("key", value);
```

여기서 키는 &#39;isAuthor&#39;이고 값은 rolesapi 호출의 응답입니다.
또한 작성자 사용자의 경우 DitaMap 만들기 옵션을 활성화하기 위해 &#39;createNewDitaMap&#39; 이벤트를 정의했습니다.

```typescript
controller: {
    init: function () {
      this.model.extraProps.set("isAuthor", false);

      rolesApiResponse.then((result) => {
        console.log(result);
        this.model.extraProps.set(
          "isAuthor",
          result["/content/dam"].roles.authors
        );

        console.log("testresult" + result["/content/dam"].roles.authors);
      });
    },
    createNewDitaMap() {
      repositoryController && repositoryController.next("create_new.map");
    },
  },
```

- **사용자 지정된 코드 추가**

  folder_options.ts 및 customoptions.ts를 /src 아래의 index.ts 파일로 가져옵니다.

## 테스트

- 작성자 그룹의 일부가 아닌 사용자로 AEM에 로그인합니다. DitaMap 만들기 옵션은 아래와 같이 폴더의 컨텍스트 메뉴에서 숨겨집니다.
이 사용 사례가 GIT에 추가되었습니다. 아래에서 관련 리소스를 찾으십시오.

![DitaMap 만들기 옵션 숨기기](../../../assets/authoring/ditamap-hide-non-author.png)

### 관련 리소스

- **확장 프레임워크 기본 리포지토리** - [GIT](https://github.com/adobe/guides-extension/tree/main)

- **설명서** - [Experience League](../../../../../guides-ui-extensions/aem_guides_framework/basic-customisation.md)

- **문서화된 일반적인 사용 사례** - [Experience League](../../../../../guides-ui-extensions/aem_guides_framework/jui-framework.md)

- **샘플이 있는 공용 리포지토리** - [GIT](https://github.com/adobe/guides-extension/tree/sc-expert-session). 분기 sc-expert-session 참조

```

```
