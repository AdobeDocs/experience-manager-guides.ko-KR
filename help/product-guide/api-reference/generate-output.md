---
title: 출력 생성 관련 Java 기반 API
description: 출력 생성과 함께 작동하는 Java 기반 API에 대해 알아봅니다
exl-id: e19439df-39ec-47fd-9da5-24f51750a7e5
feature: Java-Based API Publishing
role: Developer
level: Experienced
source-git-commit: be06612d832785a91a3b2a89b84e0c2438ba30f2
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 0%

---

# 출력 생성 관련 Java 기반 API {#id175UB30E05Z}

다음 Java 기반 API를 사용하면 DITA 맵에 대한 출력을 생성할 수 있습니다. 이 API는 번들 형태로 사용할 수 있습니다. 이 API를 사용하려면 코드에 이 번들을 포함해야 합니다.

번들 세부 정보:

- 그룹 ID: **com.adobe.fmdita**

- 아티팩트 ID: **api**

- 버전: **3.4**

- 패키지: ****com.adobe.fmdita.api.maps****

- 클래스 세부 사항:

  ```JAVA
  public class **PublishUtils** extends Object
  ```

  다음 **`PublishUtils`** 클래스는 하나 이상의 출력 사전 설정에 대한 출력을 생성하는 메서드를 포함합니다.


## 출력 생성

다음 ``generateOutput`` 메서드는 지정된 출력 사전 설정을 사용하여 DITA 맵 파일에 대한 출력을 생성합니다.

**구문**:

```JAVA
public static void generateOutput(Session session,
String sourcePath,
String outputName)
throws GuidesApiException
```

**매개 변수**: 이름|유형|설명| ---- --------------- |`session`|javax.jcr.Session|유효한 JCR 세션입니다.| |``sourcePath``출력을 생성해야 하는 DITA 맵 파일의 |String|Path\(AEM 저장소 내).| |``outputName``|문자열|출력을 생성하는 데 사용할 출력 사전 설정의 이름입니다. 예를 들어 파이프 \(&quot;\|&quot;\) 구분 기호를 사용하여 여러 출력 사전 설정을 지정할 수 있습니다 `aemsite\|pdfoutput`.|

**예외**: throw ``javax.jcr.RepositoryException``, `java.io.IOException`, 및 `java.lang.Exception`.
