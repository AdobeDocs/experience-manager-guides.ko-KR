---
title: 출력 관리를 위한 REST API
description: 출력 관리를 위한 REST API에 대해 알아보기
exl-id: dab654f5-555d-4a89-bc94-55b1e938f255
feature: Rest API Output Management
role: Developer
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '1175'
ht-degree: 0%

---

# 출력 관리를 위한 REST API {#id175UB30E05Z}

AEM Guides에서 출력을 관리하는 데 다음 REST API를 사용할 수 있습니다.

## DITA 맵에 대한 모든 출력 사전 설정 가져오기 {#get-output-presets-dita-map}

DITA 맵에 대해 구성된 모든 출력 사전 설정을 검색하는 POST 메서드입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:\
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`:operation`|문자열|예|이름. 이 매개 변수의 값은 `getalloutputs`.<br>입니다. **참고:** 값은 대소문자를 구분하지 않습니다.|
|`sourcePath`|문자열|예|DITA 맵 파일의 절대 경로.|

**응답 값**:
JSON 출력 사전 설정 객체의 배열을 반환합니다. 각 객체에는 다음 요소가 포함됩니다.

| 요소 | 설명 |
|-------|-----------|
| `outputName` | 출력 사전 설정 이름. 출력 이름은 정의된 DITA 맵의 범위에서 고유합니다. |
| `outputType` | 이 사전 설정을 사용하여 생성된 출력 유형(예: AEM Site, PDF, EPUB 또는 기타)입니다. 사용 가능한 옵션은 <br>-   AEMSITE <br>-   PDF <br>-   HTML5 <br>-   EPUB <br>-   사용자 정의 |
| `outputTitle` | 출력 사전 설정 설정을 설명하는 이름입니다. 출력 사전 설정의 이름 설정 속성 값을 정의하는 데 사용됩니다. |
| `ditaValPathList` | 원하는 출력을 생성하는 데 사용할 DITAVAL 파일 경로의 배열입니다. |
| `targetPath` | 출력이 게시되거나 저장되는 경로입니다. |
| `siteName` | *\(AEM Site 출력의 경우\)* AEM 사이트의 이름입니다. |
| `templatePath` | 원하는 출력을 생성하는 데 사용할 템플릿 노드의 *\(AEM Site 출력의 경우\)* 경로 |
| `searchScope` | 검색 작업의 범위를 지정하십시오. 이 매개 변수의 값은 `local`(으)로 설정해야 합니다. |
| `generateTOC` | *\(AEM Site 출력의 경우\)* TOC가 \(true\) 생성되는지 또는 \(false\) 생성되지 않는지 여부를 지정합니다. |
| `generateBreadcrumbs` | *\(AEM Site 출력의 경우\)* 이동 경로의 생성 여부를 \(true\) 또는 \(false\) 지정합니다. |
| `overwriteStrategy` | *\(AEM Site 출력의 경우\)* 대상에 있는 파일을 덮어쓸지 \(true\) 또는 \(false\) 여부를 지정합니다. |
| `pdfGenerator` | 사용할 PDF 생성 엔진을 지정합니다. 가능한 값은 <br>-   <br> 반복   FMPS |

>[!NOTE]
>
> `DitaValPath` 요소는 더 이상 지원되지 않습니다.

## 출력 사전 설정 만들기

DITA 맵에 대한 새 출력 사전 설정을 만드는 POST 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`:operation`|문자열|예|이름. 이 매개 변수의 값은 ``createoutput``.<br>입니다. **참고:** 값은 대소문자를 구분하지 않습니다.|
|`sourcePath`|문자열|예|DITA 맵 파일의 절대 경로.|
|`outputTitle`|문자열|예|출력 사전 설정 설정에 대한 설명적인 이름. 출력 사전 설정의 Setting Name 속성 값을 정의하는 데 사용됩니다.<br> **참고:** 새 출력 사전 설정이 만들어지면 백 엔드 시스템에서 지정된 제목에서 출력 사전 설정의 고유한 이름을 구동합니다.|
|`outputType`|문자열|예|이 사전 설정을 사용하여 생성된 출력 유형(예: AEM 사이트, PDF, EPUB 또는 기타)입니다. 사용 가능한 옵션은 <br>-   AEMSITE <br>-   PDF <br>-   HTML5 <br>-   EPUB <br>-   사용자 정의|

**응답 값**:
|요소|설명|
------------------
|`outputName`|새로 만든 출력 사전 설정의 고유 이름입니다. 이 이름은 `outputTitle` 매개 변수의 값에서 파생됩니다.|

## 출력 사전 설정 저장

