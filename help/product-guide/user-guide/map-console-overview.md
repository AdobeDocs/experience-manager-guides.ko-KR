---
title: Adobe Experience Manager Guides의 콘솔 매핑
description: Adobe Experience Manager Guides에서 맵을 게시하고 관리할 수 있도록 해주는 맵 콘솔 및 사용 가능한 다양한 기능에 대해 알아봅니다.
feature: Publishing
role: User
exl-id: b273b1ae-fbb2-4b35-abce-0df78eeb2e11
source-git-commit: e14b19ff7c128899b4536d5b8c4290c476991bef
workflow-type: tm+mt
source-wordcount: '767'
ht-degree: 0%

---

# 맵 콘솔 개요

Adobe Experience Manager Guides은 모든 맵 관리 및 게시 작업을 간소화하기 위해 전용 콘솔(**맵 콘솔**)을 제공합니다. 이 중앙 집중식 인터페이스는 출력을 생성하고, 콘텐츠를 번역하고, 보고서에 액세스하는 등의 옵션을 한 곳에서 제공하여 맵 관련 활동의 생산성과 정확성을 향상시킵니다.

![파일 속성 옵션 탭](./images/map-console-screen.png){align="left"}

맵 콘솔 인터페이스는 주로 **탐색 모음** 및 **왼쪽 패널** 섹션으로 나뉩니다.

![새로 만들기](images/map-console-sections.png){align="left"}

- (**A**) **탐색 모음**: 탐색 모음은 탐색을 전환하고 페이지 보기를 조정하며 선택한 맵 파일의 이름을 표시하는 도구를 표시합니다.

  탐색 모음에서 사용할 수 있는 기능은 다음과 같이 설명되어 있습니다.

   - **탐색 전환기**: 다른 페이지(편집기 또는 홈 페이지)로 원활하게 탐색할 수 있습니다.
   - **선택한 맵 파일**: 현재 선택한 맵 파일의 이름을 표시합니다. 편집기에서 열거나 맵 콘솔에 대해 다른 맵 파일을 선택할 수 있습니다.
   - **추가 작업**: **Assets UI** 및 **Workspace 설정** 탐색 옵션을 제공합니다. 자세한 내용은 [탭 모음](./web-editor-tab-bar.md)을 참조하세요.

  >[!NOTE]
  >
  > 온-프레미스 설정에서 Adobe Experience Manager Guides을 사용하는 경우 Workspace 설정 옵션이 추가 작업 메뉴에 **설정**(으)로 계속 표시됩니다.

   - **보기 확장**: **확장** 아이콘을 사용하여 페이지 보기를 확장할 수 있습니다. 이 보기에서는 헤더 막대를 숨겨 콘텐츠 공간을 최대화합니다. 표준 보기로 돌아가려면 **확장된 보기로 끝내기** 아이콘을 사용합니다.

  >[!NOTE]
  >
  > Adobe Experience Manager Guides as a Cloud Service을 사용하는 경우 탐색 모음에 추가 기능 [AI Assistant](./ai-assistant.md)이(가) 표시됩니다.

- (**B**) **왼쪽 패널**: 왼쪽 패널을 사용하면 출력 생성, 보고서 생성 및 관리, 기준선, 조건 사전 설정, 콘텐츠 번역 및 Workfront(구성된 경우에만) 기능에 빠르게 액세스할 수 있습니다.

  자세한 내용은 아래의 [콘솔 기능 매핑](#map-console-features) 섹션을 참조하십시오.

## 콘솔 기능 매핑

다음 기능은 [맵 콘솔에서 DITA 맵 파일을 열 때](./open-files-map-console.md) 왼쪽 패널에서 사용할 수 있습니다.

**출력 생성**

맵 콘솔을 사용하면 AEM Sites, PDF, HTML5, EPUB, JSON 및 DITA-OT, 기본 PDF 게시 및 FMPS를 통한 사용자 지정 출력을 포함하여 다양한 형식의 출력을 효율적으로 생성할 수 있습니다. 전체 DITA 맵에 대한 출력을 생성하거나 업데이트한 몇 가지 주제만 선택적으로 게시할 수 있습니다. 베이스라인 게시 기능을 사용하여 특정 버전의 DITA 맵이나 주제를 선택적으로 게시할 수도 있습니다.

자세한 내용은 [출력 생성](./generate-output.md)을 참조하세요.

**보고서 만들기 및 관리**

조직 설정에서 기술 문서 작업을 시작하거나 문서를 라이브로 푸시하기 전에 기술 문서의 전체 완성도를 확인하려고 합니다. 이러한 요구는 다중 사용자 및 대규모 환경에서 더욱 필수적이 된다. 맵 콘솔을 사용하면 저장소에 있는 콘텐츠의 전반적인 상태와 설명서 프로세스에서 콘텐츠가 사용되는 방식에 대해 유용한 insight을 제공하는 Experience Manager Guides 보고서에 액세스할 수 있습니다.

자세한 내용은 [Experience Manager Guides의 보고서](./reports-intro.md)를 참조하세요.

**기준선**

Experience Manager Guides에서는 게시 또는 번역에 사용할 수 있는 주제 및 에셋의 버전을 만들 수 있는 기준선 기능을 제공합니다. 동일한 DITA 맵의 출력 사전 설정을 여러 개 병렬로 게시할 수도 있습니다.

[Experience Manager Guides에서 기준선을 만들고 관리하는 방법](./web-editor-baseline.md)을 알아보세요.

**조건 사전 설정**

Experience Manager Guides을 사용하면 DITA 주제에 속성을 정의하고 조건 사전 설정을 사용하여 최종 출력에서 속성이 발생하는 상황을 지정할 수 있습니다. 예를 들어 컨텐츠에 속성을 버전 1.0 및 버전 2.0으로 추가하고, 조건 사전 설정을 사용하여 릴리스 1.0의 버전 1.0을 포함하고 버전 2.0을 제외할 수 있습니다. 마찬가지로 속성에 OS Windows 및 OS Linux를 추가한 다음 운영 체제에 따라 최종 출력에 관련 컨텐츠를 포함하거나 제외할 수 있습니다.

[조건 사전 설정](./generate-output-use-condition-presets.md)에 대해 자세히 알아보세요.

**컨텐츠 번역**

Experience Manager Guides에는 콘텐츠를 여러 언어로 번역할 수 있는 강력한 기능이 포함되어 있습니다. Experience Manager Guides은 사람 번역 및 기계 번역 워크플로를 모두 지원합니다.

맵 콘솔에서 번역 워크플로를 시작하는 데 필요한 모든 옵션에 액세스할 수 있습니다. 자세한 내용은 [콘텐츠 번역](./translation.md)을 참조하세요.


**Workfront**

Workfront 기능은 Experience Manager Guides에서 바로 Adobe Workfront 작업으로 작업할 수 있는 맵 콘솔에도 있습니다.

Experience Manager Guides의 [Adobe Workfront 통합](./workfront-integration.md)에 대해 알아봅니다.

관리자가 Experience Manager Guides 인스턴스에 **Adobe Workfront** 통합을 구성한 경우에만 이 기능에 액세스할 수 있습니다.
