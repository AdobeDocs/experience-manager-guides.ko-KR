---
title: 릴리스 정보 | Adobe Experience Manager Guides as a Cloud Service 2003년 4월 릴리스
description: 2023년 4월 Adobe Experience Manager Guides as a Cloud Service 릴리스
exl-id: 269e3a13-584d-4cff-a18a-d4fa89646a5a
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '381'
ht-degree: 0%

---

# 새로운 기능 2023년 4월 릴리스 Adobe Experience Manager Guides as a Cloud Service

이 문서에서는 2023년 4월 Adobe Experience Manager Guides 버전(*AEM Guides as a Cloud Service*)의 새로운 기능 및 향상된 기능을 다룹니다.

업그레이드 지침, 호환성 매트릭스 및 이 릴리스에서 해결된 문제에 대한 자세한 내용은 [릴리스 정보](release-notes-2023-4-0.md) 문서를 참조하십시오.

## PDF 게시의 고급 메타데이터 지원

이제 AEM Guides은 PDF 출력의 메타데이터에 매핑된 메타데이터에 대한 고급 지원을 제공합니다. 메타데이터 옵션에는 작성자 이름, 문서 제목, 키워드, 저작권 정보 및 기타 데이터 필드와 같은 문서 및 문서 콘텐츠에 대한 정보가 포함됩니다.

<img src="assets/pdf-metadata.png" alt=" 기본 pdf 메타데이터">

XMP 파일을 가져올 수 있으며 AEM Guides은 파일에서 정보를 선택할 수 있습니다. 드롭다운을 사용하여 메타데이터 이름 및 값을 제공하는 옵션도 있습니다. 이름 필드에 직접 입력하여 사용자 지정 메타데이터를 추가할 수도 있습니다.


## 향상된 개요 보기 패널

AEM Guides에서는 문서에 사용된 요소의 계층적 보기를 얻을 수 있는 향상된 개요 보기 패널을 제공합니다.

<img src="assets/select-element-content-outline-view_cs.png" alt=" 기본 pdf 메타데이터">

아웃라인 뷰에서는 다음과 같은 기능이 개선되었습니다.

* [개요 보기] 패널 위에 [보기 옵션] 드롭다운이 표시됩니다. 요소에 ID, 속성 및 텍스트가 있는 경우 드롭다운에서 해당 요소를 선택하여 요소와 함께 표시할 수 있습니다. 개요 보기 패널에 표시할 수 있는 특성은 **편집기 설정** 내에서 관리자가 구성한 표시 특성 설정에 따라 결정됩니다.

* 검색 기능을 사용하여 이름, ID, 텍스트 또는 속성 값으로 요소를 검색할 수 있습니다.


## AEM Guidesas a Cloud Service 를 위한 마이크로서비스 기반 게시

AEM Guides as a Cloud Service Adobe I/O Runtime 기반 게시 및 대규모 게시 워크로드를 업계 최고의 서버리스 플랫폼과 함께 실행할 수 있는 기능을 제공합니다.

이제 4월 릴리스에서는 마이크로서비스 기반 기본 PDF 게시를 사용하여 여러 게시 요청을 동시에 실행하고 벌크 PDF 출력을 매우 효율적으로 생성할 수 있습니다.
자세한 내용은 [AEM Guidesas a Cloud Service 에 새 마이크로서비스 기반 게시 구성](../knowledge-base/publishing/configure-microservices.md)을 참조하십시오.
