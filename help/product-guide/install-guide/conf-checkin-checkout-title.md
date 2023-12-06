---
title: 체크인 및 체크아웃 아이콘의 제목 구성
description: 체크인 및 체크아웃 아이콘의 제목을 구성하는 방법에 대해 알아봅니다
exl-id: a8888a17-e819-4fa2-bb6f-cafe1002803a
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '166'
ht-degree: 0%

---

# 체크인 및 체크아웃 아이콘의 제목 구성

AEM Guides를 사용하면 웹 편집기에서 체크 인 및 체크 아웃 아이콘의 제목을 구성할 수 있습니다. 체크 인 및 체크 아웃 아이콘의 제목을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager에 관리자로 로그인하여 UI 구성 파일을 다운로드합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**.
1. 선택 **안내서** 도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** 탭을 클릭하고 **편집** 맨 위에 있는 아이콘.
1. 다음에서 **XML 편집기 UI 구성** 섹션에서 **다운로드** 아이콘 을 클릭하여 `ui_config.json` 파일을 로컬 시스템에 저장합니다.
1. 다음에서 `ui_config.json` 파일에서 &quot;topbar&quot; 섹션에서 제목을 변경합니다. 다음 값을 변경할 수 있습니다.

   ```json
   //Change title to "Check out" instead of "Lock"
           "title": "Check out"
   
   //Change title to "Check in" instead of "@checkOutBy
            "title": "Check in"
   ```

1. 파일을 저장하고 업로드합니다.
