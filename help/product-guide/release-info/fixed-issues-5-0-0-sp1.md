---
title: 릴리스 정보 | Adobe Experience Manager Guides 5.0.0 서비스 팩 1 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides 5.0.0 서비스 팩 1 릴리스의 버그 수정에 대해 알아봅니다
role: Leader
exl-id: 1d0bc3d0-aedf-4f67-b6f7-2208facdee96
TQID: https://experienceleague.adobe.com/0qxye7ZUWt1iixHthjjTNJgtlOQX-C30jGi5zQlRJfA
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2:
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 288
ht-degree: 1%

---

# 5.0.0 서비스 팩 1 릴리스의 문제가 해결되었습니다(2025년 6월)


이 문서에서는 Adobe Experience Manager Guides 5.0.0 서비스 팩 1 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[5.0.0 서비스 팩 1 릴리스의 업그레이드 지침](upgrade-instructions-5-0-0-sp1.md)에 대해 알아봅니다.

## 작성

- 콘텐츠를 `codeblock`에 붙여넣거나 `codeblock`에 공백을 추가하고 보기를 전환하면 간격이 손실됩니다. (GUIDES-29347)
- XML 주석이 **Source** 보기의 요소 내에 추가되면 보기를 전환할 때 주석 주위의 선행 및 후행 공백이 손실됩니다. (안내서 - 28188)

## 자산 관리

- 브라우저를 새로 고친 후 **작성자** 보기에서 주제를 열 때 **파일 속성** 패널에서 이전에 적용된 태그는 유지되지 않으며, 특히 많은 수의 태그를 선택할 수 있는 경우 새 태그를 추가하면 기존 태그를 덮어씁니다. (GUIDES-29078)
- 많은 에셋이 포함된 DITA 맵에 대한 메타데이터 보고서를 생성할 때 **관리** 단추가 응답하지 않거나 지연된 응답을 표시합니다. (GUIDES-29778)

## 번역

- Experience Manager Guides에서 번역을 위해 에셋을 보낼 때 에셋이 번역 작업에 추가되지 않으므로 **시작** 버튼이 표시되지 않고 번역 작업을 시작할 수 없습니다. (GUIDES-28237)

## 게시

- 폴더 프로필 내에 있는 출력 사전 설정의 설정을 수정하고 **사전 설정 변경 내용 적용**&#x200B;을 선택하면 변경 내용이 DITA 맵에 있는 출력 사전 설정에 전파되지 않습니다. (GUIDES-26694)

## 검토

- 검토 노드가 생성되지 않기 때문에 AEM 워크플로우를 통해 검토 작업을 만들려고 하면 계속 실패합니다. (GUIDES-28214)
