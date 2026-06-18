---
title: 체크인 및 체크아웃 아이콘의 제목 구성
description: 체크인 및 체크아웃 아이콘의 제목을 구성하는 방법에 대해 알아봅니다
exl-id: a8888a17-e819-4fa2-bb6f-cafe1002803a
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/NytwQkk18-M0MpxxBP3OWg3WFJf6Oy3N5dBaiKlc6Gg
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: cc73b81787a3c3dbe8390d93e558064327e59965
workflow-type: tm+mt
source-wordcount: 165
ht-degree: 0%

---

# 체크인 및 체크아웃 아이콘의 제목 구성

AEM Guides을 사용하면 편집기에서 체크인 및 체크아웃 아이콘의 제목을 구성할 수 있습니다. 체크 인 및 체크 아웃 아이콘의 제목을 구성하려면 다음 단계를 수행하십시오.

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
