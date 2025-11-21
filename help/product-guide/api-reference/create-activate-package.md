---
title: 패키지 생성 및 활성화를 위한 REST API
description: 패키지 생성 및 활성화를 위한 REST API에 대해 알아봅니다
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '175'
ht-degree: 0%

---

# 패키지 생성 및 활성화를 위한 REST API {#id198CF0260Y4}

다음 REST API를 사용하면 CRX 패키지를 만들고 활성화할 수 있습니다.

## 패키지 생성 및 활성화

CRX 패키지를 만들고 활성화하는 POST 메서드입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/fmdita/activate

**매개 변수**:
요청 쿼리는 JSON 규칙 문자열로 구성됩니다. POST 요청의 콘텐츠 형식을 `application/json; charset=UTF-8`(으)로 설정해야 합니다.

**예**:
다음 예는 curl 명령을 사용하는 API 호출을 보여줍니다.

```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate
```


**선택적 매개 변수**

`activationTarget`

**유효한 값**

Cloud Service의 경우 `preview` 또는 `publish`, 온-프레미스 소프트웨어의 경우 `publish`

- Cloud Service의 경우 매개 변수에 잘못된 값이 포함되어 있으면 패키지 활성화가 실패합니다.

- On-premise Software의 경우 매개 변수에 잘못된 값이 있으면 오류가 기록되고 기본값 `publish`을(를) 사용하여 게시가 수행됩니다.

선택적 매개 변수 `activationTarget`을(를) 정의하지 않으면 Cloud Service 및 On-premise Software 모두에 대해 기본 게시 에이전트를 사용하여 활성화됩니다.



다음 예는 선택적 매개 변수와 함께 curl 명령을 사용하는 API 호출을 보여줍니다.


```XML
curl -u <*username*>:<*password*> -H "Content-Type: application/json; charset=UTF-8"  -k -X POST -d "{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}" http://<*aem-guides-server*>:<*port-number*>/bin/fmdita/activate?activationTarget=`<validActivationTargetValue>`
```
