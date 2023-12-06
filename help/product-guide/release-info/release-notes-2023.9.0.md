---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2023년 9월 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항과 Adobe Experience Manager Guides as a Cloud Service으로 2023년 9월 릴리스로 업그레이드하는 방법에 대해 알아보십시오
exl-id: 795b86a0-e763-404a-a4bb-35d3d2a42672
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '1486'
ht-degree: 0%

---

# 2023년 9월 Adobe Experience Manager 가이드 as a Cloud Service 릴리스

이 릴리스 노트는 2023년 9월 Adobe Experience Manager Guides(이후 설명됨)의 버전에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다. *AEM Guides as a Cloud Service*).

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [AEM Guides as a Cloud Service의 2023년 9월 릴리스의 새로운 기능](whats-new-2023.9.0.md).

## 2023년 9월 릴리스로 업그레이드

다음 단계를 수행하여 현재 AEM Guides as a Cloud Service 설정을 업그레이드하십시오.

1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. 업데이트 `<dox.version>` 의 속성 `/dox/dox.installer/pom.xml` Cloud Service 파일 Git 코드 2023.9.0.359입니다.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 2023년 9월 AEM Guides as a Cloud Service 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(AEM Guides as a Cloud Service의 2023년 6월 이전 버전을 사용하는 경우에만)

설치를 완료한 후 트리거를 적중하여 번역 작업을 시작하도록 선택할 수 있습니다.

POST:

```
http://localhost:4503/bin/guides/script/start?jobType=translation-map-upgrade
```

응답:

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/translation-map-upgrade/1683190032886",
"status": "SCHEDULED"
}
```

이전 응답 JSON에서 키 `lockNodePath` 제출된 작업을 가리키는 저장소에 생성된 노드로의 경로를 유지합니다. 작업이 완료되면 자동으로 삭제되며, 그때까지 이 노드를 참조하여 작업의 현재 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

(AEM Guides as a Cloud Service의 2023년 6월 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000dita 파일이 있으면 `queryLimitReads` 아래에 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 이동한 다음 재배포합니다.

   - 에 제공된 지침 사용 *구성 재정의* 구성 파일을 만들려면 [Adobe Experience Manager Guides as a Cloud Service 설치 및 구성]의 섹션을 참조하십시오.
   - 구성 파일에서 다음 (속성) 세부 정보를 제공하여 queryLimitReads 옵션을 구성합니다.

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행 - `http://<server:port>//bin/guides/reports/upgrade`.

1. API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 의 기본값 또는 이전의 기존 값으로 되돌리기 `queryLimitReads` 1단계에서 변경한 경우.

## 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(AEM Guides as a Cloud Service의 2023년 6월 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행\ - `http://<server:port\>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 \|\| 예를 들면 다음과 같습니다. `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)


1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 호환성 매트릭스

이 섹션에서는 2023년 9월 AEM Guides as a Cloud Service 릴리스에서 지원하는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 살펴봅니다.

### FrameMaker 및 FrameMaker Publishing Server

| AEM Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.09.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.09.0 | 3.1-uuid 17 | 3.1-uuid 17 | 2.3 | 2.3 |
|  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| AEM Guides 구성 요소 Cloud Service 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

- 파일 잠금 해제 옵션 및 저장 안 함 옵션이 선택되어 있어도 웹 편집기에서 주제 파일이 잠금 해제되지 않습니다. (12558)
- 체크 인하기 전에 변경 내용을 취소하기 위해 [아니요] 옵션을 선택했지만 웹 편집기에서 파일을 체크 아웃할 수 없습니다. (12557)
- 웹 편집기 내의 기본 도구 모음에 있는 파일 잠금 및 잠금 해제 아이콘의 도구 설명이 저장소 보기에 표시된 아이콘과 일치하지 않습니다.(12555)
- 맵 보기에서 아직 체크 아웃되지 않은 웹 편집기의 파일에 대해 체크 아웃 취소 및 잠금 해제 옵션이 표시됩니다. (12556)
- 기존 &quot;topicref&quot; 링크에서 PDF 자산을 선택할 수 없습니다. (12477)
- 저장소 보기에서 검색/필터 기능을 사용한 후에는 주제나 이미지를 드래그할 수 없습니다. (12396)
- 검색된 파일을 한 개 열면 찾기 및 바꾸기 패널에서 검색 결과가 비활성화됩니다. (12142)
- 측면 키보드의 &quot;8&quot; 숫자 키가 AEM Guides 편집기에서 작동하지 않습니다. (12106)

