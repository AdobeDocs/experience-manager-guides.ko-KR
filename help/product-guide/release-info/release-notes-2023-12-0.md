---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2023년 12월 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항 및 Adobe Experience Manager Guides as a Cloud Service 2023년 12월 릴리스로 업그레이드하는 방법에 대해 알아보십시오.
feature: Release Notes
role: Leader
exl-id: 63efe42a-b817-49df-8f76-df8d7acf9194
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '1319'
ht-degree: 1%

---

# Adobe Experience Manager Guidesas a Cloud Service 의 12월 2023 릴리스

이 릴리스 노트는 2023년 12월 Adobe Experience Manager Guides as a Cloud Service 버전(*Experience Manager Guides as a Cloud Service*)에서 수정된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [Experience Manager Guidesas a Cloud Service 의 2023년 12월 릴리스의 새로운 기능](whats-new-2023-12-0.md)을 참조하세요.

## 2023년 12월 릴리스로 업그레이드

다음 단계를 수행하여 현재 Experience Manager Guides as a Cloud Service 설정을 업그레이드합니다.

1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. Cloud Service Git 코드의 `/dox/dox.installer/pom.xml` 파일에서 `<dox.version>` 속성을 2023.12.0.16으로 업데이트합니다.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 Experience Manager Guidesas a Cloud Service 의 2023년 12월 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(2023년 6월 Experience Manager Guides as a Cloud Service 릴리스 이전 버전인 경우에만)

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

이전 응답 JSON에서 키 `lockNodePath`은(는) 제출된 작업을 가리키는 리포지토리에 만들어진 노드로의 경로를 보유합니다. 작업이 완료되면 자동으로 삭제됩니다. 그런 다음 이 노드를 참조하여 작업 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

(2023년 6월 Experience Manager Guides as a Cloud Service 릴리스 이전 버전인 경우에만)

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 DITA 파일이 있는 경우 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`의 `queryLimitReads` 및 `queryLimitInMemory`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

   - Adobe Experience Manager Guides as a Cloud Service 설치 및 구성 섹션의 지침을 사용하여 구성 파일을 만듭니다. *구성 무시*
   - 구성 파일에서 `queryLimitReads` 및 `queryLimitInMemory` 옵션을 구성하려면 다음(속성) 세부 정보를 제공합니다.

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 값: 200000 기본값: 100000 |

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server>//bin/guides/reports/upgrade`.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 1단계에서 변경한 경우 `queryLimitReads`의 기본 또는 이전 기존 값으로 되돌립니다.

## 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(2023년 6월 Experience Manager Guides as a Cloud Service 릴리스 이전 버전인 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다.| 예: `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예, `http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test`. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.


1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.


## 호환성 매트릭스

이 섹션에서는 2023년 12월 Experience Manager Guides as a Cloud Service 릴리스에서 지원되는 소프트웨어 응용 프로그램에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| Experience Manager Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.12.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| Experience Manager Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.12.0 | 3.3-uuid.5 | 3.3-uuid.5 | 2.3 | 2.3 |
|  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service을 위한 Experience Manager Guides 구성 요소 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.



### 작성

- 웹 편집기 탭의 **Title**&#x200B;이(가) 점(.) 다음에 잘립니다. 표시합니다. (14372)
- Assets UI의 중복 맵 이름에 대한 오류 메시지가 업데이트되지 않습니다. (14320)
- 에셋 드래그 앤 드롭 중 버전 생성 논리에 오류가 발생합니다. (14291)
- 다시 사용할 수 있는 콘텐츠는 요소 ID를 건너뜁니다. (14213)
- **출력** 탭에서 **언어 변수** 패널을 숨기는 설정 컨트롤이 없습니다. (14194)
- 레이아웃 보기에서 특수 스키마를 사용하여 새 참조 또는 주제를 추가할 때 웹 편집기에서 애플리케이션 오류가 발생합니다. (14094)
- `<dlentry>` 또는 `<dt>` 요소에 대한 앵커 링크에 링크 텍스트가 표시되지 않습니다. (13543)
- 웹 편집기의 **즐겨찾기** 컬렉션을 로드하지 못했습니다. (13495)
- 공백이 있는 고유 ID로 만든 경우 인용 부호에 클릭 불가능한 링크가 표시됩니다. (13447)
- 북맵에 대한 **레이아웃** 보기에서 **오른쪽으로 이동**&#x200B;을 사용하여 선택한 챕터를 하위 요소가 작동하지 않도록 합니다. (12567)
- Google Chrome 및 Microsoft Edge 브라우저에서 XML 편집기의 미리 보기 창이 잘립니다. (10755)
- 웹 편집기에는 가능한 상위 요소 내에 요소를 래핑하는 기능이 없습니다. (8791)

### 게시

- Fmdita 구성 요소의 경로가 `delegator.jsp`로 하드코딩되어 있어 AEM Sites 구성 요소가 오버레이되지 않습니다. (13993)
- 기본 PDF 게시 출력의 PDF 반응기의 태그가 지정된 보기가 예상대로 작동하지 않습니다. (13622)
- 범위 피어 링크가 있는 큰 맵에 대해 데이터 저장소에 커밋할 때 AEM 사이트 게시에서 문제가 발생합니다. (13531)
- Experience Manager Guides 일괄 게시 대시보드를 사용하여 사이트를 활성화할 수 없습니다. (13439)
- 요소 레이블의 현지화가 AEM Sites 출력에서 제대로 작동하지 않습니다. (12144)
- 웹 편집기 UI를 통해 만든 폴더 프로필 수준 출력 사전 설정에서 **ditaval** 옵션이 누락되었습니다. (11903)

### 관리

- 대형 노드로 인해 AEM 클라우드 환경에 MongoWrite 예외가 발생합니다. (13509)

### 번역

- 자동 승인된 사람 번역에 대해 **승인/거부** 단추가 잘못 표시됩니다. (14318)
- 다국어화(i18n) 문제는 영어가 아닌 DITA 파일을 AEM 페이지로 변환하는 동안 발생합니다. (14286)
- 번역된 콘텐츠가 임시 번역 프로젝트에서 동기화되지 않으며 DITA XML 편집기 번역 마법사에 승인된 작업의 **진행 중** 상태가 잘못 표시됩니다. (9938)

### 접근성

- 주제가 주제 편집기에 갇히게 되어 작성자 캔버스 사용자 인터페이스를 탐색할 수 없습니다. (13517)

## 알려진 문제

Adobe은 2023년 12월 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.
- 2023년 12월 릴리스로 업그레이드할 때 &quot;잘못된 DTD 가져오기 오류&quot;가 간헐적으로 발생합니다.
