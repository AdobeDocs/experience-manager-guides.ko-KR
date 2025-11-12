---
title: 릴리스 정보 | Adobe Experience Manager Guides 2025.10.0 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 2025.10.0 릴리스의 새로운 기능과 향상된 기능에 대해 알아봅니다
role: Leader
source-git-commit: 6f212862855e5ce1125137f462b88c933d23ed26
workflow-type: tm+mt
source-wordcount: '522'
ht-degree: 3%

---

# 2025.10.0 릴리스(2025년 10월)의 새로운 기능

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 2025.10.0 릴리스와 함께 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [2025.10.0 릴리스에서 해결된 문제](fixed-issues-2025-10-0.md)를 확인하십시오.

[2025.10.0 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-2025-10-0.md)에 대해 알아봅니다.


## 이제 편집기 설정의 이름이 Workspace 설정으로 변경되고 홈 페이지에서 액세스할 수 있습니다

탐색 및 사용성을 개선하기 위해 다음과 같은 개선 사항이 도입되었습니다.

- Experience Manager Guides의 **편집기 설정** 이름이 **Workspace 설정**(으)로 바뀌었습니다.
- 이전에는 편집기 및 맵 콘솔 인터페이스에서만 사용할 수 있었던 **추가 작업** 메뉴(점 3개 메뉴)는 이제 [홈 페이지](../user-guide/intro-home-page.md)에서 액세스할 수 있습니다.

  ![](assets/workspace-settings.png)

## 작성자 보기의 주제 및 맵에서 중복 ID를 쉽게 식별하고 수정합니다

이제 Experience Manager Guides에는 편집기에 **중복 ID** 단추가 포함되어 있으므로 단일 항목 또는 맵에 있는 중복 ID를 신속하게 식별하고 수정할 수 있습니다. 중복 ID가 검색되면 이 단추가 **작성자** 보기의 편집기 인터페이스 왼쪽 하단 모서리에 나타납니다. 버튼을 선택하면 중복 ID가 있는 모든 인스턴스 목록이 팝오버에 표시됩니다. 인스턴스를 선택하면 주제나 맵에서 해당 콘텐츠가 강조 표시되어 오른쪽 패널에서 중복 ID를 찾아 수정할 수 있습니다.

자세한 내용은 [편집기의 추가 기능](../user-guide/web-editor-other-features.md)을 참조하세요.

![](assets/duplicate-element-IDs.png){width="350" align="left"}

## 저장소 및 보고서 필터 개선 사항

리포지토리의 고급 필터 아래에 있는 **잠근 사용자** 필터와 DITA 맵 보고서의 **작성자** 필터는 이제 스크롤할 때 사용자 목록을 한 번에 모두 로드하는 대신 점진적으로 로드합니다. 이 페이지 매김된 로딩은 속도를 향상시키고 큰 사용자 데이터 세트 작업을 보다 효율적이고 매끄럽게 해줍니다.

## 검토 패널에서 직접 검토 작업에 대한 액세스 상태

이제 검토 작업의 개시자가 검토 패널에서 직접 검토 작업의 상태를 확인할 수 있습니다. 최신 개선 사항을 통해 검토 패널의 **작업 업데이트** 대화 상자에 새로운 **검토 상태 확인** 옵션이 포함됩니다. 이 옵션을 선택하면 각 검토자에 대한 작업 상태를 볼 수 있는 검토 대시보드로 바로 이동되므로 컨텍스트를 전환할 필요 없이 작업 진행 상황에 보다 신속하게 액세스할 수 있습니다.

자세한 내용은 [작성자로 리뷰 요청 또는 리뷰 작업 닫기](../user-guide/review-close-review-task.md)를 참조하십시오.

![](assets/check-review-status-icon.png){width="350" align="left"}



## 폴더 또는 에셋의 후 처리 상태를 추적하기 위한 API

이제 개별 에셋 및 폴더의 사후 처리 상태를 추적하는 데 새 API를 사용할 수 있습니다. 이 기능은 콘텐츠가 완전히 처리된 후에만 게시가 수행되어야 하는 자동화된 워크플로를 사용하는 팀에 특히 유용합니다. API는 준비 상태를 확인할 수 있는 신뢰할 수 있는 방법을 제공하여 불완전한 처리로 인한 게시 실패의 위험을 줄입니다.

또한 이 API의 도입으로 자산 사후 처리 이벤트가 자동으로 실행되지 않습니다. 대신 이제 관리자는 `fmdita config manager`의 설정을 통해 이 이벤트를 활성화할 수 있습니다.

자세한 내용은 다음을 참조하십시오.

- [개별 에셋 및 폴더의 사후 처리 상태를 추적하기 위한 API](../api-reference/track-post-processing-status.md)
- [fmdita 구성 관리자의 사후 처리 이벤트 핸들러 설정](../api-reference/post-process-event.md)

