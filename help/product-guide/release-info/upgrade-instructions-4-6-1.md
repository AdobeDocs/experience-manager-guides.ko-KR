---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.6.1 릴리스에 대한 업그레이드 지침
description: Adobe Experience Manager Guides 4.6.1 릴리스로 업그레이드하는 방법 알아보기
role: Leader
source-git-commit: 3547eb43977f31dae297ca5cb1f1ab53f7f2b067
workflow-type: tm+mt
source-wordcount: '487'
ht-degree: 1%

---

# 4.6.1 릴리스(2024년 10월)에 대한 업그레이드 지침

이 문서에서는 Adobe Experience Manager Guides 4.6.1 릴리스의 업그레이드 지침 및 호환성 매트릭스를 다룹니다.

이 릴리스에서 수정된 문제 목록을 보려면 [4.6.1 릴리스에서 수정된 문제](fixed-issues-4-6-1.md)를 확인하십시오.

## 호환성 매트릭스

이 섹션에서는 Experience Manager Guides 4.6.1 릴리스에서 지원하는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

### Adobe Experience Manager

**4.6.1 비UUID**
버전 6.5 서비스 팩 21, 20 및 19

**4.6.1 UUID**
버전 6.5 서비스 팩 21, 20 및 19

자세한 내용은 On-Premise 설치 및 구성 안내서의 [기술 요구 사항](../install-guide/download-install-technical-requirements.md) 섹션을 참조하십시오.

### FrameMaker 및 FrameMaker Publishing Server

| 릴리스 | FMPS 2022 | FMPS 2020 | FM | FM |
| --- | --- | --- | --- | --- |
| 4.6.1(비 UUID) | 2022년 이상 | 2020.2 이상* | 2022년 이상 | 2020.3 이상 |
| 4.6.1 (UUID) | 2022년 이상 | 2020.2 이상* | 2022년 이상 | 2020.4 이상 |
| | | | |

*AEM에서 생성된 기준 및 조건은 2020.2년부터 FMPS 릴리스에서 지원됩니다.

### 산소 연결기

| 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- |--- |--- |
| 4.6.1(비 UUID) | 2.8-regular-10 | 2.8-regular-10 | 1.6 | 1.6 |
| 4.6.1 (UUID) | 3.6-uuid.9 | 3.6-uuid.9 | 2.3 | 2.3 |
|  |  |   |

### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service을 위한 Experience Manager Guides 구성 요소 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

### 새 AEM 사이트 템플릿 버전


| 구성 요소 버전 | 사이트 버전 |
|---|---|
| guides-components.all-1.0.0 | aemg-docs.all-1.0.0 |

## Experience Manager Guides 4.6.1 릴리스로 업그레이드

현재 버전의 Guides를 버전 4.6.1로 쉽게 업그레이드할 수 있습니다. Experience Manager Guides 버전 4.6.1로 업그레이드하기 전에 다음 사항을 고려해야 합니다.

- 버전 4.6.0을 사용 중인 경우 버전 4.6.1로 바로 업그레이드할 수 있습니다.
- 버전 4.4, 4.3.1 또는 4.3.0 을 사용 중인 경우 4.6.1로 업그레이드하기 전에 버전 4.6.0으로 업그레이드해야 합니다.
- 버전 4.2, 4.2.1(핫픽스 4.2.1.3), 4.1 또는 4.1.x를 사용하는 경우 버전 4.6.0으로 업그레이드하기 전에 버전 4.4로 업그레이드해야 합니다.
- 버전 4.0을 사용 중인 경우 버전 4.3.x로 업그레이드하기 전에 버전 4.2로 업그레이드해야 합니다.
- 버전 3.8.5를 사용하는 경우 버전 4.2로 업그레이드하기 전에 버전 4.0으로 업그레이드해야 합니다.
- 3.8.5 이전 버전을 사용하는 경우 [Experience Manager Guides 도움말 PDF 보관](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)에 있는 제품별 설치 안내서의 Adobe Experience Manager Guides 업그레이드 섹션을 참조하십시오.

>[!NOTE]
>
>Experience Manager Guides 버전을 업그레이드하기 전에 AEM 서비스 팩을 설치해야 합니다.

4.6.1 릴리스의 업그레이드 프로세스는 4.6.0 릴리스와 동일한 단계를 따릅니다. 자세한 지침은 Experience Manager Guides의 [온-프레미스 릴리스에 대한 업그레이드 지침](../install-guide/upgrade-xml-documentation.md)을 참조하세요.
