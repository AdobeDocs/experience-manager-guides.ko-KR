---
title: Adobe Experience Manager 설치
description: Adobe Experience Manager 설치 방법 알아보기
exl-id: 4693b102-b75a-4904-b2d5-914e774305f3
feature: Introduction, Installation
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/yoV8cMoMPIDbFi-cTm2LmmOSTpOjx8TrhengJ3WPrBs'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: c5fd2af0-6cbb-4746-ab0d-40ecb093af12
    internal-label: Introduction
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '215'
ht-degree: 0%
---
# Adobe Experience Manager 설치 {#id213BCI020E8}

AEM Guides은 Adobe Experience Manager 위에 설치되는 플러그인입니다. AEM을 설치하려면 몇 가지 기본 AEM 개념과 권장 배포 시나리오를 이해해야 합니다. 다음 링크는 AEM 설치를 시작하는 데 도움이 됩니다.

- [기본 AEM 개념](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/deploy.html#BasicConcepts)

- [권장 AEM 배포](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/recommended-deploys.html)


>[!IMPORTANT]
>
> AEM 6.5.x에서 Java 11을 사용하는 경우 문제가 발생할 수 있습니다. *JDK 11이`NoClassDefFoundError`*&#x200B;을(를) 일으킵니다. 이 문제를 해결하려면 [JDK 11에서 NoClassDefFoundError \| AEM 6.5](https://helpx.adobe.com/experience-manager/kb/jdk-11-causes-noclassdeffounderror---aem-6-5.html) 문서를 참조하십시오.

조직에 가장 적합한 배포 전략을 파악한 후에는 AEM 설명서의 *[시작하기](https://helpx.adobe.com/experience-manager/6-5/sites/deploying/using/deploy.html#GettingStarted)* 섹션에 설명된 대로 설치 프로세스를 수행하십시오.

AEM 인스턴스를 업그레이드하려는 경우 지정된 순서를 따라야 합니다.

1. AEM Guides을 제거합니다.
1. AEM 인스턴스를 업그레이드합니다.
1. AEM Guides을 설치합니다.

>[!IMPORTANT]
>
> 시스템 성능을 개선하기 위해 고려할 수 있는 다양한 성능 최적화 권장 사항이 있습니다. 자세한 내용은 [성능 최적화를 위한 권장 사항](download-install-recommend-perf-optimiz.md#)을 참조하십시오.

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
