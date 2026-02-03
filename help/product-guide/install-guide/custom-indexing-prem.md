---
title: On-Premise 설정에 대한 사용자 지정 인덱싱 배포
description: 온-프레미스 설정에 대한 콘텐츠를 사용자 지정하는 방법에 대해 알아봅니다
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 8a9a82e79c757e403141e853aafbc64e1618c30a
workflow-type: tm+mt
source-wordcount: '129'
ht-degree: 0%

---

# 찾기 및 바꾸기(Source 보기) 기능에 대한 리인덱싱

**찾기 및 바꾸기(Source 보기)** 기능을 사용하도록 설정하려면 리인덱싱이 필요합니다. 리인덱싱을 사용하면 작성자 보기에 표시되는 전체 콘텐츠와 검색된 문자열의 기본 Source 콘텐츠(요소, 태그 및 특성 값을 포함한 XML 구조)를 검색할 수 있습니다.

## 리인덱싱

온-프레미스 설정의 경우 색인 정의가 패키지에 포함됩니다. 기능을 활성화하려면 콘텐츠를 다시 색인화해야 합니다.

`reindex=true (Boolean)` 노드에서 ` /oak:index/guidesAssetLucene` 속성을 설정하여 이전에 캡처한 콘텐츠를 다시 인덱싱하여 다시 인덱싱을 시작합니다.

리인덱싱 프로세스는 시스템이 이 속성을 자동으로 다시 false로 변경할 때까지 계속됩니다. 시스템 로그에서 리인덱싱 작업의 진행 상황을 모니터링할 수 있습니다.