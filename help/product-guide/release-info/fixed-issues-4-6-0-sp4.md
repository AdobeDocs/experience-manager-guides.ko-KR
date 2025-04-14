---
title: 릴리스 정보 | Adobe Experience Manager Guides 4.6.0 서비스 팩 4 릴리스의 문제가 해결되었습니다
description: Adobe Experience Manager Guides 4.6.0 서비스 팩 4 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
source-git-commit: f9a03ae620a362989a36ebaefb264ea28220a4b3
workflow-type: tm+mt
source-wordcount: '239'
ht-degree: 1%

---

# 4.6.0 서비스 팩 4 릴리스(2025년 4월)의 문제가 해결되었습니다.


이 문서에서는 Adobe Experience Manager Guides 4.6.0 서비스 팩 4 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[4.6.0 서비스 팩 4 릴리스의 업그레이드 지침](upgrade-instructions-4-6-0-sp4.md)에 대해 알아봅니다.

## 작성

- **작성자** 보기의 주제 내에 이미지를 끌어다 놓으면 이미지 참조가 손상되어 데이터가 손실됩니다. (25769)
- **작성자** 보기의 맵 내에 `topicref`을(를) 끌어서 놓으면 의도한 작업이 수행되지 않고 끌어서 놓은 `topicref` 옆에 있는 `topicref`이(가) 제거됩니다. (19460)
- 항목을 업데이트하거나 만드는 동안 JCR 세션 연결을 닫지 않으면 메모리 누수가 발생하고 서비스 다운타임이 발생합니다. (26282)

## 게시

- DITA 콘텐츠에 `external` 범위가 없는 웹 링크가 있는 경우 기본 PDF 게시가 무기한 계속됩니다. (26434)
- 많은 레이블로 새 기준선을 만들 때 레이블 로더가 실패하고 레이블을 가져올 수 없습니다. (16232)
- 콘텐츠에 오류가 있으면 기본 PDF 및 AEM 사이트 게시가 중지되고 큐에 대기합니다. (26516)

## 알려진 문제

Adobe은 이 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- DITA 콘텐츠에 `scope` 특성이 포함되지 않은 외부 링크가 포함되어 있으면 Windows에서 기본 PDF 게시에서 오류가 발생합니다.
