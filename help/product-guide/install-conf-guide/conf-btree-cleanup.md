---
title: 클라우드 서비스에 대한 B-트리 정리 작업 구성
description: 클라우드 서비스에 대한 B-트리 정리 작업 구성
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '235'
ht-degree: 3%

---

# B 트리 정리 구성

B-트리 정리 작업을 설정하고 `Guides BTree deletion` 설정을 관리하여 시스템을 최적화하고 저장소를 정리합니다.

## B 트리 정리 작업 구성

Experience Manager Guides 설정을 기반으로 B-트리 정리 작업을 구성하는 지침은 Cloud Service 또는 온프레미스에서 확인할 수 있습니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.guides.utils.schedulers.GuidesBTreesCleanupSchedulerJob` | `cronExpression` | **기본값:** &quot;0 0 0 * ?&quot; |

>[!TAB 온-프레미스]

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

>[!ENDTABS]

## 가이드 B-트리 삭제 활성화 설정 구성

Experience Manager Guides 설정을 기반으로 설정을 활성화하는 지침은 Cloud Service 또는 온프레미스 탭을 제공합니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. 구성 파일을 만들려면 [구성 재정의](download-install-config-override.md)의 지침을 사용하십시오.

1. 구성 파일에서 다음 (속성) 세부 사항을 제공합니다.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | `com.adobe.fmdita.config.ConfigManager` | `btree.deletion.enabled` | **기본값:** &quot;True&quot; |

>[!TAB 온-프레미스]

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.
1. `Guides btree deletion enabled` 설정을 사용하도록 설정합니다.

   ![](assets/btree-cleanup-setting.png){align="left"}

1. **저장**&#x200B;을 선택합니다.

>[!ENDTABS]