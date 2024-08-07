---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 9월 릴리스
description: Adobe Experience Manager Guides as a Cloud Service 2023년 9월 릴리스의 새로운 기능과 향상된 기능에 대해 알아보십시오
exl-id: d185d27f-0cbb-4ec6-ac65-cb69f7572c3f
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1683'
ht-degree: 0%

---

# 새로운 기능 2023년 9월 릴리스 Adobe Experience Manager Guides as a Cloud Service

이 문서에서는 2023년 9월 Adobe Experience Manager Guides 버전(*AEM Guides as a Cloud Service*)의 새로운 기능 및 향상된 기능을 다룹니다.

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023-9-0.md)를 참조하십시오.

## 데이터 소스에 연결하고 항목을 삽입합니다.

AEM Guides은 데이터 소스와 연결하는 데 도움이 되는 기본 커넥터를 제공하므로 AEM Guides을 진정한 콘텐츠 허브로 만들 수 있습니다. 따라서 수동으로 데이터를 추가하거나 복제하는 데 소요되는 시간과 노력을 절약할 수 있습니다.

JIRA 및 SQL(MySQL, PostgreSQL, SQL Server, SQLite)과 같은 기존 기본 제공 커넥터와 함께 관리자는 MariaDB, H2DB, AdobeCommerce 및 Elasticsearch 데이터베이스에 대한 커넥터를 구성할 수도 있습니다. 기본 인터페이스를 확장하여 다른 커넥터를 추가할 수도 있습니다.

웹 편집기의 **데이터 원본** 패널에서 구성된 커넥터를 볼 수 있습니다.

<img src="assets/data-sources.png" alt="패널의 데이터 소스 목록" width="300">

*연결된 데이터 원본을 봅니다.*

이제 연결된 데이터 소스에서 주제를 만들 수도 있습니다. 주제에는 표, 목록, 단락 등 다양한 형식의 데이터가 포함될 수 있습니다. 또한 모든 주제에 대한 DITA 맵을 만들 수도 있습니다. 데이터 소스에서 가져올 때 메타데이터를 주제에 연결할 수 있습니다.

자세한 내용은 [데이터 원본의 데이터 사용](../user-guide/web-editor-content-snippet.md)을 참조하세요.

## 콘텐츠에 인용 부호 추가

인용은 콘텐츠에 추가된 정보 소스에 대한 참조입니다. 인용은 신뢰성 확립과 표절 예방에 도움이 된다. 인용문은 독자가 출처를 찾아 본문에 제시된 정보를 확인하는 데 도움이 된다.

AEM Guides에서 인용을 추가하거나 가져온 인용을 콘텐츠에 적용할 수 있습니다. 책, 웹 사이트 및 저널의 모든 소스에서 이러한 인용구를 추가할 수 있습니다.

주제에 인용구를 삽입한 후 웹 편집기에서 미리 볼 수 있습니다. 기본 PDF을 사용하여 인용이 있는 콘텐츠를 게시할 수도 있습니다.

![패널에 나열된 인용 항목](assets/citation-panel.png){width="300" align="left"}

*[인용] 패널에서 인용 목록을 봅니다.*

자세한 내용은 [콘텐츠의 인용 항목 추가 및 관리](../user-guide/web-editor-apply-citations.md)를 참조하십시오.


## 컨텐츠 조각으로 Publish

컨텐츠 조각은 AEM에서 개별 컨텐츠 조각입니다. 이는 콘텐츠 모델을 기반으로 하는 구조화된 콘텐츠입니다. 컨텐츠 조각은 디자인 또는 레이아웃 정보가 없는 순수 컨텐츠입니다. AEM이 지원하는 채널과 독립적으로 작성 및 관리할 수 있습니다. 컨텐츠 조각의 모듈화 및 재사용 가능성을 높여 유연성, 일관성, 효율성 및 관리 간소화가 실현됩니다.

이제 AEM Guides에서는 주제 또는 주제 내의 요소를 콘텐츠 조각에 게시하는 방법을 제공합니다. 주제와 콘텐츠 조각 모델 간에 JSON 기반 매핑을 만들 수 있습니다. 이 매핑을 사용하여 주제 내의 일부 또는 모든 요소에 있는 콘텐츠를 콘텐츠 조각에 게시합니다.

AEM Guides 및 컨텐츠 조각의 기능을 활용할 수 있고 모든 AEM 사이트에서 컨텐츠 조각을 사용할 수 있습니다. 콘텐츠 조각에서 지원하는 API를 통해 세부 정보를 추출할 수도 있습니다.

![콘텐츠 조각을 게시하는 옵션](assets/content-fragment-publish.png){width="550" align="left"}

*콘텐츠 조각에 대한 주제를 Publish합니다.*

