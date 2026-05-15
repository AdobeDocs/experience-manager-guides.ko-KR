---
title: On-Premise 서비스의 게시 출력을 위한 기본 출력 위치 구성
description: On-Premise 서비스의 게시 출력을 위한 기본 출력 위치 구성
feature: Output Generation
role: Admin
level: Experienced
exl-id: ae1d805a-7b79-4b76-8be2-a19c5552530c
TQID: https://experienceleague.adobe.com/qf1UZh14gvlc7ZHUUBaDlHe1U3zDvzGlGjYavYKITWY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: d6596f3f-92a7-43ec-b444-237db6adad05id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 112
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
