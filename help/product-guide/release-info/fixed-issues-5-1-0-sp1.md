---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 문제가 해결되었습니다
description: Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: 575488e1b378c17419add75876a8e7f7423d5116
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 1%

---

# 5.1.0 서비스 팩 1 릴리스(2025년 10월)의 문제가 해결되었습니다


이 문서에서는 Adobe Experience Manager Guides 5.1.0 서비스 팩 1 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[5.1.0 서비스 팩 1 릴리스의 업그레이드 지침](upgrade-instructions-5-1-0-sp1.md)에 대해 알아봅니다.


## Platform

- 비 UUID에서 UUID로 마이그레이션하고 최신 버전(5.0+)으로 업그레이드할 때 참조된 이미지를 폴더 간에 이동한 다음 DITA 파일(이러한 이미지가 참조된 위치)을 이전 버전으로 되돌리면 이미지 참조가 손상됩니다. (GUIDES-34315)

## 게시

- 기존 구성 요소 매핑과 함께 AEM Sites의 기준선을 사용하여 DITA 맵을 게시할 때 `processing-role = resource-only` 특성이 있는 맵 요소도 게시되고 있습니다. (GUIDES-34298)
