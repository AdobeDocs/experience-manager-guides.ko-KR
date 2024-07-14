---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 6월 릴리스
description: Adobe Experience Manager Guides as a Cloud Service 2023년 6월 릴리스의 새로운 기능과 향상된 기능에 대해 알아보십시오
exl-id: 625f9702-2b91-4622-9fec-282f47f1d7a6
feature: What's New
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1212'
ht-degree: 0%

---

# 2023년 6월 릴리스의 새로운 기능 Adobe Experience Manager Guides as a Cloud Service

이 문서에서는 2023년 6월 Adobe Experience Manager Guides 버전(*AEM Guides as a Cloud Service*)의 새로운 기능 및 향상된 기능을 다룹니다.

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023-6-0.md)를 참조하십시오.

## 웹 편집기의 끊어진 링크 보고서

AEM Guides을 사용하면 기술 문서의 전체 완성도를 확인하고 웹 편집기에서 보고서를 생성할 수 있습니다. 이제 2023년 6월 릴리스 AEM Guides에서는 끊어진 링크를 보고 수정하는 기능을 제공합니다. 끊어진 링크를 관리하는 데 도움이 되는 유용한 보고서입니다. DITA 맵에 있는 끊어진 링크를 쉽게 보고 수정할 수도 있습니다.
![](assets/broken-link-report.png){width="800" align="left"}

일단 링크를 수정하면 끊어진 링크 목록 아래에 링크가 표시되지 않습니다.

