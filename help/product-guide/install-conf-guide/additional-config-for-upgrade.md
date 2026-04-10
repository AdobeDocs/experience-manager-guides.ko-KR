---
title: 클라우드 서비스 업그레이드를 위한 추가 구성
description: 클라우드 서비스 업그레이드를 위한 추가 구성에 대해 알아봅니다
source-git-commit: 453da51a42984b912547570f2e1de70806b41171
workflow-type: tm+mt
source-wordcount: '849'
ht-degree: 0%

---

# AEM Guides as Cloud Service 업그레이드를 위한 추가 구성

>[!INFO]
>
>이 문서는 사용자 지정 폴더 프로필 설정(`ui_config.json`)을 구성한 경우에 적용됩니다. 모든 업그레이드 후 최신 변경 사항과의 호환성을 보장하기 위해 필요에 따라 설정을 검토하고 수정합니다.

업그레이드하는 버전에 따라 최신 Cloud Service 버전에 도입된 변경 사항을 통합하려면 추가 구성 단계가 필요할 수 있습니다.

일부 구성은 특정 버전에만 적용됩니다. 아래 구성 섹션을 참조하고 설정에 적용할 수 있는 필수 구성을 적용하십시오.

## 모든 출력 사전 설정에 대해 DITAVAL 파일에 검색 필터를 적용하는 단계

필터가 제대로 작동하는지 확인하려면 ui_config.json을 업데이트합니다. 아래와 같이 **browseFilters** > **DITA가 아닌 파일** > **Ditaval 파일**&#x200B;에 나열된 속성을 변경합니다.

```
{
  "title": "Ditaval Files",
  "property": "LOWER_NAME",
  "operation": "like",
  "value": ".ditaval"
}
```

## 콘텐츠 조각에 대한 B-트리 마이그레이션을 수행하는 단계

콘텐츠 조각에 대한 참조가 표시되지 않으면 마이그레이션 작업을 실행하도록 선택할 수 있습니다.

게시물:

```
http://localhost:4503/bin/guides/script/start?jobType=cf-reference-store-btree-migration
```


응답:

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886",
"status": "SCHEDULED"
}
```

이전 응답인 JSON에서 키 `lockNodePath`은(는) 리포지토리에 만들어진 노드에 대한 경로를 보유하며, 이 경로는 제출된 작업을 가리킵니다. 작업이 완료되면 자동으로 삭제됩니다. 작업 상태에 대해서는 이 노드를 참조할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
>노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

GET:

```
http://<aem_domain>/var/dxml/executor-locks/cf-reference-store-btree-migration/1683190032886.json
```

## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../install-conf-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오. 재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `fmdita-rewriter`과(와) 병합해야 합니다.

## 2023년 6월 이전 버전에 적용할 수 있는 구성

다음 구성은 2023년 6월 이전에 릴리스된 Experience Manager Guides as a Cloud Service 버전을 사용하는 경우에만 필요합니다. 아래의 관련 섹션을 확장하여 필요한 설정을 적용하고 필요한 업데이트와 호환성을 확인합니다.

+++보고서 탭 아래의 새 찾기 및 바꾸기 및 항목 목록을 사용할 기존 콘텐츠를 색인화하는 절차
기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 인덱싱됩니다. 예: `https://<Server:port>/bin/guides/map-find/indexing?paths=<path of the MAP in repository>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예를 들어, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`과 같이 입력합니다. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점인 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.

1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

+++

+++끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차 
기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 DITA 파일이 있는 경우 `queryLimitReads`의 `queryLimitInMemory` 및 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

   - Adobe Experience Manager Guides as a Cloud Service 설치 및 구성 의 *구성 재정의* 섹션에 제공된 지침을 사용하여 구성 파일을 만듭니다.
   - 구성 파일에서 `queryLimitReads` 및 `queryLimitInMemory` 옵션을 구성하려면 다음(속성) 세부 정보를 제공합니다.

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 값: 200000 기본값: 100000 |

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server>//bin/guides/reports/upgrade`.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류를 확인할 수 있습니다.

1. 1단계에서 변경한 경우 `queryLimitReads`의 기본 또는 이전 기존 값으로 되돌립니다.

+++

+++서블릿을 통해 스크립트 트리거를 활성화하는 단계
설치를 완료한 후 번역 작업을 시작하도록 선택할 수 있습니다.

게시물:

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

이전 응답 JSON에서 키 `lockNodePath`은(는) 제출된 작업을 가리키는 리포지토리에 만들어진 노드로의 경로를 보유합니다. 작업이 완료되면 자동으로 삭제되므로 이 노드를 참조하여 작업 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

+++
