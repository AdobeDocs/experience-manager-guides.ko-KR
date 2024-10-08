---
title: DITA 맵에서 작동하는 Java 기반 API
description: DITA 맵에서 작동하는 Java 기반 API에 대해 알아보기
exl-id: bd91fc90-75f8-487c-99d1-2637e9cf9924
feature: Java-Based API Dita Map
role: Developer
level: Experienced
source-git-commit: 8c80a4da8e61909aab0f2db81ef97149774b36c4
workflow-type: tm+mt
source-wordcount: '1068'
ht-degree: 2%

---

# DITA 맵에서 작동하는 Java 기반 API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guides에서 사용할 수 있는 Java 기반 API를 사용하여 사용자 지정 플러그인을 만들고 기본 제공 워크플로를 확장할 수 있습니다. 이 문서는 2024년 11월에 보관됩니다.
> Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)을(를) 참조하십시오.



다음 Java 기반 API를 사용하면 AEM Guides에서 DITA 맵으로 작업할 수 있습니다. 이러한 API는 번들 형태로 사용할 수 있습니다. 이러한 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.2**

- 패키지: **com.adobe.fmdita.api.maps**

- 클래스 세부 사항:

  ```JAVA
  public class MapUtilities extends Object
  ```

  MapUtilities 클래스에는 DITA 맵 파일에서 메타데이터 정보를 검색하는 메서드가 포함되어 있습니다.


## 종속 항목이 있는 DITA 맵 다운로드

`zipMapWithDependents` 메서드는 참조된 주제, 하위 맵, 이미지 및 DTD와 같은 모든 종속 항목과 함께 DITA 맵을 포함하는 .zip 파일을 만듭니다. DITA 맵에 대한 .zip 파일은 지정된 기준선을 기반으로 생성됩니다.

또한 동일한 구조 \(상위 및 하위 폴더\)를 유지하거나 모든 종속 파일에 대해 단일 폴더 내에 플랫 파일 구조를 만들 수 있습니다.

>[!IMPORTANT]
>
> 종속 파일이 누락된 경우 API에서 예외가 발생하고 .zip 파일을 만들지 못합니다.

**구문**:

```JAVA
public static void zipMapWithDependents(Session session, 
                     String sourcePath, 
                     String baseline, 
                     OutputStream outputStream,
                     boolean flatFS) 
                     throws RepositoryException, IOException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | 다운로드해야 하는 DITA 맵 파일의 경로 \(AEM 저장소\). |
| `outputStream` | java.io.OutputStream | ZIP을 쓸 스트림입니다. |
| `baseline` | 문자열 | 버전이 지정된 콘텐츠를 검색하는 데 사용되는 베이스라인의 제목입니다. <br> **참고:** 값은 대/소문자를 구분합니다. |
| 플랫 FS | 부울 | \(선택 사항\) true로 설정하면 파일의 플랫 구조가 ZIP 파일에 반환됩니다. 예를 들어 DITA 맵이 여러 폴더의 콘텐츠를 참조하는 경우 참조된 모든 파일을 단일 폴더로 가져옵니다. 이름이 같은 파일이 있는 경우 숫자 접미사를 추가하여 해당 파일의 이름을 바꿉니다. 플랫 폴더 구조에서 파일의 새 위치를 기반으로 업데이트되므로 모든 참조 \(DITA 맵 및 주제\)가 자동으로 처리됩니다. false로 설정하면 폴더 구조가 ZIP 파일에서 그대로 유지됩니다. DITA 맵이 여러 위치의 파일을 참조하는 경우 이러한 모든 위치도 ZIP 파일에 생성됩니다. ZIP 파일을 복원하면 대상 위치에 정확한 폴더 구조가 생성됩니다. <br> 이 매개 변수의 기본값은 false입니다. |

**반환**:
ZIP의 내용은 `outputStream`에 기록됩니다.

**예외**:
``javax.jcr.RepositoryException``, `java.io.IOException`을(를) throw합니다.

## 종속 항목이 있는 DITA 맵 다운로드 \(비동기적으로\)

또는 비동기 모드에서 종속 항목이 있는 DITA 맵을 다운로드할 수 있습니다. 이 방법은 더 큰 DITA 맵에 더 유용합니다.

`zipMapWithDependents` 메서드는 참조된 주제, 하위 맵, 이미지 및 DTD와 같은 모든 종속 항목과 함께 DITA 맵을 포함하는 .zip 파일을 만듭니다. DITA 맵에 대한 .zip 파일은 지정된 기준선을 기반으로 생성됩니다.

또한 동일한 구조 \(상위 및 하위 폴더\)를 유지하거나 모든 종속 파일에 대해 단일 폴더 내에 플랫 파일 구조를 만들 수 있습니다.

>[!NOTE]
>
> 이 노드는 정의된 경우 output.history.purgetime 구성을 기반으로 잠시 후 자동으로 삭제되거나 기본값으로 5일 삭제됩니다.

**구문**:

```JAVA
public static CompletableFuture<Node> zipMapWithDependencies(Session session,
                     String sourcePath, 
                     String baseline, 
                     boolean flatFS) 
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | 다운로드해야 하는 DITA 맵 파일의 경로 \(AEM 저장소\). |
| `baseline` | 문자열 | 버전이 지정된 콘텐츠를 검색하는 데 사용되는 베이스라인의 제목입니다. <br> **참고:** 값은 대/소문자를 구분합니다. |
| 플랫 FS | 부울 | \(선택 사항\) true로 설정하면 파일의 플랫 구조가 ZIP 파일에 반환됩니다. 예를 들어 DITA 맵이 여러 폴더의 콘텐츠를 참조하는 경우 참조된 모든 파일을 단일 폴더로 가져옵니다. 이름이 같은 파일이 있는 경우 숫자 접미사를 추가하여 해당 파일의 이름을 바꿉니다. 플랫 폴더 구조에서 파일의 새 위치를 기반으로 업데이트되므로 모든 참조 \(DITA 맵 및 주제\)가 자동으로 처리됩니다. false로 설정하면 폴더 구조가 ZIP 파일에서 그대로 유지됩니다. DITA 맵이 여러 위치의 파일을 참조하는 경우 이러한 모든 위치도 ZIP 파일에 생성됩니다. ZIP 파일을 복원하면 대상 위치에 정확한 폴더 구조가 생성됩니다.<br> 이 매개 변수의 기본값은 false입니다. |

