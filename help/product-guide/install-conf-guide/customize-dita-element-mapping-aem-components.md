---
title: AEM 구성 요소를 사용하여 DITA 요소 매핑 사용자 정의
description: AEM 구성 요소로 dita 요소 매핑을 사용자 지정하는 방법 알아보기
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 834959a6a0e22cd5d2b2c5d0e57ceb6d45c0c666
workflow-type: tm+mt
source-wordcount: '1268'
ht-degree: 1%

---


# AEM 구성 요소를 사용하여 DITA 요소 매핑 사용자 정의 {#id1679J600HEL}

AEM Guides의 DITA 요소는 해당 AEM 구성 요소에 매핑됩니다. AEM Guides은 게시 및 검토와 같은 워크플로에서 이 매핑을 사용하여 DITA 요소를 해당 AEM 구성 요소로 변환합니다. 매핑이 `elementmapping.xml` 파일에 정의되어 있으며, 이 파일은 Cloud Service 설치용 패키지 관리자를 사용하여 액세스할 수 있고, On-Premise 설치용 CRXDE Lite 모드의 URL `/libs/fmdita/config/elementmapping.xml`에서 액세스할 수 있습니다.

>[!NOTE]
>
> ``libs`` 노드에서 사용할 수 있는 기본 구성 파일의 사용자 지정을 만들지 마십시오. ``libs`` 노드에서 ``apps`` 노드의 오버레이를 만들고 ``apps`` 노드에서만 필요한 파일을 업데이트해야 합니다.

미리 정의된 DITA 요소 매핑을 사용하거나 DITA 요소를 사용자 정의 AEM 구성 요소에 매핑할 수 있습니다. 사용자 지정 AEM 구성 요소를 사용하려면 `elementmapping.xml` 파일의 구조를 이해해야 합니다.

## elementmapping.xml 구조

`elementmapping.xml` 구조에 대한 높은 수준의 개요가 아래에 설명되어 있습니다.

1. 모든 DITA 요소는 먼저 요소 이름을 기반으로 해당 컴포넌트 매핑을 검색합니다. 예:

   ```XML
   <ditaelement>     
      <name>**substeps**</name>  
      <class>- topic/ol task/substeps</class>  
      <componentpath>dita/components/ditaolist</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>
   </ditaelement>
   ```

   위의 예에서 모든 `substeps` DITA 요소는 `dita/components/ditaolist` 구성 요소를 사용하여 렌더링됩니다.

1. DITA 요소가 이름을 기반으로 일치하는 항목을 찾지 못하면 `class`을(를) 기반으로 일치하는 항목을 찾습니다. 예:

   ```XML
   <ditaelement>  
      <name>topic</name>  
      <class>**- topic/topic**</class>  
      <componentpath>fmdita/components/dita/topic</componentpath>  
      <type>COMPOSITE</type>  
      <target>para</target>  
      <attributemap> 
         <attribute from="id" to="id" />  
      </attributemap>
   </ditaelement>
   ```

   위의 예에서 `task` 요소에 대해 정의된 매핑이 없으면 `task`이(가) `task` 구성 요소에서 상속되므로 `topic` 요소가 위 구성 요소에 매핑됩니다.

1. 요소에 해당 구성 요소 매핑이 있는 경우 자식 요소의 추가 처리는 `type`에 의해 결정됩니다. 예:

   ```XML
   <ditaelement>  
      <name>title</name>  
      <class>- topic/title</class>  
      <componentpath>foundation/components/title</componentpath>  
      <type>**STANDALONE**</type>  
      <target>para</target>  
      <textprop>jcr:title</textprop>
   </ditaelement>
   ```

   `type`은(는) 다음 값을 사용합니다.

   - COMPOSITE: 자식 요소&#x200B;*에 대해서도 요소 대 구성 요소*&#x200B;매핑이 계속됩니다.

   - STANDALONE: 현재 요소의 자식 요소가 *더 이상 매핑되지 않습니다*.

   위의 예에서 `<title>` 요소에 자식 요소가 있으면 다른 구성 요소에 매핑되지 않습니다. `<title>` 요소의 구성 요소는 `<title>` 요소 내의 모든 자식 요소를 렌더링합니다.

1. 단일 DITA 요소에 매핑된 컴포넌트가 여러 개 있는 경우 요소에 가장 잘 맞는 컴포넌트가 선택됩니다. 최상의 일치 구성 요소를 선택하기 위해 DITA 요소의 도메인 및 구조 특수화가 고려됩니다.

   도메인 특수화를 사용하는 DITA 요소가 있고 구성 요소가 도메인 특수화를 위해 매핑되는 경우 해당 구성 요소에 높은 우선 순위가 지정됩니다.

   마찬가지로, 구조 특수화가 있는 DITA 요소가 있고 구성 요소가 구조 특수화에 대해 매핑되면 해당 구성 요소에 높은 우선순위가 지정됩니다.