자세한 내용은 [끊어진 링크 보기 및 수정](../user-guide/reports-web-editor.md#report-broken-links)을 참조하세요.

## 저장소 보기 내에서 파일 이름 바꾸기 및 이동

이제 저장소 패널에서 파일 이름을 바꾸거나 파일을 이동할 수도 있습니다. 이 기능은 편리하고 저장소 패널에서 파일을 쉽게 관리하는 데 도움이 됩니다. 파일을 선택하고 선택한 파일의 **옵션** 메뉴를 사용하여 이름을 바꾸거나 이동할 수 있습니다. AEM Guides은 파일을 이동하거나 이름을 변경할 때 성공 메시지를 표시합니다.

![](assets/rename-move-assets.png){width="650" align="left"}

파일의 옵션 메뉴에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션에서 **저장소 보기** 기능 설명을 참조하십시오.

## 기본 PDF 개선 사항

### 초안 문서의 PDF 출력에 워터마크 추가

이제 승인되지 않은 문서의 PDF 출력에 워터마크를 추가할 수 있습니다. &#39;승인됨&#39; 문서 상태의 문서에 대한 PDF을 생성하는 경우에는 이 워터마크가 표시되지 않습니다. 예를 들어 PDF 출력에 대해 워터마크 초안 을 추가할 수 있습니다.

자세한 내용은 [초안 문서의 PDF 출력에 워터마크 추가](../native-pdf/use-javascript-content-style.md#watermark-draft-document)를 참조하십시오.

### 언어 변수 지원

AEM Guides은 언어 변수를 지원합니다. 언어 변수를 사용하여 Note, Caution 및 Warning과 같은 기본 제공 레이블이나 PDF 출력의 정적 텍스트의 지역화된 버전을 정의할 수 있습니다.
언어 변수 또는 현지화된 레이블 버전을 PDF 출력 및 출력 템플릿의 해당 섹션에 추가할 수 있습니다.

#### PDF 출력의 언어 변수

언어 변수를 사용하여 참고, 주의 및 경고와 같은 요소의 현지화된 레이블을 정의할 수 있습니다. 이러한 변수의 값을 하나 이상의 언어로 업데이트할 수 있으며 현지화된 값은 PDF 출력에서 자동으로 선택됩니다.
예를 들어 다음과 같은 방법으로 PDF 출력에 레이블 노트를 표시할 수 있습니다.

* 영어: 참고
* 프랑스어: Remarque
* 독일어: Hinweis

#### 출력 템플릿의 언어 변수

다양한 언어로 PDF 출력을 만들려면 각 언어에 대해 현지화된 텍스트가 포함된 다양한 PDF 템플릿을 만들어야 합니다. 이제 언어 변수 기능을 사용하면 템플릿을 한 번만 만들면 됩니다. 그런 다음 현지화해야 하는 정적 텍스트의 경우 해당 언어 변수를 만들어 템플릿에서 사용할 수 있습니다.
전체 문장이나 단락과 같이 긴 텍스트에 대한 언어 변수를 만들 수 있습니다. 스타일을 적용하고 HTML 마크업을 사용하여 이러한 언어 변수의 서식을 지정할 수도 있습니다.

자세한 내용은 [언어 변수 지원](../native-pdf/native-pdf-language-variables.md)을 참조하세요.

### PDF 레이아웃에서 AEM 메타데이터를 사용하는 기능

메타데이터는 콘텐츠에 대한 설명 또는 정의입니다. 이 메타데이터는 소스 DITA 맵 콘텐츠에 저장됩니다.

이제 AEM Guides에서 에셋의 메타데이터 속성을 선택하여 페이지 레이아웃에 추가할 수도 있습니다. 그런 다음 AEM Guides은 에셋의 이러한 메타데이터 속성을 선택하고 PDF 출력에 게시합니다.


![](assets/native-pdf-metadata-asset.png){width="550" align="left"}

>[!NOTE]
>
> AEM Guides은 DITA 맵에 대한 메타데이터 속성도 지원합니다.

자세한 내용은 [필드 및 메타데이터 추가](../native-pdf/design-page-layout.md#add-fields-metadata)를 참조하십시오.


## 향상된 스키마 기능

### Schematron에서 규칙을 확인하려면 보고서 문을 사용하십시오.

AEM Guides은 이제 Schematron을 사용하여 보고서 명령문도 지원합니다. 보고서 문은 테스트 문이 true로 평가될 때 메시지를 생성합니다. 예를 들어 간단한 설명이 150자 이하이도록 하려면 보고서 문을 정의하여 간단한 설명이 150자를 초과하는 항목을 확인할 수 있습니다.

자세한 내용은 [어설션 및 보고서 문을 사용하여 규칙 확인](../user-guide/support-schematron-file.md#schematron-assert-report)을 참조하십시오.

### 정규 표현식 사용

Regex 표현식을 사용하여 matches() 함수를 사용하는 규칙을 정의한 다음 Schematron 파일을 사용하여 유효성 검사를 수행할 수도 있습니다.

자세한 내용은 [정규 표현식 사용](../user-guide/support-schematron-file.md#schematron-assert-report)을 참조하세요.


### 추상 패턴 정의

AEM Guides은 Schematron의 추상적인 패턴도 지원합니다. 일반적인 추상 패턴을 정의하고 이러한 추상 패턴을 재사용할 수 있습니다. 추상 패턴을 통해 스키마 스키마를 단순화할 수 있으며 유효성 검사 논리를 관리하고 업데이트할 수도 있습니다.


자세한 내용은 [추상 패턴 정의](../user-guide/support-schematron-file.md#schematron-abstract-patterns)를 참조하십시오.

## 웹 편집기에서 AEM 홈 페이지로 이동

이제 웹 편집기에서 AEM 홈 페이지로 쉽게 이동할 수 있습니다.

![](assets/web-editor-launch-page.png){width="800" align="left"}

* AEM 탐색 페이지로 돌아가려면 **안내서** 아이콘(![](assets/aem-guides-icon.png))을 클릭하십시오.


자세한 내용은 [AEM 탐색 페이지](../user-guide/web-editor-launch-editor.md#id2056BG00RZJ)를 참조하십시오.

## 제목 정의 및 열거형의 계층 구조 정의 처리

AEM Guides에는 분류 체계 주제와 제어 값을 정의하는 데 사용되는 특수한 형식의 DITA 맵인 주제 체계 맵을 만드는 강력한 기능이 포함되어 있습니다. 이제 AEM Guides을 사용하여 맵에서 주제 정의를 정의하고 다른 맵에서 열거 정의를 정의할 수도 있습니다. 그런 다음 맵 참조를 추가하고 제목 체계를 사용할 수 있습니다.
주체 열거형 참조는 동일한 맵 또는 참조된 맵에서 확인됩니다.

제목 정의 및 열거형의 처리 계층적 정의에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션에서 **제목 구성표** 기능 설명을 참조하십시오.

## 번역에서 XLIFF 형식 지원

AEM Guides은 또한 번역에서 XML 로컬라이제이션 교환 파일 형식(XLIFF) 형식을 지원합니다. 이제 **새 XLIFF 번역 프로젝트를 만들기**하여 XML 콘텐츠를 XLIFF 형식으로 변환할 수도 있습니다.
이 형식을 사용하면 콘텐츠를 업계 표준 XLIFF 형식으로 내보낸 다음 번역 공급업체에 제공할 수 있습니다. 자세한 내용은 [번역 프로젝트 만들기](../user-guide/translate-documents-web-editor.md#create-translation-project)를 참조하십시오.

![](assets/translation-project-types.png){width="350" align="left"}



## 즐겨찾기 패널 개선

AEM Guides을 사용하면 파일 및 폴더의 컬렉션 또는 즐겨찾기 목록을 만들고 쉽게 사용할 수 있습니다. 이제 **즐겨찾기** 패널에서도 **옵션** 메뉴를 사용할 수 있습니다. 선택한 컬렉션의 이름을 바꾸거나 **옵션** 메뉴에서 삭제할 수 있습니다. **새로 고침** 옵션을 선택하여 저장소에서 파일이나 폴더의 새 목록을 가져올 수 있습니다. Assets UI에서 폴더 컨텐츠를 볼 수도 있습니다.

![](assets/favorites-options.png){width="650" align="left"}

>[!NOTE]
>
> 맨 위에 있는 **새로 고침** 아이콘을 사용하여 목록을 새로 고칠 수도 있습니다.

즐겨찾기 컬렉션의 **옵션** 메뉴에 대한 자세한 내용은 [왼쪽 패널](../user-guide/web-editor-features.md#id2051EA0M0HS) 섹션에서 **즐겨찾기** 기능 설명을 참조하십시오.

## 시스템 테마로 전환

이제 장치 테마를 사용할 수도 있습니다. **사용자 환경 설정**&#x200B;을 사용하면 장치의 테마를 기반으로 밝은 테마와 어두운 테마 간을 자동으로 전환하도록 AEM Guides을 구성할 수 있습니다.

![](assets/device-theme-user-preferences.png){width="550" align="left"}

자세한 내용은 [기본 도구 모음](../user-guide/web-editor-features.md#id2051EA0G05Z) 섹션에서 **사용자 환경 설정** 기능 설명을 참조하십시오.
