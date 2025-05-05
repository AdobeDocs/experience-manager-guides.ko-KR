---
title: 웹 편집기에서 번역 기능 구성
description: 웹 편집기에서 번역 기능을 구성하는 방법 알아보기
exl-id: e25473c3-9a84-4658-87c9-6fd72bcaa2b6
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '154'
ht-degree: 0%

---

# 웹 편집기에서 번역 기능 구성 {#id21BONI0J0YR}

웹 편집기는 콘텐츠를 여러 언어로 번역할 수 있는 강력한 번역 기능을 제공합니다.

웹 편집기의 **관리** 탭을 사용하여 콘텐츠를 번역할 수 있습니다. 이 탭은 기본적으로 사용할 수 있습니다.

웹 편집기에서 **관리** 탭을 숨기려면 다음 단계를 수행하십시오.

1. 관리자로 **Adobe Experience Manager**&#x200B;에 로그인합니다.
1. 맨 위에 있는 **Adobe Experience Manager** 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성**&#x200B;을 클릭합니다.
1. 맨 위에 있는 **편집** 아이콘을 클릭합니다.
1. `ui\_config.json` 파일을 다운로드합니다.다운로드한 파일에서 다음 코드 조각을 제거합니다.

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

**관리** 필터는 더 이상 사용할 수 없습니다.

**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
