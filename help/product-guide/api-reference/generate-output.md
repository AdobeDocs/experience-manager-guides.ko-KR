---
title: 출력 생성 관련 Java 기반 API
description: 출력 생성과 함께 작동하는 Java 기반 API에 대해 알아봅니다
exl-id: e19439df-39ec-47fd-9da5-24f51750a7e5
feature: Java-Based API Publishing
role: Developer
level: Experienced
source-git-commit: ee4eb829ebe215315b05cd1f376e934c02a73b1e
workflow-type: tm+mt
source-wordcount: '201'
ht-degree: 2%

---

# 출력 생성 관련 Java 기반 API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guides에서 사용할 수 있는 Java 기반 API를 사용하여 사용자 지정 플러그인을 만들고 기본 제공 워크플로를 확장할 수 있습니다. 이 문서는 2024년 11월에 보관됩니다.
> Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)을(를) 참조하십시오.

다음 Java 기반 API를 사용하면 DITA 맵에 대한 출력을 생성할 수 있습니다. 이 API는 번들 형태로 사용할 수 있습니다. 이 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.4**

- 패키지: **&#x200B;**&#x200B;com.adobe.fmdita.api.maps&#x200B;**&#x200B;**

- 클래스 세부 사항:

  ```JAVA
  public class **PublishUtils** extends Object
  ```

  **`PublishUtils`** 클래스에는 하나 이상의 출력 사전 설정에 대한 출력을 생성하는 메서드가 포함되어 있습니다.


## 출력 생성

``generateOutput`` 메서드는 지정된 출력 사전 설정을 사용하여 DITA 맵 파일에 대한 출력을 생성합니다.

**구문**:

```JAVA
public static void generateOutput(Session session,
String sourcePath,
String outputName)
throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |
| ``sourcePath`` | 문자열 | 출력을 생성해야 하는 DITA 맵 파일의 경로 \(AEM 저장소\). |
| ``outputName`` | 문자열 | 출력을 생성하는 데 사용할 출력 사전 설정의 이름입니다. 파이프 \(&quot;\|&quot;\) 구분 기호(예: `aemsite\|pdfoutput`)를 사용하여 여러 출력 사전 설정을 지정할 수 있습니다. |

**예외**:
``javax.jcr.RepositoryException``, `java.io.IOException` 및 `java.lang.Exception`이(가) 발생합니다.
