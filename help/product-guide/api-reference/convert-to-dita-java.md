---
title: 전환 워크플로우에 대한 Java 기반 API
description: 전환 워크플로우를 위한 Java 기반 API에 대해 알아봅니다
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
TQID: 'https://experienceleague.adobe.com/gAntb7T-OGlwRNInxAsV8orxL3H9qL19Dsjwf5FZ14I'
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
feature_v2:
  - id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552e
    internal-label: APIs
  - id: c6d09140-3c91-45d3-b7ed-b681af752f43
    internal-label: APIs
subfeature_v2:
  - id: c2674c69-1bed-41fa-ba40-ab1a5382af59
    internal-label: Java Based API Conversion Workflow
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '326'
ht-degree: 3%
---
# 전환 워크플로우에 대한 Java 기반 API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guides에서 사용할 수 있는 Java 기반 API를 사용하여 사용자 지정 플러그인을 만들고 기본 제공 워크플로를 확장할 수 있습니다. 이 문서는 2024년 11월에 보관됩니다.
> Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)을(를) 참조하십시오.




다음 Java 기반 API를 사용하면 HTML 및 Word 문서를 DITA 형식으로 변환할 수 있습니다. 이러한 API는 번들 형태로 사용할 수 있습니다. 이러한 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

**번들 세부 정보**:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.2**

- 패키지: **com.adobe.fmdita.api.conversion**

- 클래스 세부 사항:

  ```JAVA
  public class ConversionUtils extends Object
  ```

  **ConversionUtils** 클래스에는 HTML 및 Word 문서를 DITA 형식으로 변환하는 메서드가 포함되어 있습니다.


## HTML 문서 변환

`convertHtmlToDita` 메서드는 HTML 문서를 DITA 형식으로 변환합니다.

**구문**:

```JAVA
public static void convertHtmlToDita(Session session, 
                  String inputFile, 
                  String destPath, 
                  boolean createRev) 
                  throws RepositoryException, WorkflowException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `inputFile` | 문자열 | AEM 저장소에 있는 소스 HTML 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `createRev` | 부울 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |

**예외**:
`RepositoryException`을(를) throw합니다.

## Word 문서 변환

``convertWordToDita`` 메서드는 Word 문서를 DITA 형식으로 변환합니다.

**구문**:

```JAVA
public static void convertWordToDita(Session session, 
                  String inputFile,
                  String destPath, 
                  String style2tagMap, 
                  boolean createRev) 
                  throws RepositoryException, WorkflowException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `inputFile` | 문자열 | AEM 저장소의 소스 Word 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `style2tagMap` | 문자열 | 변환에 사용될 스타일 매핑 파일의 절대 경로입니다. |
| `createRev` | 부울 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |

**예외**:
`RepositoryException`을(를) throw합니다.
