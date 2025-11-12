---
title: On-Premise 서비스에 대한 B-트리 정리 작업 구성
description: On-Premise 서비스에 대한 B-트리 정리 작업 구성
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: e1b332b100cc8e3937557e4617d66352c1a0dc3c
workflow-type: tm+mt
source-wordcount: '145'
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

   ![](assets/btree-cleanup-config.png){align="left"}

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

   ![](assets/btree-cleanup-setting.png){align="left"}

1. **저장**&#x200B;을 선택합니다.