1. 요소 매핑에서 `<attributemap>`을(를) 사용하여 특성 값을 해당 노드 속성에 매핑할 수 있습니다.
1. `textprop`은(는) DITA 요소의 텍스트 콘텐츠를 노드 속성으로 직렬화하는 데 사용할 수 있습니다. 또한 요소 태그에서 여러 번 사용하여 게시된 계층의 여러 위치에서 텍스트 콘텐츠를 직렬화할 수 있습니다. 대상 속성의 위치와 이름을 사용자 지정할 수도 있습니다. 예:

   ```XML
   <ditaelement>
      <name>title</name>
      <componentpath>foundation/components/title</componentpath>
      <type>STANDALONE</type>
      <target>para</target>
       <textprop>**jcr:title**</textprop>
   </ditaelement>
   ```

   위의 요소 매핑은 `<title>` 요소의 텍스트 콘텐츠가 출력 노드에서 이름이 `jcr:title`인 속성의 값으로 저장되도록 지정합니다.

1. `xmlprop`은(는) 특정 요소의 전체 XML을 노드 속성으로 serialize하는 데 사용할 수 있습니다. 그런 다음 구성 요소가 이 노드 속성을 읽고 사용자 지정 렌더링을 수행할 수 있습니다. 예:

   ```XML
   <ditaelement>
       <name>svg-container</name>
      <class>+ topic/foreign svg-d/svg-container</class>
       <componentpath>fmdita/components/dita/svg</componentpath>
       <type>STANDALONE</type>
       <target>para</target>
      <xmlprop>**data**</xmlprop>
   </ditaelement>
   ```

   위의 요소 매핑은 요소 `<svg-container>`에 대한 전체 XML 태그를 출력 노드에 이름이 `data`인 속성의 값으로 저장하도록 지정합니다.

1. 출력 생성 프로세스에서 경로 확인을 처리하는 특수 속성 매핑이 있습니다. 예:

   ```XML
   <attributemap>
      <attribute from="href" to="fileReference" ispath="true" rel="source" />
      <attribute from="height" to="height" />
       <attribute from="width" to="width" />
   </attributemap>
   ```

   위의 `attributemap`에 대해 DITA 요소의 `href` 특성이 `fileReference` 노드 속성에 매핑됩니다. 이제 `ispath`이(가) `true`(으)로 설정되어 있으므로 출력 생성 프로세스에서 이 경로를 확인한 다음 `fileReference` 노드 속성에 설정합니다.

   이 해결 방법은 특성 매핑의 `rel` 특성 값을 기반으로 결정됩니다.

   - `rel=source`이면 현재 처리 중인 DITA 원본 파일과 관련하여 `href`의 값이 확인됩니다. `href`의 값이 확인되어 `fileReference` 속성의 값에 배치됩니다.

   - `rel=target`이면 `href`의 값이 루트 게시 위치에 따라 확인됩니다. `href`의 값이 확인되어 `fileReference` 속성의 값에 배치됩니다.

   경로 특성에서 전처리 또는 확인을 수행하지 않으려면 `ispath` 특성을 지정할 필요가 없습니다. 값이 그대로 복사되며 컴포넌트가 필요한 해상도를 수행할 수 있습니다.


## DITA 요소 스키마

다음은 `elementmapping.xml` 파일의 DITA 요소 스키마의 예입니다.

```XML
<ditaelement>        
    <name>element_name</name>    
    <class>element_class</class>    
    <componentpath>fmdita/components/dita/component_name</componentpath>    
    <type>COMPOSITE|STANDALONE</type>     
    <attributeprop>propname_a</attributeprop>      
    <textprop>propname_t</textprop>    
    <xmlprop>propname_x</xmlprop>     
    <xpath>xpath expression string</xpath>     
    <target>head|para</target>     
    <wrapelement>div</wrapelement>     
    <wrapclass>class_name</wrapclass>     
    <attributemap>         
        <attribute from="attrname"         to="propname"         ispath="true|false"         rel="source|target" />    
    </attributemap>    
    <skip>true|false</skip> 
</ditaelement>
```

다음 표에서는 DITA 요소 스키마의 요소에 대해 설명합니다.