**반환**:
zip 파일의 노드가 `CompletableFuture` 클래스에서 래핑됩니다. 사용자는 비동기적으로 계속 처리할 수 있으며 향후 `.get()` 메서드를 사용하여 노드가 필요할 때 스레드를 차단할 수 있습니다. 반환된 값도 오류로 끝날 수 있으며 `.exceptionally()` 메서드로 처리할 수 있습니다.

## 기준선 목록 가져오기

``getBaselineList`` 메서드는 지정된 DITA 맵에 대해 존재하는 모든 기준선 목록을 검색합니다.

**구문**:

```JAVA
public static List<HashMap<String,String>> getBaselineList( 
                  javax.jcr.Session session, 
                  String sourcePath)
                  throws javax.jcr.RepositoryException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | 베이스라인 정보를 검색할 DITA 맵 파일의 경로 \(AEM 저장소\). |

**반환**:
`HashMap`개 개체 목록입니다. 각 `HashMap` 개체는 기준선을 나타내며 기준선의 이름과 제목을 포함합니다.

**예외**:
``javax.jcr.RepositoryException``을(를) throw합니다.

## 조건부 사전 설정 목록 가져오기

``getConditionalPresetList`` 메서드는 지정된 DITA 맵에 대해 존재하는 모든 조건부 사전 설정 목록을 검색합니다.

**구문**:

```JAVA
public static List<HashMap<String,String>> getConditionalPresetList (
                  javax.jcr.Session session,
                  String sourcePath)
                  throws javax.jcr.RepositoryException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | 조건부 사전 설정 정보를 검색할 DITA 맵 파일의 경로 \(AEM 저장소\). |

**반환**:
`HashMap`개 개체 목록입니다. 각 `HashMap` 개체는 조건부 사전 설정을 나타내며 조건부 사전 설정의 이름과 제목을 포함합니다.

**예외**:
``javax.jcr.RepositoryException``을(를) throw합니다.

## 조건부 사전 설정에 대한 DITAVAL 파일 정보 가져오기

``getDitavalFromConditionalPreset`` 메서드는 지정된 DITA 맵에 대한 조건부 사전 설정에 해당하는 DITAVAL 파일의 경로를 검색합니다.

**구문**:

```JAVA
public static String getDitavalFromConditionalPreset
    (Session session,
    String sourcePath, 
    String cpName) throws RepositoryException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| `sourcePath` | 문자열 | AEM 파일을 검색할 DITA 맵 파일의 경로 \(DITA 저장소\). |
| `cpName` | 문자열 | DITAVAL 파일을 검색할 DITA 맵의 조건부 사전 설정 이름. |

**반환**:
DITA 맵 파일에 정의된 조건부 사전 설정에 해당하는 DITAVAL 파일의 경로입니다.

## 노드에 대한 모든 종속성 가져오기

``getAllDependencies`` 메서드는 지정된 노드의 모든 종속성을 반환합니다.

**구문**:

```JAVA
public static List
<Node> getAllDependencies 
(Node rootNode) throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `rootNode` | javax.jcr.Node | 모든 종속성을 검색할 루트 노드입니다. |

**반환**:
루트 노드의 모든 종속성이 포함된 노드 목록입니다.
