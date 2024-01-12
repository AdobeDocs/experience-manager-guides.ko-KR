---
title: 조건부 특성으로 작업할 수 있는 REST API
description: 조건부 특성으로 작동하는 REST API에 대해 알아봅니다
exl-id: 1f0e023a-422c-47b9-917f-b0d80090471c
feature: Rest API Conditional Attributes
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '147'
ht-degree: 0%

---

# 조건부 특성으로 작업할 수 있는 REST API {#id175UB30E05Z}

다음 REST API를 사용하면 폴더 프로필에 조건부 속성을 추가할 수 있습니다.

## 폴더 수준 프로필에 조건부 속성 추가

주어진 폴더 수준 프로필에 조건부 속성을 추가하는 POST 메서드입니다.

**요청 URL**:\
http://*&lt;aem-guides-server>*: *&lt;port-number>*/bin/fmdita/folderprofiles

**매개 변수**:\
|이름|유형|필수|설명| -------- ------------------- |`:operation`|문자열|예|호출되는 작업의 이름. 이 매개 변수의 값은 다음과 같습니다. ``ADDATTRIBUTEPROFILES``. <br> **참고:** 값은 대/소문자를 구분하지 않습니다.| |`profilename`|문자열|예|조건부 특성을 추가해야 하는 폴더 수준 프로필의 이름을 표시합니다.| |`conditionalprofiles`|JSON 배열|예|조건부 속성 이름과 값으로 구성된 JSON 배열입니다. 다음 예제 코드 조각은 두 가지 속성이 있는 JSON 배열을 보여 줍니다. `platform` 및 `product` 여러 값이 할당되어 있습니다.|

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
