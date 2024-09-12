---
title: 데이터 소스 커넥터를 등록하는 REST API
description: 데이터 소스 커넥터를 등록하는 REST API에 대해 알아봅니다
exl-id: e2811892-c3cf-41f5-94d8-c2b37823a53a
feature: Rest API Data Source
role: Developer
level: Experienced
source-git-commit: 45ae1471fe0f0586764ede9dd96530b7f75f69ee
workflow-type: tm+mt
source-wordcount: '81'
ht-degree: 7%

---

# 데이터 소스 커넥터를 등록하는 REST API {#id236LG0Y0CXA}

다음 REST API를 사용하면 데이터 소스 커넥터를 등록할 수 있습니다.

## 데이터 소스 커넥터 등록

데이터 소스 커넥터를 등록하는 GET 방법입니다.

**요청 URL**:

`http://server:port/bin/guides/v1/konnect/config/register?path=<uploaded file path>`

**매개 변수**:

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `path` | 문자열 | 예 | AEM 저장소의 경로를 가리키는 문자열입니다. `/content/dam or /var/dxml`의 경로일 수 있습니다. |

**예**:

`http://host:4502/bin/guides/v1/konnect/config/register?path=/var/dxml/konnect/jira.json`
