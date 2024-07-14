---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024.06.0 릴리스의 새로운 기능
description: Adobe Experience Manager Guides as a Cloud Service 2024.06.0 릴리스의 새로운 기능과 향상된 기능에 대해 알아보십시오.
exl-id: c885b8ba-5230-4d51-8f38-311b3a33fe0a
source-git-commit: d525775afeeb89754762ff514126b1c3a3307b3f
workflow-type: tm+mt
source-wordcount: '653'
ht-degree: 2%

---

# 2024.06.0 릴리스의 새로운 기능

이 문서에서는 Adobe Experience Manager Guides 2024.06.0 릴리스의 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [2024.06.0 릴리스에서 해결된 문제](fixed-issues-2024-06-0.md)를 확인하십시오.

[2024.06.0 릴리스의 업그레이드 지침](upgrade-instructions-2024-06-0.md)에 대해 알아봅니다.


## 주제 또는 해당 요소를 경험 조각에 Publish

경험 조각 은 콘텐츠와 레이아웃을 통합하는 Adobe Experience Manager 내의 모듈식 콘텐츠 단위입니다. 경험 조각은 일관되고 매력적인 경험을 만드는 데 중요하며, 이는 여러 채널에서 추가로 재사용할 수 있습니다.


이제 Experience Manager Guides을 사용하여 주제 또는 해당 요소를 경험 조각에 게시할 수 있습니다. 경험 조각의 주제와 해당 요소 간에 JSON 기반 매핑을 만들 수 있습니다. 예를 들어 브랜딩 요소, 프로모션 배너, 고객 추천 및 이벤트 프로모션을 사용하여 머리글이나 바닥글에 대한 경험 조각을 만들 수 있습니다.




자세한 내용은 [Publish 경험 조각](../user-guide/publish-experience-fragment.md)을 참조하세요.


## 콘텐츠 조각 게시의 개선 사항

Experience Manager Guides은 또한 콘텐츠 조각에 몇 가지 유용한 개선 사항을 제공합니다.

- DITAVAL 파일 또는 조건부 속성을 사용하여 콘텐츠 조각에 게시하는 동안 조건이 있는 콘텐츠를 쉽게 필터링할 수 있습니다.

- **파일 속성**&#x200B;의 **출력** 섹션에서 주제의 콘텐츠 조각을 게시하고 볼 수도 있습니다.

![파일 속성 옵션 탭](./assets/file-properties-outputs-tab.png){width="300" align="left"}

자세한 내용은 [Publish 콘텐츠 조각](../user-guide/publish-content-fragment.md)을 참조하세요.


## 주제 파일 속성의 메타데이터를 기본 PDF 출력으로 전달하는 기능

이제 Experience Manager Guides을 사용하여 기본 PDF 출력을 생성하는 동안 주제의 파일 속성에서 페이지 레이아웃에 메타데이터를 추가할 수 있습니다. 이 기능을 사용하여 제목, 태그 및 설명과 같은 주제별 메타데이터를 페이지 레이아웃에 추가할 수 있습니다. 주제의 문서 상태를 기반으로 주제의 배경에 워터마크를 추가하는 등, 주제의 메타데이터를 기반으로 게시된 PDF을 사용자 정의할 수도 있습니다.

![메타데이터 네이티브 pdf 추가](./assets/add-metadata-native-pdf.png) {width="300" align="left"}

*페이지 레이아웃의 필드에 메타데이터를 추가합니다.*

페이지 레이아웃에서 [필드 및 메타데이터를 추가](../native-pdf/design-page-layout.md#add-fields-metadata)하는 방법에 대해 알아봅니다.

## 작업을 위해 요소 간 부분 컨텐츠 선택

Experience Manager Guides은 웹 편집기의 요소에서 콘텐츠를 선택하는 경험을 향상시킵니다. 다양한 요소에서 콘텐츠를 쉽게 선택하고 굵게, 기울임꼴 및 밑줄 지정과 같은 작업을 수행할 수 있습니다. 이 기능을 사용하면 부분적으로 선택한 콘텐츠의 서식을 매끄럽게 적용하거나 제거할 수 있습니다. 여러 요소에서 선택한 콘텐츠를 빠르게 삭제할 수도 있습니다. 컨텐츠가 삭제되면 필요한 경우 나머지 컨텐츠는 유효한 단일 요소 아래에 자동으로 병합됩니다.

요소 간에 부분 콘텐츠를 선택한 다음 유효한 DITA 요소 아래에 콘텐츠를 둘러쌀 수도 있습니다.
![요소 서라운드 대화 상자](./assets/surround-element.png) {width="300" align="left"}

*선택한 컨텐츠를 유효한 요소로 둘러쌉니다.*

전반적으로 이러한 향상된 기능은 더 나은 환경을 제공하고 문서를 편집하는 동안 효율성을 개선하는 데 도움이 됩니다.

자세한 내용은 [요소 전체에서 일부 콘텐츠 선택](../user-guide/web-editor-edit-topics.md#partial-selection-of-content-across-elements)을 참조하세요.

## 기본 PDF 게시에서 Markdown 문서 지원

Experience Manager Guides은 기본 PDF 게시에서 Markdown 문서도 지원합니다. 이 기능은 편리하며 DITA 맵에서 Markdown 파일에 대한 PDF을 생성하는 데 도움이 됩니다. 기본 PDF 게시의 Markdown 지원을 통해 문서를 쉽게 만들고, 관리하고, 공유할 수 있습니다.

자세한 내용은 [Markdown 문서에 대한 지원](../web-editor/native-pdf-web-editor.md#support-for-markdown-documents)을 참조하세요.


## 대규모 번역 프로젝트를 위한 향상된 성능 및 확장성

번역 기능은 그 어느 때보다 빠르고 확장 가능합니다. 향상된 성능을 제공하는 새로운 아키텍처가 포함되어 있습니다. 프로젝트 제작 시간이 예전보다 빨라졌고 이 과정에서 발생하는 갈등도 거의 전무하다. 이렇게 향상된 성능을 통해 더 빠른 번역을 수행할 수 있으므로 대규모 번역 프로젝트에서도 원활하게 작업할 수 있습니다.

이 개선 사항은 생산성과 전반적인 경험을 향상시키므로 매우 유용합니다.

웹 편집기에서 문서를 [번역하는 방법](../user-guide/translate-documents-web-editor.md)에 대해 자세히 알아보세요.
