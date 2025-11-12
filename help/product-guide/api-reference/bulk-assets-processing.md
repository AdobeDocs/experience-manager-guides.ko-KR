---
title: 자산에 대한 일괄 처리를 시작하기 위한 API
description: 자산에 대한 일괄 처리를 시작하기 위한 API에 대해 알아봅니다.
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: e2eca63a5dd56e358aeea047b37f4b0f88dc720b
workflow-type: tm+mt
source-wordcount: '542'
ht-degree: 8%

---

# 자산에 대한 일괄 처리를 시작하기 위한 API

지정된 경로에 대해 일괄 에셋 처리를 시작하는 POST 메서드입니다. 이 API는 JCR 기반 및 데이터베이스 기반 에셋 처리를 모두 지원합니다. 지정된 경로와 해당 하위 경로 아래의 모든 자산을 처리하는 비동기 작업을 시작합니다. 시작되면 API는 작업 상태를 추적하는 데 사용할 수 있는 고유한 처리 ID를 반환합니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `path` | 문자열 | 예 | 처리할 AEM 저장소의 폴더 또는 에셋의 절대 경로입니다. |
| `excludedPaths` | 문자열 | 아니요 | 처리에서 제외할 경로 목록 |
| `type` | 문자열 | 예 | 수행할 처리 유형입니다. 예: ASSET_PROCESSING. |

**요청 예제**

```JSON
{
  "path": "/content/dam/status-fetch1",
  "excludedPaths": [
    "content/dam/status-fetch1/excluded-folder"
  ],
  "type": "ASSET_PROCESSING"
}
```

**응답 값**

비동기 작업 상태를 가져오기 위해 폴링할 processingId입니다.

```JSON
{
  "processingId": "akjhdfalkj1132"
}
```

**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류

## 작업 상태 확인

이전에 시작된 에셋 처리 작업의 현재 상태를 검색하는 GET 메서드입니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/status`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `processingId` | 문자열 | 예 | 상태를 쿼리하는 작업의 고유 ID. |

**응답 예**

```JSON
{
  "processingId": "string",
  "path": "string",
  "excludedPaths": ["string"],
  "status": "WAITING",
  "triggeredCount": 0,
  "startedAt": 0,
  "completedAt": 0,
  "hasLogs": true,
  "createdBy": "string",
  "type": "ASSET_PROCESSING",
  "migrationSet": {
    "totalFiles": 0,
    "calculationStatus": "WAITING"
  },
  "eta": {
    "value": 0,
    "unit": "string"
  },
  "comments": "string",
  "restartable": true,
  "resumable": true,
  "cancellable": true
}
```

**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류

## 작업 로그 보기

주어진 작업 ID에 대한 로그를 검색하는 GET 메서드입니다. 이 API는 에셋 처리 작업의 로그를 가져옵니다. 처리 ID는 필수입니다. API는 오프셋 및 제한 매개변수와 테일링 전략을 제공합니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `processingId` | 문자열 | 예 | 로그를 볼 작업에 대한 고유 ID. |
| `offset` | 정수 | 아니요 | 로그를 읽어야 하는 시작점(줄 번호)입니다. 첫 번째 N줄을 건너뛰기 위한 페이지 매김에 사용됩니다. |
| `limit` | 정수 | 아니요 | 가져올 최대 로그 라인 수. |
| `tail` | 정수 | 아니요 | 끝에서 검색할 로그 라인 수입니다. |


**응답 예**

```JSON
{
  "lines": [
    "string"
  ],
  "limit": 0,
  "offset": 0,
  "hasMore": true
}
```

**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류


## 작업 로그 다운로드

주어진 작업에 대한 로그 파일을 ZIP으로 다운로드하는 GET 방법입니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/logs/download`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `processingId` | 문자열 | 예 | 로그 파일을 다운로드해야 하는 작업의 고유 ID입니다. |


**응답 예**

```JSON
{
  "logFilePaths": [
    "string"
  ]
}
 
```

**응답 코드**

- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류

## 작업 취소

진행 중인 일괄 에셋 처리 요청을 취소하는 POST API입니다. 작업을 찾을 수 없으면 API가 오류를 반환합니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/cancel`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `processingId` | 문자열 | 예 | 상태를 쿼리하는 작업의 고유 ID. |


**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류


## 작업 다시 시작

이전에 취소되었거나 실패한 일괄 에셋 처리 요청을 다시 시작하는 POST API입니다. 마지막 체크포인트에서 처리가 다시 시작됩니다. 작업을 찾을 수 없거나 현재 실행 중인 경우 API가 오류를 반환합니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/resume`

**요청 매개 변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `processingId` | 문자열 | 예 | 상태를 쿼리하는 작업의 고유 ID. |


**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류

## 작업 내역 보기

자산 후처리의 마지막 &#39;N&#39; 실행을 반환하는 GET API입니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>/bin/guides/v1/assets/process/history`

**요청 매개 변수**

없음. 이 GET 요청은 입력 매개 변수 없이 작업 기록을 검색합니다.

**응답 예**

```JSON
{
  "executionHistory": [
    {
      "processingId": "165f1de6-68c4-4dcd-9223-2b7242b62306",
      "path": "/content/dam/22858",
      "status": "SUCCESS",
      "triggeredCount": 6,
      "startedAt": 1761291362776,
      "completedAt": 1761291364026,
      "hasLogs": true,
      "createdBy": "user",
      "type": "ASSET_PROCESSING",
      "migrationSet": {
        "totalFiles": 6,
        "calculationStatus": "SUCCESS"
      },
      "eta": {
        "value": 0,
        "unit": "SECONDS"
      },
      "comments": "",
      "filter": {
        "fileTypes": [],
        "filterProcessedAssets": false
      },
      "cancellable": false,
      "resumable": false,
      "restartable": true
    }
  ]
}
```



