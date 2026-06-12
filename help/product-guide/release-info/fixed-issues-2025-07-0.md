---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2025.07.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 2025.07.0 릴리스의 버그 수정에 대해 알아봅니다.
exl-id: 0744e821-5aee-432b-a6c8-7ed6538935db
TQID: https://experienceleague.adobe.com/xzYzEvtyVvvIpq3tfLftkCDuiC08hahdNhr5ZXcQPo8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
subfeature_v2: id: ad602516-aca3-4247-9ae8-f393d958efa9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dcid: ce44533e-8ec8-4e11-a9e9-78b0fe561832
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 520
ht-degree: 4%

---

# 2025.07.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2025.07.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

새로운 기능 및 개선 사항에 대한 자세한 내용은 [2025.07.0 릴리스의 새로운 기능](whats-new-2025-07-0.md)을 참조하십시오.

[2025.07.0 릴리스의 업그레이드 지침](upgrade-instructions-2025-07-0.md)에 대해 알아봅니다.

## 작성

- XML 주석이 Source 보기의 요소 내에 추가되면 보기를 전환할 때 주석 주위의 선행 및 후행 공백이 손실됩니다. (GUIDES-29781)
- 도구 모음의 줄임표 아이콘(**자세히** 메뉴) 내에 있는 경우 멀티미디어 옵션이 작동하지 않습니다. (GUIDES-29583)
- Assets UI 또는 편집기를 통해 새 주제를 만들 때 `XMLEditorConfig`에서 `xmleditor.uniquefilenames` 설정이 true로 설정되어 있으면 주제가 편집기에서 자동으로 열리지 않습니다. (GUIDES-28171)
- Source 보기의 MathML 수식 내에 추가된 공백은 편집기 보기를 전환할 때 유지되지 않습니다. (GUIDES-26111)

## 자산 관리

- 브라우저를 새로 고친 후 작성자 보기에서 주제를 열 때는 [파일 속성] 패널에서 이전에 적용된 태그가 유지되지 않으며, 특히 선택할 수 있는 태그가 많을 경우 새 태그를 추가하면 기존 태그를 덮어씁니다. (GUIDES-29078)
- 많은 에셋이 포함된 DITA 맵에 대한 메타데이터 보고서를 생성할 때 **관리** 단추가 응답하지 않거나 지연된 응답이 표시됩니다. (GUIDES-28443)

## 검토

- 검토 노드가 생성되지 않기 때문에 AEM 워크플로우를 통해 검토 작업을 만들려고 하면 계속 실패합니다. (GUIDES-28214)

## 게시

- Cloud Manager을 통해 AEM Sites 게시 구성 요소 패키지 `guides-components.all-1.3.0.zip`을(를) 배포할 때 코드 품질 오류가 발생합니다. (GUIDES-28873)
- `chunk=to-content` 특성이 있는 DITA 맵을 게시하면 새 AEM Sites 출력에 중복 JCR 노드가 생성되어 AEM Sites에서 컨텐츠 구조가 중복됩니다. (GUIDES-28104)
- 새 AEM Sites 출력을 사용하여 DITA 맵을 게시할 때 주제에 `chunk =to-content` 특성이 있고 주제 제목을 페이지 이름으로 사용하도록 출력이 설정된 경우 원래 주제 이름을 유지하는 대신 생성된 페이지 이름에 단어 **chunk**&#x200B;이 잘못 표시됩니다. (GUIDES-28102)
- 새 AEM Sites 게시를 위한 AEM Guides 주제 템플릿에 설정된 `cq:template` 속성에 잘못된 값이 표시되어 템플릿 구조 및 컨텐츠 렌더링에 영향을 줍니다. (GUIDES-27789)


## Platform

- 큰 컬렉션으로 작업할 때 로드 시간이 길어지고 간헐적인 시간 초과와 같은 성능 문제가 관찰됩니다. (GUIDES-29065, GUIDES-28793)
- Experience Manager Guides에 업로드된 AEM Guides 구성 요소에서 사용 중단되는 Guava 라이브러리와 관련된 취약성입니다(GUIDES-27402).

## 알려진 문제

Adobe은 2025.07.0 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- Markdown 주제를 사용하여 작업할 때 **주제 참조** 단추가 편집기 도구 모음에 표시되지만 작동하지 않습니다. (GUIDES-31038)
- 편집기의 폴더 제목 대신 폴더 노드 이름이 잘못 표시됩니다. (GUIDES-30909)
- **병합** 대화 상자에서 드롭다운 목록에 선택한 주제의 사용 가능한 버전이 표시되지 않고 **주 콘텐츠**&#x200B;가 잘못 표시됩니다. (GUIDES-30820)
- 통합 셸이 활성화된 DITA 맵을 열면 편집기가 간헐적으로 새로 고쳐집니다(GUIDES-26919).
