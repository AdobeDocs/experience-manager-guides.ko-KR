---
title: 폴더 프로필 작업을 위한 Java 기반 API
description: 폴더 프로필로 작동하는 Java 기반 API에 대해 알아봅니다
exl-id: 388ae654-c4f9-4bb7-ba98-370b8919e3a6
feature: Java-Based API Folder Profiles
role: Developer
level: Experienced
source-git-commit: 8c80a4da8e61909aab0f2db81ef97149774b36c4
workflow-type: tm+mt
source-wordcount: '286'
ht-degree: 2%

---

# 폴더 프로필 작업을 위한 Java 기반 API {#id175UB30E05Z}

>[!NOTE]
>
> Experience Manager Guides에서 사용할 수 있는 Java 기반 API를 사용하여 사용자 지정 플러그인을 만들고 기본 제공 워크플로를 확장할 수 있습니다. 이 문서는 2024년 11월에 보관됩니다.
> Java 기반 API 사용에 대한 최신 및 자세한 설명서는 [![javadoc](https://javadoc.io/badge2/com.adobe.aem/aem-guides-sdk-api/javadoc.svg)](https://javadoc.io/doc/com.adobe.aem/aem-guides-sdk-api)을(를) 참조하십시오.




다음 Java 기반 API를 사용하면 폴더 수준 프로필에 조건부 속성을 추가할 수 있습니다. 이 API는 번들 형태로 사용할 수 있습니다. 이 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.2**

- 패키지: **com.adobe.fmdita.api.profiles**

- 클래스 세부 사항:

  ```JAVA
  public class FolderProfileUtils extends Object
  ```

  **`FolderProfileUtils`** 클래스에는 폴더 프로필에 조건부 특성을 추가하는 메서드가 포함되어 있습니다.


## 폴더 프로필에 조건부 속성 추가

``addAttributeProfiles`` 메서드는 폴더 수준 프로필에 조건부 특성을 추가합니다.

**구문**:

```JAVA
public static boolean addAttributeProfiles
(List
<String> attributeNames, 
List
    <String> values, 
List
        <String> labels,
String profileName, 
Session session) throws GuidesApiException
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| ``attributeNames`` | 문자열 | 속성 이름 목록입니다. |
| ``values`` | 문자열 | 지정된 속성에 대한 값 목록입니다. |
| `labels` | 문자열 | `attribute`- `value` 쌍의 레이블 목록입니다. [1](#fntarg_1) |
| `profileName` | 문자열 | 이러한 속성, 값 및 레이블을 적용해야 하는 폴더 수준 프로필의 이름입니다. **중요:** 프로필에 정의된 기존의 모든 특성-값-레이블을 덮어씁니다. |
| `session` | javax.jcr.Session | 유효한 JCR 세션입니다. |

**반환**:
성공의 경우 `true`. 실패할 경우 예외가 발생합니다.

**예외**:
다음 시나리오에서 ``java.lang.Exception``을(를) throw합니다.

- API에서 `resourceResolverFactory` 개체를 가져올 수 없는 경우. 이 경우 번들을 다시 시작해야 합니다.
- API에 전달된 매개 변수가 잘못된 경우.
- 지정된 폴더 프로필의 관리자가 아닌 사용자와 같이 권한이 없는 사용자 세션을 통해 API가 호출되는 경우.

[1](#fnsrc_1) 배열 목록의 같은 인덱스에 있는 `attributeNames`, `values` 및 `labels`은(는) 같은 항목에 해당해야 합니다.
