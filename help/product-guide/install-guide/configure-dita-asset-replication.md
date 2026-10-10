---
title: On-Premise 서비스에 대한 DITA Assets 복제 구성
description: On-Premise 서비스에 대한 dita 자산 복제를 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
exl-id: 49fd9dfe-e1a5-4388-abbd-ec5d45669b45
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
    internal-label: Publishing
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
    internal-label: Output generation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '73'
ht-degree: 2%
---
# DITA 에셋 복제 구성

자산 처리 기능을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 `Replicate DITA assets` 설정을 구성하십시오. 이 설정은 기본적으로 활성화되어 있습니다.


   ![](assets/dita-assets-replication.png){width="350"}


1. **저장**&#x200B;을 선택합니다.
