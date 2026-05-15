---
title: On-Premise 서비스에 대한 자산 처리 구성
description: On-Premise 서비스에 대한 자산 처리 구성
feature: Output Generation
role: Admin
level: Experienced
exl-id: 9d771bba-aa90-4726-a75f-1cb7b804a192
TQID: https://experienceleague.adobe.com/GDyCE4ziLqhXXJTgFuv-uVf-2W86-OSNeMCMWYT35wg
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 68
ht-degree: 2%

---

# 자산 처리 기능 구성

자산 처리 기능을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 `Enable Guides asset processing scheduled job` 설정을 구성하십시오. 이 설정은 기본적으로 활성화되어 있습니다.

1. **저장**&#x200B;을 선택합니다.
