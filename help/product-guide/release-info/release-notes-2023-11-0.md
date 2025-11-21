---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2023년 11월 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항과 Adobe Experience Manager Guides as a Cloud Service 2023년 11월 릴리스로 업그레이드하는 방법에 대해 알아보십시오
exl-id: 80839890-075f-4187-a167-444c73215496
feature: Release Notes
role: Leader
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '1673'
ht-degree: 1%

---

# 2023년 11월 Adobe Experience Manager Guides as a Cloud Service 릴리스

이 릴리스 노트는 2023년 11월 Adobe Experience Manager Guides as a Cloud Service 버전(이후 *Experience Manager Guides as a Cloud Service*)에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다.

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [Experience Manager Guides as a Cloud Service의 2023년 11월 릴리스의 새로운 기능](whats-new-2023-11-0.md)을 참조하세요.

## 2023년 11월 릴리스로 업그레이드

다음 단계를 수행하여 현재 Experience Manager Guides as a Cloud Service 설정을 업그레이드합니다.

1. 클라우드 서비스의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 클라우드 서비스 파이프라인에 구성된 분기로 전환합니다.
2. 클라우드 서비스 Git 코드의 `<dox.version>` 파일에서 `/dox/dox.installer/pom.xml` 속성을 2023.11.0.406으로 업데이트합니다.
3. 변경 사항을 커밋하고 클라우드 서비스 파이프라인을 실행하여 2023년 11월 Experience Manager Guides as a Cloud Service 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(Experience Manager Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

설치를 완료한 후 트리거를 적중하여 번역 작업을 시작하도록 선택할 수 있습니다.

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

이전 응답 JSON에서 키 `lockNodePath`은(는) 제출된 작업을 가리키는 리포지토리에 만들어진 노드로의 경로를 보유합니다. 작업이 완료되면 자동으로 삭제됩니다. 그런 다음 이 노드를 작업 상태로 참조할 수 있습니다.

다음 단계로 진행하기 전에 이 작업이 완료될 때까지 기다리십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

```
GET
http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json
```

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

(Experience Manager Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 DITA 파일이 있는 경우 `queryLimitReads`의 `queryLimitInMemory` 및 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

   - Adobe Experience Manager Guides as a Cloud Service 설치 및 구성 의 *구성 재정의* 섹션에 제공된 지침을 사용하여 구성 파일을 만듭니다.
   - 구성 파일에서 `queryLimitReads` 및 `queryLimitInMemory` 옵션을 구성하려면 다음(속성) 세부 정보를 제공합니다.

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitInMemory | 값: 200000 기본값: 100000 |

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>//bin/guides/reports/upgrade`.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 1단계에서 변경한 경우 `queryLimitReads`의 기본 또는 이전 기존 값으로 되돌립니다.

## 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(Experience Manager Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증으로 서버에 대한 POST 요청을 실행합니다. `http://<server:port>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예를 들어, `http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test`과 같이 입력합니다. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점인 `http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}`(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`)에 보낼 수 있습니다.


1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.


## 호환성 매트릭스

이 섹션에서는 2023년 11월 Experience Manager Guides as a Cloud Service 릴리스에서 지원되는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| Experience Manager Guides Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.11.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| Experience Manager Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.11.0 | 3.2-uuid 5 | 3.2-uuid 5 | 2.3 | 2.3 |
|  |  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| Cloud Service용 Experience Manager Guides 구성 요소 콘텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.



### 작성

- 항목을 저장할 때 conref `<ph>` 요소 뒤에 있는 공백이 사라집니다. (13642)
- 사후 처리가 완료되기 전에 DITA 파일을 저장하려고 하면 응용 프로그램 오류가 발생합니다. (13571)
- 항목 제목에 슬래시 `/`이(가) 포함되어 있으면 편집기의 탭에 그 뒤에 오는 문자만 표시됩니다. (13455)
- 편집기에서 미리 보기를 표시해도 이미지 미리 보기는 사라지지 않습니다. (13454)
- 다른 주제에서 루트 맵 정의 키를 사용할 때는 키워드 삽입 팝업이 표시되지 않습니다. (12950)
- [버전 기록] 패널에서 매우 큰 그래픽을 미리 보면 닫기 아이콘이 표시되지 않습니다. (12867)
- 기준선에 대한 **Version Created On** 열의 시간대를 수정할 수 없습니다. (12711)
- Assets UI의 **버전 기록** 패널에 **현재** 필드에 대한 잘못된 타임스탬프가 표시됩니다. (12624)
- 파일 이름이 숫자로 시작하는 템플릿에서 DITA 파일을 만들면 네임스페이스 오류가 발생합니다. (12188)
- 웹 편집기에서 **태그를 삽입할 때**&#x200B;키 참조`varname` 창이 열립니다. (10940)
- Zip 파일은 웹 편집기에서 인식되지 않으며 드래그하여 놓을 수 없습니다. (12709)
- 일부 속성이 적용된 콘텐츠가 작성자 또는 미리보기 모드에서 강조 표시되지 않습니다. (11063)
- 항목을 편집한 후 닫으면 폴더 보기로 돌아가는 대신 AEM 홈 페이지로 리디렉션됩니다. (13306)
- 클라우드 서비스에 복사하여 붙여넣은 파일의 후 처리에서 지연이 발생합니다. (12457)
- 사용자가 사용자 환경 설정에서 명시적으로 설정하지 않았더라도 Rootmap 설정은 웹 편집기에서 유지됩니다. (11551)


### 게시

- 검색 결과에 나열된 파일에 대해 컨텐츠 조각 기능으로 게시 기능이 작동하지 않습니다. (14090)
- 기본 PDF 게시에서 템플릿 레이아웃의 배경색을 선택하려면 `None`(으)로 되돌릴 때 페이지를 다시 로드해야 합니다. (13621)
- AEM 사이트 게시의 범위 피어 링크를 사용하여 큰 DITA 맵에 대한 데이터 저장소를 커밋하는 도중 문제가 발생했습니다. (13530)
- 기본 PDF 게시에서는 머리글과 바닥글의 이미지에 대체 텍스트가 표시되지 않으므로 접근성이 저하됩니다. (12829)
- 기본 PDF의 페이지 레이아웃 복제에서는 확장이 자동으로 추가되지 않아 작동하지 않습니다. (12534)
- 기본 PDF 게시로 PDF 출력을 생성할 때 파일 이름은 마침표 뒤에 잘립니다. (13620)
- 기본 PDF 게시에 사용된 템플릿의 페이지 레이아웃 도구 모음에 있는 **콘텐츠 편집** 옵션에 대해 잘못된 아이콘과 도구 설명이 표시됩니다. (13492)
- 최종 출력에서 사용자 지정 메타데이터를 사용할 수 없습니다. (12116)
- fmdita 재작성기가 사용자의 재작성기 구성과 충돌하여 링크 대신 긴 URL이 표시됩니다. (12076)
- AEM 사이트 사전 설정에서 **모든 주제에 대해 별도의 PDF을 생성**&#x200B;하는 옵션은 작동하지 않습니다. (11555)
- 기본 PDF 게시에서는 CMYK 색상 공간 변환을 지원하지 않습니다. (10754)
- 동적 기준 요소 호출에서 제목 대신 이름을 사용하므로 DITA 맵 API 내보내기가 실패합니다. (14268)

### 관리

- GUID가 없는 자체 참조 링크가 있는 DITA 파일을 복사 붙여넣을 때 콘텐츠 참조가 끊어졌습니다. (13540)
- 웹 편집기에서 기준선은 선택한 버전의 DITA 파일 대신 이전 버전에 대한 제목을 표시합니다. (13444)
- 웹 편집기 UI의 **보고서** 탭에 2023년 7월 Experience Manager Guides as a Cloud Service 업그레이드 전에 생성된 이전 DITA 맵의 주제 목록이 표시되지 않습니다. (11852)
- 큰 DITA 맵에 대한 조건 사전 설정이 만들어지지 않습니다. (10936)
- 자체 참조 링크가 보고서의 끊어진 링크 목록 아래에 나타납니다. (13539)

### 검토

- 웹 편집기의 이전 및 현재 버전에 대한 나란히 검토 패널은 2023년 10월 Experience Manager Guides as a Cloud Service 릴리스에서 올바르지 않습니다. (14156)
- **검토** 워크플로에 대한 전자 메일 템플릿 사용자 지정이 노드를 오버레이하는 데 작동하지 않습니다. (13954)
- Experience Manager Guides의 [검토] 페이지에서 **닫기** 단추를 누르면 사용자가 AEM 홈 페이지로 이동합니다. (13535)
- 한국어로 코드 조각을 만드는 동안 끊어진 문자가 나타납니다. (13489)
- Experience Manager Guides 검토 화면의 한국어 첨부 파일을 클릭할 수 없습니다. (13436)
- 검토 및 공동 작업 화면에서 맵 제목이 잘리고 전체 제목을 볼 수 있는 옵션이 없습니다. (13012)

### 번역

- 자동 승인이 때때로 작동하지 않으며 **번역 상태**&#x200B;에 잘못된 값이 설정된 경우 예외가 발생합니다. (13607)
- 번역 대시보드에서 내보낸 기준선은 실패하고 대상 언어로 열리지 않습니다. (12993)

## 알려진 문제

Adobe은 2023년 11월 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- AEM Site 출력에 대한 선택적 주제 재생성이 실패합니다.
