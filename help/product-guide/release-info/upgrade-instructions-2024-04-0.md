---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2024.04.0 릴리스의 업그레이드 지침 및 해결된 문제
description: 호환성 매트릭스와 Adobe Experience Manager Guides as a Cloud Service의 2024.04.0 릴리스로 업그레이드하는 방법에 대해 알아보십시오.
source-git-commit: 4c7421391922d276ef82515fb4b1cbdc2397e4ce
workflow-type: tm+mt
source-wordcount: '887'
ht-degree: 0%

---

# 2024.04.0 릴리스에 대한 업그레이드 지침

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service의 2024.04.0 릴리스에 대한 업그레이드 지침 및 호환성 매트릭스를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [2024.04.0 릴리스의 새로운 기능](whats-new-2024-04-0.md).

이 릴리스에서 수정된 문제 목록은 다음을 참조하십시오. [2024.04.0 릴리스의 문제가 해결되었습니다.](fixed-issues-2024-04-0.md).

## 호환성 매트릭스

이 섹션에서는 Experience Manager 가이드의 2024.04.0 릴리스에서 as a Cloud Service으로 지원되는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| Experience Manager 가이드 as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2024.04.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| Experience Manager 가이드 as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2024.04.0 | 3.5-uuid 1 | 3.5-uuid 1 | 2.3 | 2.3 |
|  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Experience Manager 가이드 구성 요소 Cloud Service 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 2024.04.0 릴리스로 업그레이드

Experience Manager 가이드는 현재 (최신) 릴리스의 Experience Manager as a Cloud Service 업그레이드 시 자동으로 업그레이드됩니다.


기존 릴리스에 대해 이전에 Experience Manager 안내서를 수행하지 않은 경우 as a Cloud Service으로 방문자에 대해 다음 단계를 수행하십시오.

### 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(2023년 6월 Experience Manager 안내서 as a Cloud Service 릴리스 이전 릴리스에 있는 경우에만)

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

이전 응답 JSON에서 키 `lockNodePath` 제출된 작업을 가리키는 저장소에 생성된 노드로의 경로를 유지합니다. 작업이 완료되면 자동으로 삭제되므로 이 노드를 참조하여 작업 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

### 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

(2023년 6월 Experience Manager 안내서 as a Cloud Service 릴리스 이전 릴리스에 있는 경우에만)

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

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류를 확인할 수 있습니다.

1. 의 기본값 또는 이전의 기존 값으로 되돌리기 `queryLimitReads` 1단계에서 변경한 경우.

### 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(2023년 6월 Experience Manager 안내서 as a Cloud Service 릴리스 이전 릴리스에 있는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행 - `http://<server:port>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다.| 예 : `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류를 확인할 수 있습니다.

### 을(를) 처리하는 단계 `'fmdita rewriter'` 충돌

Experience Manager 안내서에 [**사용자 정의 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 크로스 맵(두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하는 모듈입니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우 `'order'` 값: 50보다 큼, Experience Manager Guides sling 재작성기 사용 `'order'` 50. 재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 재작성 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html).

이 업그레이드 동안 다음 이후 `'order'` 값이 1000에서 50으로 변경되면 기존 사용자 지정 재작성기를 와 병합해야 합니다 `fmdita-rewriter`.

