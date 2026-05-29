---
title: 새 편집기 구성
description: 새 편집기를 활성화하거나 비활성화하는 방법에 대해 알아보기
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
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

