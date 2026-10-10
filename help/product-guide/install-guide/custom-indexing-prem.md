---
title: On-Premise 설정에 대한 사용자 지정 인덱싱 배포
description: 온-프레미스 설정에 대한 콘텐츠를 사용자 지정하는 방법에 대해 알아봅니다
feature: Web Editor Configuration
role: Admin
level: Experienced
exl-id: 5b9e4936-f674-41d3-a7b2-3d42a2523693
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
    internal-label: Configuration
subfeature_v2:
  - id: b0521e56-a0b2-40b6-bf47-ebc98751f9ba
    internal-label: Web Editor configuration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '132'
ht-degree: 0%
---
# 찾기 및 바꾸기(Source 보기) 기능에 대한 리인덱싱

**찾기 및 바꾸기(Source 보기)** 기능을 사용하도록 설정하려면 리인덱싱이 필요합니다. 리인덱싱을 사용하면 작성자 보기에 표시되는 전체 콘텐츠와 검색된 문자열의 기본 Source 콘텐츠(요소, 태그 및 특성 값을 포함한 XML 구조)를 검색할 수 있습니다.

## 리인덱싱

온-프레미스 설정의 경우 색인 정의가 패키지에 포함됩니다. 기능을 활성화하려면 콘텐츠를 다시 색인화해야 합니다.

` /oak:index/guidesAssetLucene` 노드에서 `reindex=true (Boolean)` 속성을 설정하여 이전에 캡처한 콘텐츠를 다시 인덱싱하여 다시 인덱싱을 시작합니다.

리인덱싱 프로세스는 시스템이 이 속성을 자동으로 다시 false로 변경할 때까지 계속됩니다. 시스템 로그에서 리인덱싱 작업의 진행 상황을 모니터링할 수 있습니다.
