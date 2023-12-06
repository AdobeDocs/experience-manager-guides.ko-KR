---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.3.1 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 4.3.1 릴리스의 새로운 기능과 향상된 기능에 대해 알아봅니다
exl-id: 14db7453-ccc1-4709-903f-677f55c263b2
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '1127'
ht-degree: 0%

---

# Adobe Experience Manager Guides 4.3.1 릴리스의 새로운 기능 (2023년 10월)

이 문서에서는 Adobe Experience Manager Guides 버전 4.3.1(이후 설명됨)의 새로운 기능 및 향상된 기능을 다룹니다. *Experience Manager 가이드*).

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](./release-notes-4.3.1.md).

## 데이터 소스에 연결하고 항목을 삽입합니다.

Experience Manager 안내서는 데이터 소스와 연결하는 데 도움이 되는 기본 커넥터를 제공하므로 Experience Manager 안내서를 진정한 콘텐츠 허브로 만들 수 있습니다. 따라서 수동으로 데이터를 추가하거나 복제하는 데 소요되는 시간과 노력을 절약할 수 있습니다.

JIRA 및 SQL(MySQL, PostgreSQL, SQL Server, SQLite)과 같은 기존 기본 제공 커넥터와 함께 관리자는 MariaDB, H2DB, AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 구성할 수도 있습니다. 기본 인터페이스를 확장하여 다른 커넥터를 추가할 수도 있습니다.

아래에서 구성된 커넥터를 볼 수 있습니다. **데이터 소스** 패널을 엽니다.

<img src="assets/data-sources.png" alt="패널의 데이터 소스 목록" width="300">

*연결된 데이터 소스를 봅니다.*

이제 연결된 데이터 소스에서 주제를 만들 수도 있습니다. 주제에는 표, 목록, 단락 등 다양한 형식의 데이터가 포함될 수 있습니다. 또한 모든 주제에 대한 DITA 맵을 만들 수도 있습니다. 데이터 소스에서 가져올 때 메타데이터를 주제에 연결할 수 있습니다.

자세한 내용은 [데이터 소스의 데이터 사용](../user-guide/web-editor-content-snippet.md).

## 사용자 인터페이스에서 데이터 소스 커넥터 구성

Experience Manager 가이드는 이제 **데이터 소스** 데이터 소스에 대한 기본 제공 커넥터를 구성하는 데 도움이 되는 도구입니다. JIRA, SQL(MySQL, PostgreSQL, Microsoft SQL Server, SQLite, MariaDB, H2DB), AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 쉽게 만들 수 있습니다.

또한 데이터 소스 커넥터를 쉽게 편집, 재연결, 복제 또는 삭제할 수 있습니다. 방법 자세히 알아보기 [사용자 인터페이스에서 데이터 소스 커넥터를 쉽게 구성할 수 있습니다](../install-guide/conf-data-source-connector-tools.md).

![데이터 소스 패널에 나열된 데이터 소스 커넥터](assets/data-sources-create-window.png){width="550" align="left"}

*데이터 소스 패널에서 데이터 소스 커넥터를 만들고 볼 수 있습니다.*

## 주제 생성기에 대한 로그 보기

