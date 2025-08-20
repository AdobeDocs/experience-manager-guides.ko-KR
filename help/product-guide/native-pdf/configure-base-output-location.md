---
title: On-Premise 서비스의 게시 출력을 위한 기본 출력 위치 구성
description: On-Premise 서비스의 게시 출력을 위한 기본 출력 위치 구성
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: ab6f1f09de2ef758d7f05ba0a49194ac9f387dea
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 1%

---

# On-Premise 서비스의 출력 게시를 위한 기본 출력 위치 구성

기본 출력 위치를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. **기본 출력 위치** 속성을 업데이트하여 게시 후 PDF을 저장할 AEM 저장소의 기본 경로를 지정합니다. 또한 잘못된 경로를 입력하면 자동으로 기본 경로( /content/dam/fmdita-outputs)로 되돌아갑니다.

1. **저장**&#x200B;을 클릭합니다.


