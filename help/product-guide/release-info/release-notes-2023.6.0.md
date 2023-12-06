---
title: 릴리스 정보 | Adobe Experience Manager Guides, 2023년 6월 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항 및 Adobe Experience Manager Guides as a Cloud Service으로 2023년 6월 릴리스로 업그레이드하는 방법에 대해 알아보십시오
exl-id: df17ee33-9f50-4223-ab9f-a57a31097d22
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '1170'
ht-degree: 1%

---

# 2023년 6월 Adobe Experience Manager 가이드 as a Cloud Service 릴리스

이 릴리스 노트는 버전 2023년 6월 Adobe Experience Manager Guides(이후 설명됨)에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다. *AEM Guides as a Cloud Service*).

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [AEM Guides as a Cloud Service의 2023년 6월 릴리스의 새로운 기능](whats-new-2023.6.0.md).

## 2023년 6월 릴리스로 업그레이드

다음 단계를 수행하여 현재 AEM Guides as a Cloud Service 설정을 업그레이드하십시오.

1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. 업데이트 `<dox.version>` 의 속성 `/dox/dox.installer/pom.xml` Cloud Service 파일 Git 코드 2023.6.297로.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 2023년 6월 AEM Guides as a Cloud Service 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

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

(AEM Guides as a Cloud Service의 2022년 9월 릴리스 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행\ - `http://<server:port\>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 \|\| 예를 들면 다음과 같습니다. `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)


1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 호환성 매트릭스

이 섹션에서는 AEM Guides as a Cloud Service 2023년 6월 릴리스에서 지원하는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| AEM Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.06.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.06.0 | 2.9-uuid-2 | 2.9-uuid-2 | 2.3 | 2.3 |
|  |  |  |  |


## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

- 레이아웃 보기에서 작성자 또는 소스 보기로 전환하면 Navtitle이 content33에서 제거됩니다. (12174)
- DITA 맵을 클릭할 때 응용 프로그램 오류가 발생하는 경우가 있습니다. (11842)
- 웹 편집기 | 항목을 편집하는 동안 XML 편집기에 줄바꿈하지 않는 공백이 추가됩니다. (11786)
- 자산 UI | 목록 보기에서 오버레이된 사용 가능한 열을 병합할 수 없습니다. (11528)
- Keyref가 맵 보기에서 확인되지 않습니다. (11490)
- XML 편집기를 탐색할 때 상단 메뉴가 나타나지 않습니다. (10868)
- `conref` ph 태그에서 | 표시되는 찾아보기 대화 상자가 올바르지 않습니다. (9481)
- 다른 요소에 대한 로컬 링크는 웹 편집기에서 확인되지 않습니다. (8790)
- Matches() 함수가 schematron 기능에서 작동하지 않습니다. (11224)


### 관리

- 웹 편집기 UI의 보고서 탭에는 4.2 업그레이드 전에 생성된 이전 DITA 맵의 주제 목록이 표시되지 않습니다. (11708)

- 4.2 릴리스의 Assets UI Break에서 파일 업로드 버튼 기능. (11633)

### 게시

- 새로 고치거나 다시 시작한 Pod에서 임시 파일을 읽을 때 AEM 사이트에 게시하지 못합니다. (12113)
- 기본 PDF | brackets()가 있는 출력 클래스가 있는 콘텐츠를 게시하면 게시가 중지됩니다. (11936)
- JSON 출력 | 다음 속성 값을 갖는 메타데이터 매핑 `"value in spaces and double quotes"` 은 게시 오류로 이어집니다. (11933)
- 웹 편집기 | AEM 사전 설정에서 출력 경로 및 템플릿을 선택할 수 없습니다. (11530)
- 기본 PDF | 사용자 지정 특성이 임시 HTML 또는 PDF 엔진에 전파되지 않습니다. (DXML-12005)
- 기본 PDF | 큰 콘텐츠를 게시할 때 Java OutOfMemoryError가 발생합니다. (11789)
- JSON 출력 | `fmUuid` json의 jcr:content 노드에 있는 속성이 JSON 내의 &quot;id&quot;와 다릅니다. (11564)
- JSON 출력 | 동일한 파일 이름을 가진 맵과 주제가 있으면 맵에 대한 JSON이 제거됩니다. (11524)
- 기본 PDF | Xref가 Xref 레이블 대신 href 주제 제목의 콘텐츠를 인쇄하고 있습니다. (11322)
- 기본 PDF | PDF 템플릿 설정을 저장할 수 없습니다. (10751)
- 기본 PDF | 텍스트가 여러 xref를 포함할 때 열 너비를 넘어갑니다. (10876)
- 기본 PDF | `<note>``</note>` 요소가 해당 유형의 추가 스팬 제목을 생성하지 않습니다. (10549)
- 기본 PDF | 생성된 PDF에서 WCAG 2.0을 준수하도록 언어 메타데이터를 설정할 수 없습니다. (12296)



### 번역

- 2월 클라우드 릴리스(2302) 이후 모든 번역 콘텐츠가 동기화되지 않음 또는 누락된 사본을 표시합니다. (11834)

### 리뷰

- 새 리뷰 UI | 조건이 강조 표시되고, 숨기기 작업이 웹 편집기에서 작동하는 방식과 다릅니다. (11628)
