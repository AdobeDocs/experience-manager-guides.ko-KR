---
title: 웹 편집기에서 번역 기능 구성
description: 웹 편집기에서 번역 기능을 구성하는 방법 알아보기
exl-id: e25473c3-9a84-4658-87c9-6fd72bcaa2b6
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '154'
ht-degree: 0%

---

# 웹 편집기에서 번역 기능 구성 {#id21BONI0J0YR}

웹 편집기는 콘텐츠를 여러 언어로 번역할 수 있는 강력한 번역 기능을 제공합니다.

다음을 사용할 수 있습니다. **관리** 웹 편집기의 탭을 사용하여 콘텐츠를 번역할 수 있습니다. 이 탭은 기본적으로 사용할 수 있습니다.

을(를) 숨기려면 **관리** 웹 편집기의 탭에서 다음 단계를 수행합니다.

1. 에 로그인 **Adobe Experience Manager** 관리자입니다.
1. 을(를) 클릭합니다 **Adobe Experience Manager** 맨 위에 연결한 다음 **도구**.
1. 선택 **안내서** 도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 클릭 **XML 편집기 구성**.
1. 클릭 **편집** 맨 위에 있는 아이콘.
1. 다운로드 `ui\_config.json` file.다운로드한 파일에서 다음 코드 조각을 제거합니다.

   ```json
   {
       "component":"tab",
       "id":"workflow",
       "title":"Manage",
       "on-click":"APP_MODE_CHANGE",
       "items":
       [
           {
               "component":"label",
               "label":"Manage"
           }
       ]
   },
   ```

1. 업데이트된 ui\_config.json 파일을 업로드합니다.

다음 사항에 주의하십시오. **관리** 필터를 더 이상 사용할 수 없습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
