---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 12월 릴리스
description: Adobe Experience Manager Guidesas a Cloud Service 의 2023년 12월 릴리스의 새로운 기능과 향상된 기능에 대해 알아보십시오.
feature: What's New
role: Leader
exl-id: bf8d98e9-97fe-4195-9286-60d8517ab19c
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '966'
ht-degree: 0%

---

# Adobe Experience Manager Guidesas a Cloud Service 의 2023년 12월 릴리스의 새로운 기능

이 문서에서는 2023년 12월 Adobe Experience Manager Guides 버전(*Experience Manager Guides as a Cloud Service*)의 새로운 기능과 향상된 기능을 다룹니다.

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023-12-0.md)를 참조하세요.


## PDF 출력에서 변수 사용

변수를 사용하여 재사용 가능한 정보를 동적으로 삽입하고 관리할 수 있습니다. Experience Manager Guides을 사용하면 PDF 출력을 생성하는 동안 변수를 만들고, 편집하고, 미리 볼 수 있습니다. 변수의 값을 빠르게 수정하고 문서를 휴대하고 쉽게 업데이트할 수 있습니다.

![네이티브 pdf 변수](assets/add-variable-default.png){width="800" align="left"}

*웹 편집기에서 변수를 만들고 관리합니다.*

기본값을 재정의하는 변수 세트를 만들고 변수에 대체 값을 할당할 수도 있습니다. 이러한 변수를 페이지 레이아웃에 삽입하고 동일한 PDF 레이아웃을 사용합니다. 모든 값 세트에 대해 별도의 레이아웃을 만들 필요가 없습니다. 예를 들어 각 제품 릴리스에 대해 변수 세트를 만들 수 있습니다. 이 변수 세트는 제품 이름, 버전 번호 및 릴리스 날짜와 같은 다양한 제품 세부 사항에 대한 변수로 구성될 수 있습니다. 그런 다음 이러한 변수에 대해 다른 값을 추가할 수 있습니다.

**변수 집합 1: Adobe 집합1**

* 제품 이름: Experience Manager Guides
* 버전 번호: 2311
* 릴리스 날짜: 2023/11/02

**변수 집합 2: Adobe 집합2**

* 제품 이름: Experience Manager Guides
* 버전 번호: 2310
* 릴리스 날짜: 2023/09/27



<img src="./assets/native-pdf-variable-output.png" alt="PDF 출력의 바닥글" width="500" border="2px">

*PDF 레이아웃에서 변수를 사용하여 PDF 출력을 생성합니다.*

스타일을 적용하고 HTML 마크업을 사용하여 변수의 서식을 지정할 수 있습니다.  필요할 때마다 변수의 값을 빠르게 업데이트하고 출력을 재생성할 수도 있습니다. 예를 들어 버전에 대한 세부 정보를 업데이트해야 하는 경우 VersionNumber 변수에서 버전 값을 편집하고 출력을 재생성할 수 있습니다.


