---
title: 릴리스 정보 | 2023년 10월 Adobe Experience Manager Guides 릴리스의 업그레이드 지침 및 해결된 문제
description: 버그 수정 사항 및 Adobe Experience Manager Guides as a Cloud Service으로 2023년 10월 릴리스로 업그레이드하는 방법에 대해 알아보십시오
exl-id: 536d2ec2-31a0-4533-9c29-16a27525acca
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '1045'
ht-degree: 1%

---

# 2023년 10월 Adobe Experience Manager as a Cloud Service 릴리스

이 릴리스 노트는 2023년 10월 Adobe Experience Manager 안내서 버전에서 해결된 업그레이드 지침, 호환성 매트릭스 및 문제를 다룹니다(나중에 설명). *AEM Guides as a Cloud Service*).

새로운 기능 및 향상된 기능에 대한 자세한 내용은 [AEM Guides as a Cloud Service의 2023년 10월 릴리스의 새로운 기능](whats-new-2023.10.0.md).

## 2023년 10월 릴리스로 업그레이드

다음 단계를 수행하여 현재 AEM Guides as a Cloud Service 설정을 업그레이드하십시오.

1. Cloud Service의 Git 코드를 체크아웃하고 업그레이드하려는 환경에 해당하는 Cloud Service 파이프라인에 구성된 분기로 전환합니다.
2. 업데이트 `<dox.version>` 의 속성 `/dox/dox.installer/pom.xml` Cloud Service 파일 Git 코드 2023.10.0.373으로.
3. 변경 사항을 커밋하고 Cloud Service 파이프라인을 실행하여 2023년 10월 AEM Guides as a Cloud Service 릴리스로 업그레이드합니다.

## 서블릿을 통해 스크립트 트리거를 활성화하는 단계

(AEM Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

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

(AEM Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 DITA 파일이 있는 경우 `queryLimitReads` 아래에 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService` 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 이동한 다음 재배포합니다.

   - 에 나와 있는 지침을 사용하십시오. *구성 재정의* 구성 파일을 만들려면 [Adobe Experience Manager Guides as a Cloud Service 설치 및 구성]의 섹션을 참조하십시오.
   - 구성 파일에서 다음 (속성) 세부 정보를 제공하여 queryLimitReads 옵션을 구성합니다.

     | PID | 속성 키 | 속성 값 |
     |---|---|---|
     | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 기본값: 100000 |

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행 - `http://<server:port>//bin/guides/reports/upgrade`.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port>/bin/guides/reports/upgrade?jobId= {jobId}`
(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)

1. 작업이 완료되면 이전 GET 요청이 성공으로 응답합니다. 어떤 이유로 작업이 실패하면 서버 로그에서 오류가 표시될 수 있습니다.

1. 의 기본값 또는 이전의 기존 값으로 되돌리기 `queryLimitReads` 1단계에서 변경한 경우.

## 보고서 탭 아래에 있는 새 찾기 및 바꾸기 및 주제 목록을 사용할 기존 콘텐츠를 색인화하는 단계입니다.

(AEM Guides as a Cloud Service의 2023년 6월 릴리스 이전 버전을 사용하는 경우에만)

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 보고서 탭 아래의 맵 수준 및 주제 목록에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. 올바른 인증을 사용하여 서버에 대한 POST 요청 실행\ - `http://<server:port\>/bin/guides/map-find/indexing`. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 \|\| 예를 들면 다음과 같습니다. `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

1. 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

1. API가 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다. `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)


1. 작업이 완료되면 이전 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 호환성 매트릭스

이 섹션에서는 2023년 10월 AEM Guides as a Cloud Service 릴리스에서 지원하는 소프트웨어 애플리케이션에 대한 호환성 매트릭스를 나열합니다.

### FrameMaker 및 FrameMaker Publishing Server

| AEM Guides as a Cloud 릴리스 | FMPS | FrameMaker |
| --- | --- | --- |
| 2023.10.0 | 호환되지 않음 | 2022년 이상 |
| | | |


### 산소 연결기

| AEM Guides as a Cloud 릴리스 | 산소 커넥터 창 | 산소 커넥터 Mac | Oxygen 창에서 편집 | Oxygen Mac에서 편집 |
| --- | --- | --- | --- | --- |
| 2023.10.0 | 3.2-uuid 5 | 3.2-uuid 5 | 2.3 | 2.3 |
|  |  |  |  |


### 기술 자료 템플릿 버전

| 구성 요소 패키지 이름 | 구성 요소 버전 | 템플릿 버전 |
|---|---|---|
| AEM Guides 구성 요소 Cloud Service 컨텐츠 패키지 | dxml-components.all-1.2.2 | aem-site-template-dxml.all-1.0.15 |

## 해결된 문제

다양한 영역에서 수정된 버그는 다음과 같습니다.

### 작성

- 오후 시간은 다음에 설정되지 않습니다. **날짜** 를 사용하여 기준선을 생성합니다. (12712)
- 에 JSON 코드를 붙여넣을 수 없음 `<codeblock>` 웹 편집기의 요소입니다. (12326)
- 저장하지 않은 버전 변경 사항 및 해당 지표는 큰 파일에 대해 표시되지 않습니다. (11784)
- 한국어로 편집하는 동안 첫 번째 문자가 기본값으로 변경됩니다. (10049)


### 게시

- 기본 PDF | PDF 출력이 생성될 때 주제의 순서가 수정되지 않습니다. (13157)
- 기본 PDF| 사용할 수 있는 기본 스타일 태그가 없습니다. `<p>`요소를 생성하지 않습니다. (12559)
- 기본 PDF | 컨텐츠 영역에 적용된 인라인 스타일은 앞뒤의 주제에 적용되지 않습니다. (13510)
- 다음 `DeliveryTarget` AEM Site 출력 생성 시 속성이 전파되지 않습니다.  (13132)
- 다음 **게시** 특정 오류가 있는 콘텐츠에 대한 AEM 사이트 출력을 생성하는 도중 워크플로우가 중단되었습니다. (12000)

### 관리

- 버전 내역은 `dc:format` 자산에 대한 속성이 없습니다. (10463)


### 리뷰

- 항목에 대한 검토에 잘못된 주석이 표시됩니다. (13453)



### 번역

- 에서 내보낸 기준선 **번역** 대시보드가 실패하고 타겟 언어로 열리지 않습니다. (13466)

- 선택한 기존 번역 프로젝트에 새 작업을 추가하는 대신 새 번역 프로젝트가 만들어집니다.  (10214)

## 알려진 문제

Adobe은 2023년 10월 릴리스에 대해 다음과 같은 알려진 문제를 확인했습니다.

- 콘텐츠 조각 다시 게시가 실패했습니다.
