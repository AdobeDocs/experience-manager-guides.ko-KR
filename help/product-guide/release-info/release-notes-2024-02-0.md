---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024년 2월 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항과 Adobe Experience Manager Guides as a Cloud Service으로 2024년 2월 릴리스로 업그레이드하는 방법에 대해 알아보십시오.
source-git-commit: 6d8c01f20f7b59fed92c404561b647d9ebecb050
workflow-type: tm+mt
source-wordcount: '1311'
ht-degree: 0%

---

# 2024년 2월 Adobe Experience Manager Guides as a Cloud Service 릴리스

이 릴리스 노트는 2024년 2월 Adobe Experience Manager Guides as a Cloud Service 버전(이후 설명됨)에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다. *Experience Manager 가이드 as a Cloud Service*).

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [Experience Manager 가이드의 2024년 2월 릴리스의 새로운 기능 as a Cloud Service](whats-new-2024-02-0.md).

## 2024년 2월 릴리스로 업그레이드

다음 단계를 수행하여 현재 Experience Manager 가이드 as a Cloud Service 설정을 업그레이드합니다.

1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. 업데이트 `<dox.version>` 의 속성 `/dox/dox.installer/pom.xml` 2024.02.0.15에 대한 Cloud Service Git 코드 파일입니다.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 2024년 2월 Experience Manager 가이드 as a Cloud Service 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(Experience Manager 가이드의 2023년 6월 릴리스 이전 버전을 as a Cloud Service으로 사용하는 경우에만)

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

이전 응답 JSON에서 키 `lockNodePath` 제출된 작업을 가리키는 저장소에 생성된 노드로의 경로를 유지합니다. 작업이 완료되면 자동으로 삭제됩니다. 그런 다음 이 노드를 참조하여 작업 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

(Experience Manager 가이드의 2023년 6월 릴리스 이전 버전을 as a Cloud Service으로 사용하는 경우에만)

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 DITA 파일이 있는 경우 `queryLimitReads` 및 `queryLimitInMemory` 아래에 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 이동한 다음 재배포합니다.

   - 에 나와 있는 지침을 사용하십시오. *구성 재정의* 구성 파일을 만들려면 [Adobe Experience Manager Guides as a Cloud Service 설치 및 구성]의 섹션을 참조하십시오.
   - 구성 파일에서 다음 (속성) 세부 사항을 입력하여 `queryLimitReads` 및 `queryLimitInMemory` 옵션:

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 값: 200000 기본값: 100000 |

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행 - `http://<server>//bin/guides/reports/upgrade`.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 의 기본값 또는 이전의 기존 값으로 되돌리기 `queryLimitReads` 1단계에서 변경한 경우.

## 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(Experience Manager 가이드의 2023년 6월 릴리스 이전 버전을 as a Cloud Service으로 사용하는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행 - `http://<server:port>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다.| 예 : `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`)

1. API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 1단계에서 변경한 경우 queryLimitReads의 기본값 또는 이전의 기존 값으로 되돌립니다.

## 을(를) 처리하는 단계 `'fmdita rewriter'` 충돌

Experience Manager 안내서에 [**사용자 정의 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 크로스 맵(두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하는 모듈입니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우 `'order'` 값: 50보다 큼, Experience Manager Guides sling 재작성기 사용 `'order'` 50.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 재작성 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html).

이 업그레이드 동안 다음 이후 `'order'` 값이 1000에서 50으로 변경되면 기존 사용자 지정 재작성기를 와 병합해야 합니다 `'fmdita-rewriter'`.


## 호환성 매트릭스

이 섹션에서는 2024년 2월 Experience Manager 가이드의 as a Cloud Service 릴리스에서 지원되는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| Experience Manager 가이드 as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2024.02.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| Experience Manager 가이드 as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2024.02.0 | 3.1-uuid.17 | 3.1-uuid.17 | 2.3 | 2.3 |
|  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Experience Manager 가이드 구성 요소 Cloud Service 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

- 편집기의 맞춤법 검사에서는 제안 사항을 선택할 수 없습니다. (15045)
- 전역 탐색 버튼이 작동하지 않고 대시보드가 로드되지 않습니다. (14968)
- 웹 편집기에서 맵 다운로드 기능이 다운로드할 준비가 되면 팝업 알림을 트리거하지 못합니다. (14626)
- 웹 편집기에서 맵 다운로드 기능이 기준선이 있는 맵을 다운로드하지 못합니다. (14622)
- Experience Manager 가이드 as a Cloud Service 버전 2310에서 잘못된 DTD 오류가 발생했습니다. (14482)
- 저장소에서 용어집 주제를 용어집 맵으로 드래그하면 `topicref`. (10767)
- Adobe Experience Manager Guides 버전 4.3.1을 다시 설치하면 웹 편집기가 제거됩니다. (14519)
- 버전 4.3.1의 설치 관리자에서 필터 충돌이 발생하여 `apps/cq/core/content/projects/properties`. (14517)
- 코드 조각의 미리 보기 화면이 고정되어 있습니다. (14840)

### 게시

- 기본 PDF 게시에서 조건 사전 설정 내의 사용자 지정 특성은 기본 PDF 게시에서 작동하지 않습니다. (14943)
- 에서 사용자 지정 템플릿을 추가할 수 없음 **출력** 편집기의 탭입니다. (14846)
- **AEM 사이트** 빈 템플릿 경로로 인해 사전 설정이 작동하지 않습니다. (14804)
- MathML 방정식이 포함된 주제가 있는 DITA 맵에 대한 AEM 사이트 재생성이 실패합니다. (14790)
- 기본 PDF 게시에서 PDF 생성으로 인해 다음에 대한 종속성을 가져오는 동안 오류가 발생했습니다. `Node.js` 게시. (14445)
- AEM 사전 설정에서 외부 템플릿을 선택할 수 없음 `/content` 웹 편집기의 계층 구조. (14260)
- AEM Sites 출력에서 의 스타일 또는 줄 바꿈이 손실되었습니다. `<lines>` 하위 요소가 있는 요소.(12542)
- 최종 출력에서 사용자 지정 메타데이터를 사용할 수 없습니다. (12116)
- 버전 4.3.1로 업그레이드할 때 일부 예외는 기본 PDF 노드에서 발생합니다. (14492)


### 관리

- **기준선 필터** 웹 편집기에서 파일이 파일 이름으로 작동하지 않습니다. (13486)
- 성능을 향상하기 위해 상위 DITA 맵의 색인화를 비활성화하면 특정 기능의 기능에 영향을 줄 수 있습니다.(12213)
- 의 레이블 `labels.json` 파일이 웹 편집기에서 임의의 순서로 나타납니다. (10508)

### 검토

- 마우스 오른쪽 버튼 클릭 컨텍스트 메뉴가 다음 경우에 작동하지 않음 **Accept** 또는 **거부** 변경 사항을 추적합니다. (14607)
- Adobe Experience Manager Guides 버전 4.3.1에서 검토 화면의 DITA 주제를 닫으려면 전환하지 않습니다. (14537)
- 검토 워크플로우에 대한 이메일 템플릿 사용자 지정은 오버레이에서 작동하지 않습니다. (13954)

## 알려진 문제

Adobe은 2024년 2월 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 버전 1.0은 복제된 DITA 파일의 UI에 표시되지 않습니다.
