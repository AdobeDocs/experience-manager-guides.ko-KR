---
title: 클라우드 서비스에 대한 B-트리 정리 작업 구성
description: 클라우드 서비스에 대한 B-트리 정리 작업 구성
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 5b29b2b5f725b5d9a2029fb232e62f387a5338fd
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 3%

---

# B 트리 정리 구성

B-트리 정리 작업을 설정하고 `Guides BTree deletion` 설정을 관리하여 시스템을 최적화하고 저장소를 정리합니다.

## B 트리 정리 작업 구성

B-트리 정리 작업을 구성하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob` | `cronExpression` | **기본값:** &quot;0 0 0 * ?&quot; |


## 가이드 B-트리 삭제 활성화 설정 구성

설정을 활성화하려면 다음 단계를 수행하십시오.

1. 구성 파일을 만들려면 [구성 재정의](../cs-install-guide/download-install-additional-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `btree.deletion.enabled` | **기본값:** &quot;True&quot; |