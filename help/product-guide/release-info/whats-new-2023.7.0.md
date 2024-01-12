---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 7월 릴리스
description: Adobe Experience Manager Guides as a Cloud Service으로 2023년 7월 릴리스의 새로운 기능과 향상된 기능을 알아보십시오
exl-id: 4b907729-4fbf-48ed-a2e1-014bd1101c73
feature: What's New
role: Leader
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '691'
ht-degree: 0%

---

# Adobe Experience Manager Guides as a Cloud Service의 2023년 7월 릴리스의 새로운 기능

이 문서에서는 Adobe Experience Manager 안내서 2023년 7월 버전(나중에 설명됨)의 새로운 기능 및 향상된 기능을 다룹니다 *AEM Guides as a Cloud Service*).

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023.7.0.md).

## 데이터 소스에 연결하고 주제에 데이터 삽입

이제 AEM Guides의 기본 제공 커넥터를 사용하여 데이터 소스에 신속하게 연결할 수 있습니다. 데이터 소스에 연결하면 정보를 소스와 계속 동기화할 수 있으며 데이터에 대한 모든 업데이트가 자동으로 반영되므로 AEM Guides가 진정한 콘텐츠 허브가 됩니다. 이 기능을 사용하면 데이터를 수동으로 추가하거나 복사하는 데 드는 시간과 노력을 절약할 수 있습니다.

이제 AEM Guides를 통해 관리자는 JIRA 및 SQL(MySQL, PostgreSQL, SQL Server, SQLite) 데이터베이스에 대한 기본 제공 커넥터를 구성할 수 있습니다. 기본 인터페이스를 확장하여 다른 커넥터를 추가할 수도 있습니다.

추가되면 아래에 나열된 구성된 커넥터를 볼 수 있습니다. **데이터 소스** 패널을 엽니다.

![](assets/code-snippet-generator.png){width="300" align="left"}

콘텐츠 조각 생성기를 만들어 연결된 데이터 소스에서 데이터를 가져올 수 있습니다. 그런 다음 주제에 데이터를 삽입하고 편집할 수 있습니다.

콘텐츠 조각 생성기를 만든 후에는 재사용하여 데이터를 모든 주제에 삽입할 수 있습니다. 자세한 내용은 [데이터 소스에서 콘텐츠 조각 삽입](../user-guide/web-editor-content-snippet.md).



## 검토 프로젝트 및 활성 검토 작업을 보여 주는 검토 패널

이제 AEM Guides를 통해 보다 원활하게 리뷰를 작성할 수 있습니다. 웹 편집기 내의 검토 패널을 제공합니다. 검토 패널에는 사용자가 속한 검토 프로젝트 내의 모든 검토 프로젝트 및 활성 검토 작업이 표시됩니다.

작성자는 이 기능을 사용하여 검토 작업을 쉽게 열고, 주석을 보고, 중앙 보기에서 신속하게 주석을 처리할 수 있습니다.
![](assets/active-review-task-comments.png){width="800" align="left"}
자세한 내용은 **리뷰** 내의 기능 설명 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션.


## 맵 컬렉션 개선 사항

맵 컬렉션은 여러 맵을 구성하고 일괄 게시하는 데 도움이 됩니다. 맵 컬렉션에 대한 많은 새로운 개선 사항이 생성되었습니다.

- 이제 기본 PDF 출력 사전 설정을 맵 컬렉션에 추가하고 이를 사용하여 PDF 출력을 생성할 수도 있습니다.
- 관리자가 만든 전역 및 폴더 프로필 사전 설정을 보고 이를 사용하여 PDF 출력을 생성할 수 있습니다.
- 이제 개별 사전 설정을 선택할 수 있을 뿐만 아니라 한 번에 DITA 맵에 대한 모든 폴더 프로필 사전 설정을 활성화할 수도 있습니다.
  ![](assets/edit-map-collection.png){width="800" align="left"}

자세한 내용은 [출력 생성을 위해 맵 컬렉션 사용](../user-guide/generate-output-use-map-collection-output-generation.md).

## 기본 PDF 출력을 생성하는 동안 임시 HTML 파일에 액세스할 수 있습니다.

이제 AEM Guides를 사용하여 기본 PDF 출력을 생성하는 동안 만든 임시 HTML 파일을 다운로드할 수 있습니다. 출력 사전 설정 설정에서 임시 파일을 다운로드하는 옵션을 선택합니다.  그런 다음 AEM Guides를 사용하면 해당 사전 설정을 사용하여 출력을 생성하는 동안 만든 임시 파일을 다운로드할 수 있습니다.

이 기능을 사용하면 중간 스타일 및 레이아웃에 액세스하여 생성 프로세스에 대한 통찰력을 향상시킬 수 있으며 요구 사항에 따라 CSS 스타일을 수정하거나 변경할 수 있습니다.

![](assets/native-pdf-advanced-settings.png){width="800" align="left"}

자세한 내용은 [PDF 출력 사전 설정 만들기](../web-editor/native-pdf-web-editor.md#create-output-preset).

## Microservice 기반 게시로 HTML 5 및 사용자 지정 출력 생성

새로운 게시 마이크로서비스를 사용하면 AEM Guides as a Cloud Service에서 대규모 게시 워크로드를 동시에 실행하고 업계 최고의 Adobe I/O Runtime 서버리스 플랫폼을 활용할 수 있습니다. 이제 마이크로서비스를 사용하여 HTML5와 사용자 지정 출력을 생성할 수도 있습니다.
여러 게시 요청을 실행하고 향상된 성능을 통해 이러한 출력 형식을 생성할 수 있습니다.
자세한 내용은 [AEM Guides as a Cloud Service에 대한 마이크로서비스 기반 게시 구성](../knowledge-base/publishing/configure-microservices.md).

## 정보 정보에서 AEM Guides 버전 세부 사항 보기

이제 AEM과 함께 **정보** AEM Guides 버전 세부 사항을 볼 수도 있습니다. 다음에서 현재 버전 세부 사항을 볼 수 있습니다. **정보** 옵션 **도움말** AEM 탐색 페이지에서 참조할 수 있습니다.

![](assets/about-aem-help.png)(width=&quot;800&quot; align=&quot;left&quot;)
