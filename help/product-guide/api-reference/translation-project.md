---
title: 번역 프로젝트 만들기
description: API 번역 프로젝트 만들기에 대해 알아보기
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 41dd3dee5f9d64fb5c58b5b302cc9759e48e3631
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 17%

---

# 번역 프로젝트 만들기

필요한 프로젝트 세부 정보를 수락하여 번역 프로젝트를 만드는 데 도움이 되는 POST 메서드입니다.

## 요청 URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/create`

## 요청 유형

POST

## 요청 매개 변수

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `type` | 문자열 | newTranslationProject, xliffTranslationProject, newMultiLingualTranslationProject, addToExistingProject, newScopingTranslationProject |
| `versionDetails`, `versionSelector` | 문자열 | 기준선, latestVersion, versionAsOfDate |
| `language` | 문자열 | 쉼표로 구분된 언어 &quot;de&quot;, &quot;fr&quot; |
| `map.id` | 문자열 | 번역할 소스 맵의 GUID |
| `map.path` | 문자열 | 번역할 소스 맵의 경로 |
| `referenceType` | 문자열 | 간접, 직접 |
| `fileType` | 문자열 | 맵, 주제, 기타 |
| `documentState` | 문자열 | 맵의 프로필에서 사용자가 할당한 목록 중 하나일 수 있습니다. |
| `translationStatus` | 문자열 | 동기화 중단, 동기화 중, 최신 상태, 최신 상태, 진행 중, 누락된 복사본, 없음, 해당 사항 없음 |

>[!NOTE]
>
>번역 프로젝트를 만들 때 `map.id` 또는 `map.path`을(를) 사용할 수 있습니다.

## 요청 예

```JSON
{
  "title": "Test Project 1 on Dec 5",
  "type": "newTranslationProject",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en",
      "path": "/content/dam/ajay-test/lang/en/m2.ditamap"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "latestVersion"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": [] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
   ]
```

## 응답 값

```JSON
{
  "executionId": "5c13c571-3407-46d5-8f45-50ea9e05a212",
  "path": "/content/projects/test_project_1_ondec5"
}
```

**응답 코드**

- 200 성공
- 400 잘못된 입력
- 401 무단 액세스
- 500 내부 서버 오류

## 샘플 요청

### 기존 프로젝트에 추가

```json
{
  "title": "Add to existing Project",
  "type": "addToExistingProject",
  "path": "/content/projects/test_project_1_existing",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "versionAsOfDate",
      "version": "2025-12-05T10:30:00+01:30"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": [] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
  ]
}
```

### 기준선이 있는 기존 프로젝트에 추가

```json
{
  "title": "Add to existin project Project with baseline",
  "type": "addToExistingProject",
  "path": "/content/projects/existing_project_path",
  "translationDetails": {
    "map": {
      "id": "GUID-06527014-062d-46dc-8fea-48b4b4497c51-en"
    },
    "languages": ["de"],
    "versionDetails": {
      "versionSelector": "baseline",
      "version": "test1"
    }
  },
  "filterDetails": [
    { "name": "referenceType", "values": ["Direct"] },
    { "name": "fileType", "values": [] },
    { "name": "documentState", "values": [] },
    { "name": "translationStatus", "values": [] }
  ]
}
```

## 번역 프로젝트 생성 상태

새로 생성된 번역 프로젝트의 번역 상태를 추적하는 GET API입니다.

## 요청 URL

`http://<aem-guides-server>:<port-number>/bin/guides/v1/translation/project/creationstatus`

## 요청 유형

GET

## 요청 매개 변수

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `path` | 문자열 | 프로젝트 경로 |
| `languageStatusMap` | 문자열 | 요청된 각 언어에 대해 진행 중, 완료됨, 실패, 건너뜀 등의 완료 상태가 반환됩니다 |


## 요청 예

```json
{
  "path": "/content/projects/test_project_1_ondec5",
  "languageStatusMap": {
    "de": "Completed"
  }
}
```



