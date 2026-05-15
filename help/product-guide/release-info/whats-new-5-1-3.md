---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.1.0 서비스 팩 3 릴리스의 새로운 기능
description: Adobe Experience Manager Guides 5.1.0 서비스 팩 3 릴리스의 새로운 기능 및 향상된 기능에 대해 알아봅니다
role: Leader
exl-id: 1b2e45a8-bea6-4b78-bd2e-cc02df86f40a
TQID: https://experienceleague.adobe.com/dXXQ1YvVduT11vvF5qyXHLqnuo1xMKkAb5I-EoD2JAA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
subfeature_v2:
  - id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 176
ht-degree: 0%

---

# 5.1.0 서비스 팩 3 릴리스의 새로운 기능(2025년 12월)

이 문서에서는 Adobe Experience Manager Guides 버전 5.1.0 서비스 팩 3에 도입된 새로운 기능 및 향상된 기능을 다룹니다.

이 릴리스에서 해결된 문제 목록을 보려면 [5.1.0 서비스 팩 3 릴리스에서 해결된 문제](fixed-issues-5-1-0-sp3.md)를 확인하십시오.

[5.1.0 서비스 팩 3 릴리스의 업그레이드 지침](../release-info/upgrade-instructions-5-1-0-sp3.md)에 대해 알아봅니다.


## 특정 출력 사전 설정에 대한 사용자 지정 이미지 렌디션 구성

이제 `renditionmapping.xml`의 `outputName` 특성을 사용하여 동일한 출력 유형에서 개별 출력 사전 설정에 대해 서로 다른 이미지 변환을 구성할 수 있습니다. 이러한 향상된 기능을 통해 다양한 시나리오에 대해 다양한 이미지 해상도가 필요한 콘텐츠를 게시할 때 보다 유연하게 작업할 수 있습니다. 예를 들어 가벼운 사전 설정에 대해 더 작은 썸네일을 사용하는 동안 주 HTML5 출력에 대한 고해상도 이미지를 원할 수 있습니다.

자세한 내용은 [출력 생성에서 이미지 렌디션 처리](../install-guide/conf-output-generation.md#handle-image-rendition-during-output-generation)를 참조하십시오.
