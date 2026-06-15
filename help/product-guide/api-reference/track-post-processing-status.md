---
title: 폴더 또는 자산에 대한 사후 처리를 추적하기 위한 API
description: 폴더 또는 에셋에 대한 사후 처리를 추적하는 API에 대해 알아보기
feature: Post-Processing Event Handler
role: Developer
level: Experienced
exl-id: f902fac1-2717-4696-a835-c4b0bb8add3d
TQID: https://experienceleague.adobe.com/Lyv-S5o-Z40bMqqIHhbxKrsmn9CCqHRnqnpiq91EjGU
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 1d80ca88a3a6637a118657367b86b499675f6d0e
workflow-type: tm+mt
source-wordcount: 150
ht-degree: 10%

---

# 폴더 또는 에셋의 사후 처리 상태를 추적하는 API

다음은 자산의 상태를 가져오기 위해 비동기 작업을 시작하는 POST 메서드입니다.

## 안내서에서 에셋 상태 찾기

**요청 URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status `

**매개변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `path` | 문자열 | 예 | 상태를 가져와야 하는 폴더 또는 자산 경로입니다. |
| `excludedPaths` | 문자열 | 아니요 | 위 목록에서 제외할 폴더 경로입니다. |

```JSON
{ 

    "paths": [ 

        "/content/dam/status-fetch1", 

        "/content/dam/status-fetch2" 

    ], 

    "excludedPaths": [ 

        "content/dam/status-fetch1/excluded-folder" 

    ] 

} 
```

**응답 값**
비동기 작업의 상태를 가져오기 위해 폴링할 jobId입니다.

```JSON
{ 

  "jobId": "akjhdfalkj1132", 

  "status": "WAITING", 

 

} 
```

## Poller API

위 API에 의해 실행된 비동기 작업의 상태를 가져오는 GET 메서드입니다.

**요청 URL**

`http://<aem-guides-server>:<port-number>bin/guides/v1/assets/status`

**매개변수**

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `jobId` | 문자열 | 예 | 위 API에서 반환된 작업 ID입니다. |

**응답 값**

에셋 및 해당 상태 목록.

```JSON
{ 

  "jobId": " akjhdfalkj1132", 

  "status": "SUCCESS", 

  "assets": [ 

    { 

      "path": "/content/dam/status-fetch1/a.dita", 

      "uuid": "GUID-1293914ansd", 

      "status": "SUCCESS", 

      "exists": true 

    }, 

    { 

      "path": "/content/dam/status-fetch1/b.dita", 

      "uuid": "GUID-1883241", 

      "status": "FAILURE", 

      "exists": true 

    } 

 

  ] 

} 
```

**상태 값:** 성공, 실패, 처리, 보류 중
