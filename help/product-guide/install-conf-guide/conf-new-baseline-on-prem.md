---
title: 온프레미스에 대한 새 기준선 구성
description: 온-프레미스에 대한 새 기준선 을(를) 활성화하거나 비활성화하는 방법에 대해 알아봅니다
feature: Configuration
role: Admin
level: Experienced
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 1%
---
# 온-프레미스에 대한 새 기준선 구성

>[!IMPORTANT]
>
> 런타임 환경에서 수동으로 적용하는 대신 코드를 통해 시스템 구성을 배포합니다.

다음 단계에서는 On-Premise 환경에서 새 기준선 을 활성화하는 방법을 설명합니다.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 선택합니다.

1. **더 빠른 기준 요소 사용(v2)** 설정을 사용합니다. 정확한 설정 이름 `enable.baseline.v2`(으)로 검색할 수도 있습니다.

1. **저장**&#x200B;을 선택합니다.

>[!NOTE]
>
>이 기능을 활성화한 후에는 기존 베이스라인을 새 베이스라인으로 마이그레이션해야 합니다. 단계별 지침과 연습 비디오를 보려면 [Experience Manager Guides에서 새 기준선(Beta)을 봅니다](../user-guide/web-editor-baseline-v2.md).

