---
title: 릴리스 정보 | Adobe Experience Manager Guides 2025.06.0 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 2025.06.0 릴리스의 새로운 기능과 향상된 기능에 대해 알아봅니다
role: Leader
source-git-commit: 147bd8cce875178f94dae5742bc6573b51f24d3a
workflow-type: tm+mt
source-wordcount: '467'
ht-degree: 3%

---

# 2025.06.0 릴리스(2025년 6월)의 새로운 기능

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 2025.06.0 릴리스와 함께 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [2025.06.0 릴리스에서 해결된 문제](fixed-issues-2025-06-0.md)를 확인하십시오.

[2025.06.0 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-2025-06-0.md)에 대해 알아봅니다.

## 이제 게시된 출력에 대한 임시 파일에는 작성자 및 게시 URL이 새 구성 파일에 포함됩니다

이제 Experience Manager Guides의 향상된 최신 게시 기능을 통해 기본 PDF 출력뿐만 아니라 DITA-OT를 사용하여 HTML, PDF 및 JSON 출력을 게시하는 동안 생성된 임시 파일에 새 `system_config.json` 파일이 추가됩니다. 이 파일은 게시 작업에 자동으로 포함되며 사전 설정에 대해 **임시 파일 유지** 옵션을 활성화하고 출력을 생성할 때 임시 파일을 통해서도 액세스할 수 있습니다.

`system_config.json` 파일에는 작성자 URL, 로컬 URL 및 게시 URL을 비롯한 주요 인스턴스 세부 정보가 포함되어 있어 컨텍스트를 보다 명확하게 하고 다운로드한 URL의 추적 가능성을 향상시킵니다.

자세한 내용은 [출력 사전 설정 이해](../user-guide/generate-output-understand-presets.md)를 참조하십시오.

## 우발적 컨텐츠 손실을 방지하기 위한 세션 시간 초과 프롬프트

이제 팝업 메시지가 Adobe Experience Manager 세션이 만료되고 활동이 없어 로그아웃되면 알려줍니다. 이 메시지는 세션이 종료된 후 Experience Manager Guides에서 콘텐츠를 편집하려고 할 때 트리거됩니다. 이 기능은 저장되지 않은 작업의 위험을 줄이고 활동이 없는 동안에도 전체적인 안정성과 유연성을 향상시킵니다.

![](assets/sign-out-prompt.png)

Experience Manager Guides의 [세션 시간 초과 프롬프트](../user-guide/session-timeout-prompt.md)에 대해 자세히 알아보세요.

## 편집기의 맵 다운로드 옵션 개선

Experience Manager Guides에서는 **맵 다운로드** 대화 상자에서 새로운 **실제 파일 이름 사용** 옵션을 도입했습니다. 이제 맵 파일을 다운로드할 때 기본 UUID 대신 원래 파일 이름을 유지하도록 선택할 수 있으므로 파일을 훨씬 쉽게 인식하고 관리할 수 있습니다. 이 옵션은 **파일 계층 구조 유지**&#x200B;를 선택하는 경우에만 사용할 수 있으며 **파일 계층 구조 병합**&#x200B;을 선택하는 경우에는 사용할 수 없으므로 다운로드한 맵을 보다 유연하게 구성할 수 있습니다.

자세한 내용은 [파일 다운로드](../user-guide/authoring-download-assets.md#download-a-dita-map-file-from-the-editor)를 참조하세요.

![](assets/download-map-dialog-new.png){width="300" align="left"}


## 편집기에서 `navref` 처리 개선

편집기에 대한 최신 개선 사항을 통해 DITA 맵에서 `navref` 요소의 처리가 개선되었습니다. 이제 맵에 `navref` 요소를 추가하면 **경로 선택** 대화 상자가 열려 지도에 탐색 링크로 포함할 맵 참조를 쉽게 선택할 수 있습니다. 추가한 맵의 제목은 작성자 보기와 레이아웃 보기 모두에 표시되므로 작성 중에 포함된 탐색을 더 잘 볼 수 있습니다.  또한 추가된 `navref` 요소는 편집기에서 참조된 맵을 표시하도록 자동으로 확인됩니다.

자세한 내용은 [탐색 참조 추가](../user-guide/map-editor-other-features.md#add-navigation-references)를 참조하십시오.
