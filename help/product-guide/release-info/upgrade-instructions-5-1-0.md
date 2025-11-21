---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.1.0 릴리스에 대한 업그레이드 지침
description: 호환성 매트릭스와 Adobe Experience Manager Guides 5.1.0 릴리스로 업그레이드하는 방법에 대해 알아봅니다.
exl-id: 4b7b6756-d260-4baf-a9cb-d99fc02f020f
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '520'
ht-degree: 7%

---

# 5.1.0 릴리스에 대한 업그레이드 지침(2025년 9월)

이 문서에서는 Adobe Experience Manager Guides 5.1.0 릴리스의 업그레이드 지침 및 호환성 매트릭스를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [5.1.0 릴리스의 새로운 기능](../release-info/whats-new-5-1-0.md)을 참조하십시오.

이 릴리스에서 수정된 문제 목록을 보려면 [5.1.0 릴리스에서 수정된 문제](../release-info/fixed-issues-5-1-0.md)를 확인하십시오.

## 호환성 매트릭스

이 섹션에서는 Experience Manager Guides 5.1.0 릴리스에서 지원하는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

| AEM Guides | AEM 버전 | 서비스 팩 |
| --- | --- | --- |
| 5.1.0(UUID) | 6.5 LTS | 1 |
| 5.1.0(UUID) | 6.5 | 23,22,21 |

자세한 내용은 On-Premise 설치 및 구성 안내서의 [기술 요구 사항](../install-guide/download-install-technical-requirements.md) 섹션을 참조하십시오.

### FrameMaker 및 FrameMaker Publishing Server

| 릴리스 | FMPS | FM |
| --- | --- | --- |
| 5.1.0(UUID) | 지원됨 | 2022년 이상 |

### 산소 연결기

| 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- |--- |--- |
| 5.1.0(UUID) | 3.8-uuid.1 | 3.8-uuid.1 | 2.3 | 2.3 |

### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service용 Experience Manager Guides 구성 요소 콘텐츠 패키지 | dxml-components.all-1.3.0 | aem-site-template-dxml.all-1.0.4 |

### 새 AEM 사이트 템플릿 버전


| AEM Guides | AEM 버전 | 구성 요소 버전 | 사이트 버전 |
|---|---|---| ---|
| 5.1.0 UUID | 6.5 LTS | guides-components.all-1.4.1 | aemg-docs.all-1.2.0 |
| 5.1.0 UUID | 6.5 | guides-components.all-1.4.0 | aemg-docs.all-1.2.0 |

## Experience Manager Guides 5.1.0으로 업그레이드

**Experience Manager Guides 6.5** 또는 **AEM 6.5 LTS**&#x200B;에서 현재 버전의 AEM을 버전 5.1.0으로 쉽게 업그레이드할 수 있습니다.

>[!NOTE]
>
> 현재 AEM 6.5를 사용 중이며 AEM 6.5 LTS로 이동할 계획이라면 Experience Manager Guides 5.1.0 업그레이드를 진행하기 전에 먼저 AEM 업그레이드를 완료해야 합니다. 자세한 내용은 [Adobe Experience Manager(AEM) 6.5 LTS로 업그레이드](https://experienceleague.adobe.com/en/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)를 참조하십시오.

Experience Manager Guides 버전 5.1.0으로 업그레이드하기 전에 다음 사항을 고려해야 합니다.

- 버전 4.6.3, 4.6.4, 5.0.0 또는 5.0.0 서비스 팩 1을 사용 중인 경우 버전 5.1.0으로 직접 업그레이드할 수 있습니다.
- 버전 4.6.0, 4.6.1을 사용 중인 경우 버전 5.1.0으로 업그레이드하기 전에 버전 4.6.3, 4.6.4 또는 5.0.0으로 업그레이드해야 합니다.
- 버전 4.3.x, 4.2, 4.2.1(핫픽스 4.2.1.3), 4.1 또는 4.1.x를 사용하는 경우 버전 5.1.0으로 업그레이드하기 전에 버전 4.4로 업그레이드해야 합니다.
- 버전 4.0을 사용 중인 경우 버전 4.3.x로 업그레이드하기 전에 버전 4.2로 업그레이드해야 합니다.
- 버전 3.8.5를 사용하는 경우 버전 4.2로 업그레이드하기 전에 버전 4.0으로 업그레이드해야 합니다.
- 3.8.5 이전 버전을 사용하는 경우 [Experience Manager Guides 도움말 PDF 보관](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)에 있는 제품별 설치 안내서의 Adobe Experience Manager Guides 업그레이드 섹션을 참조하십시오.

>[!NOTE]
>
>Experience Manager Guides 버전을 업그레이드하기 전에 AEM 서비스 팩을 설치해야 합니다.

자세한 내용은 Experience Manager Guides의 [온-프레미스 릴리스에 대한 업그레이드 지침](../install-guide/upgrade-xml-documentation.md)을 참조하세요.


