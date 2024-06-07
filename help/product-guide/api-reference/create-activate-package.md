---
title: 패키지 만들기 및 활성화를 위한 REST API
description: 패키지를 만들고 활성화하기 위한 REST API에 대해 알아보기
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
source-git-commit: b95a64ca2e8ebffebec3d8ff8704f76f7faceca2
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 0%

---

# 패키지 만들기 및 활성화를 위한 REST API {#id198CF0260Y4}

다음 REST API를 사용하여 CRX 패키지를 만들고 활성화할 수 있습니다.

## 패키지 만들기 및 활성화

CRX 패키지를 만들고 활성화하는 POST 메서드.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/activate&lt;/port-number\>&lt;/aem-guides-server\>

**매개변수**:
요청 쿼리는 JSON 규칙 문자열로 구성됩니다. POST 요청의 콘텐츠 유형는 로 `application/json; charset=UTF-8`설정해야 합니다.

**예**:
다음 예제에서는 curl 명령을 사용한 API 호출을 보여 줍니다.

```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate
```


**선택적 매개 변수**

`activationTarget`

**유효값**

`preview` 또는 `publish` Cloud Service 및 `publish` On-premise Software

- Cloud Service의 경우 매개 변수에 잘못된 값이 포함되어 있으면 패키지 활성화가 실패합니다.

- 온프레미스 소프트웨어의 경우, 매개 변수에 잘못된 값이 포함되어 있으면 오류가 기록되고 기본값 `publish`인 를 사용하여 게시가 수행됩니다.

선택적 매개 변수를 `activationTarget`정의하지 않으면 Cloud Service 및 On-premise Software 모두에 대해 기본 게시 에이전트를 사용하여 활성화됩니다.



다음 예제에서는 선택적 매개 변수와 함께 curl 명령을 사용하는 API 호출을 보여 줍니다.


    &#39;&#39;&#39;XML
    
    curl -u &lt;*username*>:&lt;*password*> -H &quot;Content-Type: 애플리케이션/json; charset=UTF-8&quot; -k -X POST -d &quot;{[JSON 규칙 문자열](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}&quot; http://&lt;*aem-guides-server*>:&lt;*port-number*>/bin/fmdita/activate?activationTarget=&#39;&lt;validActivationTargetValue>&#39;
    &#39;&#39;&#39;
&lt;/validActivationTargetValue>&lt;/*port-number*>&lt;/*aem-guides-server*>&lt;/*password*>&lt;/*username*>