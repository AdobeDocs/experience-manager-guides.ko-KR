---
title: 이 안내서 정보
description: 이 안내서에 대해 알아보기
exl-id: cdd40267-3f0c-40d2-acbc-2ebe43633c2f
feature: Introduction
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '663'
ht-degree: 2%

---

# 이 안내서 정보 {#id175MC0P0S5Z}

Adobe Experience Manager Guides \(나중에 *AEM Guides*\)는 강력한 클라우드 기반의 엔터프라이즈급 구성 요소 콘텐츠 관리 솔루션 \(CCMS\)입니다. Adobe Experience Manager의 기본 DITA 지원을 활성화하여 AEM에서 DITA 기반 콘텐츠 생성 및 전달을 처리할 수 있도록 촉진합니다. 작성자는 기본 제공 웹 편집기를 사용하여 콘텐츠를 만들고 다양한 출력 형식으로 게시할 수 있습니다.

이 안내서에서는 AEM Guides 다운로드, 설치 및 구성 지침을 제공합니다. 이 안내서에서는 조직 작성 및 게시 요구 사항에 따라 AEM Guides을 설정하는 자세한 지침을 제공합니다.

이 안내서는 다음 유형의 대상자를 대상으로 합니다.

- AEM Guides을 설치 및 관리할 관리자.

- 다양한 형식의 출력을 생성하기 위해 게시 작업을 실행하는 게시자입니다.


## 콘텐츠 구조

이 안내서의 정보는 다음과 같이 구성됩니다.

- [이 안내서 정보](#id175MC0P0S5Z): 이 항목에서는 이 안내서와 대상 및 이 안내서에서 정보를 구성하는 방법에 대해 소개합니다.

- [다운로드 및 설치](download-install.md#): 이 항목에서는 AEM Guides을 다운로드, 설치 또는 업그레이드하는 방법에 대해 설명합니다.

- [사용자 관리 및 보안](user-admin-sec.md#): 이 항목에서는 AEM의 사용자 및 인증의 핵심 개념과 AEM Guides에서 만든 기본 사용자 그룹에 대해 설명합니다.

- [사용자 지정 DITA-OT 및 DITA 특수화 사용](dita-ot-specialization.md#): 이 항목에서는 사용자 지정 DITA-OT 플러그인을 구성하고 DITA 특수화를 사용하는 방법을 설명합니다.

- [문서 상태 구성](customize-doc-state.md#): 이 항목에서는 DITA 문서에 대한 사용자 지정 상태를 구성하는 방법에 대해 설명합니다.

- [기존 콘텐츠를 마이그레이션](migrate-content.md#): 이 항목에서는 AEM 저장소에서 기존 콘텐츠를 온보딩하는 방법을 설명합니다.

- [파일 이름 구성](conf-file-names.md#): 이 항목에서는 파일 이름을 자동으로 할당하고 올바른 파일 이름 문자에 대한 정규식을 정의하는 설정을 구성하는 방법에 대해 설명합니다.

- [주제 및 맵 템플릿 구성](conf-template-tags.md#): 이 주제에서는 작성 요구 사항에 맞게 주제를 구성하고 템플릿을 매핑하는 방법에 대해 설명합니다. AEM의 태그 지정 시스템 및 AEM Guides에서 작동하도록 태그를 구성하는 방법에 대해 알아봅니다.

- [웹 편집기 사용자 지정](conf-web-editor.md#): 이 항목에서는 웹 편집기에서 기능을 개선하기 위해 사용자 지정할 수 있는 다양한 방법에 대해 설명합니다.

- [@navtitle 특성을 기본으로 포함](auto-add-navtitle.md#): 이 항목에서는 기본적으로 맵의 참조 파일에 `@navtitle` 특성을 추가하는 방법에 대해 설명합니다.

- [전역 또는 폴더 수준 프로필 구성](conf-folder-level.md#): 이 항목에서는 폴더 프로필을 만들고 특정 사용자에게 권한을 부여하는 프로세스에 대해 설명합니다.

- [버전 관리](version-management.md#): 이 항목에서는 웹 편집기에서 편집하기 위해 연 파일에 대해 자동 파일 체크 아웃을 구성하는 방법에 대해 설명합니다.

- [출력 생성 설정 구성](conf-output-generation.md#): 이 항목에서는 기본 출력 생성 프로세스를 사용자 지정하는 데 사용할 수 있는 다양한 구성에 대해 설명합니다.

- [워크플로 구성 및 사용자 지정](customize-workflows.md#): 이 항목에서는 AEM Guides에 제공되는 기본 워크플로를 사용자 지정하는 다양한 구성에 대해 설명합니다.

- [콘텐츠 번역](translation.md#): 이 항목에서는 번역 프레임워크를 이해하고 구성하는 데 도움이 되는 AEM 설명서의 관련 도움말 문서에 대한 링크를 제공합니다. 또한 구성 요소 기반 번역 워크플로를 활성화하는 방법에 대해 알아봅니다.

- [AEM Assets UI에 대한 검색 구성](conf-dita-search.md#): 이 항목에서는 Assets UI에서 DITA 콘텐츠 검색을 구성하고 검색에 사용자 지정 특성을 추가하는 방법에 대해 설명합니다.


## Adobe Experience Manager \(AEM\) 개요

[Adobe Experience Manager \(AEM\)](https://business.adobe.com/products/experience-manager/adobe-experience-manager.html)은(는) 웹 사이트, 모바일 앱 및 양식 구축을 위한 포괄적인 콘텐츠 관리 솔루션입니다. AEM은 마케팅 콘텐츠 및 에셋을 관리하는 데 도움이 됩니다. AEM as a Cloud Service 사용 가능 AEM as a Cloud Service은 AEM 콘텐츠 관리 시스템의 강력한 기능을 AEM 디지털 에셋 관리와 결합하여 고객에게 개인화된 콘텐츠 주도 경험을 제공할 수 있도록 지원합니다.AEM as a Cloud Service을 시작하고 배포하는 데 도움이 되는 몇 가지 주요 리소스는 다음과 같습니다.

- [Experience Manager as a Cloud Service 개요](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/home.html?lang=ko)
- [AEM as a Cloud Service으로 마이그레이션 여정 시작](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/migration-journey/getting-started.html?lang=ko)
- [Experience Manager as a Cloud Service 온보딩 시작](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/onboarding/home.html?lang=kohttps://experienceleague.adobe.com/docs/experience-manager-cloud-service/moving/home.html?lang=en)
- [AEM as a Cloud Service용 애플리케이션 구현](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/home.html?lang=ko)
- [AEM as a Cloud Service에 배포](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/deploying/overview.html?lang=ko)
- [Assets as a Cloud Service 안내서](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/home.html?lang=kr)

## 추가 리소스

다음은 [학습 및 지원](https://helpx.adobe.com/kr/support/xml-documentation-for-experience-manager.html) 페이지에서 사용할 수 있는 AEM Guides의 다른 유용한 리소스 목록입니다.

- 사용 안내서
- API 참조 안내서
