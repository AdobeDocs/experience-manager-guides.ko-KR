---
title: 조건부 특성으로 작업할 수 있는 REST API
description: 조건부 특성으로 작동하는 REST API에 대해 알아봅니다
exl-id: 1f0e023a-422c-47b9-917f-b0d80090471c
feature: Rest API Conditional Attributes
role: Developer
level: Experienced
TQID: https://experienceleague.adobe.com/qtmJN6jjCm3xeNYAaHTWr7G3SZFSOodcVqBOKctR3B8
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a01bfd36-4ab8-4bf8-9dc0-5b45b890552eid: c6d09140-3c91-45d3-b7ed-b681af752f43
subfeature_v2: id: d27d524e-c4e5-4b77-b86b-3db049db0b25
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 154
ht-degree: 5%

---

# 조건부 특성으로 작업할 수 있는 REST API {#id175UB30E05Z}

다음 REST API를 사용하면 폴더 프로필에 조건부 속성을 추가할 수 있습니다.

## 폴더 수준 프로필에 조건부 속성 추가

주어진 폴더 수준 프로필에 조건부 속성을 추가하는 POST 메서드입니다.

**요청 URL**:\
http://*<aem-guides-server\>*: *<port-number\>*/bin/fmdita/folderprofiles

**매개 변수**:

| 이름 | 유형 | 필수 | 설명 |
|----|----|--------|-----------|
| `:operation` | 문자열 | 예 | 호출되는 작업의 이름입니다. 이 매개 변수의 값은 ``ADDATTRIBUTEPROFILES``입니다. <br> **참고:** 값은 대소문자를 구분하지 않습니다. |
| `profilename` | 문자열 | 예 | 조건부 속성을 추가해야 하는 폴더 수준 프로필의 표시 이름입니다. |
| `conditionalprofiles` | JSON 배열 | 예 | 조건부 속성 이름 및 값으로 구성된 JSON 배열입니다. 다음 예제 코드 조각은 여러 값이 할당된 두 개의 특성(`platform` 및 `product`)이 있는 JSON 배열을 보여 줍니다. |

```JSON
[  {    name: "platform",    
        values: [       
                {value: "win", label: "Windows"},       
                {value: "mac", label: "Mac OS"}    
                ]},
                {    
                    name: "product",    
                    values: [      
                        {value: "aem_1", label: "AEM 6.1"},     
                        {value: "aem_4,  label: "AEM 6.4"}  
                        ]  
                }]
```

**응답 값**:\
HTTP 200 \(Successful\) 응답을 반환합니다.