자세한 내용은 콘텐츠 조각에 대한 [Publish](../user-guide//publish-content-fragment.md)을(를) 참조하십시오.

## 향상된 기능 검토

이제 AEM Guides은 다음 기능을 통해 향상된 검토 기능을 제공합니다.

### 검토 주제 검색

리뷰 수행은 AEM Guides의 중요한 기능입니다. 검토자가 할당된 문서를 검토하는 데 도움이 됩니다.
이제 검토 패널의 주제 보기 검색 막대에 제목 또는 파일 경로의 일부 텍스트를 입력하여 주제를 검색할 수 있습니다. 모든 항목을 보거나 주석을 달고 항목을 볼 수도 있습니다. 기본적으로 검토 작업에 있는 모든 주제를 볼 수 있습니다. 자세한 내용은 [항목 검토](../user-guide/review-topics.md)를 참조하세요.

![검토 항목 패널에서 검색](assets/review-search-topic.png){width="800" align="left"}

*검토 패널에서 검토 주제를 검색합니다.*



## Guides 확장 프레임워크

AEM Guides Extension Framework를 사용하여 확장성을 제공하는 AEM Guides 위에 사용자 지정 패키지를 만듭니다. 이러한 패키지는 개발자 및 컨설턴트에게 유용하며 편집기의 구성 요소에 대한 확장성을 제공합니다. 버튼, 대화 상자 및 드롭다운을 타겟팅하고 AEM Guides UI와 쉽게 상호 운용할 수 있는 사용자 지정 JavaScript을 추가할 수 있습니다.



## 기본 PDF 개선 사항

AEM Guides을 더 강력한 제품으로 만들기 위해 2023년 9월 릴리스에서 다음과 같은 네이티브 PDF 개선 사항이 수행되었습니다.



### PDF 출력에서 페이지 순서 지정

PDF에서 다음 섹션을 표시하거나 숨길 수 있으며 최종 PDF 출력에 표시될 순서를 정렬할 수도 있습니다.

* 목차
* 챕터 및 주제
* 숫자 목록
* 테이블 목록
* 색인
* 용어 설명
* 인용
* 페이지 레이아웃

PDF 출력에 특정 섹션을 표시하지 않으려면 전환 스위치를 끄면 이를 숨길 수 있습니다.

자세한 내용은 [페이지 순서](../native-pdf/components-pdf-template.md#page-order)를 참조하세요.

### 페이지 병합

기본적으로 기본 PDF 출력에서는 모든 섹션이 새 페이지에서 시작됩니다. 이제 섹션을 이전 페이지나 다음 페이지에 병합할 수 있습니다. 이렇게 하면 PDF 출력에서 선택한 페이지와 함께 섹션이 게시되며 그 사이에 페이지 분할이 없습니다.

자세한 내용은 [페이지 순서](../native-pdf/components-pdf-template.md#page-order) 섹션에서 **페이지 병합** 기능 설명을 참조하십시오.

### 현재 페이지에서 챕터 시작

홀수 또는 짝수 페이지인 목차 구조에서 장을 시작하기 위한 기본 구성 설정을 설정하고 목차 항목의 지시선 형식을 정의할 수 있습니다.

이제 현재 페이지에서 챕터를 시작할 수도 있습니다. 이렇게 하면 모든 챕터가 페이지 나누기 없이 계속 게시됩니다. 예를 들어 한 챕터가 15페이지의 중간에 종료되면 다음 챕터도 15페이지 자체부터 시작됩니다.

자세한 내용은 [고급 PDF 설정](../native-pdf/components-pdf-template.md#advanced-pdf-settings-advanced-pdf-settings)에서 **일반** 탭 설명을 참조하십시오.

### 정적 페이지

사용자 지정 페이지 레이아웃을 만들고 PDF 출력에 정적 페이지로 게시할 수도 있습니다. 이렇게 하면 메모 또는 빈 페이지와 같은 정적 콘텐츠를 추가하는 데 도움이 됩니다.

자세한 내용은 [페이지 순서](../native-pdf/components-pdf-template.md#page-order) 섹션에서 **정적 페이지** 기능 설명을 참조하십시오.


### 상호 참조의 변수

변수를 사용하여 상호 참조를 정의할 수 있습니다. 변수를 사용하는 경우 속성에서 해당 값이 선택됩니다.

이제 {figure} 및 {table}도 사용할 수 있습니다.
그림 번호에 상호 참조를 추가하려면 {figure}을(를) 사용하십시오. 그림에 대해 정의한 자동 번호 스타일에서 숫자 번호가 선택됩니다.

테이블 번호에 상호 참조를 추가하려면 {table}을(를) 사용합니다. 캡션을 위해 정의한 자동 번호 스타일에서 테이블 번호를 선택합니다.

자세한 내용은 [상호 참조](../native-pdf/components-pdf-template.md##cross-references)를 참조하십시오.



### CSS 편집기 재디자인

이제 CSS 편집기가 선택기 및 스타일 속성을 사용하여 더 나은 사용자 경험을 제공하도록 다시 디자인되었습니다.

#### 스타일 추가 대화 상자의 개선 사항

이제 사용자 지정 선택기를 사용하여 복잡한 스타일을 추가할 수 있습니다. 새 선택기 필드를 사용하면 Class, Tag 및 Pseudo Class 조합 외에 사용자 지정 선택기를 추가할 수 있습니다. 예를들어 표 내의 모든 하이퍼링크에 대해 `table a.link` 스타일을 만들 수 있습니다.

![기본 pdf 템플릿에서 스타일 추가](assets/add-styles-native-pdf.png){width="300" align="left"}

*새 스타일에 대한 세부 정보를 추가합니다.*

#### 스타일 속성 맞춤화

이제 AEM Guides에서는 스타일에 대한 미리 보기 섹션 아래에 새 속성 패널을 도입했습니다. [속성] 패널에서 스타일의 속성을 보다 효율적이고 빠르게 편집할 수 있습니다.


## 단일 열거형 정의에서 여러 주제 정의 지원

이제 한 맵에서 하나 이상의 주제 정의를 정의하고 다른 맵에서 열거 정의를 정의한 다음 맵 참조를 추가할 수 있습니다. 주체 열거형 참조는 동일한 맵 또는 참조된 맵에서 확인됩니다.

이제 조건을 정의하고 항목의 일부 특정 요소에 적용할 수도 있습니다.  조건은 특정 요소에만 표시되며 다른 모든 요소에는 표시되지 않습니다.

제목 정의 및 열거형의 계층적 정의 처리에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션에서 제목 구성표 기능 설명을 참조하십시오.





## 맵 컬렉션의 모든 사전 설정 선택

개별 사전 설정과 모든 폴더 프로필 사전 설정을 활성화할 수 있을 뿐만 아니라 한 번에 DITA 맵에 대한 모든 사전 설정을 활성화할 수도 있습니다.
![맵 컬렉션 편집](assets/edit-map-collection-cs.png){width="800" align="left"}\
*맵 컬렉션의 모든 사전 설정을 선택합니다.*

자세한 내용은 [출력 생성을 위해 맵 컬렉션 사용](../user-guide/generate-output-use-map-collection-output-generation.md)을 참조하세요.


## 벌크 Publish 대시보드의 기본 PDF 지원


AEM Guides의 벌크 활성화 기능을 사용하면 작성에서 게시 인스턴스로 콘텐츠를 빠르고 쉽게 활성화할 수 있습니다. 벌크 활성화 맵에는 기본 PDF 출력 사전 설정, AEM 사이트, PDF, HTML 5, 사용자 지정 및 JSON 출력을 포함할 수 있습니다.
자세한 내용은 [게시된 콘텐츠의 일괄 활성화](../user-guide/conf-bulk-activation.md)를 참조하세요.

## 향상된 일괄 이동 도구

이제 관리자는 개선된 벌크 이동 도구를 사용하여 여러 파일이 있는 폴더를 한 위치에서 다른 위치로 이동할 수 있습니다.
파일 찾아보기 대화 상자를 사용하여 이동할 소스 폴더를 선택할 수 있습니다. 소스 폴더를 이동할 대상 위치를 찾아 선택할 수도 있습니다. 자세한 내용을 보려면 필드 근처에서 ![정보 아이콘](assets/info-icon.svg) {width="25" align="left"}을(를) 선택하십시오.

자세한 내용은 [파일을 일괄적으로 이동](../user-guide/authoring-file-management.md#move-files-bulk)하세요.


## 컨텍스트 메뉴에서 향상된 미리보기 환경

컨텍스트 메뉴를 사용하여 파일(.dita, .xml, 오디오, 비디오 또는 이미지)을 열지 않고 빠르게 미리 볼 수 있습니다. 이제 미리 보기 창의 크기를 조정할 수 있으며, 콘텐츠에 참조 링크가 포함되어 있으면 이를 선택하여 새 탭에서 열 수 있습니다.

![미리 보기 창 ](assets/quick-preview_cs.png){width="800" align="left"}

*창에서 파일을 미리 봅니다.*

컨텍스트 메뉴에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션에서 **파일에 대한 옵션** 기능 설명을 참조하십시오.


## 대상 경로, 사이트 이름 또는 파일 이름 옵션에서 현재 날짜 및 시간에 대한 변수 사용

AEM 사이트 또는 PDF에서 출력을 생성하는 동안 **대상 경로**, **사이트 이름** 또는 **파일 이름** 옵션을 설정하는 데 변수를 사용할 수 있습니다. 이제 `${system_date}` 및 `${system_time}` 변수도 사용할 수 있습니다. 이러한 변수는 현재 날짜 및 시간을 이러한 옵션에 추가하는 데 도움이 됩니다.

[대상 경로, 사이트 이름 또는 파일 이름 옵션을 설정하는 변수를 사용하는 방법](../user-guide/generate-output-use-variables.md)을 알아보세요.
