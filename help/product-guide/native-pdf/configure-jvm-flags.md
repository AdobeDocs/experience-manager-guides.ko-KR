---
title: 기본 PDF | 기본 PDF 게시를 위한 JVM 플래그 구성
description: 기본 PDF 게시를 위한 JVM 플래그 구성
exl-id: d5432913-4b5a-48e7-9467-7f6c6e0adbe4
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '125'
ht-degree: 1%

---

# 기본 PDF 게시를 위한 JVM 플래그 구성

기본 PDF 게시는 별도의 JVM 프로세스를 시작하여 PDF을 생성합니다. 다른 시나리오를 지원하려면 이 JVM의 구성을 수정해야 할 수 있습니다. 예를 들어 더 큰 워크로드를 실행하려면 생성된 JVM 프로세스에 사용할 수 있는 최대 힙 크기를 늘려야 합니다.

AEM Guides 기본 PDF 게시 JVM 플래그를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. 을(를) 검색하고 선택합니다 *com.adobe.fmdita.config.ConfigManager* 번들.

1. 속성 업데이트 **기본 pdf에 대한 Java 명령줄 옵션** (*native.pdf.java.opts*)를 클릭하여 표준 JVM 플래그를 전달합니다.



1. **저장**&#x200B;을 클릭합니다.
