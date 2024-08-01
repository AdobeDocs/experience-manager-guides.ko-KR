---
title: 패키지 생성 및 활성화를 위한 Java 기반 API
description: 패키지 생성 및 활성화를 위한 Java 기반 API에 대해 알아봅니다
exl-id: b801c2b3-445f-4aa7-a4f2-029563d7cb3a
feature: Java-Based API Packages
role: Developer
level: Experienced
source-git-commit: 1bb422427822e7f369e0c1be7de6b12ec012075e
workflow-type: tm+mt
source-wordcount: '550'
ht-degree: 1%

---

# 패키지 생성 및 활성화를 위한 Java 기반 API {#id175UB30E05Z}

다음 Java 기반 API를 사용하면 CRX 패키지를 만들고 활성화할 수 있습니다. 이 API는 번들 형태로 사용할 수 있습니다. 이 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.3**

- 패키지: **com.adobe.fmdita.api.crxactivate**

- 클래스 세부 사항:

  ```JAVA
  public class CRXActivator
  ```

  **`CRXActivator`** 클래스에는 CRX 패키지를 만들고 게시 인스턴스에 복제하는 메서드가 포함되어 있습니다.


## 패키지 생성 및 활성화

`activate` 메서드는 작성자 인스턴스에 CRX 패키지를 만들고 필요한 경우 게시 인스턴스에 복제합니다. 작성자 인스턴스에서 AEM 복제 매개 변수가 이미 설정되어 있다고 가정합니다. 이 메서드는 JSON 문자열에서 입력 매개 변수로 제공된 규칙 목록을 기반으로 CRX 패키지를 만듭니다.
>[!NOTE]
>
> 만들기 또는 활성화 프로세스 중에 발생한 오류가 `outputstream`에 기록됩니다.

### 두 개의 매개 변수가 있는 예

**구문**:


```JAVA
public static void activate
(
  String json, 
  OutputStream outputstream, 
  Session session
) 
throws GuidesApiException
```

### 세 번째 선택적 매개 변수 사용 예

```JAVA
public static void activate
(
  String json, 
  OutputStream outputstream,
  String activationTarget, 
  Session session
) 
throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `json` | 문자열 | 빌드할 CRX 패키지를 결정하는 JSON 문자열입니다. JSON 문자열을 만들려면 다음 형식을 사용하십시오. <br>- `activate`: 은(는) 부울 \(`true`/`false`\) 유형입니다. 작성자 인스턴스에서 만든 CRX 패키지를 게시 인스턴스에 복제할지 여부를 결정합니다. <br> - `rules`: JSON 배열 유형입니다. CRX 패키지를 빌드하기 위해 순차적으로 처리되는 JSON 규칙의 배열입니다. <br> - `rootPath`: 유형 문자열입니다. 노드/속성 쿼리가 실행되는 기본 경로입니다. 노드/속성 쿼리가 없는 경우 루트 경로 및 루트 경로 아래에 있는 모든 노드가 CRX 패키지에 포함됩니다. <br> - `nodeQueries`: Regex 배열 유형입니다. 루트 경로 아래에 특정 파일을 포함하는 데 사용되는 정규 표현식의 배열입니다. <br> - `propertyQueries`: JSON 배열 유형입니다. 쿼리가 실행된 후 각 JCR 노드에 있는 속성의 이름과 루트 경로에서 실행될 XPath 쿼리로 구성된 각 JSON 개체가 있는 JSON 개체의 배열입니다. 각 JCR 노드의 속성 값은 경로 또는 경로 배열이어야 합니다. 이 속성에 있는 경로는 CRX 패키지에 추가됩니다. |
| `outputstream` | java.io.OutputStream | 쿼리 실행, 파일 포함, CRX 패키지 생성 또는 활성화와 같은 다양한 단계의 결과를 작성하는 데 사용됩니다. 만들기 또는 활성화 프로세스 중에 발생한 모든 오류가 `outputstream`에 기록됩니다. 이 기능은 디버깅에 유용합니다. |
| `session` | 문자열 | 활성화 권한이 있는 올바른 JCR 세션입니다. |
| `activationTarget` | 문자열 | (*선택적*) Cloud Service의 경우 `preview` 또는 `publish`, 온-프레미스 소프트웨어의 경우 <br> - Cloud Service의 경우 매개 변수에 잘못된 값이 있으면 패키지 활성화에 실패합니다. `publish` <br> - On-Premise 소프트웨어의 경우 매개 변수에 잘못된 값이 있으면 오류가 기록되고 기본값 `publish`을(를) 사용하여 게시가 수행됩니다. |

**예외**:

`java.io.IOException` 및 `java.io.IllegalArgumentException` 처리


선택적 매개 변수 `activationTarget`을(를) 정의하지 않으면 Cloud Service 및 온-프레미스 소프트웨어 모두에 대해 기본 게시 에이전트를 사용하여 활성화됩니다.


**예**:
다음 예제는 JSON 쿼리를 작성하는 방법을 보여 줍니다.

```JSON
{
  "activate": true,
  "rules": [
    {
      "rootPath": "/content/dam/nested",
      "nodeQueries": [
        ".*\\.jpg",
        ".*\\.png",
        ".*\\.gif"        
      ]
    },
    {
      "rootPath": "/content/output/sites/hierarchy_ditamap"
    },
    {
      "rootPath": "/content/output/sites/hierarchy_ditamap",
      "propertyQueries": [
        {
          "query": "//*[@fileReference]",
          "property": "fileReference"
        }
      ]
    }
  ]
}
```

JSON 쿼리 예는 다음 규칙으로 구성됩니다.

- /content/dam/nested path 아래의 .png, .jpg 및 .gif 이미지만 패키지에 포함됩니다.
- /content/output/sites/hierarchy\_ditamap 아래의 모든 노드는 패키지에 포함됩니다.
- /content/output/sites/hierarchy\_ditamap 아래에 있는 노드의 `fileReference` 속성에 있는 경로가 패키지에 포함되어 있습니다.
