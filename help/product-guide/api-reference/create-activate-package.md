---
title: 패키지 생성 및 활성화를 위한 REST API
description: 패키지 생성 및 활성화를 위한 REST API에 대해 알아봅니다
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/cJUVS3QdzVhnZjFF7uoHfpOSBefgm5W2jh-kWM1PvmE
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: a3bd6397-2eb2-4908-a61c-226e26855dcaid: c6d09140-3c91-45d3-b7ed-b681af752f43
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 181
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
