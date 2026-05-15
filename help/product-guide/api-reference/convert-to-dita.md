---
title: 전환 워크플로우에 대한 REST API
description: 전환 워크플로우에 대한 REST API에 대해 알아봅니다
exl-id: f091782e-ab54-4db4-9018-9bcbff9da7b2
feature: Rest API Conversion Workflow
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/EG-ugDPVpviaEI1SXHOaFLPfChkzqQ8tSkPV-LZ-X3o
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 402
ht-degree: 9%

---

# 전환 워크플로우에 대한 REST API {#id175UB30E05Z}

다음 REST API를 사용하면 Word, HTML 및 InDesign 문서를 DITA 형식으로 변환할 수 있습니다.

## Word 문서 변환

Word 문서를 DITA 형식으로 변환하는 GET 메서드.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| ``operation`` | 문자열 | 예 | 호출되는 작업의 이름입니다. 이 매개 변수의 값은 ``word2dita``입니다. <br> **참고:** 값은 대소문자를 구분하지 않습니다. |
| `inputFile` | 문자열 | 예 | AEM 저장소의 소스 Word 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 예 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `createRev` | 부울 | 예 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |
| `style2tagMap` | 문자열 | 예 | 변환에 사용될 스타일 매핑 파일의 절대 경로입니다. |

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.

## HTML 문서 변환

HTML 문서를 DITA 형식으로 변환하는 GET 메서드입니다.

**요청 URL**:

http://*<aem-guides-server\>*: *<port-number\>*/bin/fmdita/conversion

**매개 변수**:

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `operation` | 문자열 | 예 | 호출되는 작업의 이름입니다. 이 매개 변수의 값은 ``html2dita``입니다. <br> **참고:** 값은 대소문자를 구분하지 않습니다. |
| `inputFile` | 문자열 | 예 | AEM 저장소에 있는 소스 HTML 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 예 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `createRev` | 부울 | 예 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |

**응답 값**:

HTTP 200 \(Successful\) 응답을 반환합니다.

## InDesign 문서 변환

InDesign 문서를 DITA 형식으로 변환하는 GET 메서드입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

**매개 변수**:

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| ``operation`` | 문자열 | 예 | 호출되는 작업의 이름입니다. 이 매개 변수의 값은 ``idml2dita``입니다. <br> **참고:** 값은 대소문자를 구분하지 않습니다. |
| `inputFile` | 문자열 | 예 | AEM 저장소에 있는 소스 InDesign 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 예 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `createRev` | 부울 | 예 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.
