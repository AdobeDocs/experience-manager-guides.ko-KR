---
title: 기준 및 레이블로 작동하는 Java 기반 API
description: 기준 및 레이블로 작동하는 Java 기반 API에 대해 알아보기
exl-id: 0e2ba1bb-f5bf-44da-848a-a55385460c83
feature: Java-Based API Baseline
role: Developer
level: Experienced
source-git-commit: 1860525120edc4df33b898841b9073311d3031c5
workflow-type: tm+mt
source-wordcount: '890'
ht-degree: 2%

---

# 기준 및 레이블로 작동하는 Java 기반 API {#id175UB30E05Z}

다음 Java 기반 API를 사용하면 기준선을 만들고 기준선의 파일에 레이블을 추가할 수 있습니다. 이러한 API는 번들 형태로 사용할 수 있습니다. 이러한 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.5**

- 패키지: **com.adobe.fmdita.api.baselines**

- 클래스 세부 사항:

  ```JAVA
  public class BaselineUtils extends Object
  ```

  **BaselineUtils** 클래스에는 기준선을 만들고 기준선의 파일에 레이블을 적용하는 메서드가 포함되어 있습니다.


## 기준선 만들기

기준 요소 만들기 방법에는 XML Documentation 솔루션 버전 3.5용 버전과 3.5 이전 버전 \(버전 3.4, 3.3 및 3.2\ 포함)의 두 버전이 있습니다. 버전 3.5 API를 사용하면 맵 파일에서 레이블, 직접 참조 및 간접 참조를 사용하여 기준선을 만들 수 있습니다.

다른 버전의 API는 날짜 및 시간을 사용하여 기준선을 만듭니다. 이 API는 XML Documentation 솔루션 3.4, 3.3 또는 3.2를 사용하는 시스템과의 역호환성을 위해 유지됩니다.

**구문 \(버전 3.5의 경우)**:

```JAVA
public static String createBaseline(Session session, 
String sourcePath, 
String baselineTitle, 
String label, 
LinkedHashMap directContext, 
LinkedHashMap indirectContext) 
throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. 사용자 세션에는 DITA 맵에 대한 읽기 및 쓰기 권한과 베이스라인에 포함된 모든 참조 파일에 대한 읽기 권한이 모두 있어야 합니다. |
| `sourcePath` | 문자열 | AEM 저장소의 DITA 맵 파일의 절대 경로입니다. |
| `baselineTitle` | 문자열 | 기준선에 대한 고유한 제목. |
| `label` | 문자열 | 지정된 레이블이 적용된 주제의 버전을 선택합니다. |
| `directContext` | LinkedHashMap&lt;문자열, 개체\> | 직접 참조된 항목 \(content\)을 기반으로 구성을 선택하면 맵에서 언급한 순서가 따라 버전 확인이 수행됩니다. <br> 맵의 모든 키에 대해 반복한 후 버전을 찾을 수 없으면 기준 만들기 프로세스가 실패합니다. <br> HashMap이 비어 있으면 \(기본적으로 비어 있고 null 맵이 아닌 맵을 보냅니다\) 기본적으로 <br>`directContext.put("label", label);` <br>(으)로 채워집니다. `directContext.put("latest", true);` <br> 기준 요소 만들기에서 지정된 레이블의 버전만 선택하고 해당 버전이 없으면 실패하도록 하려면 `label` 키와 기준 요소를 만들 레이블을 지정합니다. |
| `indirectContext` | LinkedHashMap&lt;문자열, 개체\> | 간접적으로 참조된 항목 \(참조된 콘텐츠\)을 기반으로 구성을 선택하면 맵에 언급된 순서를 따라 버전을 확인합니다. <br> 맵의 모든 키에 대해 반복한 후 버전을 찾을 수 없으면 기준 만들기 프로세스가 실패합니다. <br> HashMap이 비어 있으면 \(기본적으로 비어 있고 null 맵이 아님\) 기본적으로 다음과 같이 채워집니다. <br>`indirectContext.put("label", label);` <br>`indirectContext.put "pickAutomatically", null);` <br> 자동으로 버전을 선택하는 대신 최신 버전이 되게 하려면 <br>`indirectContext.put("pickAutomatically", null);` <br> _포함:_ <br>`indirectContext.put("latest", true)` |

**반환**:
기준 요소 이름 - JCR 저장소에 있는 기준 요소의 노드 이름입니다. 새로 만든 베이스라인의 제목이 DITA 맵의 베이스라인 페이지에 표시됩니다.

**예외**:
제목이 같은 기준선이 이미 있으면 ``ItemExistExceptiom``을(를) 표시합니다.

**구문 \(버전 3.4, 3.3 및 3.2\)**

```JAVA
public static String createBaseline
(Session session, 
String sourcePath, 
String baselineTitle, 
Date versionDate) throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. 사용자 세션에는 DITA 맵에 대한 읽기 및 쓰기 권한과 베이스라인에 포함된 모든 참조 파일에 대한 읽기 권한이 모두 있어야 합니다. |
| ``sourcePath`` | 문자열 | AEM 저장소의 DITA 맵 파일의 절대 경로입니다. |
| `baselineTitle` | 문자열 | 기준선에 대한 고유한 제목. |
| `versionDate` | 날짜 | 기준선은 이 날짜의 항목 버전\(DITA 맵에서 직접 참조\)을 사용하여 작성됩니다. 날짜를 `d-MM-yyyy H:mm` 형식으로 지정하십시오. |

