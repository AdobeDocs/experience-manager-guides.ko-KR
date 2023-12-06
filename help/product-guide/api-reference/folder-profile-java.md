---
title: 폴더 프로필 작업을 위한 Java 기반 API
description: 폴더 프로필로 작동하는 Java 기반 API에 대해 알아봅니다
exl-id: 388ae654-c4f9-4bb7-ba98-370b8919e3a6
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '245'
ht-degree: 0%

---

# 폴더 프로필 작업을 위한 Java 기반 API {#id175UB30E05Z}

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

  다음 **`FolderProfileUtils`** 클래스에는 폴더 프로필에 조건부 특성을 추가하는 메서드가 포함되어 있습니다.


## 폴더 프로필에 조건부 속성 추가

다음 ``addAttributeProfiles`` 메서드는 폴더 수준 프로필에 조건부 특성을 추가합니다.

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

**매개 변수**: 이름|유형|설명| ---- --------------- |``attributeNames``|문자열|특성 이름 목록입니다.| |``values``|문자열|해당 특성에 대한 값 목록입니다.| |`labels`|문자열|다음에 대한 레이블 목록 `attribute`- `value` 쌍. [1](#fntarg_1)| |`profileName`|문자열|이러한 특성, 값 및 레이블을 적용할 폴더 수준 프로필의 이름입니다. **중요 사항:** 프로필에 정의된 모든 기존 속성-값-레이블을 덮어씁니다.| |`session`|javax.jcr.Session|유효한 JCR 세션입니다.|

**반환**:
`true` 성공을 위해. 실패할 경우 예외가 발생합니다.

**예외**: throw ``java.lang.Exception`` 다음과 같은 경우:

- API를 가져올 수 없는 경우 `resourceResolverFactory` 개체. 이 경우 번들을 다시 시작해야 합니다.
- API에 전달된 매개 변수가 잘못된 경우.
- 지정된 폴더 프로필의 관리자가 아닌 사용자와 같이 권한이 없는 사용자 세션을 통해 API가 호출되는 경우.

[1](#fnsrc_1) 다음 `attributeNames`, `values`, 및 `labels` 배열 목록의 동일한 인덱스는 동일한 항목에 해당해야 합니다.
