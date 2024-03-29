---
title: 전환 워크플로우에 대한 REST API
description: 전환 워크플로우에 대한 REST API에 대해 알아봅니다
exl-id: f091782e-ab54-4db4-9018-9bcbff9da7b2
feature: Rest API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '391'
ht-degree: 0%

---

# 전환 워크플로우에 대한 REST API {#id175UB30E05Z}

다음 REST API를 사용하면 Word, HTML 및 InDesign 문서를 DITA 형식으로 변환할 수 있습니다.

## Word 문서 변환

Word 문서를 DITA 형식으로 변환하는 GET 방법입니다.

**요청 URL**: http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/conversion

**매개 변수**: |이름|유형|필수|설명| -------- ------------------- |``operation``|문자열|예|호출되는 작업의 이름. 이 매개 변수의 값은 다음과 같습니다. ``word2dita``. <br> **참고:** 값은 대/소문자를 구분하지 않습니다. | |`inputFile`|문자열|예|AEM 저장소에 있는 원본 Word 파일의 절대 경로입니다.| |`destPath`|문자열|예|변환된 DITA 파일이 저장되는 대상 위치의 절대 경로입니다.| |`createRev`|부울|예|파일의 수정 버전을 만들지 여부를 지정합니다. \( `true`\) 지정한 대상에 있거나 없습니다. \( `false`\). 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다.| |`style2tagMap`|문자열|예|변환에 사용할 스타일 매핑 파일의 절대 경로입니다.|

**응답 값**: HTTP 200 \(Success\) 응답을 반환합니다.

## HTML 문서 변환

HTML 문서를 DITA 형식으로 변환하는 GET 방법입니다.

**요청 URL**: http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/conversion

**매개 변수**: |이름|유형|필수|설명| -------- ------------------- |`operation`|문자열|예|호출되는 작업의 이름. 이 매개 변수의 값은 다음과 같습니다. ``html2dita``. <br> **참고:** 값은 대/소문자를 구분하지 않습니다.| |`inputFile`|문자열|예|AEM 저장소에 있는 원본 HTML 파일의 절대 경로입니다.| |`destPath`|문자열|예|변환된 DITA 파일이 저장되는 대상 위치의 절대 경로입니다.| |`createRev`|부울|예|파일의 수정 버전을 만들지 여부를 지정합니다. \( `true`\) 지정한 대상에 있거나 없습니다. \( `false`\). 이는 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 고려됩니다.|

**응답 값**: HTTP 200 \(Success\) 응답을 반환합니다.

## InDesign 문서 변환

InDesign 문서를 DITA 형식으로 변환하는 GET 방법입니다.

**요청 URL**: http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/conversion

**매개 변수**: |이름|유형|필수|설명| -------- ------------------- |``operation``|문자열|예|호출되는 작업의 이름. 이 매개 변수의 값은 다음과 같습니다. ``idml2dita``. <br> **참고:** 값은 대/소문자를 구분하지 않습니다.| |`inputFile`|문자열|예|AEM 저장소에 있는 원본 InDesign 파일의 절대 경로입니다.| |`destPath`|문자열|예|변환된 DITA 파일이 저장되는 대상 위치의 절대 경로입니다.| |`createRev`|부울|예|파일의 수정 버전을 만들지 여부를 지정합니다. \( `true`\) 지정한 대상에 있거나 없습니다. \( `false`\). 이는 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 고려됩니다.|

**응답 값**: HTTP 200 \(Success\) 응답을 반환합니다.
