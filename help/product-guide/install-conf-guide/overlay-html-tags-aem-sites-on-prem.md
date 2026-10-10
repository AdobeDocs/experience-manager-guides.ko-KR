---
title: 비레거시 AEM Sites 출력에서 HTML 태그 오버레이
description: 핵심 구성 요소 매핑을 기반으로 AEM Sites 출력에 대한 비디오 및 이미지 설정을 구성합니다.
feature: Installation
role: Admin
level: Experienced
exl-id: af349df4-04bf-4b9b-885f-d8bca32a4484
product_v2:
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
    internal-label: Experience Manager
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
    internal-label: Experience Manager Guides
feature_v2:
  - id: e88e74c7-6080-446a-8eb0-496f1ac5f7e6
    internal-label: Administration
subfeature_v2:
  - id: e557051c-ff02-4ff8-9421-cf452af0edd5
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 81a0e7f0736ba4970673dd87a888a4c60d3c1b4e
workflow-type: tm+mt
source-wordcount: '170'
ht-degree: 0%
---
# 온-프레미스를 위한 AEM Sites 출력의 HTML 태그 오버레이

편집기의 핵심 구성 요소 매핑을 기반으로 AEM Sites 사전 설정을 사용하여 생성된 AEM Sites 출력에서 HTML 태그를 추가하고 사용자 지정할 수 있습니다. HTML 태그를 사용자 지정하려면 `config.xml` 파일을 오버레이할 수 있습니다. 예를 들어 AEM Sites 출력에서 비디오 및 이미지 맵을 구성할 수 있습니다.

`config.xml` 파일을 오버레이하고 업데이트하려면 다음 단계를 수행하십시오.

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 구성 파일로 이동합니다.

   `/libs/fmdita/cq/xssprotection/config.xml`

1. 앱 노드 내에 `xssprotection` 폴더의 오버레이 노드를 만듭니다.

1. `apps` 노드에서 사용할 수 있는 구성 파일로 이동합니다.

   `/apps/fmdita/config/config.xml`

1. 비디오 및 이미지에 대해 다음 태그를 업데이트합니다. 그런 다음 파일을 저장합니다.

비디오:

```XML
    <tag name="video" action="validate">
    <attribute name="src">
      <regexp-list>
        <regexp name="anything"/>
      </regexp-list>
    </attribute>
    <attribute name="width">
       <regexp-list>
           <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="height">
       <regexp-list>
          <regexp name="anything"/>
       </regexp-list>
     </attribute>
     <attribute name="data">
       <regexp-list>
         <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="class">
       <regexp-list>
           <regexp name="anything"/>
       </regexp-list>
    </attribute>
    <attribute name="poster">
      <regexp-list>
        <regexp name="anything"/>
        </regexp-list>
    </attribute>
    <attribute name="controls">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    </tag>
    <tag name="source" action="validate">
      <attribute name="src">
        <regexp-list>
           <regexp name="anything"/>
        </regexp-list>
      </attribute>
    </tag>
```

이미지 맵:

```XML
        <tag name="map" action="validate">
    <attribute    name="name">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    </tag>
    <!-- Image & image related tags -->
    <tag name="img" action="validate">
    <attribute name="src" onInvalid="removeTag">
        <regexp-list>
            <regexp name="onsiteURL"/>
            <regexp name="offsiteURL"/>
        </regexp-list>
    </attribute>
    <attribute name="name"/>
    <attribute name="alt"/>
    <attribute name="height"/>
    <attribute name="width"/>
    <attribute name="border"/>
    <attribute name="align"/>
    <attribute name="usemap">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    <attribute name="hspace">
        <regexp-list>
            <regexp name="number"/>
        </regexp-list>
    </attribute>
    <attribute name="vspace">
        <regexp-list>
            <regexp name="number"/>
        </regexp-list>
    </attribute>
    </tag>
    <tag name="area" action="validate">
    <attribute name="shape">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    <attribute name="coords">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
    <attribute name="href">
        <regexp-list>
            <regexp name="anything"/>
        </regexp-list>
    </attribute>
   </tag>
```




[보안](https://experienceleague.adobe.com/ko/docs/experience-manager-65/content/implementing/developing/introduction/security)의 모범 사례에 대해 자세히 알아보세요.
