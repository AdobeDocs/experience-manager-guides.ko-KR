---
title: 쿼리에 대한 LimitReads 수를 구성합니다.
description: 쿼리에 대한 LimitReads 수를 구성하는 방법에 대해 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 53748636-f3d1-4b3b-a772-2730b78741cb
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '100'
ht-degree: 2%
---
# 온-프레미스에 대한 쿼리에 대한 LimitReads 수를 구성합니다.

쿼리가 한 번에 읽을 수 있는 노드 수를 늘리려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 JMX 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/jmx
   ```

1. **QueryEngineSettings**&#x200B;를 검색하고 클릭합니다.

1. **LimitReads** 특성에 대한 특성 값을 변경합니다.

1. **저장**&#x200B;을 클릭합니다.


이 속성 값을 늘리면 더 큰 DITA 맵에 대한 보고서를 생성하는 데 도움이 됩니다.

**상위 항목:**[&#x200B;편집기 사용자 지정](customize-overview.md)