이제 콘텐츠 생성 로그 파일을 볼 수도 있습니다. 이 로그 파일은 경고, 오류 및 예외를 확인하는 데 도움이 됩니다.  에 대해 자세히 알아보기 [주제 생성기 옵션](../user-guide/web-editor-content-snippet.md#options-for-a-topic-generator) 손쉽게 항목 생성기를 생성하고 관리할 수 있습니다.

## 데이터 소스 템플릿에서 Velocity 도구 지원

이제 Experience Manager 안내선 템플릿에서 속도 도구를 사용할 수 있습니다. 이러한 도구를 사용하면 데이터 소스에서 가져온 데이터에 다양한 함수를 적용할 수 있습니다. 콘텐츠 조각 또는 주제를 만드는 동안 템플릿을 사용할 수 있습니다. 이 기능을 사용하면 동일한 함수를 각 데이터 세트에 수동으로 적용하는 데 드는 시간과 노력을 절약할 수 있습니다.  또한 정확한 결과를 보장합니다.
예를 들어 $mathTool을 사용하여 수학 함수를 수행할 수 있습니다.
방법 자세히 알아보기 [데이터 소스 템플릿에서 Velocity 도구 사용](../user-guide/web-editor-content-snippet.md#use-velocity-tools).


## 기본 PDF 개선 사항

2023년 10월 릴리스에서는 다음과 같은 네이티브 PDF 개선이 수행되었습니다.

### 레이아웃의 첫 번째 페이지에 대한 페이지 번호 재설정

기본 PDF 출력에서 페이지 번호를 다시 시작하고 번호 매기기가 시작되는 번호를 지정할 수 있습니다. 이제 섹션의 처음 발생 항목에 대해서만 번호 매기기를 시작할 수도 있습니다.
방법 자세히 알아보기 [페이지 레이아웃의 페이지 속성을 사용하여 작업](../native-pdf/design-page-layout.md#page-props-page-layout).


### 목차에서 자동 번호 없이 챕터 보기

Experience Manager 안내서에는 목차(TOC)의 장 이름과 함께 장 번호가 표시됩니다. 이제 챕터 번호 없이 챕터 이름만 게시하도록 선택할 수 있습니다. 구성 방법에 대한 자세한 내용 보기 [템플릿의 고급 PDF 설정](../native-pdf/components-pdf-template.md#advanced-pdf-settings).

## 웹 편집기에서 맵 다운로드

이제 웹 편집기의 맵 보기에서 맵을 편집할 뿐만 아니라 다운로드할 수도 있습니다. 특정 기준선을 사용하여 맵을 다운로드할 수 있습니다. 계층을 병합하고 모든 파일과 폴더를 단일 폴더에 저장하는 옵션도 있습니다.

자세한 내용은 **맵 보기** 내의 기능 설명 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션.

![저장소 보기에 있는 파일의 옵션 메뉴](assets/options-menu-repo-view-file-level-2310.png){width="550" align="left"}

*저장소 보기에서 파일을 선택하고 옵션을 선택하여 파일에 대한 작업을 수행합니다.*


## 단일 열거형 정의에서 여러 주제 정의 지원

이제 한 맵에서 하나 이상의 주제 정의를 정의하고 다른 맵에서 열거 정의를 정의한 다음 맵 참조를 추가할 수 있습니다. 주체 열거형 참조는 동일한 맵 또는 참조된 맵에서 확인됩니다.

이제 조건을 정의하고 항목의 일부 특정 요소에 적용할 수도 있습니다.  조건은 특정 요소에만 표시되며 다른 모든 요소에는 표시되지 않습니다.

제목 정의 및 열거형의 처리 계층 정의에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션.




## 컨텍스트 메뉴에서 향상된 미리보기 환경

컨텍스트 메뉴를 사용하여 파일(.dita, .xml, 오디오, 비디오 또는 이미지)을 열지 않고 빠르게 미리 볼 수 있습니다. 이제 미리 보기 창의 크기를 조정할 수 있으며, 콘텐츠에 참조 링크가 포함되어 있으면 이를 선택하여 새 탭에서 열 수 있습니다.

![미리 보기 창 ](assets/quick-preview_cs.png){width="800" align="left"}

*창에서 파일을 미리 봅니다.*

컨텍스트 메뉴에 대한 자세한 내용은 **파일 옵션** 의 기능 설명 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션.

## Oxygen 커넥터 플러그인의 파일 편집

이제 Experience Manager 안내서를 사용하여 웹 편집기에서 파일을 선택한 다음 Oxygen 커넥터 플러그인에서 파일을 편집하도록 선택할 수 있습니다. 이 옵션은 기본 지원의 일부로 활성화되지 않습니다.

자세한 내용은 **파일 옵션** 내의 기능 설명 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션.

## 대상 경로, 사이트 이름 또는 파일 이름 옵션에서 현재 날짜 및 시간에 대한 변수 사용

AEM 사이트 또는 PDF에서 출력을 생성하는 동안 변수를 사용하여 **대상 경로**, **사이트 이름**, 또는 **파일 이름** 옵션. 이제 를 사용할 수도 있습니다 `${system_date}`및 `${system_time}` 변수를 채우는 방법에 따라 페이지를 순서대로 표시합니다. 이러한 변수는 현재 날짜 및 시간을 이러한 옵션에 추가하는 데 도움이 됩니다.

방법 알아보기 [대상 경로, 사이트 이름 또는 파일 이름 옵션 설정에 변수 사용](../user-guide/generate-output-use-variables.md).


## 웹 편집기에서 커서를 이동하는 키보드 단축키

이제 Experience Manager 안내서를 사용하여 키보드 단축키를 사용하여 웹 편집기에서 커서를 이동할 수도 있습니다. 키보드 단축키를 사용하여 한 단어를 왼쪽 또는 오른쪽으로 빠르게 이동할 수 있습니다. 키보드 단축키를 사용하여 줄의 시작 또는 끝으로 이동할 수도 있습니다.

에 대해 자세히 알아보기 [웹 편집기의 키보드 단축키](../user-guide/web-editor-keyboard-shortcuts.md).
