---
title: 온-프레미스용 번역 워크플로우에서 대상 복사 초기화 구성
description: 온프레미스용 번역 워크플로에서 대상 사본 초기화를 활성화하거나 비활성화하는 방법에 대해 알아봅니다
feature: Configuration
role: Admin
level: Experienced
source-git-commit: 8d231bdbf00adb354bc31616e880495b00a3959c
workflow-type: tm+mt
source-wordcount: '111'
ht-degree: 1%

---

# 온-프레미스용 번역 워크플로우에서 대상 복사 초기화 구성

다음 단계에서는 온-프레미스 환경을 위한 번역 워크플로에서 대상 복사 초기화를 활성화하는 방법을 설명합니다.

1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 선택합니다.

1. 요구 사항에 따라 **원본 콘텐츠로 대상 언어 사본 초기화**( translation.workflow.propagate.source.content) 설정을 활성화하거나 비활성화합니다. 이 설정은 기존 번역 워크플로가 비활성화된 경우에만 적용할 수 있습니다.

1. **저장**&#x200B;을 선택합니다.