출력 사전 설정에서 변경된 사항을 저장하는 POST 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`:operation`|문자열|예|이름. 이 매개 변수의 값은 ``saveoutput``.<br>입니다. **참고:** 값은 대소문자를 구분하지 않습니다.|
|`sourcePath`|문자열|예|DITA 맵 파일의 절대 경로.|
|`outputObj`|문자열|예|업데이트 중인 출력 사전 설정의 속성을 포함하는 JSON 개체입니다. `outputObj.outputName` 속성에 업데이트할 출력 사전 설정의 이름이 포함되어 있습니다. JSON 개체의 형식을 보려면 [DITA 맵에 대한 모든 출력 사전 설정 가져오기](#get-output-presets-dita-map)의 **응답 값** 표를 참조하십시오.|

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.

## 특정 출력 사전 설정 가져오기

기존 출력 사전 설정을 검색하는 POST 메서드입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`:operation`|문자열|예|이름. 이 매개 변수의 값은 `getoutput`입니다. <br>**참고:** 값은 대소문자를 구분하지 않습니다.|
|`sourcePath`|문자열|예|DITA 맵 파일의 절대 경로.|
|`outputName`|문자열|예|세부 정보를 검색해야 하는 출력 사전 설정 이름.|

**응답 값**:
|요소|설명|
------------------
출력 사전 설정 이름 |`outputName`|입니다. 출력 이름은 정의된 DITA 맵의 범위에서 고유합니다.|
|`outputType`|이 사전 설정을 사용하여 생성된 출력 유형(예: AEM 사이트, PDF, EPUB 또는 기타)입니다. 사용 가능한 옵션은 <br>-   AEMSITE <br>-   PDF <br>-   HTML5 <br>-   EPUB <br>-   사용자 정의 <br>|
|`outputTitle`|출력 사전 설정 설정을 설명하는 이름입니다. 출력 사전 설정의 이름 설정 속성 값을 정의하는 데 사용됩니다.|
|`ditaValPathList`|원하는 출력을 생성하는 데 사용할 DITAVAL 파일 경로의 배열입니다.|
|`targetPath`|출력이 게시되거나 저장되는 경로입니다.|
|`siteName`|\(AEM Site 출력의 경우\) AEM 사이트의 이름입니다.|
AEM Site의 |`siteTitle`|\(AEM Site 출력의 경우\) 제목|
|`templatePath`|\(AEM Site 출력\) 원하는 출력을 생성하는 데 사용할 템플릿 노드의 경로|
|`searchScope`|검색 작업의 범위를 지정합니다. 이 매개 변수의 값은 `local`(으)로 설정해야 합니다.|
|`generateTOC`|\(AEM Site 출력의 경우\) TOC의 생성 \(true\) 여부를 지정합니다 \(false\).|
|`generateBreadcrumbs`|\(AEM Site 출력의 경우\) 탐색 표시를 생성할지 \(true\) 또는 \(false\) 여부를 지정합니다.|
|`overwriteFiles`|\(AEM Site 출력의 경우\) 대상에 있는 파일을 덮어쓸지 \(true\) 또는 \(false\) 여부를 지정합니다.|
|`pdfGenerator`|사용할 PDF 생성 엔진을 지정합니다. 가능한 값은 <br>-   <br> 반복   FMPS|

>[!NOTE]
>
> `DitaValPath` 요소는 더 이상 지원되지 않습니다.

## 출력 생성

하나 이상의 출력 사전 설정을 사용하여 출력을 생성하는 GET 메서드입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`operation`|문자열|예|이름. 이 매개 변수의 값은 `GENERATEOUTPUT`.<br>입니다. **참고:** 값은 대/소문자를 구분합니다.|
|`source`|문자열|예|DITA 맵 파일의 절대 경로.|
|`outputName`|문자열|예|출력을 생성하는 데 사용할 출력 사전 설정의 이름입니다. 파이프 \(&quot;\|&quot;\) 구분 기호(예: `aemsite|pdfoutput`)를 사용하여 여러 출력 사전 설정을 지정할 수 있습니다.|

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.

## 증분 출력 생성

하나 이상의 출력 사전 설정을 사용하여 AEM Site에 대한 증분 출력을 생성하는 GET 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`operation`|문자열|예|이름. 이 매개 변수의 값은 `INCREMENTALPUBLISH`입니다. <br>**참고:** 값은 대/소문자를 구분합니다.|
|`contentPath`|JSON|예|출력 사전 설정의 이름과 함께 DITA 맵 파일 및 주제 파일의 절대 경로입니다. 다음 예제를 빌딩 블록으로 사용합니다.|

```XML
{
   {   
   "ditamap": 
      "/content/dam/sample/sample.ditamap",   
   "topics": [     
      "/content/dam/sample/topic1.xml",     
      "/content/dam/sample/topic2.xml"   
         ],   
   "fullMaps": [     
      "/content/dam/sample/submap.ditamap"   
      ],   
   "maps": [     
      "/content/dam/sample/keyspace.ditamap"   
      ],   
   "outputs": [     
      "aemsite"   
      ] 
   }
}
```

- `ditamap` 특성은 출력을 생성하는 데 사용되는 DITA 맵의 절대 경로를 사용합니다.
- `topics` 특성은 업데이트되어 다시 게시해야 하는 여러 가지 주제를 사용합니다.
- `fullMaps` 특성에는 증분 출력 생성에 필요한 항목과 함께 \(청크된 하위 맵\ 등) 맵 파일의 경로가 포함되어 있습니다.
- `maps` 특성에는 항목이 없는 디스크에서 추출된 맵 파일 \(keyspace 참조 확인용\)의 경로가 포함되어 있습니다.
- `outputs` 특성은 출력을 생성하는 데 사용되는 출력 사전 설정 이름의 배열을 사용합니다.

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.

## 출력 사전 설정 삭제

출력 사전 설정을 삭제하는 POST 방법입니다.

**요청 URL**:
http://*&lt;aem-guides-server\>*: *&lt;port-number\>*/bin/publishlistener

**매개 변수**:
|이름|유형|필수|설명|
-------- -------------------
호출되는 작업의 |`:operation`|문자열|예|이름. 이 매개 변수의 값은 `deleteoutput`.<br>입니다. **참고:** 값은 대소문자를 구분하지 않습니다.|
|`sourcePath`|문자열|예|DITA 맵 파일의 절대 경로.|
|`outputName`|문자열|예|삭제할 출력 사전 설정의 이름.|

**응답 값**:
HTTP 200 \(Successful\) 응답을 반환합니다.
