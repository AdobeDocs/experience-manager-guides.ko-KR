---
title: AEM Guides 업그레이드
description: AEM Guides 업그레이드 방법 알아보기
exl-id: 57ae906f-69e3-4319-89f6-0fa9ddb7a3ff
feature: Installation
role: Admin
level: Experienced
TQID: 'https://experienceleague.adobe.com/jGMljbRp60Wst7hVLeanMTLHY79Yhqo7yeUCCsLXx3k'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '114'
ht-degree: 2%
---
# AEM Guides 업그레이드 {#id213BD050YPH}

1. Cloud Manager의 Git 저장소에 액세스합니다.

1. dox/dox.installer/pom.xml 파일을 업데이트합니다.

1. dox.version 변수의 값을 Adobe에서 제공하는 버전 세부 사항으로 업데이트합니다.

1. 변경 사항을 커밋하고 Cloud Manager 파이프라인을 실행하여 업그레이드된 패키지를 배포합니다.


>[!NOTE]
>
> CI/CD 파이프라인 사용에 대한 자세한 내용은 [Adobe Cloud Manager에서 CI/CD 파이프라인 사용](https://experienceleague.adobe.com/docs/experience-manager-learn/foundation/cloud-manager/use-the-cicd-pipeline-in-cloud-manager-for-aem.html?lang=ko)을 참조하십시오.

## 브라우저 캐시를 지웁니다.

업그레이드 프로세스를 완료한 후 업그레이드된 AEM Guides 버전을 사용하기 전에 모든 사용자가 브라우저 캐시를 지워야 합니다.

**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)
