---
title: 전환 워크플로우에 대한 REST API
description: 전환 워크플로우에 대한 REST API에 대해 알아봅니다
exl-id: f091782e-ab54-4db4-9018-9bcbff9da7b2
feature: Rest API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: e979823b7947b561165fde92023ae9c440182e94
workflow-type: tm+mt
source-wordcount: '391'
ht-degree: 9%

---

# 전환 워크플로우에 대한 REST API {#id175UB30E05Z}

다음 REST API를 사용하면 Word, HTML 및 InDesign 문서를 DITA 형식으로 변환할 수 있습니다.

## Word 문서 변환

Word 문서를 DITA 형식으로 변환하는 GET 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

**매개 변수**:

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| ``operation`` | 문자열 | 예 | 호출되는 작업의 이름입니다. 이 매개 변수의 값은 ``word2dita``입니다. <br> **참고:** 값은 대소문자를 구분하지 않습니다. |
| `inputFile` | 문자열 | 예 | AEM 저장소의 원본 Word 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 예 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `createRev` | 부울 | 예 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |
| `style2tagMap` | 문자열 | 예 | 변환에 사용될 스타일 매핑 파일의 절대 경로입니다. |

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.

## HTML 문서 변환

HTML 문서를 DITA 형식으로 변환하는 GET 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/conversion

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

InDesign 문서를 DITA 형식으로 변환하는 GET 방법입니다.

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
