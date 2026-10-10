---
title: 새 편집기 구성
description: 새 편집기를 활성화하거나 비활성화하는 방법에 대해 알아보기
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
source-wordcount: '79'
ht-degree: 2%
---
# On-Premise용 새 편집기 구성

>[!IMPORTANT]
>
> 런타임 환경에서 수동으로 적용하는 대신 코드를 통해 시스템 구성을 배포합니다.

다음 단계에서는 온-프레미스 환경에서 새 편집기를 활성화하는 방법을 설명합니다.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 선택합니다.

1. **편집기 2.0 사용**(`enable.markup.editor`) 설정을 사용합니다.

1. **저장**&#x200B;을 선택합니다.

