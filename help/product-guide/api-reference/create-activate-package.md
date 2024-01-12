---
title: 패키지 생성 및 활성화를 위한 REST API
description: 패키지 생성 및 활성화를 위한 REST API에 대해 알아봅니다
exl-id: 90686f77-a769-44bc-90eb-116cf9d0341e
feature: Rest API Packages
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '117'
ht-degree: 0%

---

# 패키지 생성 및 활성화를 위한 REST API {#id198CF0260Y4}

다음 REST API를 사용하면 CRX 패키지를 만들고 활성화할 수 있습니다.

## 패키지 생성 및 활성화

CRX 패키지를 만들고 활성화하는 POST 메서드입니다.

**요청 URL**: http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/activate

**매개 변수**: 요청 쿼리는 JSON 규칙 문자열로 구성됩니다. POST 요청의 콘텐츠 유형은 다음으로 설정되어야 합니다. `application/json; charset=UTF-8`.

**예**: 다음 예는 curl 명령을 사용한 API 호출을 보여줍니다.

    &quot;
    curl -u &lt;*username*>:&lt;*password*> -H &quot;Content-Type: application/json; charset=UTF-8&quot; -k -X POST -d &quot;{[JSON rules string](create-activate-package-java.md#example-create-activate-package-id198JH0B905Z)}&quot; http://&lt;*aem-guides-server*>:&lt;*port-number*>/bin/fmdita/activate
    &quot;
