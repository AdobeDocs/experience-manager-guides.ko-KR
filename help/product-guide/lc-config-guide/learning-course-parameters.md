---
title: 학습자 진행 및 과정 완료에 대한 SCORM 주요 지표
description: 학습자 진행 및 과정 완료에 대한 SCORM 키 지표에 대해 알아봅니다
feature: Authoring
role: Admin
level: Experienced
exl-id: f25cbbbd-5d9f-47b0-9260-8062e026913d
TQID: https://experienceleague.adobe.com/ZyY9sjaqGANXlUI5l3OsP-i1Pu-es-B-iGnpPJjQYrY
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: ab01a588-7dea-43f2-a699-0b3f128465d6id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2: id: aa2f3246-cb95-4b30-8899-fdf7d73550ccid: e1e0219c-f879-479f-8427-888ed2a6e9c2
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 281
ht-degree: 1%

---

# 학습자 진행 및 과정 완료에 대한 SCORM 주요 지표

이 문서에는 SCORM 패키지에서 캡처한 주요 매개 변수와 해당 필드 및 예가 나와 있습니다. 이러한 매개변수는 학습자 진행 상황, 과정 완료, 상호 작용 세부 정보 및 퀴즈 성능에 대한 중요한 통찰력을 제공합니다. 관리자는 이 정보를 사용하여 추적의 유효성을 검사하고, 보고를 구성하고, LMS 환경 내에서 정확한 분석을 수행할 수 있습니다. 다음은 SCORM 패키지에 표시되는 각 매개 변수에 대해 제공되는 샘플 값입니다.

| **매개 변수 이름** | **설명** | **필드** | **예** |
|---|---|---|---|
| **과정 완료 상태** | 강의 완료 여부를 나타냅니다. | cmi.completion_status | 미완료 |
| **시도 횟수** | 학습자가 시도한 횟수 | LMS측 시도 카운터/콘텐츠 | 시도 횟수: 1 |
| **SCORM 패키지의 위치** | 과정의 현재 책갈피 또는 위치 | cmi.location | - |
| **진행 완료** | 학습자 진행률 | cmi.progress_measure | 0.87 |
| **총 시간(시도)** | 현재 시도에 소요된 총 시간 | cmi.total_time | 0000:01:09.87 |
| **목차 표시 여부 및 항목 수** | 목차 가시성 및 항목 완료 세부 정보를 표시합니다. | Project.HideTOC, Project.TotalTopics, Project.TopicsCompleted | - |
| **주제별 상태** | 각 주제에 대한 완료 및 전달 상태 | 사용자 정의 단원 상태 | - |
| **질문별 선택 상태** | 질문당 학습자가 선택한 선택 사항을 추적합니다. | value, generated_id, checked | - |
| **전체 질문 점수** | 질문 수준 및 집계에서 달성한 점수 | {&quot;score&quot;:0,&quot;maxScore&quot;:1} 및 % | &quot;score&quot;:33.33,&quot;maxScore&quot;:100,&quot;minScore&quot;:0 |
| **각 질문 수준의 상호 작용** | 질문당 학습자 상호 작용 세부 정보 | id/type/timestamp/correct_response/learner_response/result/latency | - |
| **전체 과정 상태** | 합격/불합격 및 전체 진행 상황 표시 | success_status, completion_status, score, progress_measure | 통과 또는 실패 |
| **학습자 세부 정보** | ID 및 이름으로 학습자 식별 | cmi.learner_id, cmi.learner_name | 앨버트 |
| **퀴즈 매개 변수** | 퀴즈 타이밍 및 합격 점수에 대한 구성 | cmi.max_time_allowed, cmi.scaled_passing_score, cmi.time_limit_action | 정의되지 않았거나 구성된 값 |
