---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 10월 릴리스
description: Adobe Experience Manager Guidesas a Cloud Service 의 2023년 10월 릴리스의 새로운 기능과 향상된 기능에 대해 알아보십시오.
exl-id: 41bfed0d-5901-4ada-b6d7-a5be93b25ba8
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# 새로운 기능 2023년 10월 릴리스 Adobe Experience Manager Guides as a Cloud Service

이 문서에서는 2023년 10월 Adobe Experience Manager Guides 버전(*AEM Guides as a Cloud Service*)의 새로운 기능과 향상된 기능을 다룹니다.

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023-10-0.md)를 참조하십시오.


## 사용자 인터페이스에서 데이터 소스 커넥터 구성

Experience Manager Guides은 이제 데이터 소스에 대한 기본 제공 커넥터를 구성하는 데 도움이 되는 **데이터 소스** 도구를 제공합니다. JIRA, SQL(MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MariaDB, H2DB), AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 쉽게 만들 수 있습니다.

또한 데이터 소스 커넥터를 쉽게 편집, 재연결, 복제 또는 삭제할 수 있습니다. [사용자 인터페이스에서 데이터 원본 커넥터를 쉽게 구성](../cs-install-guide/conf-data-source-connector-tools.md)하는 방법을 알아봅니다.

![데이터 소스 패널에 나열된 데이터 소스 커넥터](assets/data-sources-create-window.png){width="550" align="left"}

*데이터 소스 패널에서 데이터 소스 커넥터를 만들고 봅니다.*

## 주제 생성기에 대한 로그 보기

이제 콘텐츠 생성 로그 파일을 볼 수도 있습니다. 이 로그 파일은 경고, 오류 및 예외를 확인하는 데 도움이 됩니다.  [주제 생성기의 옵션](../user-guide/web-editor-content-snippet.md#options-for-a-topic-generator)을 통해 주제 생성기를 쉽게 생성하고 관리하는 방법에 대해 자세히 알아보세요.

## 데이터 소스 템플릿에서 Velocity 도구 지원

이제 Experience Manager Guides 템플릿에서 Velocity 도구를 사용할 수 있습니다. 이러한 도구를 사용하면 데이터 소스에서 가져온 데이터에 다양한 함수를 적용할 수 있습니다. 콘텐츠 조각 또는 주제를 만드는 동안 템플릿을 사용할 수 있습니다. 이 기능을 사용하면 동일한 함수를 각 데이터 세트에 수동으로 적용하는 데 드는 시간과 노력을 절약할 수 있습니다.  또한 정확한 결과를 보장합니다.
예를 들어 $mathTool을 사용하여 수학 함수를 수행할 수 있습니다.
[데이터 원본 템플릿에서 Velocity 도구를 사용](../user-guide/web-editor-content-snippet.md#use-velocity-tools)하는 방법에 대해 자세히 알아보세요.


## 기본 PDF 개선 사항

2023년 10월 릴리스에서는 다음과 같은 네이티브 PDF 개선이 수행되었습니다.

### 레이아웃의 첫 번째 페이지에 대한 페이지 번호 재설정

기본 PDF 출력에서 페이지 번호를 다시 시작하고 번호 매기기가 시작되는 번호를 지정할 수 있습니다. 이제 섹션의 처음 발생 항목에 대해서만 번호 매기기를 시작할 수도 있습니다.
[페이지 레이아웃의 페이지 속성을 사용하여 작업](../native-pdf/design-page-layout.md#page-props-page-layout)하는 방법에 대해 자세히 알아보세요.


### 목차에서 자동 번호 없이 챕터 보기

Experience Manager Guides은 목차(TOC)에 챕터 이름과 함께 챕터 번호를 표시합니다. 이제 챕터 번호 없이 챕터 이름만 게시하도록 선택할 수 있습니다. 템플릿의 [고급 PDF 설정](../native-pdf/components-pdf-template.md#advanced-pdf-settings)을 구성하는 방법에 대한 자세한 내용을 살펴보십시오.

## 웹 편집기에서 맵 다운로드

이제 웹 편집기의 맵 보기에서 맵을 편집할 뿐만 아니라 다운로드할 수도 있습니다. 특정 기준선을 사용하여 맵을 다운로드할 수 있습니다. 계층을 병합하고 모든 파일과 폴더를 단일 폴더에 저장하는 옵션도 있습니다.

자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션 내의 **맵 보기** 기능 설명을 참조하십시오.

저장소 보기에 있는 파일의 ![옵션 메뉴](assets/options-menu-repo-view-file-level-2310.png){width="550" align="left"}

*저장소 보기에서 파일을 선택하고 해당 파일에 대한 작업을 수행할 옵션을 선택합니다.*

## Oxygen 커넥터 플러그인의 파일 편집

이제 Experience Manager Guides을 사용하여 웹 편집기에서 파일을 선택한 다음 Oxygen 커넥터 플러그인에서 파일을 편집하도록 선택할 수 있습니다. 이 옵션은 기본 지원의 일부로 활성화되지 않습니다.

자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션 내의 **파일에 대한 옵션** 기능 설명을 참조하십시오.
