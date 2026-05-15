---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
exl-id: 4b51085b-1f71-41e2-b0a9-88a12990fc97
TQID: https://experienceleague.adobe.com/HEWV5RxPUfqUYf6m6kQW-fU-LiAM0UFGbfzKjtOCZxk
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dca
role_v2: id: f8a45b24-4be7-4f1b-909b-60d06b483a20
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 144
ht-degree: 1%

---

# 5.1.0 서비스 팩 1 릴리스(2025년 10월)의 문제가 해결되었습니다


이 문서에서는 Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[5.1.0 서비스 팩 1 릴리스의 업그레이드 지침](upgrade-instructions-5-1-0-sp1.md)에 대해 알아봅니다.


## Platform

- 비 UUID에서 UUID로 마이그레이션하고 최신 버전(5.0+)으로 업그레이드할 때 참조된 이미지를 폴더 간에 이동한 다음 DITA 파일(이러한 이미지가 참조된 위치)을 이전 버전으로 되돌리면 이미지 참조가 손상됩니다. (GUIDES-34315)

## 게시

- 기존 구성 요소 매핑과 함께 AEM Sites의 기준선을 사용하여 DITA 맵을 게시할 때 `processing-role = resource-only` 특성이 있는 맵 요소도 게시되고 있습니다. (GUIDES-34298)
