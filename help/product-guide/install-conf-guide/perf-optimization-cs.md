---
title: Cloud Service 성능 최적화를 위한 권장 사항
description: 성능 최적화를 위한 권장 사항 알아보기
feature: Performance Optimization
role: Admin
level: Experienced
exl-id: 6c9684d4-180f-4ccb-bfd6-6c82a8a7b720
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: baa3aa24-d162-4a57-b73a-d27341145083
    internal-label: Performance optimization
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '152'
ht-degree: 5%
---
# Cloud Service 성능 최적화를 위한 권장 사항 {#id213BD0JG0XA}

성능 최적화를 위해 다음 사항을 고려하십시오.

- 콘텐츠 및 색인화 환경을 최적화하려면 AEM 설명서에서 [콘텐츠 검색 및 색인화 최적화](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/operations/indexing.html)를 참조하십시오.

- 게시에 사용자 지정 DITA-OT를 사용하는 동안 Patch Xerces Jar가 발생했습니다. 사용 사례에 따라 필수 구성입니다. 이 변경 사항은 게시 출력에 사용자 지정 DITA-OT를 사용하는 경우에만 필요합니다.

  *필수 구성*: 사용자 지정 DITA-OT 패키지의 Xerces Jar 파일을 제공된 OOTB로 바꿉니다. 기본 OOTB `xercesImpl-2.11.0.jar` 파일은 `/libs/fmdita/dita\_resources/DITA-OT.zip` 파일 내에서 사용할 수 있습니다. 교체되는 이전 Xerces Jar 파일과 일치하도록 `xercesImpl-2.11.0.jar` 파일의 이름을 바꾸십시오. 이 작업은 런타임에 수행할 수 있습니다.

  이렇게 하면 주제가 많은 DITA 맵을 게시하는 동안 게시 시간과 메모리 활용도가 줄어듭니다.
