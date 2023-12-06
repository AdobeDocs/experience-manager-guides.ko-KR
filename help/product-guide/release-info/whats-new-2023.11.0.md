---
title: 릴리스 정보 | Adobe Experience Manager Guides의 새로운 기능, 2023년 11월 릴리스
description: Adobe Experience Manager Guides as a Cloud Service으로 2023년 11월 릴리스의 새로운 기능과 향상된 기능을 알아보십시오.
exl-id: 83c04e01-92f1-41b0-8866-a202f4106b51
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '803'
ht-degree: 0%

---

# Adobe Experience Manager Guides as a Cloud Service의 2023년 11월 릴리스의 새로운 기능

이 문서에서는 Adobe Experience Manager 안내서 2023년 11월 버전(나중에 설명됨)의 새로운 기능 및 향상된 기능을 다룹니다 *Experience Manager 가이드 as a Cloud Service*).

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 수정된 문제에 대한 자세한 내용은 을 참조하십시오. [릴리스 정보](release-notes-2023.11.0.md).

## 기본 PDF 개선 사항

2023년 11월 릴리스에서는 다음과 같은 네이티브 PDF 개선이 수행되었습니다.

### 기본 제공 PDF 템플릿 사용 및 복제

Experience Manager 가이드는 기본 제공 또는 팩토리 PDF 템플릿을 제공합니다. 팩토리 PDF 템플릿을 복제하여 사용자 지정 PDF 템플릿을 만듭니다.

이제 템플릿을 만들고 복제하는 동안 템플릿에 대한 썸네일 이미지를 미리 볼 수도 있습니다. 이 이미지를 편집하거나 삭제할 수도 있습니다. 이 기능은 유사한 이름의 템플릿을 브랜딩하거나 구별하는 데 유용합니다.
에 대해 자세히 알아보기 [PDF 템플릿](../native-pdf/pdf-template.md).

![중복 PDF 템플릿 대화 상자](assets/duplicate-template.png){width="550" align="left"}

*기존 PDF 템플릿을 복제합니다.*


### 페이지 순서 변경 및 시트당 여러 페이지 게시

소스 문서에 따라 페이지를 게시하는 것 외에도 여러 페이지로 된 문서를 게시하는 동안 PDF에서 페이지 순서를 변경할 수도 있습니다.  따라서 모든 홀수 페이지 또는 모든 짝수 페이지를 먼저 포함하여 다양한 순서로 페이지를 게시할 수 있는 유연성을 제공합니다. 책자로 발간하여 책처럼 페이지를 읽을 수도 있다. 한 장에 게시할 페이지 수를 결정할 수도 있습니다. 자세한 내용은 [페이지 구성](../native-pdf/components-pdf-template.md#page-organization) 섹션.

### 정렬 키를 기준으로 용어집 용어 정렬

이제 정렬 키를 기준으로 용어집 용어를 정렬할 수도 있습니다. &#39;sort-as&#39; 태그를 사용하여 용어집 용어에 대한 정렬 키를 정의할 수 있습니다. 그런 다음 용어 대신 정렬 키를 기준으로 정렬할 수 있습니다. 이렇게 하면 다른 언어로 사용되는 용어에 따라 용어집 용어를 정렬할 수 있습니다. 구문 또는 단어 그룹이 있는 용어집에 대해 단일 정렬 키를 정의할 수도 있습니다.
자세한 내용은 [고급 PDF 설정](../native-pdf/components-pdf-template.md#advanced-pdf-settings).


### 기본 PDF 템플릿에 대한 리소스 관리 개선

Experience Manager 가이드는 이제 기본 PDF 템플릿에 대한 리소스 관리를 개선했습니다. 이제 여러 기본 PDF 템플릿에서 이미지, CSS 파일 및 글꼴 파일과 같은 리소스를 공유하고 재사용할 수 있습니다. 이러한 향상된 기능을 통해 대규모 템플릿 세트에 대한 리소스를 훨씬 간편하게 관리할 수 있습니다. 각 템플릿에 대해 중복 리소스를 만들 필요가 없으며, 이러한 리소스를 공유 폴더에 보관하고 모든 기본 PDF 템플릿에서 사용할 수 있습니다.
자세한 내용은 [PDF 템플릿](../native-pdf/pdf-template.md).

## 웹 편집기 개선 사항

2023년 11월 릴리스에서는 다음과 같은 웹 편집기의 개선이 이루어졌습니다.


### 제목 또는 파일 이름별로 파일 보기

이제 웹 편집기에서 파일을 보는 기본 방법을 선택할 수 있습니다. 작성자 보기의 여러 패널에서 제목 또는 파일 이름별로 파일 목록을 볼 수 있습니다.

![사용자 환경 설정 대화 상자](assets/user-preferences-2311.png){width="550" align="left"}

*에서 파일을 보는 기본 방법 변경&#x200B;**사용자 환경 설정**대화 상자.*


### 조건 사전 설정 관리

DITA 주제에서 조건 속성을 정의할 수 있습니다. 그런 다음 조건 사전 설정에서 조건 속성을 사용하여 DITA 맵의 콘텐츠를 게시합니다. 이제 Experience Manager 안내서를 통해 웹 편집기에서 조건 사전 설정을 만들고 관리할 수도 있습니다. 쉽게 편집, 복제 또는 삭제할 수도 있습니다.

![웹 편집기의 관리 탭에 있는 조건 사전 설정 ](assets/web-editor-manage-condition-presets.png){width="550" align="left"}

자세한 내용은 [조건 사전 설정 사용](../user-guide/generate-output-use-condition-presets.md).

### 브라우저를 새로 고칠 때 파일 탭 복원

Experience Manager 안내서는 브라우저를 새로 고칠 때 웹 편집기에서 열린 파일 탭의 상태를 복원합니다. 자세한 내용은 **파일을 편집하는 동안 브라우저 새로 고침** 아래 섹션 [웹 편집기에서 주제 편집](../user-guide/web-editor-edit-topics.md).

### 쉽게 요소 래핑 해제

이제 웹 편집기에서 요소의 컨텍스트 메뉴에 있는 옵션을 사용하여 요소의 래핑을 쉽게 취소할 수 있습니다. 이렇게 하면 요소의 텍스트를 상위 요소와 쉽게 병합할 수 있습니다.
자세한 내용은 **요소 래핑 해제** 의 섹션 [웹 편집기의 기타 기능](../user-guide/web-editor-other-features.md).

### 커서를 이동하는 키보드 단축키

이제 Experience Manager 안내서를 사용하여 키보드 단축키를 사용하여 웹 편집기에서 커서를 이동할 수도 있습니다. 키보드 단축키를 사용하여 한 단어를 왼쪽 또는 오른쪽으로 빠르게 이동할 수 있습니다. 키보드 단축키를 사용하여 줄의 시작 또는 끝으로 이동할 수도 있습니다.
이제 키보드 단축키를 사용하여 커서를 다음 요소의 시작 또는 이전 요소의 끝으로 이동할 수도 있습니다.
에 대해 자세히 알아보기 [웹 편집기의 키보드 단축키](../user-guide/web-editor-keyboard-shortcuts.md).
