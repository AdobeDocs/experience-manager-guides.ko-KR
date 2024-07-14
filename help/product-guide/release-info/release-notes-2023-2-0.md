---
title: 릴리스 정보 | Adobe Experience Manager Guides as a Cloud Service 2003년 2월 릴리스
description: 2월 Adobe Experience Manager Guides as a Cloud Service 릴리스
exl-id: c639b136-11ed-4a8b-a595-4bb5da879747
feature: Release Notes
role: Leader
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '870'
ht-degree: 0%

---

# 2월 2023 릴리스 의 Adobe Experience Manager Guides as a Cloud Service

이 릴리스 노트는 2023년 2월 Adobe Experience Manager Guides 버전(*AEM Guides as a Cloud Service*)에서 수정된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [2023년 2월 새로운 기능{AEM Guides as a Cloud Service 1}을 참조하세요.](whats-new-2023-2-0.md)

## 2023년 2월 릴리스로 업그레이드

다음 단계를 수행하여 현재 AEM Guides as a Cloud Service 설정을 업그레이드합니다.
1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. Cloud Service Git 코드의 `/dox/dox.installer/pom.xml` 파일에서 `<dox.version>` 속성을 2023.2.235로 업데이트합니다.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 AEM Guidesas a Cloud Service 의 2023년 2월 릴리스로 업그레이드합니다.

## 기존 콘텐츠를 색인화하는 단계(AEM Guidesas a Cloud Service 의 9월 릴리스 이전 버전인 경우에만 해당)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

* 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>/bin/guides/map-find/indexing`.
(선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

* API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`
(예: http://&lt;_localhost:8080_>/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678)

* 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 호환성 매트릭스

이 섹션에서는 AEM Guides as a Cloud Service 2023년 2월 릴리스에서 지원되는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| AEM Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.02.0 | 호환되지 않음 | 2022년 이상 |
| | | |

*AEM에서 생성된 기준 및 조건은 2020.2년부터 FMPS 릴리스에서 지원됩니다.

### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.02.0 | 2.8-uuid-8 | 2.8-uuid-8 | 2.3 | 2.3 |
|  |  |  |  |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

* 웹 편집기 html을 변경하면 `<dl>` 및 `<dlentry>`에 문제가 발생합니다. (11024)
* 일부 속성이 조건부로 처리되지 않아 문제가 발생합니다. (10895)
* 세 수준 이상의 중첩된 `<indexterm>`이(가) 기본 PDF 내보내기에서 중첩되지 않습니다. (10799)
* 작성자 보기에서 Source 보기로 전환할 때 컨텐츠가 작업 본문에서 사라집니다. (10735)
* 리뷰 작업에서 리뷰 주석이 잘못 배치되었습니다. (10625)
* 일부 파일에서 **실행 취소** 또는 **다시 실행**&#x200B;이 제대로 작동하지 않습니다. (10373)
* 사용자 지정 메타데이터가 복사 및 붙여넣기 작업 시 유지되지 않습니다. (10367)
* XML 편집기의 실행 취소 옵션을 사용하면 사용자가 페이지 맨 위로 이동합니다. (10091)
* 노드 속성은 에셋의 복사 및 붙여넣기 작업 후 제거됩니다. (10053)
* mimeType은 DITA 에셋 생성 및 업데이트를 위해 하드코딩됩니다. (8979)
* 버전 내역의 버전 작성자 이름은 Assets UI를 통해 업로드된 파일의 &quot;fmdita-serviceuser&quot;입니다. (8910)
* AEM Guides이 Cloud에 설치된 경우 콘텐츠 조각을 복사하여 붙여넣을 수 없습니다. (11315)
* 사용자 지정 스키마로 콘텐츠를 로드할 때 브라우저(웹 편집기)가 중지됩니다. (11211)

### 관리

* DITA 맵 자산( 자산 UI에서 )을 복사하면 복사된 자산에 잘못된 기준선이 생깁니다. (11218)
* AEM에 허용된 제한(기본적으로 2GB)보다 큰 파일을 업로드할 때에는 경고 메시지가 표시되지 않습니다. (10817)
* 웹 편집기 기준선 | 최근 열의 비헤이비어는 웹 편집기 내의 새 기준선 대시보드에서 다릅니다. (10808)
* 번역 | 잘못된 /libs/fmdita/i18n/ja.json으로 인해 번역 작업이 시작되지 않습니다. (10543)
* 번역 | 번역 대시보드(사람 번역)에서 생성된 범위 번역 프로젝트에서 오류가 발생합니다. (10526)
* 번역 | 활성 번역 프로젝트에 자산이 있는 전체 언어 폴더에 대해 Post 처리가 차단됩니다. (10332)
* 버전이 변경되고 기준 편집기에 저장된 경우 모든 에셋에 대해 여러 팝업이 나타납니다. (10399)
* `com.day.cq.search.impl.builder.QueryBuilderImpl.createResourceResolver(QueryBuilderImpl.java:210)`에서 세션 누수가 발생합니다. (10279)

### 게시

* 일부 시나리오에서는 주제 재생성이 작동하지 않습니다. (10635)
* Publishlistener는 요청된 데이터를 정보 로그에 표시하지 않으며 일부 정크 로그도 포함합니다.( 10567)
* 기본 PDF | 폴더 프로필에 추가 옵션을 사용하여 출력 사전 설정을 만들 때 Null 포인터 예외가 발생하여 PDF 생성이 실패합니다. (10950)
* 기본 PDF | 테이블 헤더 회전 시 문제가 발생합니다. (10555)
* 기본 PDF | 중첩된 `<indexterm>`은(는) 기본 PDF 내보내기에서 중첩되지 않습니다. (10521)
* 기본 PDF | 부록의 중첩된 topicref는 모두 임시 HTML에서 h1로 변환됩니다. (10454)
* FrameMaker Publishing Server 2020을 사용하여 생성된 PDF에 대한 기준선 게시가 실패합니다. (10551)
* 기본 PDF | 이미지에 `xref`을(를) 추가해도 생성된 PDF의 이미지가 렌더링되지 않습니다. (11346)
* 기본 PDF | Image 태그는 모든 이미지에 display-inline 속성을 추가합니다. (10653)
* 기본 PDF | 초안 주석은 생성된 출력에서 기본적으로 숨겨집니다. (10560)
* 기본 PDF | navtitle은 topichead에 대해 적용되지 않습니다. (10509)
