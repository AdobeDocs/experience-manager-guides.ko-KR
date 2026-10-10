---
title: 클라우드 서비스에 대한 자산 처리 구성
description: 클라우드 서비스를 위한 자산 처리를 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
exl-id: 219a096f-4087-489f-9b3b-104864817198
TQID: 'https://experienceleague.adobe.com/pwwaOoH35wROxMMw4ZWNTwCmXWUBxR6y23UWvPiqTR4'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
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
source-wordcount: '58'
ht-degree: 3%
---
# 자산 처리 기능 구성

에셋 처리 기능을 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `enable.asset.processing.scheduler` | **기본값:** &quot;true&quot; |
