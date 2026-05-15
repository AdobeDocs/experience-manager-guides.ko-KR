---
title: 기본 PDF | 기본 PDF 게시를 위한 JVM 플래그 구성
description: 기본 PDF 게시를 위한 JVM 플래그 구성
feature: Output Generation
role: Admin
level: Experienced
exl-id: d5432913-4b5a-48e7-9467-7f6c6e0adbe4
TQID: https://experienceleague.adobe.com/UvDTutOu-rfQ7tNTMZ6f1dNYJ90dwSGCtTJvWWFm638
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: d6596f3f-92a7-43ec-b444-237db6adad05
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 128
ht-degree: 1%

---

# 온프레미스를 위한 기본 PDF 게시를 위한 JVM 플래그 구성

기본 PDF 게시는 별도의 JVM 프로세스를 시작하여 PDF을 생성합니다. 다른 시나리오를 지원하려면 이 JVM의 구성을 수정해야 할 수 있습니다. 예를 들어 더 큰 워크로드를 실행하려면 생성된 JVM 프로세스에 사용할 수 있는 최대 힙 크기를 늘려야 합니다.

AEM Guides 기본 PDF 게시 JVM 플래그를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. *com.adobe.fmdita.config.ConfigManager* 번들을 검색하고 선택합니다.

1. 표준 JVM 플래그를 전달하려면 **기본 pdf에 대한 Java 명령줄 옵션**(*native.pdf.java.opts*)을 업데이트하십시오.



1. **저장**&#x200B;을 클릭합니다.
