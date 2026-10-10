---
title: On-Premise 서비스에 대한 B-트리 정리 작업 구성
description: On-Premise 서비스에 대한 B-트리 정리 작업 구성
feature: Output Generation
role: Admin
level: Experienced
exl-id: ff6f968c-3440-4757-882a-676711ad05c3
TQID: 'https://experienceleague.adobe.com/qvOHGtHbgKS3xUv0pEXKTqeWblIDj8JKJwik8heXwPo'
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
source-wordcount: '156'
ht-degree: 2%
---
# B 트리 정리 구성

B-트리 정리 작업을 설정하고 `Guides B-tree deletion` 설정을 관리하여 시스템을 최적화하고 저장소를 정리합니다.

## B 트리 정리 작업 구성

B-트리 정리 작업을 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob* 번들을 검색하여 선택하십시오.

1. 크론 표현식을 업데이트하여 B-트리 정리 스케줄러 작업 실행 빈도를 설정합니다.

1. 아래 표시된 대로 B 트리 정리 스케줄러를 구성합니다.

   ![](assets/btree-cleanup-config.png)

1. **저장**&#x200B;을 선택합니다.


## 가이드 B-트리 삭제 활성화 설정 구성

설정을 활성화하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.
1. `Guides btree deletion enabled` 설정을 사용하도록 설정합니다.

   ![](assets/btree-cleanup-setting.png)

1. **저장**&#x200B;을 선택합니다.
