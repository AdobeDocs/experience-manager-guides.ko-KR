---
title: 릴리스 정보 | Adobe Experience Manager Guides 2025.06.0 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 2025.06.0 릴리스의 새로운 기능과 향상된 기능에 대해 알아봅니다
role: Leader
exl-id: 48f27aa6-d870-4228-8e62-db81699a25f7
TQID: https://experienceleague.adobe.com/Lu9Ebb7OEpxiRmjkho1KnXiry5Kz5kDwfAYbXJD8-uI
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 404
ht-degree: 3%

---

# 2025.06.0 릴리스(2025년 6월)의 새로운 기능

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 2025.06.0 릴리스와 함께 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [2025.06.0 릴리스에서 해결된 문제](fixed-issues-2025-06-0.md)를 확인하십시오.

[2025.06.0 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-2025-06-0.md)에 대해 알아봅니다.

## 우발적 컨텐츠 손실을 방지하기 위한 세션 시간 초과 프롬프트

이제 팝업 메시지가 Adobe Experience Manager 세션이 만료되고 활동이 없어 로그아웃되면 알려줍니다. 이 메시지는 세션이 종료된 후 Experience Manager Guides에서 콘텐츠를 편집하려고 할 때 트리거됩니다. 이 기능은 저장되지 않은 작업의 위험을 줄이고 활동이 없는 동안에도 전체적인 안정성과 유연성을 향상시킵니다.

![](assets/sign-out-prompt.png)

Experience Manager Guides의 [세션 시간 초과 프롬프트](../user-guide/session-timeout-prompt.md)에 대해 자세히 알아보세요.

## 편집기의 맵 다운로드 옵션 개선

Experience Manager Guides에서는 **맵 다운로드** 대화 상자에서 새로운 **실제 파일 이름 사용** 옵션을 도입했습니다. 이제 맵 파일을 다운로드할 때 기본 UUID 대신 원래 파일 이름을 유지하도록 선택할 수 있으므로 파일을 훨씬 쉽게 인식하고 관리할 수 있습니다. 이 옵션은 **파일 계층 구조 유지**&#x200B;를 선택하는 경우에만 사용할 수 있으며 **파일 계층 구조 병합**&#x200B;을 선택하는 경우에는 사용할 수 없으므로 다운로드한 맵을 보다 유연하게 구성할 수 있습니다.

자세한 내용은 [파일 다운로드](../user-guide/authoring-download-assets.md#download-a-dita-map-file-from-the-editor)를 참조하세요.

![](assets/download-map-dialog-new.png){width="300"}


## 편집기에서 `navref` 처리 개선

편집기에 대한 최신 개선 사항을 통해 DITA 맵에서 `navref` 요소의 처리가 개선되었습니다. 이제 맵에 `navref` 요소를 추가하면 **경로 선택** 대화 상자가 열려 지도에 탐색 링크로 포함할 맵 참조를 쉽게 선택할 수 있습니다. 추가한 맵의 제목은 작성자 보기와 레이아웃 보기 모두에 표시되므로 작성 중에 포함된 탐색을 더 잘 볼 수 있습니다.  또한 추가된 `navref` 요소는 편집기에서 참조된 맵을 표시하도록 자동으로 확인됩니다.

자세한 내용은 [탐색 참조 추가](../user-guide/map-editor-other-features.md#add-navigation-references)를 참조하십시오.

## AI Assistant의 향상된 성능

이 릴리스에서는 향상된 AI Assistant 백엔드 엔진을 도입하여 향상된 성능과 안정성을 제공합니다. 이 업데이트를 활성화하고 AI 지원 도움말을 계속 사용하려면 다음 작업을 수행하십시오.

- 새 끝점 URL을 반영하도록 `chat.url` 구성을 업데이트합니다.
- Cloud Manager에서 새 환경 변수 `GUIDES_AI_SITE_ID`을(를) 추가합니다.

자세한 내용은 [AI Assistant 구성](../cs-install-guide/conf-smart-suggestions.md)을 참조하십시오.

