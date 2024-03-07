---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.4.0 릴리스에 대한 업그레이드 지침
description: Adobe Experience Manager Guides의 4.4.0 릴리스로 업그레이드하는 방법에 대해 알아봅니다
role: Leader
source-git-commit: 2209fd311ca1ad524db35633b8be22f6d303346d
workflow-type: tm+mt
source-wordcount: '457'
ht-degree: 1%

---

# 4.4.0 릴리스에 대한 업그레이드 지침(2024년 1월)

이 문서에서는 Adobe Experience Manager Guides 4.4.0 릴리스의 업그레이드 지침 및 호환성 매트릭스에 대해 설명합니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [4.4.0 릴리스의 새로운 기능](../release-info/whats-new-4-4.md).

이 릴리스에서 수정된 문제 목록은 다음을 참조하십시오. [4.4.0 릴리스의 문제가 해결되었습니다.](../release-info/fixed-issues-4-4.md).




## 호환성 매트릭스

이 섹션에서는 Experience Manager 안내서 4.4.0 릴리스에서 지원하는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

### Adobe Experience Manager

**4.4.0 비 UUID**
버전 6.5 서비스 팩 19, 18, 17

**4.4.0 UUID**
버전 6.5 서비스 팩 19, 18, 17


자세한 내용은 [기술 요구 사항](../install-guide/download-install-technical-requirements.md) 섹션에 자세히 설명되어 있습니다.

### FrameMaker 및 FrameMaker Publishing Server

| 릴리스 | FMPS 2022 | FMPS 2020 | Fm 2022 | Fm 2020 |
| --- | --- | --- | --- | --- |
| 4.4.0(비 UUID) | 2022년 이상 | 2020.2 이상* | 2022년 이상 | 2020.3 이상 |
| 4.4.0(UUID) | 2022년 이상 | 2020.2 이상* | 2022년 이상 | 2020.4 이상 |
| | | | |

*AEM에서 생성된 기준 및 조건은 2020.2년부터 FMPS 릴리스에서 지원됩니다.

### 산소 연결기

| 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- |--- |--- |
| 4.4.0(비 UUID) | 2.7-regular-1 | 2.7-regular-1 | 1.6 | 1.6 |
| 4.4.0(UUID) | 3.4-uuid-1 | 3.4-uuid-1 | 2.3 | 2.3 |
|  |  |   |



### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Experience Manager 가이드 구성 요소 Cloud Service 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |



## Experience Manager 안내서의 4.4.0 릴리스로 업그레이드


현재 버전의 Guides를 버전 4.4.0으로 쉽게 업그레이드할 수 있습니다. Experience Manager 안내서 버전 4.4.0으로 업그레이드하기 전에 다음 사항을 고려해야 합니다.


- 버전 4.3.1, 4.3.0 또는 4.2.1(핫픽스 4.2.1.3)을 사용하는 경우 버전 4.4.0으로 바로 업그레이드할 수 있습니다.
- 버전 4.2, 4.1 또는 4.1.x를 사용 중인 경우 버전 4.4.0으로 업그레이드하기 전에 버전 4.3.1, 4.3.0 또는 4.2.1(핫픽스 4.2.1.3)로 업그레이드해야 합니다.
- 버전 4.0을 사용 중인 경우 버전 4.3.x로 업그레이드하기 전에 버전 4.2로 업그레이드해야 합니다.
- 버전 3.8.5를 사용하는 경우 버전 4.2로 업그레이드하기 전에 버전 4.0으로 업그레이드해야 합니다.
- 3.8.5 이전 버전을 사용 중이라면 제품별 설치 안내서에서 업그레이드 Experience Manager 안내서 섹션을 참조하십시오. [Adobe Experience Manager 안내서 도움말 PDF 아카이브](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html).



>[!NOTE]
>
>Experience Manager 가이드 버전을 업그레이드하기 전에 AEM 서비스 팩을 설치해야 합니다.

자세한 내용은 다음을 참조하십시오 [온-프레미스 릴리스에 대한 업그레이드 지침](../install-guide/upgrade-xml-documentation.md) Experience Manager 가이드.

