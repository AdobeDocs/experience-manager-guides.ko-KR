---
title: 전환 워크플로우에 대한 Java 기반 API
description: 전환 워크플로우를 위한 Java 기반 API에 대해 알아봅니다
exl-id: 807d9ffa-23e3-476c-992d-c1f495233892
feature: Java-Based API Conversion Workflow
role: Developer
level: Experienced
source-git-commit: 83966cc9187b13dd3b5956821e0aa038b41db28e
workflow-type: tm+mt
source-wordcount: '259'
ht-degree: 5%

---

# 전환 워크플로우에 대한 Java 기반 API {#id175UB30E05Z}

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
| `inputFile` | 문자열 | AEM 저장소의 원본 Word 파일의 절대 경로입니다. |
| `destPath` | 문자열 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `style2tagMap` | 문자열 | 변환에 사용될 스타일 매핑 파일의 절대 경로입니다. |
| `createRev` | 부울 | 지정한 대상에 파일 수정 버전을 만들지 \( `true`\) 여부를 지정하십시오. \( `false`\) 대상 위치에 변환된 파일의 기존 버전이 포함된 경우에만 이 값이 고려됩니다. |

**예외**:
`RepositoryException`을(를) throw합니다.
