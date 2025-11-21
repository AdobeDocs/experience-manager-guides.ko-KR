---
title: 릴리스 정보 | Adobe Experience Manager Guides as a Cloud Service, 2023년 4월 릴리스
description: 2023년 4월 Adobe Experience Manager Guides as a Cloud Service 릴리스
exl-id: fa339eab-d3d0-4763-adbf-6411e39aa213
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '597'
ht-degree: 0%

---

# 2023년 4월 Adobe Experience Manager Guides as a Cloud Service 릴리스

이 릴리스 노트는 2023년 4월 Adobe Experience Manager Guides 버전(이후 *AEM Guides as a Cloud Service*)에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [AEM Guides as a Cloud Service의 2023년 4월 새로운 기능](whats-new-2023-4-0.md)을 참조하세요.

## 2023년 4월 릴리스로 업그레이드

다음 단계를 수행하여 현재 AEM Guides as a Cloud Service 설정을 업그레이드합니다.

1. 클라우드 서비스의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 클라우드 서비스 파이프라인에 구성된 분기로 전환합니다.
2. 클라우드 서비스 Git 코드의 `<dox.version>` 파일에서 `/dox/dox.installer/pom.xml` 속성을 2023.4.249로 업데이트합니다.
3. 변경 사항을 커밋하고 클라우드 서비스 파이프라인을 실행하여 2023년 4월 AEM Guides as a Cloud Service 릴리스로 업그레이드합니다.

## 기존 콘텐츠를 색인화하는 단계(AEM Guides as a Cloud Service의 9월 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 색인화하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용하려면 다음 단계를 수행하십시오.

* 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>/bin/guides/map-find/indexing`.
(선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

* API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
(예: http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678)

* 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 호환성 매트릭스

이 섹션에서는 2023년 4월 AEM Guides as a Cloud Service 릴리스에서 지원되는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| AEM Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.04.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.04.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |  |



## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

* 기본 PDF | brackets()가 있는 출력 클래스가 있는 콘텐츠를 게시하면 게시가 중지됩니다. (11596)
* 변경 내용 추적이 켜진 기존 목록 항목 대신 이동할 때(드래그 앤 드롭) 문제가 발생합니다. (11570)
* 변경 내용 추적이 활성화된 새 목록 항목으로 이동(드래그 앤 드롭)할 때 문제가 발생합니다. (11569)
* 목록 항목 수준 내리기 또는 내어쓰기가 변경 내용 추적을 사용하는 경우 예상대로 작동하지 않습니다. (11568)
* 변경 내용 추적이 켜진 줄에 컨텐츠를 추가한 다음 변경 내용 추적을 끄면 실제로 해제되지 않습니다. (11567)
* 목록 항목을 드래그 앤 드롭하는 데 어려움이 있으면 목록 항목 대신 텍스트가 이동됩니다. (11566)
* 완료된 검토가 읽기 전용 모드로 열리지 않습니다. (11387)
* AEM 사이트 검색에서 문제가 발생합니다(2~3 수준 노드 이상에서 작동하지 않음). (11352)
* 녹색(변경 내용 추적)으로 표시된 요소에서 작성할 때 변경 내용 추적이 비활성화되어 있더라도 새 콘텐츠가 변경 내용 추적으로 표시됩니다. (7021)

### 해결 방법에 대한 알려진 문제

Adobe은 2023년 4월 AEM Guides as a Cloud Service 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

* 기본 PDF | 출력 사전 설정을 명시적으로 열 때까지 이전 메타데이터는 채워지지 않습니다.