- 접두사는 웹 편집기의 미리보기 모드에서 복제됩니다. (13133)
- `Choicetable` 행이 표시되지 않거나 선택할 수 없습니다. (12616)
- 웹 편집기는 사용자 지정 스키마를 사용하여 항목을 만들 때 특정 시나리오에서 유효성 검사 오류를 발생시킵니다. (12576)
- 맵 템플릿에서 맵을 만들 때 개별 주제 템플릿 참조에서 콘텐츠 폴더에 복사본을 만들지 않습니다. (12150)
- DITA 맵의 검색 상자에 닫기 단추가 없습니다. (11867)
- 웹 편집기에 긴 파일을 저장할 때 `DirtyChecker` 은(는) 긴 스택 추적과 함께 예외를 throw하고 로그 파일을 채웁니다. (11860)
- 쓰기 권한으로 맵을 만들 수 있지만 DITA 주제를 만들려면 해당 폴더 노드에 대한 삭제 권한이 필요합니다. (11706)
- 슬래시가 있으면 웹 편집기에 잘못된 제목이 표시됩니다. (10949)


### 관리

- DITA 맵 메타데이터 속성의 &quot;제목&quot; 필드는 이 덮어씁니다. `<title>` 요소에 사용됩니다. (10702)
- 주제 ID가 GUID와 동일하지 않으면 콘텐츠 참조가 끊어진 복사 붙여넣기 DITA 파일입니다. (12614)
- 동적 기준선에서 레이블 목록은 DITA 맵의 작업 복사본에 대한 직접 참조에서 가져오지 않습니다. (11917)

### 게시

- 기본 PDF 사전 설정 이름을 바꿀 때 게시가 실패합니다. (12564)
- 네이티브 PDF 템플릿을 복제하면 제공된 사용자 지정 템플릿 위치가 아닌 기본 템플릿 위치에 복제됩니다. (12563)

- 기본 PDF | 여러 xref를 포함하면 텍스트가 열 너비를 넘어갑니다. (13004)
- 기본 PDF | 주제와 제목에 동일한 ID가 있으면 잘못된 PDF 출력 생성이 발생합니다. (12644)
- 기본 PDF | outputclass를 상위에 추가할 때 `<topicref>` 요소는 DITA 맵에서 사용자 지정 스타일을 outputclass에 적용하고, 스타일 지정은 섹션 제목을 포함하여 주제 본문 내의 요소에 적용됩니다.(12166)
- DITA 맵에 여러 개의 ditavalrefs가 있는 경우 증분 게시가 작동하지 않습니다. (12117)
- AEM 사이트 | keydef가 항목을 변수로 가리키는 맵을 만들고 processing-role=resource-only를 추가하면 예기치 않은 페이지가 만들어집니다. (12099)
- AEM의 DAM에 있는 에셋이 AEM 사이트 이외의 출력에 사용되는 경우 메타데이터 &quot;jcr:createdBy&quot;는 게시자의 이름이나 DITA 맵 또는 주제를 마지막으로 수정한 사용자의 이름을 반영하지 않습니다. (12090)
- AEM Sites | navtitle에 topichead가 포함된 DITA 맵(지원되지 않는 문자 포함)으로 인해 페이지 URL이 잘못되었습니다. (11978)
- 기본 PDF | Frontmatter 및 Backmatter에서 topichead/topicmeta/navtitle을 지원할 때 문제가 발생합니다. (11969)
- 기본 PDF | 대용량 문서에 대한 PDF을 생성하는 데 시간이 오래 걸립니다. (11955)
- 기본 PDF | 사전 설정 이름을 바꾸면 PDF 출력을 생성하는 동안 NullPointerException이 발생합니다. (11889)
- 다음 `<conref>` 콘텐츠는 PDF 출력에 표시되지 않습니다. (11131)
- 추가 공백이 `<div>` 페이지 레이아웃 편집기에서 작성자와 소스 보기 간에 전환하는 데 사용되는 요소입니다. (10750)
- AEM Cloud Manager에 복제된 콘텐츠는 게시 인스턴스에 표시되지 않습니다. (9564)

### 번역

- 번역에 대해 이름이 변경된 베이스라인을 내보내는 프로세스가 실패합니다. (12993)
- 소스 파일의 제목 대신 번역된 파일의 제목이 표시됩니다. (11630)