| 요소 | 설명 |
|-------|-----------|
| `<ditaelement>` | 각 매핑 요소의 최상위 노드입니다. |
| `<class>` | 구성 요소를 작성할 대상 DITA 요소의 클래스 특성입니다.<br> 예를 들어 DITA 주제의 클래스 특성은 <br>입니다. `- topic/topic` |
| `<componentpath>` | 매핑된 AEM 구성 요소의 CRXDE 경로. |
| `<type>` | 가능한 값: <br> -   **COMPOSITE**: 하위 요소와 <br> -   **독립 실행형**: 하위 요소의 처리를 건너뜁니다. |
| `<attributeprop>` | 직렬화된 DITA 속성 및 값을 AEM 노드에 속성으로 매핑하는 데 사용됩니다. 예를 들어, 요소가 `<note type="Caution">`이고 이 요소에 대해 매핑된 구성 요소에 `<attributeprop>attr_t</ attributeprop>`이(가) 있으면 노드의 특성 및 값이 해당 AEM 노드 \( `attr_t`\)의 `attr_t->type="caution"` 속성으로 serialize됩니다. |
| `<textprop>propname_t</textprop>` | `getTextContent()` 출력을 `propname_t.` <br>에 의해 정의된 속성에 저장 **참고:** 최적화된 속성입니다. |
| `<xmlprop>propname_x </xmlprop>` | 이 노드의 serialize된 XML을 `propname_x.<br> `**에 의해 정의된 속성에 저장합니다. 참고:** 최적화된 속성입니다. |
| `<xpath>` | 요소 매핑에 XPath 요소가 제공된 경우 요소 이름 및 클래스와 함께 사용할 구성 요소 매핑에 대해 XPath 조건도 충족해야 합니다. |
| `<target>` | 지정된 위치의 crx 저장소에 DITA 요소를 배치합니다.<br> 가능한 값: <br> - **head**: head 노드 아래 <br> - **text**: 단락 노드 아래 |
| `<wrapelement>` | 내에서 콘텐츠를 래핑할 HTML 요소입니다. |
| `<wrapclass>` | 속성 `wrapclass.`에 대한 요소 값 |
| `<attributemap>` | 하나 이상의 `<attribute>` 노드가 포함된 컨테이너 노드입니다. |
| `<attribute from="attrname" to="propname" ispath="true\|false" rel="source\|target" />` | DITA 특성을 AEM 속성에 매핑합니다. <br> -   **`from`**: DITA 특성 이름 <br> -   **`to`**: AEM 구성 요소 속성 이름 <br> -   **`ispath`**: 속성이 경로 값인 경우 \(예: *image*\) <br> -   **`rel`**: 경로가 원본 또는 대상 <br>인 경우 **참고:** `attrname`이(가) `%`(으)로 시작하는 경우 `attrname minus '%'`을(를) prop &#39; `propname`&#39;에 매핑합니다. |

**추가 참고 사항**

- 기본 요소 매핑을 재정의하려면 기본 `elementmapping.xml` 파일에서 변경하지 않는 것이 좋습니다. 새 매핑 XML 파일을 만들고 다른 위치(일반적으로 사용자가 만드는 사용자 정의 앱 폴더 내)에 파일을 배치해야 합니다.

- `elementmapping.xml` 파일에 fmdita/components/dita/wrapper 구성 요소를 참조하는 매핑 항목이 많습니다. 래퍼는 사이트 노드의 속성을 사용하여 비교적 간단한 DITA 구문을 렌더링하여 관련 HTML을 생성하는 일반 구성 요소입니다. `wrapelement` 속성을 사용하여 바깥쪽 태그를 생성하고 자식 렌더링을 해당 구성 요소에 위임합니다. 이 기능은 컨테이너 구성 요소만 사용하려는 경우에 유용합니다. `div` 또는 `p`과(와) 같은 특정 컨테이너 태그를 렌더링하는 새 구성 요소를 만드는 대신 래퍼 구성 요소를 `wrapelement` 및 `wrapclass` 속성과 함께 사용하여 동일한 효과를 얻을 수 있습니다.

- 문자열 JCR 속성에는 대량의 텍스트를 저장하지 않는 것이 좋습니다. 출력 생성에서 최적화된 속성 유형 계산은 큰 텍스트 콘텐츠가 문자열 유형으로 저장되지 않도록 합니다. 대신 특정 임계값보다 큰 콘텐츠를 저장해야 하는 경우 속성 유형이 바이너리로 변경됩니다. 기본적으로 이 임계값은 512바이트로 구성되지만 구성 관리자 \(*com.adobe.fmdita.config.ConfigManager*\)에서 **이진 임계값으로 저장** 설정을 변경하여 변경할 수 있습니다.

- 일부 \(전체가 아님\)의 요소 매핑을 재정의하려는 경우 전체 `elementmapping.xml` 파일을 복제하지 않아도 됩니다. 새 XML 매핑 파일을 만들고 재정의하는 요소만 정의해야 합니다.

- 사용자 지정 위치에서 XML 파일을 만든 후 `Override Element Mapping` 번들의 `com.adobe.fmdita.config.ConfigManager` 설정을 업데이트합니다.


