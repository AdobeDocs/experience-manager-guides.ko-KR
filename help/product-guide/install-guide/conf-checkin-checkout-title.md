---
title: 체크인 및 체크아웃 아이콘의 제목 구성
description: 체크인 및 체크아웃 아이콘의 제목을 구성하는 방법에 대해 알아봅니다
exl-id: a8888a17-e819-4fa2-bb6f-cafe1002803a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '166'
ht-degree: 0%

---

# 체크인 및 체크아웃 아이콘의 제목 구성

AEM Guides을 사용하면 웹 편집기에서 체크인 및 체크아웃 아이콘의 제목을 구성할 수 있습니다. 체크 인 및 체크 아웃 아이콘의 제목을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager에 관리자로 로그인하여 UI 구성 파일을 다운로드합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 클릭하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택하고 **폴더 프로필**&#x200B;을 클릭합니다.
1. **전역 프로필** 타일을 클릭합니다.
1. **XML 편집기 구성** 탭을 선택하고 맨 위의 **편집** 아이콘을 클릭합니다.
1. **XML 편집기 UI 구성** 섹션에서 **다운로드** 아이콘을 클릭하여 로컬 시스템에서 `ui_config.json` 파일을 다운로드합니다.
1. `ui_config.json` 파일에서 &quot;topbar&quot; 섹션의 제목을 변경합니다. 다음 값을 변경할 수 있습니다.

   ```json
   //Change title to "Check out" instead of "Lock"
           "title": "Check out"
   
   //Change title to "Check in" instead of "@checkOutBy
            "title": "Check in"
   ```

1. 파일을 저장하고 업로드합니다.