**반환**:
기준 요소 이름 - JCR 저장소에 있는 기준 요소의 노드 이름입니다. 새로 만든 베이스라인의 제목이 DITA 맵의 베이스라인 페이지에 표시됩니다.

**예외**:
``RepositoryException.`` 처리

## 레이블 적용

``applyLabel`` 메서드는 기준선에 있는 파일에 하나 이상의 레이블을 적용합니다.

**구문**:

```JAVA
public static void applyLabel(Session session,
                  String sourcePath,
                  String baselineName,
                  String label)
                  throws RepositoryException, WorkflowException, Exception
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | AEM 저장소의 DITA 맵 파일의 절대 경로입니다. |
| ``baselineName`` | 문자열 | 레이블을 적용할 기준 노드의 이름입니다. 기준선 노드의 이름을 가져오려면 [\#id185NFF0085Z](#id185NFF0085Z) 메서드를 사용하거나 CRXDE에서 DITA 맵의 기준선 노드를 확인하십시오.<br> **참고:** 레이블은 기준선에 있는 맵 파일에서 직접 참조되는 파일 버전에 적용됩니다. |
| `label` | 문자열 | 기준선의 파일에 적용되는 레이블입니다. 레이블에 다음 문자가 포함되어 있지 않은지 확인합니다. &amp;sol; &amp;comma; &amp;colon; &amp;comma; &amp;lbrack; &amp;comma; &amp;comma; &amp;comma; &amp;vert; &amp;comma; &amp;ast; <br> 여러 레이블을 설정하려면 레이블(예: Label1, Label2)을 쉼표로 구분하십시오. |

**예외**:
`RepositoryException`을(를) throw합니다.

## 레이블 삭제

``deleteLabel`` 메서드는 기준선에 있는 파일에서 하나 이상의 레이블을 삭제합니다.

**구문**:

```JAVA
public static Map
<String, String> deleteLabel(Session session, 
String sourcePath, 
String baselineName, 
String label) throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | AEM 저장소의 DITA 맵 파일의 절대 경로입니다. |
| `baselineName` | 문자열 | 레이블을 삭제해야 하는 기준 요소의 이름입니다. <br> **참고:** 레이블은 기준선의 맵 파일에서 직접 참조되는 파일 버전에서 삭제됩니다. |
| `label` | 문자열 | 기준선에 있는 파일에서 삭제할 레이블입니다. <br> 여러 레이블을 삭제하려면 쉼표로 레이블을 구분하십시오(예: Label1, Label2). |

**반환**:
기준선에 있는 모든 파일에 대한 `path:deletedlabels`의 *key:value* 쌍이 있는 맵입니다.

**예외**:
``RepositoryException`, `VersionException`, `Exception``을(를) throw합니다.
