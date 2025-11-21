---
title: 비레거시 AEM Sites 출력에서 HTML 태그 오버레이
description: 핵심 구성 요소 매핑을 기반으로 AEM Sites 출력에 대한 비디오 및 이미지 설정을 구성합니다.
feature: Installation
role: Admin
level: Experienced
exl-id: 726420e0-fe52-4334-b72a-8eb8bcae4d6c
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '156'
ht-degree: 0%

---

# AEM Sites 출력에서 HTML 태그 오버레이

웹 편집기의 핵심 구성 요소 매핑을 기반으로 AEM Sites 사전 설정을 사용하여 생성된 AEM Sites 출력에서 HTML 태그를 추가하고 사용자 지정할 수 있습니다. HTML 태그를 사용자 지정하려면 `config.xml` 파일을 오버레이할 수 있습니다. 예를 들어 AEM Sites 출력에서 비디오 및 이미지 맵을 구성할 수 있습니다.

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




[보안](https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/introduction/security)의 모범 사례에 대해 자세히 알아보세요.