PDF 출력[&#128279;](../native-pdf/native-pdf-variables.md)에서 변수를 사용하는 방법에 대해 자세히 알아보세요.





## 속성 편집을 위한 경험 개선

이제 웹 편집기의 **콘텐츠 속성** 패널에서 요소의 특성을 추가하거나 편집할 수 있는 개선된 경험이 제공됩니다.

![특성 패널](assets/attributes-multiple-properties.png){width="300" align="left"}

*콘텐츠 속성 패널에서 특성을 추가합니다.*

속성을 쉽게 편집하고 삭제할 수도 있습니다.

자세한 내용은 [오른쪽 패널](../user-guide/web-editor-features.md#id2051EB003YK) 섹션의 **콘텐츠 속성** 기능 설명을 참조하십시오.


## 작성 중 메타데이터 편집

이제 작성하는 동안 오른쪽 패널의 **파일 속성**&#x200B;에서 드롭다운을 사용하여 파일 메타데이터 태그를 업데이트할 수 있습니다. **속성을 더 편집**&#x200B;하여 더 많은 메타데이터를 업데이트할 수도 있습니다.

![파일 속성](assets/file-properties-general.png){width="300" align="left"}

*오른쪽 패널에서 메타데이터를 업데이트하고 파일 속성을 편집합니다.*

자세한 내용은 [오른쪽 패널](../user-guide/web-editor-features.md#id2051EB003YK) 섹션의 **파일 속성** 기능 설명을 참조하십시오.

## ServiceNow 기술 자료에 콘텐츠를 게시하는 기능

이제 콘텐츠를 ServiceNow 기술 자료 플랫폼에 게시할 수도 있습니다.

2023년 12월 릴리스에서는 관리자로서 ServiceNow 기술 자료 서버에 대한 게시 프로필을 만들 수 있습니다. 그런 다음 작성자 또는 게시자는 ServiceNow 게시 프로필을 출력 사전 설정에 선택하여 출력을 지정된 기술 자료에 게시할 수 있습니다.

이 기능을 사용하면 텍스트, 비디오 및 이미지와 같은 콘텐츠를 ServiceNow 기술 자료 플랫폼에 게시하고 포괄적인 저장소를 유지 관리할 수 있습니다.


![서비스 지금 기술 자료 사전 설정](assets/knowledgebase--output-preset.png){width="300" align="left"}

*ServiceNow 기술 자료에 대한 출력 사전 설정을 만듭니다.*

[기술 자료](../user-guide/generate-output-knowledge-base.md) 출력 사전 설정에 대해 자세히 알아보세요.

## 향상된 맵 컬렉션 대시보드

Experience Manager Guides은 향상된 맵 컬렉션 대시보드를 제공합니다. 맵 컬렉션에서 DITA 맵에 대한 메타데이터 속성을 대량으로 빠르게 구성할 수 있습니다. 이 기능은 각 DITA 맵에 대한 메타데이터 속성을 개별적으로 업데이트할 필요가 없으므로 편리합니다.

이제 DITA 맵의 파일 이름을 볼 수 있습니다. 기준선을 볼 수도 있습니다. 사전 설정에 사용되는 기준선을 빠르게 찾을 수 있습니다.

![맵 컬렉션 대시보드](assets/map-collection-dashboard.png){width="800" align="left"}

*맵 컬렉션 대시보드에서 출력을 보고 편집하고 생성합니다.*

[출력 생성을 위해 맵 컬렉션을 사용](../user-guide/generate-output-use-map-collection-output-generation.md)하는 방법에 대해 알아봅니다.

## 맵 보기에서 주요 속성 보기

주제 또는 맵 참조에 대한 키 속성을 정의하면 왼쪽 패널에서 제목, 해당 아이콘 및 키를 볼 수도 있습니다. 키가 `key=<key-name>`(으)로 표시됩니다.

자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션의 **맵 보기** 기능 설명을 참조하십시오.

맵 보기의 ![키](assets/view-key-title-map-view.png) {width="300" align="left"}

*맵 보기에서 키 특성을 봅니다.*

## 레이블을 기반으로 기준선을 복제하는 기능

이제 Experience Manager Guides에서는 웹 편집기에서 기준선을 만들 수 있는 향상된 사용자 환경을 제공합니다.\
![새 기준선 만들기](assets/create-new-baseline.png) {width="300" align="left"}
*웹 편집기에서 기준선을 만듭니다.*

또한 레이블을 기반으로 기준선을 복제할 수도 있습니다. 참조 버전은 복제하는 동안 지정된 레이블(있는 경우)을 기반으로 선택되거나, 복제된 기준선에서 버전을 선택합니다.


![기준선 ](assets/duplicate-baseline.png) {width="300" align="left"}을(를) 복제합니다.

*레이블을 기반으로 기준선을 복제하거나 정확한 복사본을 만듭니다.*

[웹 편집기에서 기준선을 만들고 관리하는 방법](../user-guide/web-editor-baseline.md)에 대해 자세히 알아보세요.

## AEM Site 출력에서 교차 맵 링크 해결

AEM Site 출력에서 렌더링되는 교차 맵 링크(범위 피어가 있는 XREF)는 이제 생성된 맵에 대해 설정된 게시 컨텍스트의 파일 제목에 따라 확인됩니다.


## 문서 제목을 사용하도록 AEM 사이트 출력의 URL을 구성합니다.

Experience Manager Guides을 사용하면 관리자가 AEM Site 출력의 URL을 구성할 수 있습니다. 파일 이름이 존재하지 않거나 모든 특수 문자를 포함하는 경우 AEM Site 출력의 URL에서 구분 기호로 대체하도록 을 구성할 수 있습니다. 첫 번째 하위 주제의 이름으로 바꿀 수도 있습니다. [문서 제목을 사용하도록 AEM 사이트 출력의 URL을 구성하는 방법](../cs-install-guide/conf-output-generation.md#configure-the-url-of-the-aem-site-output-to-use-the-document-title)을 알아봅니다.
